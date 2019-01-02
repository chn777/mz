if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxReportFilterDeclarationType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxReportFilterDeclarationType.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxReportFilterDeclarationType.prototype.constructor = SAPB1.TaxReportFilterDeclarationType;
SAPB1.TaxReportFilterDeclarationType.trfdt_Complementary = new SAPB1.TaxReportFilterDeclarationType('trfdt_Complementary', 'trfdt_Complementary');
SAPB1.TaxReportFilterDeclarationType.trfdt_Original = new SAPB1.TaxReportFilterDeclarationType('trfdt_Original', 'trfdt_Original');
SAPB1.TaxReportFilterDeclarationType.trfdt_Substitute = new SAPB1.TaxReportFilterDeclarationType('trfdt_Substitute', 'trfdt_Substitute');

module.exports = SAPB1.TaxReportFilterDeclarationType;
