if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AcquisitionProRataTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AcquisitionProRataTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AcquisitionProRataTypeEnum.prototype.constructor = SAPB1.AcquisitionProRataTypeEnum;
SAPB1.AcquisitionProRataTypeEnum.aprtExactlyDailyBase = new SAPB1.AcquisitionProRataTypeEnum('aprtExactlyDailyBase', 'aprtExactlyDailyBase');
SAPB1.AcquisitionProRataTypeEnum.aprtFirstDayOfCurrentPeriod = new SAPB1.AcquisitionProRataTypeEnum('aprtFirstDayOfCurrentPeriod', 'aprtFirstDayOfCurrentPeriod');
SAPB1.AcquisitionProRataTypeEnum.aprtFirstDayOfNextPeriod = new SAPB1.AcquisitionProRataTypeEnum('aprtFirstDayOfNextPeriod', 'aprtFirstDayOfNextPeriod');

module.exports = SAPB1.AcquisitionProRataTypeEnum;
