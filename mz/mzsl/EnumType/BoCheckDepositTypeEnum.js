if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCheckDepositTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCheckDepositTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCheckDepositTypeEnum.prototype.constructor = SAPB1.BoCheckDepositTypeEnum;
SAPB1.BoCheckDepositTypeEnum.cdtCashChecks = new SAPB1.BoCheckDepositTypeEnum('cdtCashChecks', 'cdtCashChecks');
SAPB1.BoCheckDepositTypeEnum.cdtPostdatedChecks = new SAPB1.BoCheckDepositTypeEnum('cdtPostdatedChecks', 'cdtPostdatedChecks');

module.exports = SAPB1.BoCheckDepositTypeEnum;
