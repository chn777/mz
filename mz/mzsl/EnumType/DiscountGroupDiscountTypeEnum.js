if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DiscountGroupDiscountTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DiscountGroupDiscountTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DiscountGroupDiscountTypeEnum.prototype.constructor = SAPB1.DiscountGroupDiscountTypeEnum;
SAPB1.DiscountGroupDiscountTypeEnum.dgdt_Fixed = new SAPB1.DiscountGroupDiscountTypeEnum('dgdt_Fixed', 'dgdt_Fixed');
SAPB1.DiscountGroupDiscountTypeEnum.dgdt_Variable = new SAPB1.DiscountGroupDiscountTypeEnum('dgdt_Variable', 'dgdt_Variable');

module.exports = SAPB1.DiscountGroupDiscountTypeEnum;
