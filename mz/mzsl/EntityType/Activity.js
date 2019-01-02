var CheckInParams = require('ComplexType/CheckInParams')
var CheckInParamsCollection = require('ComplexType/CheckInParamsCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoMsgPriorities = require('EnumType/BoMsgPriorities')
var BoActivities = require('EnumType/BoActivities')
var BoDurations = require('EnumType/BoDurations')
var RecurrencePatternEnum = require('EnumType/RecurrencePatternEnum')
var EndTypeEnum = require('EnumType/EndTypeEnum')
var RepeatOptionEnum = require('EnumType/RepeatOptionEnum')
var BoAddressType = require('EnumType/BoAddressType')
var RecurrenceSequenceEnum = require('EnumType/RecurrenceSequenceEnum')
var RecurrenceDayOfWeekEnum = require('EnumType/RecurrenceDayOfWeekEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Activity = function () {
}
SAPB1.Activity.prototype = new SAPB1.EntityType();
SAPB1.Activity.prototype.constructor = SAPB1.Activity;
SAPB1.Activity.prototype.keys.push('ActivityCode');
SAPB1.Activity.ActivityCode = { valueOf: function(){return 'ActivityCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Activity.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ActivityDate = { valueOf: function(){return 'ActivityDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ActivityTime = { valueOf: function(){return 'ActivityTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Closed = { valueOf: function(){return 'Closed';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.CloseDate = { valueOf: function(){return 'CloseDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Phone = { valueOf: function(){return 'Phone';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Fax = { valueOf: function(){return 'Fax';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Subject = { valueOf: function(){return 'Subject';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.DocType = { valueOf: function(){return 'DocType';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Priority = { valueOf: function(){return 'Priority';}, Type: 'BoMsgPriorities', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Activity = { valueOf: function(){return 'Activity';}, Type: 'BoActivities', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ActivityType = { valueOf: function(){return 'ActivityType';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.StartTime = { valueOf: function(){return 'StartTime';}, Type: 'Edm.Time', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.EndTime = { valueOf: function(){return 'EndTime';}, Type: 'Edm.Time', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Duration = { valueOf: function(){return 'Duration';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.DurationType = { valueOf: function(){return 'DurationType';}, Type: 'BoDurations', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.SalesEmployee = { valueOf: function(){return 'SalesEmployee';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ContactPersonCode = { valueOf: function(){return 'ContactPersonCode';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.HandledBy = { valueOf: function(){return 'HandledBy';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Reminder = { valueOf: function(){return 'Reminder';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ReminderPeriod = { valueOf: function(){return 'ReminderPeriod';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ReminderType = { valueOf: function(){return 'ReminderType';}, Type: 'BoDurations', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.PersonalFlag = { valueOf: function(){return 'PersonalFlag';}, Type: 'BoYesNoEnum', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ParentObjectId = { valueOf: function(){return 'ParentObjectId';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.ParentObjectType = { valueOf: function(){return 'ParentObjectType';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Room = { valueOf: function(){return 'Room';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.InactiveFlag = { valueOf: function(){return 'InactiveFlag';}, Type: 'BoYesNoEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.PreviousActivity = { valueOf: function(){return 'PreviousActivity';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Status = { valueOf: function(){return 'Status';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.TentativeFlag = { valueOf: function(){return 'TentativeFlag';}, Type: 'BoYesNoEnum', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.EndDueDate = { valueOf: function(){return 'EndDueDate';}, Type: 'Edm.DateTime', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.DocTypeEx = { valueOf: function(){return 'DocTypeEx';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.RecurrencePattern = { valueOf: function(){return 'RecurrencePattern';}, Type: 'RecurrencePatternEnum', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.EndType = { valueOf: function(){return 'EndType';}, Type: 'EndTypeEnum', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.SeriesStartDate = { valueOf: function(){return 'SeriesStartDate';}, Type: 'Edm.DateTime', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.SeriesEndDate = { valueOf: function(){return 'SeriesEndDate';}, Type: 'Edm.DateTime', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.MaxOccurrence = { valueOf: function(){return 'MaxOccurrence';}, Type: 'Edm.Int32', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Interval = { valueOf: function(){return 'Interval';}, Type: 'Edm.Int32', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Sunday = { valueOf: function(){return 'Sunday';}, Type: 'BoYesNoEnum', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Monday = { valueOf: function(){return 'Monday';}, Type: 'BoYesNoEnum', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Tuesday = { valueOf: function(){return 'Tuesday';}, Type: 'BoYesNoEnum', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Wednesday = { valueOf: function(){return 'Wednesday';}, Type: 'BoYesNoEnum', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Thursday = { valueOf: function(){return 'Thursday';}, Type: 'BoYesNoEnum', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Friday = { valueOf: function(){return 'Friday';}, Type: 'BoYesNoEnum', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.Saturday = { valueOf: function(){return 'Saturday';}, Type: 'BoYesNoEnum', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.RepeatOption = { valueOf: function(){return 'RepeatOption';}, Type: 'RepeatOptionEnum', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.BelongedSeriesNum = { valueOf: function(){return 'BelongedSeriesNum';}, Type: 'Edm.Int32', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.IsRemoved = { valueOf: function(){return 'IsRemoved';}, Type: 'BoYesNoEnum', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.AddressName = { valueOf: function(){return 'AddressName';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'BoAddressType', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.HandledByEmployee = { valueOf: function(){return 'HandledByEmployee';}, Type: 'Edm.Int32', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.RecurrenceSequenceSpecifier = { valueOf: function(){return 'RecurrenceSequenceSpecifier';}, Type: 'RecurrenceSequenceEnum', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.RecurrenceDayInMonth = { valueOf: function(){return 'RecurrenceDayInMonth';}, Type: 'Edm.Int32', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.RecurrenceMonth = { valueOf: function(){return 'RecurrenceMonth';}, Type: 'Edm.Int32', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.RecurrenceDayOfWeek = { valueOf: function(){return 'RecurrenceDayOfWeek';}, Type: 'RecurrenceDayOfWeekEnum', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.SalesOpportunityId = { valueOf: function(){return 'SalesOpportunityId';}, Type: 'Edm.Int32', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.SalesOpportunityLine = { valueOf: function(){return 'SalesOpportunityLine';}, Type: 'Edm.Int32', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.HandledByRecipientList = { valueOf: function(){return 'HandledByRecipientList';}, Type: 'Edm.Int32', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Activity.CheckInListParams = { valueOf: function(){return 'CheckInListParams';}, Type: 'CheckInParams', Index: 70, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Activity.prototype.ActivityCode = new Number();
SAPB1.Activity.prototype.CardCode = new String();
SAPB1.Activity.prototype.Notes = new String();
SAPB1.Activity.prototype.ActivityDate = new String();
SAPB1.Activity.prototype.ActivityTime = new String();
SAPB1.Activity.prototype.StartDate = new String();
SAPB1.Activity.prototype.Closed = new String();
SAPB1.Activity.prototype.CloseDate = new String();
SAPB1.Activity.prototype.Phone = new String();
SAPB1.Activity.prototype.Fax = new String();
SAPB1.Activity.prototype.Subject = new Number();
SAPB1.Activity.prototype.DocType = new String();
SAPB1.Activity.prototype.DocNum = new String();
SAPB1.Activity.prototype.DocEntry = new String();
SAPB1.Activity.prototype.Priority = new String();
SAPB1.Activity.prototype.Details = new String();
SAPB1.Activity.prototype.Activity = new String();
SAPB1.Activity.prototype.ActivityType = new Number();
SAPB1.Activity.prototype.Location = new Number();
SAPB1.Activity.prototype.StartTime = new String();
SAPB1.Activity.prototype.EndTime = new String();
SAPB1.Activity.prototype.Duration = new Number();
SAPB1.Activity.prototype.DurationType = new String();
SAPB1.Activity.prototype.SalesEmployee = new Number();
SAPB1.Activity.prototype.ContactPersonCode = new Number();
SAPB1.Activity.prototype.HandledBy = new Number();
SAPB1.Activity.prototype.Reminder = new String();
SAPB1.Activity.prototype.ReminderPeriod = new Number();
SAPB1.Activity.prototype.ReminderType = new String();
SAPB1.Activity.prototype.City = new String();
SAPB1.Activity.prototype.PersonalFlag = new String();
SAPB1.Activity.prototype.Street = new String();
SAPB1.Activity.prototype.ParentObjectId = new Number();
SAPB1.Activity.prototype.ParentObjectType = new String();
SAPB1.Activity.prototype.Room = new String();
SAPB1.Activity.prototype.InactiveFlag = new String();
SAPB1.Activity.prototype.State = new String();
SAPB1.Activity.prototype.PreviousActivity = new Number();
SAPB1.Activity.prototype.Country = new String();
SAPB1.Activity.prototype.Status = new Number();
SAPB1.Activity.prototype.TentativeFlag = new String();
SAPB1.Activity.prototype.EndDueDate = new String();
SAPB1.Activity.prototype.DocTypeEx = new String();
SAPB1.Activity.prototype.AttachmentEntry = new Number();
SAPB1.Activity.prototype.RecurrencePattern = new String();
SAPB1.Activity.prototype.EndType = new String();
SAPB1.Activity.prototype.SeriesStartDate = new String();
SAPB1.Activity.prototype.SeriesEndDate = new String();
SAPB1.Activity.prototype.MaxOccurrence = new Number();
SAPB1.Activity.prototype.Interval = new Number();
SAPB1.Activity.prototype.Sunday = new String();
SAPB1.Activity.prototype.Monday = new String();
SAPB1.Activity.prototype.Tuesday = new String();
SAPB1.Activity.prototype.Wednesday = new String();
SAPB1.Activity.prototype.Thursday = new String();
SAPB1.Activity.prototype.Friday = new String();
SAPB1.Activity.prototype.Saturday = new String();
SAPB1.Activity.prototype.RepeatOption = new String();
SAPB1.Activity.prototype.BelongedSeriesNum = new Number();
SAPB1.Activity.prototype.IsRemoved = new String();
SAPB1.Activity.prototype.AddressName = new String();
SAPB1.Activity.prototype.AddressType = new String();
SAPB1.Activity.prototype.HandledByEmployee = new Number();
SAPB1.Activity.prototype.RecurrenceSequenceSpecifier = new String();
SAPB1.Activity.prototype.RecurrenceDayInMonth = new Number();
SAPB1.Activity.prototype.RecurrenceMonth = new Number();
SAPB1.Activity.prototype.RecurrenceDayOfWeek = new String();
SAPB1.Activity.prototype.SalesOpportunityId = new Number();
SAPB1.Activity.prototype.SalesOpportunityLine = new Number();
SAPB1.Activity.prototype.HandledByRecipientList = new Number();
SAPB1.Activity.prototype.CheckInListParams = new CheckInParamsCollection();

SAPB1.Activity.CheckInParams = CheckInParams
SAPB1.Activity.CheckInParamsCollection = CheckInParamsCollection

SAPB1.Activity.BoYesNoEnum = BoYesNoEnum
SAPB1.Activity.BoMsgPriorities = BoMsgPriorities
SAPB1.Activity.BoActivities = BoActivities
SAPB1.Activity.BoDurations = BoDurations
SAPB1.Activity.RecurrencePatternEnum = RecurrencePatternEnum
SAPB1.Activity.EndTypeEnum = EndTypeEnum
SAPB1.Activity.RepeatOptionEnum = RepeatOptionEnum
SAPB1.Activity.BoAddressType = BoAddressType
SAPB1.Activity.RecurrenceSequenceEnum = RecurrenceSequenceEnum
SAPB1.Activity.RecurrenceDayOfWeekEnum = RecurrenceDayOfWeekEnum

SAPB1.Activity.create = function (rawObject) {
    var instance = new SAPB1.Activity();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Activity.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Activity;
