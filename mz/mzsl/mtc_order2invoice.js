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

/**@description 创建销售订单
 * @param {String} ServiceLayerContext
 * @param {Object} orderData 
 * @returns 返回创建结果
 */
function createSalesOrder(ServiceLayerContext,orderData)
{
    let salesOrder = new SalesOrder();
    salesOrder.DocumentLines = new SalesOrder.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLine')
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
        if(key == 'DocumentLine')
        {
            let lineData = orderData[key];
            for(k in lineData)
            {
                let orderLine = new DeliveryNote.DocumentLine();
                let lineItem = lineData[k];
                for(i in lineItem)
                {
                    orderLine[i] = lineItem[i];
                }
                //批次管理中维护批号
                orderLine.BatchNumbers = new BatchNumberCollection();
                let batchObj = new BatchNumber();
                batchObj.BatchNumber = 181122;
                // batchObj.BaseLineNumber = 0;
                batchObj.Quantity = 2;
                orderLine.BatchNumbers.add(batchObj);

                deliveryNote.DocumentLines.add(orderLine);
            }
            
        }
        else
        {
            deliveryNote[key] = orderData[key];
        }
    }
    let res = "";
    res = ServiceLayerContext.DeliveryNotes.add(deliveryNote);
    res.deliveryNote =deliveryNote;
    return res;
}


/**基于采购单，创建发货单
 * @param {*} ServiceLayerContext 
 * @param {*} salesOrderContext 
 * @param {*} salesOrderData 
 */
function createDeliveryNoteFromSalesOrder(ServiceLayerContext,salesOrderContext,salesOrderData)
{
    let baseDocEntry = salesOrderContext.body.DocEntry;
    let PDData = {
        "CardCode":salesOrderData.CardCode,
        "DocDate":salesOrderData.DocDate,
        "DocDueDate":salesOrderData.DocDueDate,
        "BPL_IDAssignedToInvoice":salesOrderData.BPL_IDAssignedToInvoice,
        "DocumentLine":[]
    }
    let lineData = salesOrderData.DocumentLine;
    for(var lineNum = 0; lineNum < lineData.length; ++lineNum)
    {
        let obj = {"BaseType":"17","BaseEntry":baseDocEntry,"BaseLine":lineNum};
        PDData.DocumentLine.push(obj);
    }
    // return PDData;
    let res = "";
    res = createDeliveryNote(ServiceLayerContext,PDData);
    return res;
}


/**@description 创建销售发票
 * @param {*} ServiceLayerContext 
 * @param {*} orderData 
 * @returns 返回创建的销售发票
 */
function createInvoice(ServiceLayerContext,orderData)
{
    let invoices = new Invoices();
    invoices.DocumentLines = new Invoices.DocumentLineCollection();
    for(key in orderData)
    {
        if(key != 'DocumentLine')
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
                invoices.DocumentLines.add(orderLine);
            }
        }
    }
    let res = ServiceLayerContext.Invoices.add(invoices);
    res.Invoices =invoices;
    return res;
}


/**@description 基于发货通知单，创建销售发票
 * @param {*} ServiceLayerContext 
 * @param {*} salesOrderContext 
 * @param {*} salesOrderData 
 */
function createInvoicesFromDeliveryNote(ServiceLayerContext,salesOrderContext,salesOrderData)
{
    let baseDocEntry = salesOrderContext.body.DocEntry;
    let PDData = {
        "CardCode":salesOrderData.CardCode,
        "DocDate":salesOrderData.DocDate,
        "DocDueDate":salesOrderData.DocDueDate,
        "BPL_IDAssignedToInvoice":salesOrderData.BPL_IDAssignedToInvoice,
        "DocumentLine":[]
    }
    let lineData = salesOrderData.DocumentLine;
    for(var lineNum = 0; lineNum < lineData.length; ++lineNum)
    {
        let obj = {"BaseType":"15","BaseEntry":baseDocEntry,"BaseLine":lineNum};
        PDData.DocumentLine.push(obj);
    }
    // return PDData;
    let res = "";
    res = createInvoice(ServiceLayerContext,PDData);
    return res;
}


//入口
function POST() 
{

    let slContext = new ServiceLayerContext();
    let orderData = http.request.getJsonObj();
    slContext.startTransaction();
    let res = createSalesOrder(slContext,orderData);
    if (res.isOK()) 
    {
        res = createDeliveryNoteFromSalesOrder(slContext,res,orderData);
        if (res.isOK())
        {

            res = createInvoicesFromDeliveryNote(slContext,res,orderData);
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
        else
        {
            slContext.rollbackTransaction();
            http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, res);
        }
    }
    else 
    {
        slContext.rollbackTransaction();
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, res);
    }

}



