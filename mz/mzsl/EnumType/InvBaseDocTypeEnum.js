if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InvBaseDocTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InvBaseDocTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InvBaseDocTypeEnum.prototype.constructor = SAPB1.InvBaseDocTypeEnum;
SAPB1.InvBaseDocTypeEnum.Empty = new SAPB1.InvBaseDocTypeEnum('Empty', 'Empty');
SAPB1.InvBaseDocTypeEnum.WarehouseTransfers = new SAPB1.InvBaseDocTypeEnum('WarehouseTransfers', 'WarehouseTransfers');
SAPB1.InvBaseDocTypeEnum.InventoryGeneralEntry = new SAPB1.InvBaseDocTypeEnum('InventoryGeneralEntry', 'InventoryGeneralEntry');
SAPB1.InvBaseDocTypeEnum.InventoryTransferRequest = new SAPB1.InvBaseDocTypeEnum('InventoryTransferRequest', 'InventoryTransferRequest');
SAPB1.InvBaseDocTypeEnum.PurchaseDeliveryNotes = new SAPB1.InvBaseDocTypeEnum('PurchaseDeliveryNotes', 'PurchaseDeliveryNotes');
SAPB1.InvBaseDocTypeEnum.Default = new SAPB1.InvBaseDocTypeEnum('Default', 'Default');

module.exports = SAPB1.InvBaseDocTypeEnum;
