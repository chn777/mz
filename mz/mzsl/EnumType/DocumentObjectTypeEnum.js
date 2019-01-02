if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DocumentObjectTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DocumentObjectTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DocumentObjectTypeEnum.prototype.constructor = SAPB1.DocumentObjectTypeEnum;
SAPB1.DocumentObjectTypeEnum.dc_InventoryTransfer = new SAPB1.DocumentObjectTypeEnum('dc_InventoryTransfer', 'dc_InventoryTransfer');
SAPB1.DocumentObjectTypeEnum.dc_Delivery = new SAPB1.DocumentObjectTypeEnum('dc_Delivery', 'dc_Delivery');
SAPB1.DocumentObjectTypeEnum.dc_ArInvoice = new SAPB1.DocumentObjectTypeEnum('dc_ArInvoice', 'dc_ArInvoice');
SAPB1.DocumentObjectTypeEnum.dc_GoodsReturn = new SAPB1.DocumentObjectTypeEnum('dc_GoodsReturn', 'dc_GoodsReturn');

module.exports = SAPB1.DocumentObjectTypeEnum;
