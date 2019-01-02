var DunningTermLine = require('ComplexType/DunningTermLine')
var DunningTermLineCollection = require('ComplexType/DunningTermLineCollection')

var GroupingMethodEnum = require('EnumType/GroupingMethodEnum')
var CalculateInterestMethodEnum = require('EnumType/CalculateInterestMethodEnum')
var ExchangeRateSelectEnum = require('EnumType/ExchangeRateSelectEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var AutomaticPostingEnum = require('EnumType/AutomaticPostingEnum')
var BaseDateSelectEnum = require('EnumType/BaseDateSelectEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DunningTerm = function () {
}
SAPB1.DunningTerm.prototype = new SAPB1.EntityType();
SAPB1.DunningTerm.prototype.constructor = SAPB1.DunningTerm;
SAPB1.DunningTerm.prototype.keys.push('Code');
SAPB1.DunningTerm.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.GroupingMethod = { valueOf: function(){return 'GroupingMethod';}, Type: 'GroupingMethodEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.DaysInYear = { valueOf: function(){return 'DaysInYear';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.DaysInMonth = { valueOf: function(){return 'DaysInMonth';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.CalculateInterestMethod = { valueOf: function(){return 'CalculateInterestMethod';}, Type: 'CalculateInterestMethodEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.ExchangeRateSelect = { valueOf: function(){return 'ExchangeRateSelect';}, Type: 'ExchangeRateSelectEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.YearlyInterestRate = { valueOf: function(){return 'YearlyInterestRate';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.LetterFee = { valueOf: function(){return 'LetterFee';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.LetterFeeCurrency = { valueOf: function(){return 'LetterFeeCurrency';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.MinimumBalance = { valueOf: function(){return 'MinimumBalance';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.MinimumBalanceCurrency = { valueOf: function(){return 'MinimumBalanceCurrency';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.IncludeInterest = { valueOf: function(){return 'IncludeInterest';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.ApplyHighestLetterTemplate = { valueOf: function(){return 'ApplyHighestLetterTemplate';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.AutomaticPosting = { valueOf: function(){return 'AutomaticPosting';}, Type: 'AutomaticPostingEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.InterestAccount = { valueOf: function(){return 'InterestAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.FeeAccount = { valueOf: function(){return 'FeeAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.BaseDateSelect = { valueOf: function(){return 'BaseDateSelect';}, Type: 'BaseDateSelectEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTerm.DunningTermLines = { valueOf: function(){return 'DunningTermLines';}, Type: 'DunningTermLine', Index: 18, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DunningTerm.prototype.Code = new String();
SAPB1.DunningTerm.prototype.Name = new String();
SAPB1.DunningTerm.prototype.GroupingMethod = new String();
SAPB1.DunningTerm.prototype.DaysInYear = new Number();
SAPB1.DunningTerm.prototype.DaysInMonth = new Number();
SAPB1.DunningTerm.prototype.CalculateInterestMethod = new String();
SAPB1.DunningTerm.prototype.ExchangeRateSelect = new String();
SAPB1.DunningTerm.prototype.YearlyInterestRate = new Number();
SAPB1.DunningTerm.prototype.LetterFee = new Number();
SAPB1.DunningTerm.prototype.LetterFeeCurrency = new String();
SAPB1.DunningTerm.prototype.MinimumBalance = new Number();
SAPB1.DunningTerm.prototype.MinimumBalanceCurrency = new String();
SAPB1.DunningTerm.prototype.IncludeInterest = new String();
SAPB1.DunningTerm.prototype.ApplyHighestLetterTemplate = new String();
SAPB1.DunningTerm.prototype.AutomaticPosting = new String();
SAPB1.DunningTerm.prototype.InterestAccount = new String();
SAPB1.DunningTerm.prototype.FeeAccount = new String();
SAPB1.DunningTerm.prototype.BaseDateSelect = new String();
SAPB1.DunningTerm.prototype.DunningTermLines = new DunningTermLineCollection();

SAPB1.DunningTerm.DunningTermLine = DunningTermLine
SAPB1.DunningTerm.DunningTermLineCollection = DunningTermLineCollection

SAPB1.DunningTerm.GroupingMethodEnum = GroupingMethodEnum
SAPB1.DunningTerm.CalculateInterestMethodEnum = CalculateInterestMethodEnum
SAPB1.DunningTerm.ExchangeRateSelectEnum = ExchangeRateSelectEnum
SAPB1.DunningTerm.BoYesNoEnum = BoYesNoEnum
SAPB1.DunningTerm.AutomaticPostingEnum = AutomaticPostingEnum
SAPB1.DunningTerm.BaseDateSelectEnum = BaseDateSelectEnum

SAPB1.DunningTerm.create = function (rawObject) {
    var instance = new SAPB1.DunningTerm();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DunningTerm.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DunningTerm;
