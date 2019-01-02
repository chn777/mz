if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PMDocumentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PMDocumentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PMDocumentTypeEnum.prototype.constructor = SAPB1.PMDocumentTypeEnum;
SAPB1.PMDocumentTypeEnum.pmdt_APCorrectionInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_APCorrectionInvoice', 'pmdt_APCorrectionInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_ARCorrectionInvoiceReversal = new SAPB1.PMDocumentTypeEnum('pmdt_ARCorrectionInvoiceReversal', 'pmdt_ARCorrectionInvoiceReversal');
SAPB1.PMDocumentTypeEnum.pmdt_ARDownPaymentRequest = new SAPB1.PMDocumentTypeEnum('pmdt_ARDownPaymentRequest', 'pmdt_ARDownPaymentRequest');
SAPB1.PMDocumentTypeEnum.pmdt_GoodsReceiptPO = new SAPB1.PMDocumentTypeEnum('pmdt_GoodsReceiptPO', 'pmdt_GoodsReceiptPO');
SAPB1.PMDocumentTypeEnum.pmdt_SalesQuotation = new SAPB1.PMDocumentTypeEnum('pmdt_SalesQuotation', 'pmdt_SalesQuotation');
SAPB1.PMDocumentTypeEnum.pmdt_ARReserveInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_ARReserveInvoice', 'pmdt_ARReserveInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_PurchaseOrder = new SAPB1.PMDocumentTypeEnum('pmdt_PurchaseOrder', 'pmdt_PurchaseOrder');
SAPB1.PMDocumentTypeEnum.pmdt_APDownPaymentInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_APDownPaymentInvoice', 'pmdt_APDownPaymentInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_APReserveInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_APReserveInvoice', 'pmdt_APReserveInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_ARCreditMemo = new SAPB1.PMDocumentTypeEnum('pmdt_ARCreditMemo', 'pmdt_ARCreditMemo');
SAPB1.PMDocumentTypeEnum.pmdt_SalesOrder = new SAPB1.PMDocumentTypeEnum('pmdt_SalesOrder', 'pmdt_SalesOrder');
SAPB1.PMDocumentTypeEnum.pmdt_GoodsReturn = new SAPB1.PMDocumentTypeEnum('pmdt_GoodsReturn', 'pmdt_GoodsReturn');
SAPB1.PMDocumentTypeEnum.pmdt_APInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_APInvoice', 'pmdt_APInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_APCreditMemo = new SAPB1.PMDocumentTypeEnum('pmdt_APCreditMemo', 'pmdt_APCreditMemo');
SAPB1.PMDocumentTypeEnum.pmdt_ARInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_ARInvoice', 'pmdt_ARInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_Delivery = new SAPB1.PMDocumentTypeEnum('pmdt_Delivery', 'pmdt_Delivery');
SAPB1.PMDocumentTypeEnum.pmdt_GoodsReceipt = new SAPB1.PMDocumentTypeEnum('pmdt_GoodsReceipt', 'pmdt_GoodsReceipt');
SAPB1.PMDocumentTypeEnum.pmdt_PurchaseQuotation = new SAPB1.PMDocumentTypeEnum('pmdt_PurchaseQuotation', 'pmdt_PurchaseQuotation');
SAPB1.PMDocumentTypeEnum.pmdt_Return = new SAPB1.PMDocumentTypeEnum('pmdt_Return', 'pmdt_Return');
SAPB1.PMDocumentTypeEnum.pmdt_GoodsIssue = new SAPB1.PMDocumentTypeEnum('pmdt_GoodsIssue', 'pmdt_GoodsIssue');
SAPB1.PMDocumentTypeEnum.pmdt_APCorrectionInvoiceReversal = new SAPB1.PMDocumentTypeEnum('pmdt_APCorrectionInvoiceReversal', 'pmdt_APCorrectionInvoiceReversal');
SAPB1.PMDocumentTypeEnum.pmdt_APDownPaymentRequest = new SAPB1.PMDocumentTypeEnum('pmdt_APDownPaymentRequest', 'pmdt_APDownPaymentRequest');
SAPB1.PMDocumentTypeEnum.pmdt_ServiceCall = new SAPB1.PMDocumentTypeEnum('pmdt_ServiceCall', 'pmdt_ServiceCall');
SAPB1.PMDocumentTypeEnum.pmdt_ManualJournalEntry = new SAPB1.PMDocumentTypeEnum('pmdt_ManualJournalEntry', 'pmdt_ManualJournalEntry');
SAPB1.PMDocumentTypeEnum.pmdt_ARDownPaymentInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_ARDownPaymentInvoice', 'pmdt_ARDownPaymentInvoice');
SAPB1.PMDocumentTypeEnum.pmdt_ARCorrectionInvoice = new SAPB1.PMDocumentTypeEnum('pmdt_ARCorrectionInvoice', 'pmdt_ARCorrectionInvoice');

module.exports = SAPB1.PMDocumentTypeEnum;
