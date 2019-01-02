if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterQuarterOrDates = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterQuarterOrDates.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterQuarterOrDates.prototype.constructor = SAPB1.TaxReportFilterQuarterOrDates;
SAPB1.TaxReportFilterQuarterOrDates.trfqd_Date = new SAPB1.TaxReportFilterQuarterOrDates('trfqd_Date', 'trfqd_Date');
SAPB1.TaxReportFilterQuarterOrDates.trfqd_Interval = new SAPB1.TaxReportFilterQuarterOrDates('trfqd_Interval', 'trfqd_Interval');

module.exports = SAPB1.TaxReportFilterQuarterOrDates;
