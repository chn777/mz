if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ApprovalTemplatesDocumentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ApprovalTemplatesDocumentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ApprovalTemplatesDocumentTypeEnum.prototype.constructor = SAPB1.ApprovalTemplatesDocumentTypeEnum;
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtReturns = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtReturns', 'atdtReturns');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtGoodsIssue = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtGoodsIssue', 'atdtGoodsIssue');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtDelivery = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtDelivery', 'atdtDelivery');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtInventoryOpeningBalance = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtInventoryOpeningBalance', 'atdtInventoryOpeningBalance');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtQuotation = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtQuotation', 'atdtQuotation');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtOrder = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtOrder', 'atdtOrder');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtCorrectionInvoice = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtCorrectionInvoice', 'atdtCorrectionInvoice');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtApCreditMemo = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtApCreditMemo', 'atdtApCreditMemo');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtInventoryTransfer = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtInventoryTransfer', 'atdtInventoryTransfer');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtInventoryPosting = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtInventoryPosting', 'atdtInventoryPosting');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtArInvoice = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtArInvoice', 'atdtArInvoice');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtApInvoice = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtApInvoice', 'atdtApInvoice');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtInventoryCounting = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtInventoryCounting', 'atdtInventoryCounting');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtGoodsReceiptPO = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtGoodsReceiptPO', 'atdtGoodsReceiptPO');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtOutgoingPayment = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtOutgoingPayment', 'atdtOutgoingPayment');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtGoodsReceipt = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtGoodsReceipt', 'atdtGoodsReceipt');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtPurchaseOrder = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtPurchaseOrder', 'atdtPurchaseOrder');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtArCreditMemo = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtArCreditMemo', 'atdtArCreditMemo');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtApDownPayment = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtApDownPayment', 'atdtApDownPayment');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtArDownPayment = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtArDownPayment', 'atdtArDownPayment');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtPurchaseQuotation = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtPurchaseQuotation', 'atdtPurchaseQuotation');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtGoodsReturns = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtGoodsReturns', 'atdtGoodsReturns');
SAPB1.ApprovalTemplatesDocumentTypeEnum.atdtInventoryTransferRequest = new SAPB1.ApprovalTemplatesDocumentTypeEnum('atdtInventoryTransferRequest', 'atdtInventoryTransferRequest');

module.exports = SAPB1.ApprovalTemplatesDocumentTypeEnum;
