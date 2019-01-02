
var CurrenciesDecimalsEnum = require('EnumType/CurrenciesDecimalsEnum')
var RoundingSysEnum = require('EnumType/RoundingSysEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Currency = function () {
}
SAPB1.Currency.prototype = new SAPB1.EntityType();
SAPB1.Currency.prototype.constructor = SAPB1.Currency;
SAPB1.Currency.prototype.keys.push('Code');
SAPB1.Currency.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Currency.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.DocumentsCode = { valueOf: function(){return 'DocumentsCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.InternationalDescription = { valueOf: function(){return 'InternationalDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.HundredthName = { valueOf: function(){return 'HundredthName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.EnglishName = { valueOf: function(){return 'EnglishName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.EnglishHundredthName = { valueOf: function(){return 'EnglishHundredthName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.PluralInternationalDescription = { valueOf: function(){return 'PluralInternationalDescription';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.PluralHundredthName = { valueOf: function(){return 'PluralHundredthName';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.PluralEnglishName = { valueOf: function(){return 'PluralEnglishName';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.PluralEnglishHundredthName = { valueOf: function(){return 'PluralEnglishHundredthName';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.Decimals = { valueOf: function(){return 'Decimals';}, Type: 'CurrenciesDecimalsEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.Rounding = { valueOf: function(){return 'Rounding';}, Type: 'RoundingSysEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.RoundingInPayment = { valueOf: function(){return 'RoundingInPayment';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.MaxIncomingAmtDiff = { valueOf: function(){return 'MaxIncomingAmtDiff';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.MaxOutgoingAmtDiff = { valueOf: function(){return 'MaxOutgoingAmtDiff';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.MaxIncomingAmtDiffPercent = { valueOf: function(){return 'MaxIncomingAmtDiffPercent';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.MaxOutgoingAmtDiffPercent = { valueOf: function(){return 'MaxOutgoingAmtDiffPercent';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Currency.prototype.Code = new String();
SAPB1.Currency.prototype.Name = new String();
SAPB1.Currency.prototype.DocumentsCode = new String();
SAPB1.Currency.prototype.InternationalDescription = new String();
SAPB1.Currency.prototype.HundredthName = new String();
SAPB1.Currency.prototype.EnglishName = new String();
SAPB1.Currency.prototype.EnglishHundredthName = new String();
SAPB1.Currency.prototype.PluralInternationalDescription = new String();
SAPB1.Currency.prototype.PluralHundredthName = new String();
SAPB1.Currency.prototype.PluralEnglishName = new String();
SAPB1.Currency.prototype.PluralEnglishHundredthName = new String();
SAPB1.Currency.prototype.Decimals = new String();
SAPB1.Currency.prototype.Rounding = new String();
SAPB1.Currency.prototype.RoundingInPayment = new String();
SAPB1.Currency.prototype.MaxIncomingAmtDiff = new Number();
SAPB1.Currency.prototype.MaxOutgoingAmtDiff = new Number();
SAPB1.Currency.prototype.MaxIncomingAmtDiffPercent = new Number();
SAPB1.Currency.prototype.MaxOutgoingAmtDiffPercent = new Number();


SAPB1.Currency.CurrenciesDecimalsEnum = CurrenciesDecimalsEnum
SAPB1.Currency.RoundingSysEnum = RoundingSysEnum
SAPB1.Currency.BoYesNoEnum = BoYesNoEnum

SAPB1.Currency.create = function (rawObject) {
    var instance = new SAPB1.Currency();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Currency.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Currency;
