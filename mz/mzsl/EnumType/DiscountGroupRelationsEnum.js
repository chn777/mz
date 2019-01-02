if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DiscountGroupRelationsEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DiscountGroupRelationsEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DiscountGroupRelationsEnum.prototype.constructor = SAPB1.DiscountGroupRelationsEnum;
SAPB1.DiscountGroupRelationsEnum.dgrHighestDiscount = new SAPB1.DiscountGroupRelationsEnum('dgrHighestDiscount', 'dgrHighestDiscount');
SAPB1.DiscountGroupRelationsEnum.dgrAverageDiscount = new SAPB1.DiscountGroupRelationsEnum('dgrAverageDiscount', 'dgrAverageDiscount');
SAPB1.DiscountGroupRelationsEnum.dgrMultipliedDiscount = new SAPB1.DiscountGroupRelationsEnum('dgrMultipliedDiscount', 'dgrMultipliedDiscount');
SAPB1.DiscountGroupRelationsEnum.dgrLowestDiscount = new SAPB1.DiscountGroupRelationsEnum('dgrLowestDiscount', 'dgrLowestDiscount');
SAPB1.DiscountGroupRelationsEnum.dgrDiscountTotals = new SAPB1.DiscountGroupRelationsEnum('dgrDiscountTotals', 'dgrDiscountTotals');

module.exports = SAPB1.DiscountGroupRelationsEnum;
