if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocumentSubType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocumentSubType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocumentSubType.prototype.constructor = SAPB1.BoDocumentSubType;
SAPB1.BoDocumentSubType.bod_GSTTaxInvoice = new SAPB1.BoDocumentSubType('bod_GSTTaxInvoice', 'bod_GSTTaxInvoice');
SAPB1.BoDocumentSubType.bod_InvoiceExempt = new SAPB1.BoDocumentSubType('bod_InvoiceExempt', 'bod_InvoiceExempt');
SAPB1.BoDocumentSubType.bod_ExemptBill = new SAPB1.BoDocumentSubType('bod_ExemptBill', 'bod_ExemptBill');
SAPB1.BoDocumentSubType.bod_ExportInvoice = new SAPB1.BoDocumentSubType('bod_ExportInvoice', 'bod_ExportInvoice');
SAPB1.BoDocumentSubType.bod_RefundVoucher = new SAPB1.BoDocumentSubType('bod_RefundVoucher', 'bod_RefundVoucher');
SAPB1.BoDocumentSubType.bod_Bill = new SAPB1.BoDocumentSubType('bod_Bill', 'bod_Bill');
SAPB1.BoDocumentSubType.bod_None = new SAPB1.BoDocumentSubType('bod_None', 'bod_None');
SAPB1.BoDocumentSubType.bod_PurchaseDebitMemo = new SAPB1.BoDocumentSubType('bod_PurchaseDebitMemo', 'bod_PurchaseDebitMemo');
SAPB1.BoDocumentSubType.bod_GSTDebitMemo = new SAPB1.BoDocumentSubType('bod_GSTDebitMemo', 'bod_GSTDebitMemo');
SAPB1.BoDocumentSubType.bod_DebitMemo = new SAPB1.BoDocumentSubType('bod_DebitMemo', 'bod_DebitMemo');

module.exports = SAPB1.BoDocumentSubType;
