
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var PeriodStatusEnum = require('EnumType/PeriodStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FinancePeriod = function () {
}
SAPB1.FinancePeriod.prototype = new SAPB1.ComplexType();
SAPB1.FinancePeriod.prototype.constructor = SAPB1.FinancePeriod;
SAPB1.FinancePeriod.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.PeriodCode = { valueOf: function(){return 'PeriodCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.PeriodName = { valueOf: function(){return 'PeriodName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.PostingDateFrom = { valueOf: function(){return 'PostingDateFrom';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.PostingDateTo = { valueOf: function(){return 'PostingDateTo';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.ValueDateFrom = { valueOf: function(){return 'ValueDateFrom';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.ValueDateTo = { valueOf: function(){return 'ValueDateTo';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.TaxDateFrom = { valueOf: function(){return 'TaxDateFrom';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.TaxDateTo = { valueOf: function(){return 'TaxDateTo';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.ActiveforFeed = { valueOf: function(){return 'ActiveforFeed';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.AdditionalSubPeriods = { valueOf: function(){return 'AdditionalSubPeriods';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.SubNum = { valueOf: function(){return 'SubNum';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.PeriodStatus = { valueOf: function(){return 'PeriodStatus';}, Type: 'PeriodStatusEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriod.prototype.AbsoluteEntry = new Number();
SAPB1.FinancePeriod.prototype.PeriodCode = new String();
SAPB1.FinancePeriod.prototype.PeriodName = new String();
SAPB1.FinancePeriod.prototype.PostingDateFrom = new String();
SAPB1.FinancePeriod.prototype.PostingDateTo = new String();
SAPB1.FinancePeriod.prototype.ValueDateFrom = new String();
SAPB1.FinancePeriod.prototype.ValueDateTo = new String();
SAPB1.FinancePeriod.prototype.TaxDateFrom = new String();
SAPB1.FinancePeriod.prototype.TaxDateTo = new String();
SAPB1.FinancePeriod.prototype.ActiveforFeed = new String();
SAPB1.FinancePeriod.prototype.Locked = new String();
SAPB1.FinancePeriod.prototype.AdditionalSubPeriods = new String();
SAPB1.FinancePeriod.prototype.PeriodIndicator = new String();
SAPB1.FinancePeriod.prototype.SubNum = new Number();
SAPB1.FinancePeriod.prototype.PeriodStatus = new String();


SAPB1.FinancePeriod.BoYesNoEnum = BoYesNoEnum
SAPB1.FinancePeriod.PeriodStatusEnum = PeriodStatusEnum

SAPB1.FinancePeriod.create = function (rawObject) {
    var instance = new SAPB1.FinancePeriod();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FinancePeriod.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FinancePeriod;
