let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let Returns = require('./EntityType/Document');
let BatchNumberCollection = require('./ComplexType/BatchNumberCollection')
let BatchNumber = require('./ComplexType/BatchNumber')


function createReturns(ServiceLayerContext,orderData){
    let returns = new Returns();
    returns.DocumentLines = new Returns.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLines')
        {
            returns[key] = orderData[key];
        }
        else
        {
            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new Returns.DocumentLine();
                let lineItem = lineData[k];
                for(i in lineItem)
                {
                    orderLine[i] = lineItem[i];
                }
                    //批次管理中维护批号（如果没有批次，请注释下面5行代码）
                    orderLine.BatchNumbers = new BatchNumberCollection();
                    let batchObj = new BatchNumber();
                    batchObj.BatchNumber = 181122;
                    batchObj.Quantity = orderLine[i].Quantity;
                    orderLine.BatchNumbers.add(batchObj);

                returns.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.Returns.add(returns);
    res.Returns =Returns;
    return res;
}

function POST()
{
    let slContext = new ServiceLayerContext();
    let orderData = http.request.getJsonObj();
    slContext.startTransaction();
    let res = createReturns(slContext,orderData);
    if (res.isOK()) 
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


