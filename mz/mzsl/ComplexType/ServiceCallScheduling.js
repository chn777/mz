
var BoDurations = require('EnumType/BoDurations')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoAddressType = require('EnumType/BoAddressType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallScheduling = function () {
}
SAPB1.ServiceCallScheduling.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallScheduling.prototype.constructor = SAPB1.ServiceCallScheduling;
SAPB1.ServiceCallScheduling.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Technician = { valueOf: function(){return 'Technician';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.HandledBy = { valueOf: function(){return 'HandledBy';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.StartTime = { valueOf: function(){return 'StartTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.EndTime = { valueOf: function(){return 'EndTime';}, Type: 'Edm.Time', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Duration = { valueOf: function(){return 'Duration';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ActualDuration = { valueOf: function(){return 'ActualDuration';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.DurationType = { valueOf: function(){return 'DurationType';}, Type: 'BoDurations', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ActualDurationType = { valueOf: function(){return 'ActualDurationType';}, Type: 'BoDurations', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Reminder = { valueOf: function(){return 'Reminder';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ReminderPeriod = { valueOf: function(){return 'ReminderPeriod';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ReminderType = { valueOf: function(){return 'ReminderType';}, Type: 'BoDurations', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ReminderSent = { valueOf: function(){return 'ReminderSent';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ReminderDate = { valueOf: function(){return 'ReminderDate';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ReminderTime = { valueOf: function(){return 'ReminderTime';}, Type: 'Edm.Time', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.DisplayInCalendar = { valueOf: function(){return 'DisplayInCalendar';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.IsUnscheduled = { valueOf: function(){return 'IsUnscheduled';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.AddressName = { valueOf: function(){return 'AddressName';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.AddressText = { valueOf: function(){return 'AddressText';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Room = { valueOf: function(){return 'Room';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Address2 = { valueOf: function(){return 'Address2';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Address3 = { valueOf: function(){return 'Address3';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.TaxOffice = { valueOf: function(){return 'TaxOffice';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.GlobalLocNum = { valueOf: function(){return 'GlobalLocNum';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.IsClosed = { valueOf: function(){return 'IsClosed';}, Type: 'BoYesNoEnum', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.Remark = { valueOf: function(){return 'Remark';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.AddressTypeBS = { valueOf: function(){return 'AddressTypeBS';}, Type: 'BoAddressType', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.SignatureName = { valueOf: function(){return 'SignatureName';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.SalesOrders = { valueOf: function(){return 'SalesOrders';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckInDate = { valueOf: function(){return 'CheckInDate';}, Type: 'Edm.DateTime', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckInTime = { valueOf: function(){return 'CheckInTime';}, Type: 'Edm.Time', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckInLocation = { valueOf: function(){return 'CheckInLocation';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckInLatitude = { valueOf: function(){return 'CheckInLatitude';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckInLongitude = { valueOf: function(){return 'CheckInLongitude';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckOutDate = { valueOf: function(){return 'CheckOutDate';}, Type: 'Edm.DateTime', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.CheckOutTime = { valueOf: function(){return 'CheckOutTime';}, Type: 'Edm.Time', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallScheduling.prototype.LineNum = new Number();
SAPB1.ServiceCallScheduling.prototype.Technician = new Number();
SAPB1.ServiceCallScheduling.prototype.HandledBy = new Number();
SAPB1.ServiceCallScheduling.prototype.StartDate = new String();
SAPB1.ServiceCallScheduling.prototype.StartTime = new String();
SAPB1.ServiceCallScheduling.prototype.EndDate = new String();
SAPB1.ServiceCallScheduling.prototype.EndTime = new String();
SAPB1.ServiceCallScheduling.prototype.Duration = new Number();
SAPB1.ServiceCallScheduling.prototype.ActualDuration = new Number();
SAPB1.ServiceCallScheduling.prototype.DurationType = new String();
SAPB1.ServiceCallScheduling.prototype.ActualDurationType = new String();
SAPB1.ServiceCallScheduling.prototype.Reminder = new String();
SAPB1.ServiceCallScheduling.prototype.ReminderPeriod = new Number();
SAPB1.ServiceCallScheduling.prototype.ReminderType = new String();
SAPB1.ServiceCallScheduling.prototype.ReminderSent = new String();
SAPB1.ServiceCallScheduling.prototype.ReminderDate = new String();
SAPB1.ServiceCallScheduling.prototype.ReminderTime = new String();
SAPB1.ServiceCallScheduling.prototype.DisplayInCalendar = new String();
SAPB1.ServiceCallScheduling.prototype.IsUnscheduled = new String();
SAPB1.ServiceCallScheduling.prototype.Location = new Number();
SAPB1.ServiceCallScheduling.prototype.AddressName = new String();
SAPB1.ServiceCallScheduling.prototype.AddressText = new String();
SAPB1.ServiceCallScheduling.prototype.Street = new String();
SAPB1.ServiceCallScheduling.prototype.City = new String();
SAPB1.ServiceCallScheduling.prototype.Room = new String();
SAPB1.ServiceCallScheduling.prototype.State = new String();
SAPB1.ServiceCallScheduling.prototype.Country = new String();
SAPB1.ServiceCallScheduling.prototype.Address2 = new String();
SAPB1.ServiceCallScheduling.prototype.Address3 = new String();
SAPB1.ServiceCallScheduling.prototype.AddressType = new String();
SAPB1.ServiceCallScheduling.prototype.StreetNo = new String();
SAPB1.ServiceCallScheduling.prototype.ZipCode = new String();
SAPB1.ServiceCallScheduling.prototype.Block = new String();
SAPB1.ServiceCallScheduling.prototype.County = new String();
SAPB1.ServiceCallScheduling.prototype.TaxOffice = new String();
SAPB1.ServiceCallScheduling.prototype.GlobalLocNum = new String();
SAPB1.ServiceCallScheduling.prototype.IsClosed = new String();
SAPB1.ServiceCallScheduling.prototype.Remark = new String();
SAPB1.ServiceCallScheduling.prototype.AddressTypeBS = new String();
SAPB1.ServiceCallScheduling.prototype.SignatureName = new String();
SAPB1.ServiceCallScheduling.prototype.SalesOrders = new String();
SAPB1.ServiceCallScheduling.prototype.CheckInDate = new String();
SAPB1.ServiceCallScheduling.prototype.CheckInTime = new String();
SAPB1.ServiceCallScheduling.prototype.CheckInLocation = new String();
SAPB1.ServiceCallScheduling.prototype.CheckInLatitude = new String();
SAPB1.ServiceCallScheduling.prototype.CheckInLongitude = new String();
SAPB1.ServiceCallScheduling.prototype.CheckOutDate = new String();
SAPB1.ServiceCallScheduling.prototype.CheckOutTime = new String();


SAPB1.ServiceCallScheduling.BoDurations = BoDurations
SAPB1.ServiceCallScheduling.BoYesNoEnum = BoYesNoEnum
SAPB1.ServiceCallScheduling.BoAddressType = BoAddressType

SAPB1.ServiceCallScheduling.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallScheduling();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallScheduling.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallScheduling;
