if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TypeOfAdvancedRulesEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TypeOfAdvancedRulesEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TypeOfAdvancedRulesEnum.prototype.constructor = SAPB1.TypeOfAdvancedRulesEnum;
SAPB1.TypeOfAdvancedRulesEnum.toarItemGroup = new SAPB1.TypeOfAdvancedRulesEnum('toarItemGroup', 'toarItemGroup');
SAPB1.TypeOfAdvancedRulesEnum.toarGeneral = new SAPB1.TypeOfAdvancedRulesEnum('toarGeneral', 'toarGeneral');
SAPB1.TypeOfAdvancedRulesEnum.toarWarehouse = new SAPB1.TypeOfAdvancedRulesEnum('toarWarehouse', 'toarWarehouse');

module.exports = SAPB1.TypeOfAdvancedRulesEnum;
