if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAddressType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAddressType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAddressType.prototype.constructor = SAPB1.BoAddressType;
SAPB1.BoAddressType.bo_ShipTo = new SAPB1.BoAddressType('bo_ShipTo', 'bo_ShipTo');
SAPB1.BoAddressType.bo_BillTo = new SAPB1.BoAddressType('bo_BillTo', 'bo_BillTo');

module.exports = SAPB1.BoAddressType;
