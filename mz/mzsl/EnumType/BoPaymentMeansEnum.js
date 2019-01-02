if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPaymentMeansEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPaymentMeansEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPaymentMeansEnum.prototype.constructor = SAPB1.BoPaymentMeansEnum;
SAPB1.BoPaymentMeansEnum.bopmBillOfExchange = new SAPB1.BoPaymentMeansEnum('bopmBillOfExchange', 'bopmBillOfExchange');
SAPB1.BoPaymentMeansEnum.bopmBankTransfer = new SAPB1.BoPaymentMeansEnum('bopmBankTransfer', 'bopmBankTransfer');
SAPB1.BoPaymentMeansEnum.bopmCheck = new SAPB1.BoPaymentMeansEnum('bopmCheck', 'bopmCheck');

module.exports = SAPB1.BoPaymentMeansEnum;
