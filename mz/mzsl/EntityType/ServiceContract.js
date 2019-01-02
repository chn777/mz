var ServiceContract_Line = require('ComplexType/ServiceContract_Line')
var ServiceContract_LineCollection = require('ComplexType/ServiceContract_LineCollection')

var BoSvcContractStatus = require('EnumType/BoSvcContractStatus')
var BoContractTypes = require('EnumType/BoContractTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoRemindUnits = require('EnumType/BoRemindUnits')
var BoResolutionUnits = require('EnumType/BoResolutionUnits')
var BoServiceTypes = require('EnumType/BoServiceTypes')
var BoResponseUnit = require('EnumType/BoResponseUnit')
var ServiceTypeEnum = require('EnumType/ServiceTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceContract = function () {
}
SAPB1.ServiceContract.prototype = new SAPB1.EntityType();
SAPB1.ServiceContract.prototype.constructor = SAPB1.ServiceContract;
SAPB1.ServiceContract.prototype.keys.push('ContractID');
SAPB1.ServiceContract.ContractID = { valueOf: function(){return 'ContractID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.CustomerCode = { valueOf: function(){return 'CustomerCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.CustomerName = { valueOf: function(){return 'CustomerName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ContactCode = { valueOf: function(){return 'ContactCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.Status = { valueOf: function(){return 'Status';}, Type: 'BoSvcContractStatus', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ContractTemplate = { valueOf: function(){return 'ContractTemplate';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ContractType = { valueOf: function(){return 'ContractType';}, Type: 'BoContractTypes', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.Renewal = { valueOf: function(){return 'Renewal';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ReminderTime = { valueOf: function(){return 'ReminderTime';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.RemindUnit = { valueOf: function(){return 'RemindUnit';}, Type: 'BoRemindUnits', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.DurationOfCoverage = { valueOf: function(){return 'DurationOfCoverage';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ResolutionTime = { valueOf: function(){return 'ResolutionTime';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ResolutionUnit = { valueOf: function(){return 'ResolutionUnit';}, Type: 'BoResolutionUnits', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.MondayEnabled = { valueOf: function(){return 'MondayEnabled';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.TuesdayEnabled = { valueOf: function(){return 'TuesdayEnabled';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.WednesdayEnabled = { valueOf: function(){return 'WednesdayEnabled';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ThursdayEnabled = { valueOf: function(){return 'ThursdayEnabled';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.FridayEnabled = { valueOf: function(){return 'FridayEnabled';}, Type: 'BoYesNoEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.SaturdayEnabled = { valueOf: function(){return 'SaturdayEnabled';}, Type: 'BoYesNoEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.SundayEnabled = { valueOf: function(){return 'SundayEnabled';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.MondayStart = { valueOf: function(){return 'MondayStart';}, Type: 'Edm.Time', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.MondayEnd = { valueOf: function(){return 'MondayEnd';}, Type: 'Edm.Time', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.TuesdayStart = { valueOf: function(){return 'TuesdayStart';}, Type: 'Edm.Time', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.TuesdayEnd = { valueOf: function(){return 'TuesdayEnd';}, Type: 'Edm.Time', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.WednesdayStart = { valueOf: function(){return 'WednesdayStart';}, Type: 'Edm.Time', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.WednesdayEnd = { valueOf: function(){return 'WednesdayEnd';}, Type: 'Edm.Time', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ThursdayStart = { valueOf: function(){return 'ThursdayStart';}, Type: 'Edm.Time', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ThursdayEnd = { valueOf: function(){return 'ThursdayEnd';}, Type: 'Edm.Time', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.FridayStart = { valueOf: function(){return 'FridayStart';}, Type: 'Edm.Time', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.FridayEnd = { valueOf: function(){return 'FridayEnd';}, Type: 'Edm.Time', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.SaturdayStart = { valueOf: function(){return 'SaturdayStart';}, Type: 'Edm.Time', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.SaturdayEnd = { valueOf: function(){return 'SaturdayEnd';}, Type: 'Edm.Time', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.SundayStart = { valueOf: function(){return 'SundayStart';}, Type: 'Edm.Time', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.SundayEnd = { valueOf: function(){return 'SundayEnd';}, Type: 'Edm.Time', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.IncludeParts = { valueOf: function(){return 'IncludeParts';}, Type: 'BoYesNoEnum', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.IncludeLabor = { valueOf: function(){return 'IncludeLabor';}, Type: 'BoYesNoEnum', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.IncludeTravel = { valueOf: function(){return 'IncludeTravel';}, Type: 'BoYesNoEnum', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.TemplateRemarks = { valueOf: function(){return 'TemplateRemarks';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.IncludeHolidays = { valueOf: function(){return 'IncludeHolidays';}, Type: 'BoYesNoEnum', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ServiceType = { valueOf: function(){return 'ServiceType';}, Type: 'BoServiceTypes', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ResponseUnit = { valueOf: function(){return 'ResponseUnit';}, Type: 'BoResponseUnit', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ResponseTime = { valueOf: function(){return 'ResponseTime';}, Type: 'Edm.Int32', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.TerminationDate = { valueOf: function(){return 'TerminationDate';}, Type: 'Edm.DateTime', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ServiceBPType = { valueOf: function(){return 'ServiceBPType';}, Type: 'ServiceTypeEnum', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract.ServiceContract_Lines = { valueOf: function(){return 'ServiceContract_Lines';}, Type: 'ServiceContract_Line', Index: 50, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ServiceContract.prototype.ContractID = new Number();
SAPB1.ServiceContract.prototype.CustomerCode = new String();
SAPB1.ServiceContract.prototype.CustomerName = new String();
SAPB1.ServiceContract.prototype.ContactCode = new Number();
SAPB1.ServiceContract.prototype.Owner = new Number();
SAPB1.ServiceContract.prototype.Status = new String();
SAPB1.ServiceContract.prototype.ContractTemplate = new String();
SAPB1.ServiceContract.prototype.ContractType = new String();
SAPB1.ServiceContract.prototype.Renewal = new String();
SAPB1.ServiceContract.prototype.ReminderTime = new Number();
SAPB1.ServiceContract.prototype.RemindUnit = new String();
SAPB1.ServiceContract.prototype.DurationOfCoverage = new Number();
SAPB1.ServiceContract.prototype.StartDate = new String();
SAPB1.ServiceContract.prototype.EndDate = new String();
SAPB1.ServiceContract.prototype.ResolutionTime = new Number();
SAPB1.ServiceContract.prototype.ResolutionUnit = new String();
SAPB1.ServiceContract.prototype.Description = new String();
SAPB1.ServiceContract.prototype.MondayEnabled = new String();
SAPB1.ServiceContract.prototype.TuesdayEnabled = new String();
SAPB1.ServiceContract.prototype.WednesdayEnabled = new String();
SAPB1.ServiceContract.prototype.ThursdayEnabled = new String();
SAPB1.ServiceContract.prototype.FridayEnabled = new String();
SAPB1.ServiceContract.prototype.SaturdayEnabled = new String();
SAPB1.ServiceContract.prototype.SundayEnabled = new String();
SAPB1.ServiceContract.prototype.MondayStart = new String();
SAPB1.ServiceContract.prototype.MondayEnd = new String();
SAPB1.ServiceContract.prototype.TuesdayStart = new String();
SAPB1.ServiceContract.prototype.TuesdayEnd = new String();
SAPB1.ServiceContract.prototype.WednesdayStart = new String();
SAPB1.ServiceContract.prototype.WednesdayEnd = new String();
SAPB1.ServiceContract.prototype.ThursdayStart = new String();
SAPB1.ServiceContract.prototype.ThursdayEnd = new String();
SAPB1.ServiceContract.prototype.FridayStart = new String();
SAPB1.ServiceContract.prototype.FridayEnd = new String();
SAPB1.ServiceContract.prototype.SaturdayStart = new String();
SAPB1.ServiceContract.prototype.SaturdayEnd = new String();
SAPB1.ServiceContract.prototype.SundayStart = new String();
SAPB1.ServiceContract.prototype.SundayEnd = new String();
SAPB1.ServiceContract.prototype.IncludeParts = new String();
SAPB1.ServiceContract.prototype.IncludeLabor = new String();
SAPB1.ServiceContract.prototype.IncludeTravel = new String();
SAPB1.ServiceContract.prototype.TemplateRemarks = new String();
SAPB1.ServiceContract.prototype.Remarks = new String();
SAPB1.ServiceContract.prototype.IncludeHolidays = new String();
SAPB1.ServiceContract.prototype.ServiceType = new String();
SAPB1.ServiceContract.prototype.ResponseUnit = new String();
SAPB1.ServiceContract.prototype.ResponseTime = new Number();
SAPB1.ServiceContract.prototype.TerminationDate = new String();
SAPB1.ServiceContract.prototype.AttachmentEntry = new Number();
SAPB1.ServiceContract.prototype.ServiceBPType = new String();
SAPB1.ServiceContract.prototype.ServiceContract_Lines = new ServiceContract_LineCollection();

SAPB1.ServiceContract.ServiceContract_Line = ServiceContract_Line
SAPB1.ServiceContract.ServiceContract_LineCollection = ServiceContract_LineCollection

SAPB1.ServiceContract.BoSvcContractStatus = BoSvcContractStatus
SAPB1.ServiceContract.BoContractTypes = BoContractTypes
SAPB1.ServiceContract.BoYesNoEnum = BoYesNoEnum
SAPB1.ServiceContract.BoRemindUnits = BoRemindUnits
SAPB1.ServiceContract.BoResolutionUnits = BoResolutionUnits
SAPB1.ServiceContract.BoServiceTypes = BoServiceTypes
SAPB1.ServiceContract.BoResponseUnit = BoResponseUnit
SAPB1.ServiceContract.ServiceTypeEnum = ServiceTypeEnum

SAPB1.ServiceContract.create = function (rawObject) {
    var instance = new SAPB1.ServiceContract();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceContract.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceContract;
