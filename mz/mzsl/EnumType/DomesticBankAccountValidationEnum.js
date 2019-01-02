if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DomesticBankAccountValidationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DomesticBankAccountValidationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DomesticBankAccountValidationEnum.prototype.constructor = SAPB1.DomesticBankAccountValidationEnum;
SAPB1.DomesticBankAccountValidationEnum.dbavItaly = new SAPB1.DomesticBankAccountValidationEnum('dbavItaly', 'dbavItaly');
SAPB1.DomesticBankAccountValidationEnum.dbavBelgium = new SAPB1.DomesticBankAccountValidationEnum('dbavBelgium', 'dbavBelgium');
SAPB1.DomesticBankAccountValidationEnum.dbavPortugal = new SAPB1.DomesticBankAccountValidationEnum('dbavPortugal', 'dbavPortugal');
SAPB1.DomesticBankAccountValidationEnum.dbavFrance = new SAPB1.DomesticBankAccountValidationEnum('dbavFrance', 'dbavFrance');
SAPB1.DomesticBankAccountValidationEnum.dbavNone = new SAPB1.DomesticBankAccountValidationEnum('dbavNone', 'dbavNone');
SAPB1.DomesticBankAccountValidationEnum.dbavSpain = new SAPB1.DomesticBankAccountValidationEnum('dbavSpain', 'dbavSpain');
SAPB1.DomesticBankAccountValidationEnum.dbavNetherlands = new SAPB1.DomesticBankAccountValidationEnum('dbavNetherlands', 'dbavNetherlands');

module.exports = SAPB1.DomesticBankAccountValidationEnum;
