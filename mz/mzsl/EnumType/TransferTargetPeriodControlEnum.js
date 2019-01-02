if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TransferTargetPeriodControlEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TransferTargetPeriodControlEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TransferTargetPeriodControlEnum.prototype.constructor = SAPB1.TransferTargetPeriodControlEnum;
SAPB1.TransferTargetPeriodControlEnum.ttpcProRataTemporis = new SAPB1.TransferTargetPeriodControlEnum('ttpcProRataTemporis', 'ttpcProRataTemporis');

module.exports = SAPB1.TransferTargetPeriodControlEnum;
