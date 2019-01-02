if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TransferSourceProRataTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TransferSourceProRataTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TransferSourceProRataTypeEnum.prototype.constructor = SAPB1.TransferSourceProRataTypeEnum;
SAPB1.TransferSourceProRataTypeEnum.tsprtLastDayOfPriorPeriod = new SAPB1.TransferSourceProRataTypeEnum('tsprtLastDayOfPriorPeriod', 'tsprtLastDayOfPriorPeriod');
SAPB1.TransferSourceProRataTypeEnum.tsprtLastDayofCurrentPeriod = new SAPB1.TransferSourceProRataTypeEnum('tsprtLastDayofCurrentPeriod', 'tsprtLastDayofCurrentPeriod');
SAPB1.TransferSourceProRataTypeEnum.tsprtExactlyDailyBase = new SAPB1.TransferSourceProRataTypeEnum('tsprtExactlyDailyBase', 'tsprtExactlyDailyBase');

module.exports = SAPB1.TransferSourceProRataTypeEnum;
