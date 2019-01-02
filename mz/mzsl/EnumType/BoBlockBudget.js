if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBlockBudget = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBlockBudget.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBlockBudget.prototype.constructor = SAPB1.BoBlockBudget;
SAPB1.BoBlockBudget.bb_MonthlyAlertOnly = new SAPB1.BoBlockBudget('bb_MonthlyAlertOnly', 'bb_MonthlyAlertOnly');
SAPB1.BoBlockBudget.bb_OnlyAnnualAlert = new SAPB1.BoBlockBudget('bb_OnlyAnnualAlert', 'bb_OnlyAnnualAlert');
SAPB1.BoBlockBudget.bb_Block = new SAPB1.BoBlockBudget('bb_Block', 'bb_Block');

module.exports = SAPB1.BoBlockBudget;
