if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReconciliationAccountTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReconciliationAccountTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReconciliationAccountTypeEnum.prototype.constructor = SAPB1.ReconciliationAccountTypeEnum;
SAPB1.ReconciliationAccountTypeEnum.rat_GLAccount = new SAPB1.ReconciliationAccountTypeEnum('rat_GLAccount', 'rat_GLAccount');
SAPB1.ReconciliationAccountTypeEnum.rat_BusinessPartner = new SAPB1.ReconciliationAccountTypeEnum('rat_BusinessPartner', 'rat_BusinessPartner');

module.exports = SAPB1.ReconciliationAccountTypeEnum;
