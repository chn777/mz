if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRcptInvTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRcptInvTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRcptInvTypes.prototype.constructor = SAPB1.BoRcptInvTypes;
SAPB1.BoRcptInvTypes.it_PurchaseDownPayment = new SAPB1.BoRcptInvTypes('it_PurchaseDownPayment', 'it_PurchaseDownPayment');
SAPB1.BoRcptInvTypes.it_CredItnote = new SAPB1.BoRcptInvTypes('it_CredItnote', 'it_CredItnote');
SAPB1.BoRcptInvTypes.it_TaxInvoice = new SAPB1.BoRcptInvTypes('it_TaxInvoice', 'it_TaxInvoice');
SAPB1.BoRcptInvTypes.it_PaymentAdvice = new SAPB1.BoRcptInvTypes('it_PaymentAdvice', 'it_PaymentAdvice');
SAPB1.BoRcptInvTypes.it_DownPayment = new SAPB1.BoRcptInvTypes('it_DownPayment', 'it_DownPayment');
SAPB1.BoRcptInvTypes.it_GeneralReceiptToStock = new SAPB1.BoRcptInvTypes('it_GeneralReceiptToStock', 'it_GeneralReceiptToStock');
SAPB1.BoRcptInvTypes.it_Return = new SAPB1.BoRcptInvTypes('it_Return', 'it_Return');
SAPB1.BoRcptInvTypes.it_JournalEntry = new SAPB1.BoRcptInvTypes('it_JournalEntry', 'it_JournalEntry');
SAPB1.BoRcptInvTypes.it_AllTransactions = new SAPB1.BoRcptInvTypes('it_AllTransactions', 'it_AllTransactions');
SAPB1.BoRcptInvTypes.it_TransferBetweenWarehouses = new SAPB1.BoRcptInvTypes('it_TransferBetweenWarehouses', 'it_TransferBetweenWarehouses');
SAPB1.BoRcptInvTypes.it_PurchaseCreditNote = new SAPB1.BoRcptInvTypes('it_PurchaseCreditNote', 'it_PurchaseCreditNote');
SAPB1.BoRcptInvTypes.it_PurchaseReturn = new SAPB1.BoRcptInvTypes('it_PurchaseReturn', 'it_PurchaseReturn');
SAPB1.BoRcptInvTypes.it_StockReconciliations = new SAPB1.BoRcptInvTypes('it_StockReconciliations', 'it_StockReconciliations');
SAPB1.BoRcptInvTypes.it_PurchaseDeliveryNote = new SAPB1.BoRcptInvTypes('it_PurchaseDeliveryNote', 'it_PurchaseDeliveryNote');
SAPB1.BoRcptInvTypes.it_Receipt = new SAPB1.BoRcptInvTypes('it_Receipt', 'it_Receipt');
SAPB1.BoRcptInvTypes.it_OpeningBalance = new SAPB1.BoRcptInvTypes('it_OpeningBalance', 'it_OpeningBalance');
SAPB1.BoRcptInvTypes.it_ARCorrectionInvoice = new SAPB1.BoRcptInvTypes('it_ARCorrectionInvoice', 'it_ARCorrectionInvoice');
SAPB1.BoRcptInvTypes.it_ChequesForPayment = new SAPB1.BoRcptInvTypes('it_ChequesForPayment', 'it_ChequesForPayment');
SAPB1.BoRcptInvTypes.it_DeferredDeposit = new SAPB1.BoRcptInvTypes('it_DeferredDeposit', 'it_DeferredDeposit');
SAPB1.BoRcptInvTypes.it_PurchaseInvoice = new SAPB1.BoRcptInvTypes('it_PurchaseInvoice', 'it_PurchaseInvoice');
SAPB1.BoRcptInvTypes.it_GeneralReleaseFromStock = new SAPB1.BoRcptInvTypes('it_GeneralReleaseFromStock', 'it_GeneralReleaseFromStock');
SAPB1.BoRcptInvTypes.it_APCorrectionInvoice = new SAPB1.BoRcptInvTypes('it_APCorrectionInvoice', 'it_APCorrectionInvoice');
SAPB1.BoRcptInvTypes.it_WorkInstructions = new SAPB1.BoRcptInvTypes('it_WorkInstructions', 'it_WorkInstructions');
SAPB1.BoRcptInvTypes.it_Invoice = new SAPB1.BoRcptInvTypes('it_Invoice', 'it_Invoice');
SAPB1.BoRcptInvTypes.it_Deposit = new SAPB1.BoRcptInvTypes('it_Deposit', 'it_Deposit');
SAPB1.BoRcptInvTypes.it_ClosingBalance = new SAPB1.BoRcptInvTypes('it_ClosingBalance', 'it_ClosingBalance');
SAPB1.BoRcptInvTypes.it_CorrectionInvoice = new SAPB1.BoRcptInvTypes('it_CorrectionInvoice', 'it_CorrectionInvoice');

module.exports = SAPB1.BoRcptInvTypes;
