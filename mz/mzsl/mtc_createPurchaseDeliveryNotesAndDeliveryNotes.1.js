let ServiceLayerContext = require('./ServiceLayerContext');
let http = require('./HttpModule');
let PurchaseDeliveryNotes = require('./EntityType/Document');
let DeliveryNote = require('./EntityType/Document');
let BatchNumberCollection = require('./ComplexType/BatchNumberCollection')
let BatchNumber = require('./ComplexType/BatchNumber')


/**@description 创建采购入库
 * @param {String} ServiceLayerContext
 * @param {Object} orderData 
 * @returns 返回创建结果
 */
function createPurchaseDeliveryNotes(ServiceLayerContext,orderData)
{
    let purchaseDeliveryNotes = new PurchaseDeliveryNotes();
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
                purchaseDeliveryNotes.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.PurchaseDeliveryNotes.add(purchaseDeliveryNotes);
    return res;
}

/**@description 创建销售交货
 * @param {String} ServiceLayerContext
 * @param {Object} orderData 
 * @returns 返回创建结果
 */
function createDeliveryNote (ServiceLayerContext,orderData)
{
    let deliveryNote = new DeliveryNote();
    deliveryNote.DocumentLines = new DeliveryNote.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLines')
        {
            deliveryNote[key] = orderData[key];
        }
        else
        {

            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new DeliveryNote.DocumentLine();
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
                deliveryNote.DocumentLines.add(orderLine);
            }
            
        }
    }
    let res = "";
    res = ServiceLayerContext.DeliveryNotes.add(deliveryNote);
    res.deliveryNote =deliveryNote;
    return res;
}





//入口
function POST() 
{

    let slContext = new ServiceLayerContext();
    let orderData = http.request.getJsonObj();
    let PurchaseDeliveryNotesData = orderData.PurchaseDeliveryNotesData;
    let DeliveryNotesData = orderData.DeliveryNotesData;
    slContext.startTransaction();
    //创建采购入库
    let res_PDN = createPurchaseDeliveryNotes(slContext,PurchaseDeliveryNotesData);
    //创建销售交货
    let res_DN  = createDeliveryNote(slContext,DeliveryNotesData);
    if (res_PDN.isOK() && res_DN.isOK()) 
    {
        slContext.commitTransaction();
        http.response.send(http.HttpStatus.HTTP_CREATED, {error:0,result_PDN:res_PDN,result_DN:res_DN});
           
    }
    else 
    {
        slContext.rollbackTransaction();
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, {error:1,result_PDN:res_PDN,result_DN:res_DN});
    }

}



