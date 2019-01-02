if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TransferSourcePeriodControlEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TransferSourcePeriodControlEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TransferSourcePeriodControlEnum.prototype.constructor = SAPB1.TransferSourcePeriodControlEnum;
SAPB1.TransferSourcePeriodControlEnum.tspcProRataTemporis = new SAPB1.TransferSourcePeriodControlEnum('tspcProRataTemporis', 'tspcProRataTemporis');

module.exports = SAPB1.TransferSourcePeriodControlEnum;
