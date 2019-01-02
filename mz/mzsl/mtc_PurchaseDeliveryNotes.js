let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let PurchaseDeliveryNotes = require('./EntityType/Document');
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

/**@description 创建采购入库
 * @param {String} ServiceLayerContext
 * @param {Object} orderData 
 * @returns 返回创建结果
 */
function createPurchaseDeliveryNotes(ServiceLayerContext,orderData)
{
    let purchaseDeliveryNotes = new PurchaseDeliveryNotes();
    let whCode = getWarehoseFormBusinessPartners(orderData.CardCode);
    let BusinessPlaceID = getBPLPrimaryKeyFromWarehouse(whCode);
    orderData.BPL_IDAssignedToInvoice = BusinessPlaceID;
    purchaseDeliveryNotes.DocumentLines = new PurchaseDeliveryNotes.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLines')
        {
            purchaseDeliveryNotes[key] = orderData[key];
        }
        else
        {
            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new PurchaseDeliveryNotes.DocumentLine();
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
                    else
                    {
                        orderLine[i] = lineItem[i];
                    }
                }
                orderLine['WarehouseCode'] = whCode;
                purchaseDeliveryNotes.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.PurchaseDeliveryNotes.add(purchaseDeliveryNotes);
    return res;
}







//入口
function POST() 
{

    let slContext = new ServiceLayerContext();
    let orderData = http.request.getJsonObj();
    slContext.startTransaction();
    //创建采购入库
    let res_PDN = createPurchaseDeliveryNotes(slContext,orderData);
    if (res_PDN.isOK()) 
    {
        slContext.commitTransaction();
        http.response.send(http.HttpStatus.HTTP_CREATED, {error:0,result_PDN:res_PDN});
           
    }
    else 
    {
        slContext.rollbackTransaction();
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, {error:1,result_PDN:res_PDN});
    }

}



