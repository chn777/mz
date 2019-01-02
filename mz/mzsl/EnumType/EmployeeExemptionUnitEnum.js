if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EmployeeExemptionUnitEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EmployeeExemptionUnitEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EmployeeExemptionUnitEnum.prototype.constructor = SAPB1.EmployeeExemptionUnitEnum;
SAPB1.EmployeeExemptionUnitEnum.eeu_None = new SAPB1.EmployeeExemptionUnitEnum('eeu_None', 'eeu_None');
SAPB1.EmployeeExemptionUnitEnum.eeu_Daily = new SAPB1.EmployeeExemptionUnitEnum('eeu_Daily', 'eeu_Daily');
SAPB1.EmployeeExemptionUnitEnum.eeu_Yearly = new SAPB1.EmployeeExemptionUnitEnum('eeu_Yearly', 'eeu_Yearly');
SAPB1.EmployeeExemptionUnitEnum.eeu_Monthly = new SAPB1.EmployeeExemptionUnitEnum('eeu_Monthly', 'eeu_Monthly');
SAPB1.EmployeeExemptionUnitEnum.eeu_Weekly = new SAPB1.EmployeeExemptionUnitEnum('eeu_Weekly', 'eeu_Weekly');

module.exports = SAPB1.EmployeeExemptionUnitEnum;
