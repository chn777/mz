if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InventoryPostingCopyOptionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InventoryPostingCopyOptionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InventoryPostingCopyOptionEnum.prototype.constructor = SAPB1.InventoryPostingCopyOptionEnum;
SAPB1.InventoryPostingCopyOptionEnum.ipcoNoCountersDiff = new SAPB1.InventoryPostingCopyOptionEnum('ipcoNoCountersDiff', 'ipcoNoCountersDiff');
SAPB1.InventoryPostingCopyOptionEnum.ipcoIndividual5CountedQuantity = new SAPB1.InventoryPostingCopyOptionEnum('ipcoIndividual5CountedQuantity', 'ipcoIndividual5CountedQuantity');
SAPB1.InventoryPostingCopyOptionEnum.ipcoIndividual2CountedQuantity = new SAPB1.InventoryPostingCopyOptionEnum('ipcoIndividual2CountedQuantity', 'ipcoIndividual2CountedQuantity');
SAPB1.InventoryPostingCopyOptionEnum.ipcoTeamCountedQuantity = new SAPB1.InventoryPostingCopyOptionEnum('ipcoTeamCountedQuantity', 'ipcoTeamCountedQuantity');
SAPB1.InventoryPostingCopyOptionEnum.ipcoIndividual1CountedQuantity = new SAPB1.InventoryPostingCopyOptionEnum('ipcoIndividual1CountedQuantity', 'ipcoIndividual1CountedQuantity');
SAPB1.InventoryPostingCopyOptionEnum.ipcoIndividual4CountedQuantity = new SAPB1.InventoryPostingCopyOptionEnum('ipcoIndividual4CountedQuantity', 'ipcoIndividual4CountedQuantity');
SAPB1.InventoryPostingCopyOptionEnum.ipcoIndividual3CountedQuantity = new SAPB1.InventoryPostingCopyOptionEnum('ipcoIndividual3CountedQuantity', 'ipcoIndividual3CountedQuantity');

module.exports = SAPB1.InventoryPostingCopyOptionEnum;
