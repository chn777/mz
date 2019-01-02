if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterType.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterType.prototype.constructor = SAPB1.TaxReportFilterType;
SAPB1.TaxReportFilterType.trft_ReconciliationReport = new SAPB1.TaxReportFilterType('trft_ReconciliationReport', 'trft_ReconciliationReport');
SAPB1.TaxReportFilterType.trft_Report349 = new SAPB1.TaxReportFilterType('trft_Report349', 'trft_Report349');
SAPB1.TaxReportFilterType.trft_AppendixOP = new SAPB1.TaxReportFilterType('trft_AppendixOP', 'trft_AppendixOP');
SAPB1.TaxReportFilterType.trft_TaxReport = new SAPB1.TaxReportFilterType('trft_TaxReport', 'trft_TaxReport');
SAPB1.TaxReportFilterType.trft_SalesReport = new SAPB1.TaxReportFilterType('trft_SalesReport', 'trft_SalesReport');
SAPB1.TaxReportFilterType.trft_BoxReport = new SAPB1.TaxReportFilterType('trft_BoxReport', 'trft_BoxReport');
SAPB1.TaxReportFilterType.trft_Report347 = new SAPB1.TaxReportFilterType('trft_Report347', 'trft_Report347');
SAPB1.TaxReportFilterType.trft_WTReport = new SAPB1.TaxReportFilterType('trft_WTReport', 'trft_WTReport');
SAPB1.TaxReportFilterType.trft_VATRefundReport = new SAPB1.TaxReportFilterType('trft_VATRefundReport', 'trft_VATRefundReport');
SAPB1.TaxReportFilterType.trft_None = new SAPB1.TaxReportFilterType('trft_None', 'trft_None');
SAPB1.TaxReportFilterType.trft_AnnualSalesReport = new SAPB1.TaxReportFilterType('trft_AnnualSalesReport', 'trft_AnnualSalesReport');
SAPB1.TaxReportFilterType.trft_StampTax = new SAPB1.TaxReportFilterType('trft_StampTax', 'trft_StampTax');

module.exports = SAPB1.TaxReportFilterType;
