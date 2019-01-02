
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoMsgPriorities = require('EnumType/BoMsgPriorities')
var BoActivities = require('EnumType/BoActivities')
var BoDurations = require('EnumType/BoDurations')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Contact = function () {
}
SAPB1.Contact.prototype = new SAPB1.EntityType();
SAPB1.Contact.prototype.constructor = SAPB1.Contact;
SAPB1.Contact.prototype.keys.push('ContactCode');
SAPB1.Contact.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ContactDate = { valueOf: function(){return 'ContactDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ContactTime = { valueOf: function(){return 'ContactTime';}, Type: 'Edm.Time', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Recontact = { valueOf: function(){return 'Recontact';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Closed = { valueOf: function(){return 'Closed';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.CloseDate = { valueOf: function(){return 'CloseDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Phone = { valueOf: function(){return 'Phone';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Fax = { valueOf: function(){return 'Fax';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Subject = { valueOf: function(){return 'Subject';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.DocType = { valueOf: function(){return 'DocType';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ContactCode = { valueOf: function(){return 'ContactCode';}, Type: 'Edm.Int32', Index: 13, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Contact.Priority = { valueOf: function(){return 'Priority';}, Type: 'BoMsgPriorities', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Activity = { valueOf: function(){return 'Activity';}, Type: 'BoActivities', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ActivityType = { valueOf: function(){return 'ActivityType';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.StartTime = { valueOf: function(){return 'StartTime';}, Type: 'Edm.Time', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.EndTime = { valueOf: function(){return 'EndTime';}, Type: 'Edm.Time', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Duration = { valueOf: function(){return 'Duration';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.DurationType = { valueOf: function(){return 'DurationType';}, Type: 'BoDurations', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.SalesEmployee = { valueOf: function(){return 'SalesEmployee';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ContactPersonCode = { valueOf: function(){return 'ContactPersonCode';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.HandledBy = { valueOf: function(){return 'HandledBy';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Reminder = { valueOf: function(){return 'Reminder';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ReminderPeriod = { valueOf: function(){return 'ReminderPeriod';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ReminderType = { valueOf: function(){return 'ReminderType';}, Type: 'BoDurations', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Personalflag = { valueOf: function(){return 'Personalflag';}, Type: 'BoYesNoEnum', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.ParentobjectId = { valueOf: function(){return 'ParentobjectId';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Parentobjecttype = { valueOf: function(){return 'Parentobjecttype';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Room = { valueOf: function(){return 'Room';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Inactiveflag = { valueOf: function(){return 'Inactiveflag';}, Type: 'BoYesNoEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.PreviousActivity = { valueOf: function(){return 'PreviousActivity';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Status = { valueOf: function(){return 'Status';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.Tentativeflag = { valueOf: function(){return 'Tentativeflag';}, Type: 'BoYesNoEnum', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.EndDuedate = { valueOf: function(){return 'EndDuedate';}, Type: 'Edm.DateTime', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.DocTypeEx = { valueOf: function(){return 'DocTypeEx';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Contact.prototype.CardCode = new String();
SAPB1.Contact.prototype.Notes = new String();
SAPB1.Contact.prototype.ContactDate = new String();
SAPB1.Contact.prototype.ContactTime = new String();
SAPB1.Contact.prototype.Recontact = new String();
SAPB1.Contact.prototype.Closed = new String();
SAPB1.Contact.prototype.CloseDate = new String();
SAPB1.Contact.prototype.Phone = new String();
SAPB1.Contact.prototype.Fax = new String();
SAPB1.Contact.prototype.Subject = new Number();
SAPB1.Contact.prototype.DocType = new String();
SAPB1.Contact.prototype.DocNum = new String();
SAPB1.Contact.prototype.DocEntry = new String();
SAPB1.Contact.prototype.ContactCode = new Number();
SAPB1.Contact.prototype.Priority = new String();
SAPB1.Contact.prototype.Details = new String();
SAPB1.Contact.prototype.Activity = new String();
SAPB1.Contact.prototype.ActivityType = new Number();
SAPB1.Contact.prototype.Location = new Number();
SAPB1.Contact.prototype.StartTime = new String();
SAPB1.Contact.prototype.EndTime = new String();
SAPB1.Contact.prototype.Duration = new Number();
SAPB1.Contact.prototype.DurationType = new String();
SAPB1.Contact.prototype.SalesEmployee = new Number();
SAPB1.Contact.prototype.ContactPersonCode = new Number();
SAPB1.Contact.prototype.HandledBy = new Number();
SAPB1.Contact.prototype.Reminder = new String();
SAPB1.Contact.prototype.ReminderPeriod = new Number();
SAPB1.Contact.prototype.ReminderType = new String();
SAPB1.Contact.prototype.City = new String();
SAPB1.Contact.prototype.Personalflag = new String();
SAPB1.Contact.prototype.Street = new String();
SAPB1.Contact.prototype.ParentobjectId = new Number();
SAPB1.Contact.prototype.Parentobjecttype = new String();
SAPB1.Contact.prototype.Room = new String();
SAPB1.Contact.prototype.Inactiveflag = new String();
SAPB1.Contact.prototype.State = new String();
SAPB1.Contact.prototype.PreviousActivity = new Number();
SAPB1.Contact.prototype.Country = new String();
SAPB1.Contact.prototype.Status = new Number();
SAPB1.Contact.prototype.Tentativeflag = new String();
SAPB1.Contact.prototype.EndDuedate = new String();
SAPB1.Contact.prototype.DocTypeEx = new String();
SAPB1.Contact.prototype.AttachmentEntry = new Number();
SAPB1.Contact.prototype.StartDate = new String();


SAPB1.Contact.BoYesNoEnum = BoYesNoEnum
SAPB1.Contact.BoMsgPriorities = BoMsgPriorities
SAPB1.Contact.BoActivities = BoActivities
SAPB1.Contact.BoDurations = BoDurations

SAPB1.Contact.create = function (rawObject) {
    var instance = new SAPB1.Contact();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Contact.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Contact;
