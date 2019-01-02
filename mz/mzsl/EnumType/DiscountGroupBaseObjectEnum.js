if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DiscountGroupBaseObjectEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DiscountGroupBaseObjectEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DiscountGroupBaseObjectEnum.prototype.constructor = SAPB1.DiscountGroupBaseObjectEnum;
SAPB1.DiscountGroupBaseObjectEnum.dgboManufacturer = new SAPB1.DiscountGroupBaseObjectEnum('dgboManufacturer', 'dgboManufacturer');
SAPB1.DiscountGroupBaseObjectEnum.dgboItemProperties = new SAPB1.DiscountGroupBaseObjectEnum('dgboItemProperties', 'dgboItemProperties');
SAPB1.DiscountGroupBaseObjectEnum.dgboNone = new SAPB1.DiscountGroupBaseObjectEnum('dgboNone', 'dgboNone');
SAPB1.DiscountGroupBaseObjectEnum.dgboItems = new SAPB1.DiscountGroupBaseObjectEnum('dgboItems', 'dgboItems');
SAPB1.DiscountGroupBaseObjectEnum.dgboItemGroups = new SAPB1.DiscountGroupBaseObjectEnum('dgboItemGroups', 'dgboItemGroups');

module.exports = SAPB1.DiscountGroupBaseObjectEnum;
