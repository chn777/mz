
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var DomesticBankAccountValidationEnum = require('EnumType/DomesticBankAccountValidationEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Country = function () {
}
SAPB1.Country.prototype = new SAPB1.EntityType();
SAPB1.Country.prototype.constructor = SAPB1.Country;
SAPB1.Country.prototype.keys.push('Code');
SAPB1.Country.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Country.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.CodeForReports = { valueOf: function(){return 'CodeForReports';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.AddressFormat = { valueOf: function(){return 'AddressFormat';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.EU = { valueOf: function(){return 'EU';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.NumberOfDigitsForTaxID = { valueOf: function(){return 'NumberOfDigitsForTaxID';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.BankCodeDigits = { valueOf: function(){return 'BankCodeDigits';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.BankBranchDigits = { valueOf: function(){return 'BankBranchDigits';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.BankAccountDigits = { valueOf: function(){return 'BankAccountDigits';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.BankControlKeyDigits = { valueOf: function(){return 'BankControlKeyDigits';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.DomesticAccountValidation = { valueOf: function(){return 'DomesticAccountValidation';}, Type: 'DomesticBankAccountValidationEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.IbanValidation = { valueOf: function(){return 'IbanValidation';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.Blacklisted = { valueOf: function(){return 'Blacklisted';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.UICCountryCode = { valueOf: function(){return 'UICCountryCode';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.EAEU = { valueOf: function(){return 'EAEU';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Country.prototype.Code = new String();
SAPB1.Country.prototype.Name = new String();
SAPB1.Country.prototype.CodeForReports = new String();
SAPB1.Country.prototype.AddressFormat = new Number();
SAPB1.Country.prototype.EU = new String();
SAPB1.Country.prototype.NumberOfDigitsForTaxID = new Number();
SAPB1.Country.prototype.BankCodeDigits = new Number();
SAPB1.Country.prototype.BankBranchDigits = new Number();
SAPB1.Country.prototype.BankAccountDigits = new Number();
SAPB1.Country.prototype.BankControlKeyDigits = new Number();
SAPB1.Country.prototype.DomesticAccountValidation = new String();
SAPB1.Country.prototype.IbanValidation = new String();
SAPB1.Country.prototype.Blacklisted = new String();
SAPB1.Country.prototype.UICCountryCode = new String();
SAPB1.Country.prototype.EAEU = new String();


SAPB1.Country.BoYesNoEnum = BoYesNoEnum
SAPB1.Country.DomesticBankAccountValidationEnum = DomesticBankAccountValidationEnum

SAPB1.Country.create = function (rawObject) {
    var instance = new SAPB1.Country();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Country.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.Country;
