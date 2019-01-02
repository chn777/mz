let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let SalesOrder = require('./EntityType/Document');



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


//获取仓库分支主键
function getBPLPrimaryKeyFromWarehouse(key){
    let queryOption = {
        entityName:"Warehouses",
        queryOption:"$select=BusinessPlaceID&$filter=WarehouseCode eq '"+key+"'"
    }
    let res =  getEntityInfo(queryOption);
    return res.length>0?res[0].BusinessPlaceID:"";
}



function createSalesOrder(ServiceLayerContext,orderData)
{

    let BusinessPlaceID = getBPLPrimaryKeyFromWarehouse(orderData.DocumentLines[0].WarehouseCode)
    // let BPL_IDAssignedToInvoice = getBusinessPlacesInfo(BusinessPlaceID);
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
                    orderLine[i] = lineItem[i];
                }
                salesOrder.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.Orders.add(salesOrder);
    return res;
}

//入口
function POST ()
{
    
    let orderData = http.request.getJsonObj();
    let slContext = new ServiceLayerContext();
    let res = createSalesOrder(slContext,orderData);
    if(res.isOK())
    {
        slContext.commitTransaction();
        http.response.send(http.HttpStatus.HTTP_CREATED, res);
    }
    else
    {
        slContext.rollbackTransaction();
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, res);
    }

    
}