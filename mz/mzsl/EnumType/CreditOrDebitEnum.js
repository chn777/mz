if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CreditOrDebitEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CreditOrDebitEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CreditOrDebitEnum.prototype.constructor = SAPB1.CreditOrDebitEnum;
SAPB1.CreditOrDebitEnum.codCredit = new SAPB1.CreditOrDebitEnum('codCredit', 'codCredit');
SAPB1.CreditOrDebitEnum.codDebit = new SAPB1.CreditOrDebitEnum('codDebit', 'codDebit');

module.exports = SAPB1.CreditOrDebitEnum;
