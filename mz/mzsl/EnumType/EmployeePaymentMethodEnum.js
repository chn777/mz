if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EmployeePaymentMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EmployeePaymentMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EmployeePaymentMethodEnum.prototype.constructor = SAPB1.EmployeePaymentMethodEnum;
SAPB1.EmployeePaymentMethodEnum.epm_None = new SAPB1.EmployeePaymentMethodEnum('epm_None', 'epm_None');
SAPB1.EmployeePaymentMethodEnum.epm_BankTransfer = new SAPB1.EmployeePaymentMethodEnum('epm_BankTransfer', 'epm_BankTransfer');

module.exports = SAPB1.EmployeePaymentMethodEnum;
