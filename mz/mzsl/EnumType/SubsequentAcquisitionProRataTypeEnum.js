if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SubsequentAcquisitionProRataTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SubsequentAcquisitionProRataTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SubsequentAcquisitionProRataTypeEnum.prototype.constructor = SAPB1.SubsequentAcquisitionProRataTypeEnum;
SAPB1.SubsequentAcquisitionProRataTypeEnum.saprtExactlyDailyBase = new SAPB1.SubsequentAcquisitionProRataTypeEnum('saprtExactlyDailyBase', 'saprtExactlyDailyBase');
SAPB1.SubsequentAcquisitionProRataTypeEnum.saprtFirstDayOfNextPeriod = new SAPB1.SubsequentAcquisitionProRataTypeEnum('saprtFirstDayOfNextPeriod', 'saprtFirstDayOfNextPeriod');
SAPB1.SubsequentAcquisitionProRataTypeEnum.saprtFirstDayOfCurrentPeriod = new SAPB1.SubsequentAcquisitionProRataTypeEnum('saprtFirstDayOfCurrentPeriod', 'saprtFirstDayOfCurrentPeriod');

module.exports = SAPB1.SubsequentAcquisitionProRataTypeEnum;
