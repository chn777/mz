if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RetirementProRataTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RetirementProRataTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RetirementProRataTypeEnum.prototype.constructor = SAPB1.RetirementProRataTypeEnum;
SAPB1.RetirementProRataTypeEnum.rprtExactlyDailyBase = new SAPB1.RetirementProRataTypeEnum('rprtExactlyDailyBase', 'rprtExactlyDailyBase');
SAPB1.RetirementProRataTypeEnum.rprtLastDayOfPriorPeriod = new SAPB1.RetirementProRataTypeEnum('rprtLastDayOfPriorPeriod', 'rprtLastDayOfPriorPeriod');
SAPB1.RetirementProRataTypeEnum.rprtLastDayOfCurrentPeriod = new SAPB1.RetirementProRataTypeEnum('rprtLastDayOfCurrentPeriod', 'rprtLastDayOfCurrentPeriod');

module.exports = SAPB1.RetirementProRataTypeEnum;
