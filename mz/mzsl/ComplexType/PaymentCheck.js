
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentCheck = function () {
}
SAPB1.PaymentCheck.prototype = new SAPB1.ComplexType();
SAPB1.PaymentCheck.prototype.constructor = SAPB1.PaymentCheck;
SAPB1.PaymentCheck.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.CheckNumber = { valueOf: function(){return 'CheckNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.AccounttNum = { valueOf: function(){return 'AccounttNum';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.Trnsfrable = { valueOf: function(){return 'Trnsfrable';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.CheckSum = { valueOf: function(){return 'CheckSum';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.CountryCode = { valueOf: function(){return 'CountryCode';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.CheckAbsEntry = { valueOf: function(){return 'CheckAbsEntry';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.CheckAccount = { valueOf: function(){return 'CheckAccount';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.ManualCheck = { valueOf: function(){return 'ManualCheck';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.FiscalID = { valueOf: function(){return 'FiscalID';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.OriginallyIssuedBy = { valueOf: function(){return 'OriginallyIssuedBy';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.Endorse = { valueOf: function(){return 'Endorse';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.EndorsableCheckNo = { valueOf: function(){return 'EndorsableCheckNo';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCheck.prototype.LineNum = new Number();
SAPB1.PaymentCheck.prototype.DueDate = new String();
SAPB1.PaymentCheck.prototype.CheckNumber = new Number();
SAPB1.PaymentCheck.prototype.BankCode = new String();
SAPB1.PaymentCheck.prototype.Branch = new String();
SAPB1.PaymentCheck.prototype.AccounttNum = new String();
SAPB1.PaymentCheck.prototype.Details = new String();
SAPB1.PaymentCheck.prototype.Trnsfrable = new String();
SAPB1.PaymentCheck.prototype.CheckSum = new Number();
SAPB1.PaymentCheck.prototype.Currency = new String();
SAPB1.PaymentCheck.prototype.CountryCode = new String();
SAPB1.PaymentCheck.prototype.CheckAbsEntry = new Number();
SAPB1.PaymentCheck.prototype.CheckAccount = new String();
SAPB1.PaymentCheck.prototype.ManualCheck = new String();
SAPB1.PaymentCheck.prototype.FiscalID = new String();
SAPB1.PaymentCheck.prototype.OriginallyIssuedBy = new String();
SAPB1.PaymentCheck.prototype.Endorse = new String();
SAPB1.PaymentCheck.prototype.EndorsableCheckNo = new Number();


SAPB1.PaymentCheck.BoYesNoEnum = BoYesNoEnum

SAPB1.PaymentCheck.create = function (rawObject) {
    var instance = new SAPB1.PaymentCheck();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentCheck.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentCheck;
