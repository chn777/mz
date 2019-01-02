if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoServicePaymentMethods = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoServicePaymentMethods.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoServicePaymentMethods.prototype.constructor = SAPB1.BoServicePaymentMethods;
SAPB1.BoServicePaymentMethods.spmOther = new SAPB1.BoServicePaymentMethods('spmOther', 'spmOther');
SAPB1.BoServicePaymentMethods.spmBankTransfer = new SAPB1.BoServicePaymentMethods('spmBankTransfer', 'spmBankTransfer');
SAPB1.BoServicePaymentMethods.spmAccreditedToBankAccount = new SAPB1.BoServicePaymentMethods('spmAccreditedToBankAccount', 'spmAccreditedToBankAccount');

module.exports = SAPB1.BoServicePaymentMethods;
