if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDepositTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDepositTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDepositTypeEnum.prototype.constructor = SAPB1.BoDepositTypeEnum;
SAPB1.BoDepositTypeEnum.dtCash = new SAPB1.BoDepositTypeEnum('dtCash', 'dtCash');
SAPB1.BoDepositTypeEnum.dtCredit = new SAPB1.BoDepositTypeEnum('dtCredit', 'dtCredit');
SAPB1.BoDepositTypeEnum.dtChecks = new SAPB1.BoDepositTypeEnum('dtChecks', 'dtChecks');
SAPB1.BoDepositTypeEnum.dtBOE = new SAPB1.BoDepositTypeEnum('dtBOE', 'dtBOE');

module.exports = SAPB1.BoDepositTypeEnum;
