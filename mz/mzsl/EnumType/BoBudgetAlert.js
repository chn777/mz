if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBudgetAlert = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBudgetAlert.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBudgetAlert.prototype.constructor = SAPB1.BoBudgetAlert;
SAPB1.BoBudgetAlert.ba_MonthlyAlert = new SAPB1.BoBudgetAlert('ba_MonthlyAlert', 'ba_MonthlyAlert');
SAPB1.BoBudgetAlert.ba_AnnualAlert = new SAPB1.BoBudgetAlert('ba_AnnualAlert', 'ba_AnnualAlert');

module.exports = SAPB1.BoBudgetAlert;
