if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InventoryCycleTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InventoryCycleTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InventoryCycleTypeEnum.prototype.constructor = SAPB1.InventoryCycleTypeEnum;
SAPB1.InventoryCycleTypeEnum.ictCylce = new SAPB1.InventoryCycleTypeEnum('ictCylce', 'ictCylce');
SAPB1.InventoryCycleTypeEnum.ictMRP = new SAPB1.InventoryCycleTypeEnum('ictMRP', 'ictMRP');

module.exports = SAPB1.InventoryCycleTypeEnum;
