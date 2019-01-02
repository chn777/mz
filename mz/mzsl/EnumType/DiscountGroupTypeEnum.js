if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DiscountGroupTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DiscountGroupTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DiscountGroupTypeEnum.prototype.constructor = SAPB1.DiscountGroupTypeEnum;
SAPB1.DiscountGroupTypeEnum.dgt_AllBPs = new SAPB1.DiscountGroupTypeEnum('dgt_AllBPs', 'dgt_AllBPs');
SAPB1.DiscountGroupTypeEnum.dgt_CustomerGroup = new SAPB1.DiscountGroupTypeEnum('dgt_CustomerGroup', 'dgt_CustomerGroup');
SAPB1.DiscountGroupTypeEnum.dgt_VendorGroup = new SAPB1.DiscountGroupTypeEnum('dgt_VendorGroup', 'dgt_VendorGroup');
SAPB1.DiscountGroupTypeEnum.dgt_SpecificBP = new SAPB1.DiscountGroupTypeEnum('dgt_SpecificBP', 'dgt_SpecificBP');

module.exports = SAPB1.DiscountGroupTypeEnum;
