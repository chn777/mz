if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSvcEpxDocTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSvcEpxDocTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSvcEpxDocTypes.prototype.constructor = SAPB1.BoSvcEpxDocTypes;
SAPB1.BoSvcEpxDocTypes.edt_PurchaseQuotation = new SAPB1.BoSvcEpxDocTypes('edt_PurchaseQuotation', 'edt_PurchaseQuotation');
SAPB1.BoSvcEpxDocTypes.edt_CreditMemo = new SAPB1.BoSvcEpxDocTypes('edt_CreditMemo', 'edt_CreditMemo');
SAPB1.BoSvcEpxDocTypes.edt_StockTransfer = new SAPB1.BoSvcEpxDocTypes('edt_StockTransfer', 'edt_StockTransfer');
SAPB1.BoSvcEpxDocTypes.edt_Invoice = new SAPB1.BoSvcEpxDocTypes('edt_Invoice', 'edt_Invoice');
SAPB1.BoSvcEpxDocTypes.edt_GoodsReceipt = new SAPB1.BoSvcEpxDocTypes('edt_GoodsReceipt', 'edt_GoodsReceipt');
SAPB1.BoSvcEpxDocTypes.edt_AP_CorrectionInvoice = new SAPB1.BoSvcEpxDocTypes('edt_AP_CorrectionInvoice', 'edt_AP_CorrectionInvoice');
SAPB1.BoSvcEpxDocTypes.edt_PurchaseOrder = new SAPB1.BoSvcEpxDocTypes('edt_PurchaseOrder', 'edt_PurchaseOrder');
SAPB1.BoSvcEpxDocTypes.edt_AP_CreditMemo = new SAPB1.BoSvcEpxDocTypes('edt_AP_CreditMemo', 'edt_AP_CreditMemo');
SAPB1.BoSvcEpxDocTypes.edt_AP_Invoice = new SAPB1.BoSvcEpxDocTypes('edt_AP_Invoice', 'edt_AP_Invoice');
SAPB1.BoSvcEpxDocTypes.edt_Delivery = new SAPB1.BoSvcEpxDocTypes('edt_Delivery', 'edt_Delivery');
SAPB1.BoSvcEpxDocTypes.edt_Order = new SAPB1.BoSvcEpxDocTypes('edt_Order', 'edt_Order');
SAPB1.BoSvcEpxDocTypes.edt_Quotation = new SAPB1.BoSvcEpxDocTypes('edt_Quotation', 'edt_Quotation');
SAPB1.BoSvcEpxDocTypes.edt_Return = new SAPB1.BoSvcEpxDocTypes('edt_Return', 'edt_Return');
SAPB1.BoSvcEpxDocTypes.edt_GoodsReturn = new SAPB1.BoSvcEpxDocTypes('edt_GoodsReturn', 'edt_GoodsReturn');
SAPB1.BoSvcEpxDocTypes.edt_AR_CorrectionInvoice = new SAPB1.BoSvcEpxDocTypes('edt_AR_CorrectionInvoice', 'edt_AR_CorrectionInvoice');

module.exports = SAPB1.BoSvcEpxDocTypes;
