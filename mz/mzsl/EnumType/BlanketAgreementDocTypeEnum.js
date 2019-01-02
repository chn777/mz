if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BlanketAgreementDocTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BlanketAgreementDocTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BlanketAgreementDocTypeEnum.prototype.constructor = SAPB1.BlanketAgreementDocTypeEnum;
SAPB1.BlanketAgreementDocTypeEnum.GoodsReturn = new SAPB1.BlanketAgreementDocTypeEnum('GoodsReturn', 'GoodsReturn');
SAPB1.BlanketAgreementDocTypeEnum.Return = new SAPB1.BlanketAgreementDocTypeEnum('Return', 'Return');
SAPB1.BlanketAgreementDocTypeEnum.APCorrectionInvoice = new SAPB1.BlanketAgreementDocTypeEnum('APCorrectionInvoice', 'APCorrectionInvoice');
SAPB1.BlanketAgreementDocTypeEnum.ARCorrectionInvoiceReversal = new SAPB1.BlanketAgreementDocTypeEnum('ARCorrectionInvoiceReversal', 'ARCorrectionInvoiceReversal');
SAPB1.BlanketAgreementDocTypeEnum.ARCreditMemo = new SAPB1.BlanketAgreementDocTypeEnum('ARCreditMemo', 'ARCreditMemo');
SAPB1.BlanketAgreementDocTypeEnum.GoodsReceiptPO = new SAPB1.BlanketAgreementDocTypeEnum('GoodsReceiptPO', 'GoodsReceiptPO');
SAPB1.BlanketAgreementDocTypeEnum.APDownPayment = new SAPB1.BlanketAgreementDocTypeEnum('APDownPayment', 'APDownPayment');
SAPB1.BlanketAgreementDocTypeEnum.ARInvoice = new SAPB1.BlanketAgreementDocTypeEnum('ARInvoice', 'ARInvoice');
SAPB1.BlanketAgreementDocTypeEnum.APInvoice = new SAPB1.BlanketAgreementDocTypeEnum('APInvoice', 'APInvoice');
SAPB1.BlanketAgreementDocTypeEnum.ARCorrectionInvoice = new SAPB1.BlanketAgreementDocTypeEnum('ARCorrectionInvoice', 'ARCorrectionInvoice');
SAPB1.BlanketAgreementDocTypeEnum.PurchaseQuotation = new SAPB1.BlanketAgreementDocTypeEnum('PurchaseQuotation', 'PurchaseQuotation');
SAPB1.BlanketAgreementDocTypeEnum.PurchaseOrder = new SAPB1.BlanketAgreementDocTypeEnum('PurchaseOrder', 'PurchaseOrder');
SAPB1.BlanketAgreementDocTypeEnum.APCorrectionInvoiceReversal = new SAPB1.BlanketAgreementDocTypeEnum('APCorrectionInvoiceReversal', 'APCorrectionInvoiceReversal');
SAPB1.BlanketAgreementDocTypeEnum.Delivery = new SAPB1.BlanketAgreementDocTypeEnum('Delivery', 'Delivery');
SAPB1.BlanketAgreementDocTypeEnum.SalesQuotation = new SAPB1.BlanketAgreementDocTypeEnum('SalesQuotation', 'SalesQuotation');
SAPB1.BlanketAgreementDocTypeEnum.ARDownPayment = new SAPB1.BlanketAgreementDocTypeEnum('ARDownPayment', 'ARDownPayment');
SAPB1.BlanketAgreementDocTypeEnum.APCreditMemo = new SAPB1.BlanketAgreementDocTypeEnum('APCreditMemo', 'APCreditMemo');
SAPB1.BlanketAgreementDocTypeEnum.SalesOrder = new SAPB1.BlanketAgreementDocTypeEnum('SalesOrder', 'SalesOrder');

module.exports = SAPB1.BlanketAgreementDocTypeEnum;
