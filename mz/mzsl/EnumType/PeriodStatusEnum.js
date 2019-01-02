if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PeriodStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PeriodStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PeriodStatusEnum.prototype.constructor = SAPB1.PeriodStatusEnum;
SAPB1.PeriodStatusEnum.ltUnlockedExceptSales = new SAPB1.PeriodStatusEnum('ltUnlockedExceptSales', 'ltUnlockedExceptSales');
SAPB1.PeriodStatusEnum.ltPeriodClosing = new SAPB1.PeriodStatusEnum('ltPeriodClosing', 'ltPeriodClosing');
SAPB1.PeriodStatusEnum.ltUnlocked = new SAPB1.PeriodStatusEnum('ltUnlocked', 'ltUnlocked');
SAPB1.PeriodStatusEnum.ltLocked = new SAPB1.PeriodStatusEnum('ltLocked', 'ltLocked');

module.exports = SAPB1.PeriodStatusEnum;
