if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LCCostTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LCCostTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LCCostTypeEnum.prototype.constructor = SAPB1.LCCostTypeEnum;
SAPB1.LCCostTypeEnum.asLegalCosts = new SAPB1.LCCostTypeEnum('asLegalCosts', 'asLegalCosts');
SAPB1.LCCostTypeEnum.asVariableCosts = new SAPB1.LCCostTypeEnum('asVariableCosts', 'asVariableCosts');
SAPB1.LCCostTypeEnum.asFixedCosts = new SAPB1.LCCostTypeEnum('asFixedCosts', 'asFixedCosts');

module.exports = SAPB1.LCCostTypeEnum;
