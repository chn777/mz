if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BankStatementDocTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BankStatementDocTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BankStatementDocTypeEnum.prototype.constructor = SAPB1.BankStatementDocTypeEnum;
SAPB1.BankStatementDocTypeEnum.bsdtRevertInvoices = new SAPB1.BankStatementDocTypeEnum('bsdtRevertInvoices', 'bsdtRevertInvoices');
SAPB1.BankStatementDocTypeEnum.bsdtDownPaymentOutgoing = new SAPB1.BankStatementDocTypeEnum('bsdtDownPaymentOutgoing', 'bsdtDownPaymentOutgoing');
SAPB1.BankStatementDocTypeEnum.bsdtReceipts = new SAPB1.BankStatementDocTypeEnum('bsdtReceipts', 'bsdtReceipts');
SAPB1.BankStatementDocTypeEnum.bsdtInvoices = new SAPB1.BankStatementDocTypeEnum('bsdtInvoices', 'bsdtInvoices');
SAPB1.BankStatementDocTypeEnum.bsdtRevertPurchases = new SAPB1.BankStatementDocTypeEnum('bsdtRevertPurchases', 'bsdtRevertPurchases');
SAPB1.BankStatementDocTypeEnum.bsdtJournalEntry = new SAPB1.BankStatementDocTypeEnum('bsdtJournalEntry', 'bsdtJournalEntry');
SAPB1.BankStatementDocTypeEnum.bsdtPurchases = new SAPB1.BankStatementDocTypeEnum('bsdtPurchases', 'bsdtPurchases');
SAPB1.BankStatementDocTypeEnum.bsdtDownPaymentIncoming = new SAPB1.BankStatementDocTypeEnum('bsdtDownPaymentIncoming', 'bsdtDownPaymentIncoming');
SAPB1.BankStatementDocTypeEnum.bsdtPaymentToVendor = new SAPB1.BankStatementDocTypeEnum('bsdtPaymentToVendor', 'bsdtPaymentToVendor');

module.exports = SAPB1.BankStatementDocTypeEnum;
