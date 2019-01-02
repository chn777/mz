if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDepositCheckEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDepositCheckEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDepositCheckEnum.prototype.constructor = SAPB1.BoDepositCheckEnum;
SAPB1.BoDepositCheckEnum.dcAsCash = new SAPB1.BoDepositCheckEnum('dcAsCash', 'dcAsCash');
SAPB1.BoDepositCheckEnum.dtAsPostdated = new SAPB1.BoDepositCheckEnum('dtAsPostdated', 'dtAsPostdated');
SAPB1.BoDepositCheckEnum.dtNo = new SAPB1.BoDepositCheckEnum('dtNo', 'dtNo');

module.exports = SAPB1.BoDepositCheckEnum;
