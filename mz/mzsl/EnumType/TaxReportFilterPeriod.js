if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterPeriod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterPeriod.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterPeriod.prototype.constructor = SAPB1.TaxReportFilterPeriod;
SAPB1.TaxReportFilterPeriod.trfP_Month = new SAPB1.TaxReportFilterPeriod('trfP_Month', 'trfP_Month');
SAPB1.TaxReportFilterPeriod.trfP_Year = new SAPB1.TaxReportFilterPeriod('trfP_Year', 'trfP_Year');
SAPB1.TaxReportFilterPeriod.trfP_NULL = new SAPB1.TaxReportFilterPeriod('trfP_NULL', 'trfP_NULL');
SAPB1.TaxReportFilterPeriod.trfP_Quarter = new SAPB1.TaxReportFilterPeriod('trfP_Quarter', 'trfP_Quarter');

module.exports = SAPB1.TaxReportFilterPeriod;
