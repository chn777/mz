
var BoFrequency = require('EnumType/BoFrequency')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var RepeatOptionEnum = require('EnumType/RepeatOptionEnum')
var RecurrenceSequenceEnum = require('EnumType/RecurrenceSequenceEnum')
var RecurrenceDayOfWeekEnum = require('EnumType/RecurrenceDayOfWeekEnum')
var EndTypeEnum = require('EnumType/EndTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryCycles = function () {
}
SAPB1.InventoryCycles.prototype = new SAPB1.EntityType();
SAPB1.InventoryCycles.prototype.constructor = SAPB1.InventoryCycles;
SAPB1.InventoryCycles.prototype.keys.push('CycleCode');
SAPB1.InventoryCycles.CycleCode = { valueOf: function(){return 'CycleCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.CycleName = { valueOf: function(){return 'CycleName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Frequency = { valueOf: function(){return 'Frequency';}, Type: 'BoFrequency', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Day = { valueOf: function(){return 'Day';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Hour = { valueOf: function(){return 'Hour';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.NextCountingDate = { valueOf: function(){return 'NextCountingDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Interval = { valueOf: function(){return 'Interval';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Sunday = { valueOf: function(){return 'Sunday';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Monday = { valueOf: function(){return 'Monday';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Tuesday = { valueOf: function(){return 'Tuesday';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Wednesday = { valueOf: function(){return 'Wednesday';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Thursday = { valueOf: function(){return 'Thursday';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Friday = { valueOf: function(){return 'Friday';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.Saturday = { valueOf: function(){return 'Saturday';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.RepeatOption = { valueOf: function(){return 'RepeatOption';}, Type: 'RepeatOptionEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.RecurrenceSequenceSpecifier = { valueOf: function(){return 'RecurrenceSequenceSpecifier';}, Type: 'RecurrenceSequenceEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.RecurrenceDayInMonth = { valueOf: function(){return 'RecurrenceDayInMonth';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.RecurrenceMonth = { valueOf: function(){return 'RecurrenceMonth';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.RecurrenceDayOfWeek = { valueOf: function(){return 'RecurrenceDayOfWeek';}, Type: 'RecurrenceDayOfWeekEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.endType = { valueOf: function(){return 'endType';}, Type: 'EndTypeEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.MaxOccurrence = { valueOf: function(){return 'MaxOccurrence';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.SeriesEndDate = { valueOf: function(){return 'SeriesEndDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCycles.prototype.CycleCode = new Number();
SAPB1.InventoryCycles.prototype.CycleName = new String();
SAPB1.InventoryCycles.prototype.Frequency = new String();
SAPB1.InventoryCycles.prototype.Day = new Number();
SAPB1.InventoryCycles.prototype.Hour = new String();
SAPB1.InventoryCycles.prototype.NextCountingDate = new String();
SAPB1.InventoryCycles.prototype.Interval = new Number();
SAPB1.InventoryCycles.prototype.Sunday = new String();
SAPB1.InventoryCycles.prototype.Monday = new String();
SAPB1.InventoryCycles.prototype.Tuesday = new String();
SAPB1.InventoryCycles.prototype.Wednesday = new String();
SAPB1.InventoryCycles.prototype.Thursday = new String();
SAPB1.InventoryCycles.prototype.Friday = new String();
SAPB1.InventoryCycles.prototype.Saturday = new String();
SAPB1.InventoryCycles.prototype.RepeatOption = new String();
SAPB1.InventoryCycles.prototype.RecurrenceSequenceSpecifier = new String();
SAPB1.InventoryCycles.prototype.RecurrenceDayInMonth = new Number();
SAPB1.InventoryCycles.prototype.RecurrenceMonth = new Number();
SAPB1.InventoryCycles.prototype.RecurrenceDayOfWeek = new String();
SAPB1.InventoryCycles.prototype.endType = new String();
SAPB1.InventoryCycles.prototype.MaxOccurrence = new Number();
SAPB1.InventoryCycles.prototype.SeriesEndDate = new String();


SAPB1.InventoryCycles.BoFrequency = BoFrequency
SAPB1.InventoryCycles.BoYesNoEnum = BoYesNoEnum
SAPB1.InventoryCycles.RepeatOptionEnum = RepeatOptionEnum
SAPB1.InventoryCycles.RecurrenceSequenceEnum = RecurrenceSequenceEnum
SAPB1.InventoryCycles.RecurrenceDayOfWeekEnum = RecurrenceDayOfWeekEnum
SAPB1.InventoryCycles.EndTypeEnum = EndTypeEnum

SAPB1.InventoryCycles.create = function (rawObject) {
    var instance = new SAPB1.InventoryCycles();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryCycles.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryCycles;
