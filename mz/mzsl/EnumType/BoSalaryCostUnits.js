if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSalaryCostUnits = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSalaryCostUnits.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSalaryCostUnits.prototype.constructor = SAPB1.BoSalaryCostUnits;
SAPB1.BoSalaryCostUnits.scu_Semimonthly = new SAPB1.BoSalaryCostUnits('scu_Semimonthly', 'scu_Semimonthly');
SAPB1.BoSalaryCostUnits.scu_Week = new SAPB1.BoSalaryCostUnits('scu_Week', 'scu_Week');
SAPB1.BoSalaryCostUnits.scu_Hour = new SAPB1.BoSalaryCostUnits('scu_Hour', 'scu_Hour');
SAPB1.BoSalaryCostUnits.scu_Day = new SAPB1.BoSalaryCostUnits('scu_Day', 'scu_Day');
SAPB1.BoSalaryCostUnits.scu_Year = new SAPB1.BoSalaryCostUnits('scu_Year', 'scu_Year');
SAPB1.BoSalaryCostUnits.scu_Biweekly = new SAPB1.BoSalaryCostUnits('scu_Biweekly', 'scu_Biweekly');
SAPB1.BoSalaryCostUnits.scu_Month = new SAPB1.BoSalaryCostUnits('scu_Month', 'scu_Month');

module.exports = SAPB1.BoSalaryCostUnits;
