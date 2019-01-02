if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EffectivePriceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EffectivePriceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EffectivePriceEnum.prototype.constructor = SAPB1.EffectivePriceEnum;
SAPB1.EffectivePriceEnum.epDefaultPriority = new SAPB1.EffectivePriceEnum('epDefaultPriority', 'epDefaultPriority');
SAPB1.EffectivePriceEnum.epHighestPrice = new SAPB1.EffectivePriceEnum('epHighestPrice', 'epHighestPrice');
SAPB1.EffectivePriceEnum.epLowestPrice = new SAPB1.EffectivePriceEnum('epLowestPrice', 'epLowestPrice');

module.exports = SAPB1.EffectivePriceEnum;
