if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTransactionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTransactionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTransactionTypeEnum.prototype.constructor = SAPB1.BoTransactionTypeEnum;
SAPB1.BoTransactionTypeEnum.botrntComplete = new SAPB1.BoTransactionTypeEnum('botrntComplete', 'botrntComplete');
SAPB1.BoTransactionTypeEnum.botrntReject = new SAPB1.BoTransactionTypeEnum('botrntReject', 'botrntReject');

module.exports = SAPB1.BoTransactionTypeEnum;
