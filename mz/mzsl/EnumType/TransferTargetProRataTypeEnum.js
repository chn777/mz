if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TransferTargetProRataTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TransferTargetProRataTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TransferTargetProRataTypeEnum.prototype.constructor = SAPB1.TransferTargetProRataTypeEnum;
SAPB1.TransferTargetProRataTypeEnum.ttprtExactlyDailyBase = new SAPB1.TransferTargetProRataTypeEnum('ttprtExactlyDailyBase', 'ttprtExactlyDailyBase');
SAPB1.TransferTargetProRataTypeEnum.ttprtFirstDayOfCurrentPeriod = new SAPB1.TransferTargetProRataTypeEnum('ttprtFirstDayOfCurrentPeriod', 'ttprtFirstDayOfCurrentPeriod');
SAPB1.TransferTargetProRataTypeEnum.ttprtFirstDayOfNextPeriod = new SAPB1.TransferTargetProRataTypeEnum('ttprtFirstDayOfNextPeriod', 'ttprtFirstDayOfNextPeriod');

module.exports = SAPB1.TransferTargetProRataTypeEnum;
