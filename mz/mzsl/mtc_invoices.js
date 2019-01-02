let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let Invoices = require('./EntityType/Document');



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

/**@description 创建应收发票
 * @param {*} ServiceLayerContext 
 * @param {*} orderData 
 * @returns 返回创建的应收发票
 */
function createInvoice(ServiceLayerContext,orderData)
{
    let invoices = new Invoices();
    let whCode = getWarehoseFormBusinessPartners(orderData.CardCode);
    let BusinessPlaceID = getBPLPrimaryKeyFromWarehouse(whCode);
    orderData.BPL_IDAssignedToInvoice = BusinessPlaceID;
    invoices.DocumentLines = new Invoices.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLines')
        {
            invoices[key] = orderData[key];
        }
        else
        {
            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new Invoices.DocumentLine();
                let lineItem = lineData[k];
                for(i in lineItem)
                {
                    orderLine[i] = lineItem[i];
                }
                orderLine['WarehouseCode'] = whCode;
                invoices.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.Invoices.add(invoices);
    res.Invoices =invoices;
    return res;
}


//入口
function POST() 
{

    let slContext = new ServiceLayerContext();
    let orderData = http.request.getJsonObj();
    slContext.startTransaction();
    let res = createInvoice(slContext,orderData);
    if (res.isOK()) 
    {
        res.errorCode = 0;
        slContext.commitTransaction();
        http.response.send(http.HttpStatus.HTTP_CREATED, res);
            
    }
    else 
    {
        es.errorCode =1 ;
        slContext.rollbackTransaction();
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, res);
    }

}