if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxInvoiceReportNTSApprovedEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxInvoiceReportNTSApprovedEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxInvoiceReportNTSApprovedEnum.prototype.constructor = SAPB1.TaxInvoiceReportNTSApprovedEnum;
SAPB1.TaxInvoiceReportNTSApprovedEnum.NotApproved = new SAPB1.TaxInvoiceReportNTSApprovedEnum('NotApproved', 'NotApproved');
SAPB1.TaxInvoiceReportNTSApprovedEnum.Approved = new SAPB1.TaxInvoiceReportNTSApprovedEnum('Approved', 'Approved');

module.exports = SAPB1.TaxInvoiceReportNTSApprovedEnum;
