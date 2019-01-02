if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ItemUoMTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ItemUoMTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ItemUoMTypeEnum.prototype.constructor = SAPB1.ItemUoMTypeEnum;
SAPB1.ItemUoMTypeEnum.iutSales = new SAPB1.ItemUoMTypeEnum('iutSales', 'iutSales');
SAPB1.ItemUoMTypeEnum.iutInventory = new SAPB1.ItemUoMTypeEnum('iutInventory', 'iutInventory');
SAPB1.ItemUoMTypeEnum.iutPurchasing = new SAPB1.ItemUoMTypeEnum('iutPurchasing', 'iutPurchasing');

module.exports = SAPB1.ItemUoMTypeEnum;
