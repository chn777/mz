if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxCalcSysEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxCalcSysEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxCalcSysEnum.prototype.constructor = SAPB1.TaxCalcSysEnum;
SAPB1.TaxCalcSysEnum.PreconfiguredFormula = new SAPB1.TaxCalcSysEnum('PreconfiguredFormula', 'PreconfiguredFormula');
SAPB1.TaxCalcSysEnum.PreconfiguredFormulaWithJurisdictionSupport = new SAPB1.TaxCalcSysEnum('PreconfiguredFormulaWithJurisdictionSupport', 'PreconfiguredFormulaWithJurisdictionSupport');
SAPB1.TaxCalcSysEnum.UserDefinedFormula = new SAPB1.TaxCalcSysEnum('UserDefinedFormula', 'UserDefinedFormula');

module.exports = SAPB1.TaxCalcSysEnum;
