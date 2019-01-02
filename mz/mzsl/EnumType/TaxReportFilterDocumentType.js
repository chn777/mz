if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterDocumentType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterDocumentType.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterDocumentType.prototype.constructor = SAPB1.TaxReportFilterDocumentType;
SAPB1.TaxReportFilterDocumentType.trfdt_APInvoices = new SAPB1.TaxReportFilterDocumentType('trfdt_APInvoices', 'trfdt_APInvoices');
SAPB1.TaxReportFilterDocumentType.trfdt_ARCreditMemos = new SAPB1.TaxReportFilterDocumentType('trfdt_ARCreditMemos', 'trfdt_ARCreditMemos');
SAPB1.TaxReportFilterDocumentType.trfdt_InventoryTransfers = new SAPB1.TaxReportFilterDocumentType('trfdt_InventoryTransfers', 'trfdt_InventoryTransfers');
SAPB1.TaxReportFilterDocumentType.trfdt_OutgoingPayments = new SAPB1.TaxReportFilterDocumentType('trfdt_OutgoingPayments', 'trfdt_OutgoingPayments');
SAPB1.TaxReportFilterDocumentType.trfdt_ChecksforPayment = new SAPB1.TaxReportFilterDocumentType('trfdt_ChecksforPayment', 'trfdt_ChecksforPayment');
SAPB1.TaxReportFilterDocumentType.trfdt_ARDownPayment = new SAPB1.TaxReportFilterDocumentType('trfdt_ARDownPayment', 'trfdt_ARDownPayment');
SAPB1.TaxReportFilterDocumentType.trfdt_ARInvoices = new SAPB1.TaxReportFilterDocumentType('trfdt_ARInvoices', 'trfdt_ARInvoices');
SAPB1.TaxReportFilterDocumentType.trfdt_APCreditMemos = new SAPB1.TaxReportFilterDocumentType('trfdt_APCreditMemos', 'trfdt_APCreditMemos');
SAPB1.TaxReportFilterDocumentType.trfdt_APDownPayment = new SAPB1.TaxReportFilterDocumentType('trfdt_APDownPayment', 'trfdt_APDownPayment');
SAPB1.TaxReportFilterDocumentType.trfdt_IncomingPayments = new SAPB1.TaxReportFilterDocumentType('trfdt_IncomingPayments', 'trfdt_IncomingPayments');
SAPB1.TaxReportFilterDocumentType.trfdt_JournalEntries = new SAPB1.TaxReportFilterDocumentType('trfdt_JournalEntries', 'trfdt_JournalEntries');

module.exports = SAPB1.TaxReportFilterDocumentType;
