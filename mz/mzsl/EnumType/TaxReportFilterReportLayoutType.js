if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterReportLayoutType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterReportLayoutType.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterReportLayoutType.prototype.constructor = SAPB1.TaxReportFilterReportLayoutType;
SAPB1.TaxReportFilterReportLayoutType.trfrlt_DeclarationLayout = new SAPB1.TaxReportFilterReportLayoutType('trfrlt_DeclarationLayout', 'trfrlt_DeclarationLayout');
SAPB1.TaxReportFilterReportLayoutType.trfrlt_RegisterBookLayout = new SAPB1.TaxReportFilterReportLayoutType('trfrlt_RegisterBookLayout', 'trfrlt_RegisterBookLayout');

module.exports = SAPB1.TaxReportFilterReportLayoutType;
