if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PaymentMeansTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PaymentMeansTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PaymentMeansTypeEnum.prototype.constructor = SAPB1.PaymentMeansTypeEnum;
SAPB1.PaymentMeansTypeEnum.pmtNotAssigned = new SAPB1.PaymentMeansTypeEnum('pmtNotAssigned', 'pmtNotAssigned');
SAPB1.PaymentMeansTypeEnum.pmtBankTransfer = new SAPB1.PaymentMeansTypeEnum('pmtBankTransfer', 'pmtBankTransfer');
SAPB1.PaymentMeansTypeEnum.pmtChecks = new SAPB1.PaymentMeansTypeEnum('pmtChecks', 'pmtChecks');
SAPB1.PaymentMeansTypeEnum.pmtCash = new SAPB1.PaymentMeansTypeEnum('pmtCash', 'pmtCash');
SAPB1.PaymentMeansTypeEnum.pmtCreditCard = new SAPB1.PaymentMeansTypeEnum('pmtCreditCard', 'pmtCreditCard');

module.exports = SAPB1.PaymentMeansTypeEnum;
