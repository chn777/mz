if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InventoryPostingPriceSourceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InventoryPostingPriceSourceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InventoryPostingPriceSourceEnum.prototype.constructor = SAPB1.InventoryPostingPriceSourceEnum;
SAPB1.InventoryPostingPriceSourceEnum.ippsItemCost = new SAPB1.InventoryPostingPriceSourceEnum('ippsItemCost', 'ippsItemCost');
SAPB1.InventoryPostingPriceSourceEnum.ippsByPriceList = new SAPB1.InventoryPostingPriceSourceEnum('ippsByPriceList', 'ippsByPriceList');
SAPB1.InventoryPostingPriceSourceEnum.ippsLastEvaluatedPrice = new SAPB1.InventoryPostingPriceSourceEnum('ippsLastEvaluatedPrice', 'ippsLastEvaluatedPrice');

module.exports = SAPB1.InventoryPostingPriceSourceEnum;
