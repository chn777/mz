if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InventoryOpeningBalancePriceSourceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InventoryOpeningBalancePriceSourceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InventoryOpeningBalancePriceSourceEnum.prototype.constructor = SAPB1.InventoryOpeningBalancePriceSourceEnum;
SAPB1.InventoryOpeningBalancePriceSourceEnum.iobpsByPriceList = new SAPB1.InventoryOpeningBalancePriceSourceEnum('iobpsByPriceList', 'iobpsByPriceList');
SAPB1.InventoryOpeningBalancePriceSourceEnum.iobpsItemCost = new SAPB1.InventoryOpeningBalancePriceSourceEnum('iobpsItemCost', 'iobpsItemCost');
SAPB1.InventoryOpeningBalancePriceSourceEnum.iobpsLastEvaluatedPrice = new SAPB1.InventoryOpeningBalancePriceSourceEnum('iobpsLastEvaluatedPrice', 'iobpsLastEvaluatedPrice');

module.exports = SAPB1.InventoryOpeningBalancePriceSourceEnum;
