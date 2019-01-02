if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoProcurementMethod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoProcurementMethod.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoProcurementMethod.prototype.constructor = SAPB1.BoProcurementMethod;
SAPB1.BoProcurementMethod.bom_Make = new SAPB1.BoProcurementMethod('bom_Make', 'bom_Make');
SAPB1.BoProcurementMethod.bom_Buy = new SAPB1.BoProcurementMethod('bom_Buy', 'bom_Buy');

module.exports = SAPB1.BoProcurementMethod;
