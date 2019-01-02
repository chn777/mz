if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSubPeriodTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSubPeriodTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSubPeriodTypeEnum.prototype.constructor = SAPB1.BoSubPeriodTypeEnum;
SAPB1.BoSubPeriodTypeEnum.spt_Months = new SAPB1.BoSubPeriodTypeEnum('spt_Months', 'spt_Months');
SAPB1.BoSubPeriodTypeEnum.spt_Days = new SAPB1.BoSubPeriodTypeEnum('spt_Days', 'spt_Days');
SAPB1.BoSubPeriodTypeEnum.spt_Year = new SAPB1.BoSubPeriodTypeEnum('spt_Year', 'spt_Year');
SAPB1.BoSubPeriodTypeEnum.spt_Quarters = new SAPB1.BoSubPeriodTypeEnum('spt_Quarters', 'spt_Quarters');

module.exports = SAPB1.BoSubPeriodTypeEnum;
