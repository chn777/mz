let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let PurchaseOrders = require('./EntityType/Document');
let SalesOrder = require('./EntityType/Document');
let BatchNumberCollection = require('./ComplexType/BatchNumberCollection')
let BatchNumber = require('./ComplexType/BatchNumber')

/**@description 查询实体信息
 * @param {entityName:实体名称,queryOption:查询选项，依据OData URL查询方式} queryOption 
 * @returns 返回实体信息
 */
function getEntityInfo(queryOption)
{
    let slContext = new ServiceLayerContext();
    let retCaseInsensitive = slContext.query(queryOption.entityName, queryOption.queryOption, true);
    return retCaseInsensitive.toArray();
}


//从客户信息抓取默认仓库
function getWarehoseFormBusinessPartners(key)
{
    let queryOption = {
        entityName:"BusinessPartners",
        queryOption:"$select=U_WhsCode&$filter=CardCode eq '"+key+"'"
    }
    let res =  getEntityInfo(queryOption);
    return res.length>0?res[0].U_WhsCode:"";
}


//获取仓库分支主键
function getBPLPrimaryKeyFromWarehouse(key){
    let queryOption = {
        entityName:"Warehouses",
        queryOption:"$select=BusinessPlaceID&$filter=WarehouseCode eq '"+key+"'"
    }
    let res =  getEntityInfo(queryOption);
    return res.length>0?res[0].BusinessPlaceID:"";
}

//获取分支列表信息
function getBusinessPlacesByBplID(bplid){
    let queryOption = {
        entityName:"BusinessPlaces",
        queryOption:"$filter=BPLID eq "+bplid
    }
    let res =  getEntityInfo(queryOption);
    return res.length>0?res[0]:"";
}




//获取价格特殊价格
function getSpecialPrice(ItemCode,CardCode){
    let queryOption = {
        entityName:"SpecialPrices",
        queryOption:"$select=Price&$filter=ItemCode eq '"+ItemCode+"' and CardCode eq '"+CardCode+"'"
    }
    let res =  getEntityInfo(queryOption);
    return res.length>0?res[0].Price:0;
}


//查找采购订单的默认供应商
function getCardCodeAndBPLIDForPurchaseOrdersFromCardCode(CardCode){
    //获取采购订单的默认仓库
    let whsCode = getWarehoseFormBusinessPartners(CardCode);
    //通过默认仓库获取采购订单的默认分支
    let bplid = getBPLPrimaryKeyFromWarehouse(whsCode);
    //通过默认分支获取采购订单的默认供应商
    let bpInfo = getBusinessPlacesByBplID(bplid);
    return {BusinessPlaceID:bplid,CardCode:bpInfo.DefaultVendorID,whsCode:whsCode};
}

/**@description 创建采购订单
 * @param {String} ServiceLayerContext
 * @param {Object} orderData 
 * @returns 返回创建结果
 */
function createPurchaseOrders(ServiceLayerContext,orderData)
{
    let purchaseOrders = new PurchaseOrders();
    let headerData = getCardCodeAndBPLIDForPurchaseOrdersFromCardCode(orderData.CardCode);
    orderData.BPL_IDAssignedToInvoice = headerData.BusinessPlaceID;
    orderData.CardCode = headerData.CardCode;
    purchaseOrders.DocumentLines = new PurchaseOrders.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLines')
        {
            purchaseOrders[key] = orderData[key];
        }
        else
        {
            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new PurchaseOrders.DocumentLine();
                let lineItem = lineData[k];
                for(i in lineItem)
                {
                    if(i=="BatchNumbers")
                    {
                        let batchJSON = JSON.parse(lineItem[i])
                        //批次管理中维护批号
                        orderLine.BatchNumbers = new BatchNumberCollection();
                        let batchObj = new BatchNumber();
                        batchObj.BatchNumber = batchJSON[0]['BatchNumber'];
                        batchObj.Quantity = batchJSON[0]['Quantity'];
                        orderLine.BatchNumbers.add(batchObj);
                    }
                    else if (i == "ItemCode"){
                        orderLine[i] = lineItem[i];
                        orderLine['PriceAfterVAT'] = getSpecialPrice(lineItem[i],headerData.CardCode);
                        orderLine['WarehouseCode'] = headerData.whsCode;
                    }
                    else
                    {
                        orderLine[i] = lineItem[i];
                    }
                    
                }
                orderData.WarehouseCode = orderLine['WarehouseCode'];
                purchaseOrders.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.PurchaseOrders.add(purchaseOrders);
    res.purchaseOrders = purchaseOrders;
    return res;
}


/**@description 创建销售订单
 * @param {String} ServiceLayerContext
 * @param {Object} orderData 
 * @returns 返回创建结果
 */
function createOrders(ServiceLayerContext,orderData){
    let whsCode = getWarehoseFormBusinessPartners(orderData.CardCode);
    let BusinessPlaceID = getBPLPrimaryKeyFromWarehouse(whsCode);
    orderData.BPL_IDAssignedToInvoice = BusinessPlaceID;
    let salesOrder = new SalesOrder();
    salesOrder.DocumentLines = new SalesOrder.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLines')
        {
            salesOrder[key] = orderData[key];
        }
        else
        {
            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new SalesOrder.DocumentLine();
                let lineItem = lineData[k];
                for(i in lineItem)
                {
                    if (i == "ItemCode"){
                        orderLine[i] = lineItem[i];
                        orderLine['PriceAfterVAT'] = getSpecialPrice(lineItem[i],orderData.CardCode);
                        orderLine['WarehouseCode'] = whsCode;
                    }else{
                        orderLine[i] = lineItem[i];
                    }
                    
                }
                salesOrder.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.Orders.add(salesOrder);
    res.salesOrder = salesOrder;
    return res;
}



//入口
function POST() 
{

    let slContext = new ServiceLayerContext();
    let purchaseData = http.request.getJsonObj();
    let salesData = http.request.getJsonObj();
    slContext.startTransaction();
    //创建采购订单
    let res_PO = createPurchaseOrders(slContext,purchaseData);
    if (res_PO.isOK()) 
    {
        salesData.U_SrcNum = res_PO.body.DocNum;
        let res_SO = createOrders(slContext,salesData);
        if(res_SO.isOK())
        {
            slContext.commitTransaction();
            http.response.send(http.HttpStatus.HTTP_CREATED, {error:0,result_PO:res_PO,result_SO:res_SO});
        }
        else
        {
            slContext.rollbackTransaction();
            http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, {error:1,result_PO:res_PO,result_SO:res_SO});
        }   
    }
    else 
    {
        slContext.rollbackTransaction();
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, {error:1,result_PO:res_PO});
    }

}



