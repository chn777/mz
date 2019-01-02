if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AlertManagementDocumentEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AlertManagementDocumentEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AlertManagementDocumentEnum.prototype.constructor = SAPB1.AlertManagementDocumentEnum;
SAPB1.AlertManagementDocumentEnum.atd_RevertInvoice = new SAPB1.AlertManagementDocumentEnum('atd_RevertInvoice', 'atd_RevertInvoice');
SAPB1.AlertManagementDocumentEnum.atd_PurchaseInvoices = new SAPB1.AlertManagementDocumentEnum('atd_PurchaseInvoices', 'atd_PurchaseInvoices');
SAPB1.AlertManagementDocumentEnum.atd_Invoices = new SAPB1.AlertManagementDocumentEnum('atd_Invoices', 'atd_Invoices');
SAPB1.AlertManagementDocumentEnum.atd_DeliveryNotes = new SAPB1.AlertManagementDocumentEnum('atd_DeliveryNotes', 'atd_DeliveryNotes');
SAPB1.AlertManagementDocumentEnum.atd_CorrectionInvoice = new SAPB1.AlertManagementDocumentEnum('atd_CorrectionInvoice', 'atd_CorrectionInvoice');
SAPB1.AlertManagementDocumentEnum.atd_Quotations = new SAPB1.AlertManagementDocumentEnum('atd_Quotations', 'atd_Quotations');
SAPB1.AlertManagementDocumentEnum.atd_Orders = new SAPB1.AlertManagementDocumentEnum('atd_Orders', 'atd_Orders');
SAPB1.AlertManagementDocumentEnum.atd_IncomingPayments = new SAPB1.AlertManagementDocumentEnum('atd_IncomingPayments', 'atd_IncomingPayments');
SAPB1.AlertManagementDocumentEnum.atd_DownPaymentIncoming = new SAPB1.AlertManagementDocumentEnum('atd_DownPaymentIncoming', 'atd_DownPaymentIncoming');
SAPB1.AlertManagementDocumentEnum.atd_NOB = new SAPB1.AlertManagementDocumentEnum('atd_NOB', 'atd_NOB');
SAPB1.AlertManagementDocumentEnum.atd_DownPaymentOutgoing = new SAPB1.AlertManagementDocumentEnum('atd_DownPaymentOutgoing', 'atd_DownPaymentOutgoing');
SAPB1.AlertManagementDocumentEnum.atd_JournalEntries = new SAPB1.AlertManagementDocumentEnum('atd_JournalEntries', 'atd_JournalEntries');
SAPB1.AlertManagementDocumentEnum.atd_ChecksForPayment = new SAPB1.AlertManagementDocumentEnum('atd_ChecksForPayment', 'atd_ChecksForPayment');
SAPB1.AlertManagementDocumentEnum.atd_PurchaseDeliveryNotes = new SAPB1.AlertManagementDocumentEnum('atd_PurchaseDeliveryNotes', 'atd_PurchaseDeliveryNotes');
SAPB1.AlertManagementDocumentEnum.atd_Returns = new SAPB1.AlertManagementDocumentEnum('atd_Returns', 'atd_Returns');
SAPB1.AlertManagementDocumentEnum.atd_OutgoingPayments = new SAPB1.AlertManagementDocumentEnum('atd_OutgoingPayments', 'atd_OutgoingPayments');
SAPB1.AlertManagementDocumentEnum.atd_PurchaseOrders = new SAPB1.AlertManagementDocumentEnum('atd_PurchaseOrders', 'atd_PurchaseOrders');

module.exports = SAPB1.AlertManagementDocumentEnum;
