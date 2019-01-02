if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AccountCategorySourceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AccountCategorySourceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AccountCategorySourceEnum.prototype.constructor = SAPB1.AccountCategorySourceEnum;
SAPB1.AccountCategorySourceEnum.acsProfitAndLoss = new SAPB1.AccountCategorySourceEnum('acsProfitAndLoss', 'acsProfitAndLoss');
SAPB1.AccountCategorySourceEnum.acsTrialBalance = new SAPB1.AccountCategorySourceEnum('acsTrialBalance', 'acsTrialBalance');
SAPB1.AccountCategorySourceEnum.acsBalanceSheet = new SAPB1.AccountCategorySourceEnum('acsBalanceSheet', 'acsBalanceSheet');

module.exports = SAPB1.AccountCategorySourceEnum;
