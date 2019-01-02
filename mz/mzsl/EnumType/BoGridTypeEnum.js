if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoGridTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoGridTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoGridTypeEnum.prototype.constructor = SAPB1.BoGridTypeEnum;
SAPB1.BoGridTypeEnum.gtDots = new SAPB1.BoGridTypeEnum('gtDots', 'gtDots');
SAPB1.BoGridTypeEnum.gtCombination = new SAPB1.BoGridTypeEnum('gtCombination', 'gtCombination');
SAPB1.BoGridTypeEnum.gtContinuousLine = new SAPB1.BoGridTypeEnum('gtContinuousLine', 'gtContinuousLine');
SAPB1.BoGridTypeEnum.gtBrokenLine = new SAPB1.BoGridTypeEnum('gtBrokenLine', 'gtBrokenLine');

module.exports = SAPB1.BoGridTypeEnum;
