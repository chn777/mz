if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TransTypesEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TransTypesEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TransTypesEnum.prototype.constructor = SAPB1.TransTypesEnum;
SAPB1.TransTypesEnum.ttOpeningBalance = new SAPB1.TransTypesEnum('ttOpeningBalance', 'ttOpeningBalance');
SAPB1.TransTypesEnum.ttGeneralReleaseFromStock = new SAPB1.TransTypesEnum('ttGeneralReleaseFromStock', 'ttGeneralReleaseFromStock');
SAPB1.TransTypesEnum.ttARCredItnote = new SAPB1.TransTypesEnum('ttARCredItnote', 'ttARCredItnote');
SAPB1.TransTypesEnum.ttAPCreditNote = new SAPB1.TransTypesEnum('ttAPCreditNote', 'ttAPCreditNote');
SAPB1.TransTypesEnum.ttPurchaseReturn = new SAPB1.TransTypesEnum('ttPurchaseReturn', 'ttPurchaseReturn');
SAPB1.TransTypesEnum.ttProductionOrder = new SAPB1.TransTypesEnum('ttProductionOrder', 'ttProductionOrder');
SAPB1.TransTypesEnum.ttARInvoice = new SAPB1.TransTypesEnum('ttARInvoice', 'ttARInvoice');
SAPB1.TransTypesEnum.ttAPInvoice = new SAPB1.TransTypesEnum('ttAPInvoice', 'ttAPInvoice');
SAPB1.TransTypesEnum.ttAPCorrectionInvoice = new SAPB1.TransTypesEnum('ttAPCorrectionInvoice', 'ttAPCorrectionInvoice');
SAPB1.TransTypesEnum.ttARCorrectionInvoice = new SAPB1.TransTypesEnum('ttARCorrectionInvoice', 'ttARCorrectionInvoice');
SAPB1.TransTypesEnum.ttAPCorrectionInvoiceReversal = new SAPB1.TransTypesEnum('ttAPCorrectionInvoiceReversal', 'ttAPCorrectionInvoiceReversal');
SAPB1.TransTypesEnum.ttCorrectionInvoice = new SAPB1.TransTypesEnum('ttCorrectionInvoice', 'ttCorrectionInvoice');
SAPB1.TransTypesEnum.ttDeposit = new SAPB1.TransTypesEnum('ttDeposit', 'ttDeposit');
SAPB1.TransTypesEnum.ttAllTransactions = new SAPB1.TransTypesEnum('ttAllTransactions', 'ttAllTransactions');
SAPB1.TransTypesEnum.ttInternalReconciliation = new SAPB1.TransTypesEnum('ttInternalReconciliation', 'ttInternalReconciliation');
SAPB1.TransTypesEnum.ttStockList = new SAPB1.TransTypesEnum('ttStockList', 'ttStockList');
SAPB1.TransTypesEnum.ttDeferredDeposit = new SAPB1.TransTypesEnum('ttDeferredDeposit', 'ttDeferredDeposit');
SAPB1.TransTypesEnum.ttPurchaseDownPayment = new SAPB1.TransTypesEnum('ttPurchaseDownPayment', 'ttPurchaseDownPayment');
SAPB1.TransTypesEnum.ttReceipt = new SAPB1.TransTypesEnum('ttReceipt', 'ttReceipt');
SAPB1.TransTypesEnum.ttReturn = new SAPB1.TransTypesEnum('ttReturn', 'ttReturn');
SAPB1.TransTypesEnum.ttARCorrectionInvoiceReversal = new SAPB1.TransTypesEnum('ttARCorrectionInvoiceReversal', 'ttARCorrectionInvoiceReversal');
SAPB1.TransTypesEnum.ttChequesForPayment = new SAPB1.TransTypesEnum('ttChequesForPayment', 'ttChequesForPayment');
SAPB1.TransTypesEnum.ttBoETransaction = new SAPB1.TransTypesEnum('ttBoETransaction', 'ttBoETransaction');
SAPB1.TransTypesEnum.ttDelivery = new SAPB1.TransTypesEnum('ttDelivery', 'ttDelivery');
SAPB1.TransTypesEnum.ttLandedCosts = new SAPB1.TransTypesEnum('ttLandedCosts', 'ttLandedCosts');
SAPB1.TransTypesEnum.ttPurchaseDeliveryNote = new SAPB1.TransTypesEnum('ttPurchaseDeliveryNote', 'ttPurchaseDeliveryNote');
SAPB1.TransTypesEnum.ttJournalEntry = new SAPB1.TransTypesEnum('ttJournalEntry', 'ttJournalEntry');
SAPB1.TransTypesEnum.ttWorkInstructions = new SAPB1.TransTypesEnum('ttWorkInstructions', 'ttWorkInstructions');
SAPB1.TransTypesEnum.ttInventoryValuation = new SAPB1.TransTypesEnum('ttInventoryValuation', 'ttInventoryValuation');
SAPB1.TransTypesEnum.ttTransferBetweenWarehouses = new SAPB1.TransTypesEnum('ttTransferBetweenWarehouses', 'ttTransferBetweenWarehouses');
SAPB1.TransTypesEnum.ttClosingBalance = new SAPB1.TransTypesEnum('ttClosingBalance', 'ttClosingBalance');
SAPB1.TransTypesEnum.ttGeneralReceiptToStock = new SAPB1.TransTypesEnum('ttGeneralReceiptToStock', 'ttGeneralReceiptToStock');
SAPB1.TransTypesEnum.ttVendorPayment = new SAPB1.TransTypesEnum('ttVendorPayment', 'ttVendorPayment');
SAPB1.TransTypesEnum.ttDownPayment = new SAPB1.TransTypesEnum('ttDownPayment', 'ttDownPayment');

module.exports = SAPB1.TransTypesEnum;
