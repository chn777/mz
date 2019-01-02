
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Bank = function () {
}
SAPB1.Bank.prototype = new SAPB1.EntityType();
SAPB1.Bank.prototype.constructor = SAPB1.Bank;
SAPB1.Bank.prototype.keys.push('AbsoluteEntry');
SAPB1.Bank.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Bank.BankName = { valueOf: function(){return 'BankName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.AccountforOutgoingChecks = { valueOf: function(){return 'AccountforOutgoingChecks';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.BranchforOutgoingChecks = { valueOf: function(){return 'BranchforOutgoingChecks';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.NextCheckNumber = { valueOf: function(){return 'NextCheckNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.SwiftNo = { valueOf: function(){return 'SwiftNo';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.IBAN = { valueOf: function(){return 'IBAN';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.CountryCode = { valueOf: function(){return 'CountryCode';}, Type: 'Edm.String', Index: 7, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Bank.PostOffice = { valueOf: function(){return 'PostOffice';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Bank.DefaultBankAccountKey = { valueOf: function(){return 'DefaultBankAccountKey';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Bank.prototype.BankCode = new String();
SAPB1.Bank.prototype.BankName = new String();
SAPB1.Bank.prototype.AccountforOutgoingChecks = new String();
SAPB1.Bank.prototype.BranchforOutgoingChecks = new String();
SAPB1.Bank.prototype.NextCheckNumber = new Number();
SAPB1.Bank.prototype.SwiftNo = new String();
SAPB1.Bank.prototype.IBAN = new String();
SAPB1.Bank.prototype.CountryCode = new String();
SAPB1.Bank.prototype.PostOffice = new String();
SAPB1.Bank.prototype.AbsoluteEntry = new Number();
SAPB1.Bank.prototype.DefaultBankAccountKey = new Number();


SAPB1.Bank.BoYesNoEnum = BoYesNoEnum

SAPB1.Bank.create = function (rawObject) {
    var instance = new SAPB1.Bank();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Bank.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Bank;
