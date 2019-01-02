let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let SalesOrder = require('./EntityType/Document');
let DeliveryNote = require('./EntityType/Document');
let Invoices = require('./EntityType/Document');
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

function POST ()
{
    
    let orderData = http.request.getJsonObj();
    let res = getEntityInfo(orderData);
    http.response.send(http.HttpStatus.HTTP_OK, res);

    
}