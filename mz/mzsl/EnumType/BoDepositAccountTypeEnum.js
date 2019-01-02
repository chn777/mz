if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDepositAccountTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDepositAccountTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDepositAccountTypeEnum.prototype.constructor = SAPB1.BoDepositAccountTypeEnum;
SAPB1.BoDepositAccountTypeEnum.datBusinessPartner = new SAPB1.BoDepositAccountTypeEnum('datBusinessPartner', 'datBusinessPartner');
SAPB1.BoDepositAccountTypeEnum.datBankAccount = new SAPB1.BoDepositAccountTypeEnum('datBankAccount', 'datBankAccount');

module.exports = SAPB1.BoDepositAccountTypeEnum;
