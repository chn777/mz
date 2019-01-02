if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RoundingTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RoundingTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RoundingTypeEnum.prototype.constructor = SAPB1.RoundingTypeEnum;
SAPB1.RoundingTypeEnum.rt_TruncatedAU = new SAPB1.RoundingTypeEnum('rt_TruncatedAU', 'rt_TruncatedAU');
SAPB1.RoundingTypeEnum.rt_CommercialValues = new SAPB1.RoundingTypeEnum('rt_CommercialValues', 'rt_CommercialValues');
SAPB1.RoundingTypeEnum.rt_NoRounding = new SAPB1.RoundingTypeEnum('rt_NoRounding', 'rt_NoRounding');

module.exports = SAPB1.RoundingTypeEnum;
