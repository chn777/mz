var ServiceCallActivity = require('ComplexType/ServiceCallActivity')
var ServiceCallActivityCollection = require('ComplexType/ServiceCallActivityCollection')
var ServiceCallInventoryExpense = require('ComplexType/ServiceCallInventoryExpense')
var ServiceCallInventoryExpenseCollection = require('ComplexType/ServiceCallInventoryExpenseCollection')
var ServiceCallSolution = require('ComplexType/ServiceCallSolution')
var ServiceCallSolutionCollection = require('ComplexType/ServiceCallSolutionCollection')
var ServiceCallScheduling = require('ComplexType/ServiceCallScheduling')
var ServiceCallSchedulingCollection = require('ComplexType/ServiceCallSchedulingCollection')
var ServiceCallBPAddressComponent = require('ComplexType/ServiceCallBPAddressComponent')
var ServiceCallBPAddressComponentCollection = require('ComplexType/ServiceCallBPAddressComponentCollection')

var BoSvcCallPriorities = require('EnumType/BoSvcCallPriorities')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoDurations = require('EnumType/BoDurations')
var BoAddressType = require('EnumType/BoAddressType')
var ServiceTypeEnum = require('EnumType/ServiceTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCall = function () {
}
SAPB1.ServiceCall.prototype = new SAPB1.EntityType();
SAPB1.ServiceCall.prototype.constructor = SAPB1.ServiceCall;
SAPB1.ServiceCall.prototype.keys.push('ServiceCallID');
SAPB1.ServiceCall.ServiceCallID = { valueOf: function(){return 'ServiceCallID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Subject = { valueOf: function(){return 'Subject';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.CustomerCode = { valueOf: function(){return 'CustomerCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.CustomerName = { valueOf: function(){return 'CustomerName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ContactCode = { valueOf: function(){return 'ContactCode';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ManufacturerSerialNum = { valueOf: function(){return 'ManufacturerSerialNum';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.InternalSerialNum = { valueOf: function(){return 'InternalSerialNum';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ContractID = { valueOf: function(){return 'ContractID';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ContractEndDate = { valueOf: function(){return 'ContractEndDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResolutionDate = { valueOf: function(){return 'ResolutionDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResolutionTime = { valueOf: function(){return 'ResolutionTime';}, Type: 'Edm.Time', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Origin = { valueOf: function(){return 'Origin';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ItemGroupCode = { valueOf: function(){return 'ItemGroupCode';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Status = { valueOf: function(){return 'Status';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Priority = { valueOf: function(){return 'Priority';}, Type: 'BoSvcCallPriorities', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.CallType = { valueOf: function(){return 'CallType';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ProblemType = { valueOf: function(){return 'ProblemType';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.AssigneeCode = { valueOf: function(){return 'AssigneeCode';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.TechnicianCode = { valueOf: function(){return 'TechnicianCode';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Resolution = { valueOf: function(){return 'Resolution';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.CreationTime = { valueOf: function(){return 'CreationTime';}, Type: 'Edm.Time', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Responder = { valueOf: function(){return 'Responder';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.UpdatedTime = { valueOf: function(){return 'UpdatedTime';}, Type: 'Edm.Time', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BelongsToAQueue = { valueOf: function(){return 'BelongsToAQueue';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResponseByTime = { valueOf: function(){return 'ResponseByTime';}, Type: 'Edm.Time', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResponseByDate = { valueOf: function(){return 'ResponseByDate';}, Type: 'Edm.DateTime', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResolutionOnDate = { valueOf: function(){return 'ResolutionOnDate';}, Type: 'Edm.DateTime', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResponseOnTime = { valueOf: function(){return 'ResponseOnTime';}, Type: 'Edm.Time', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResponseOnDate = { valueOf: function(){return 'ResponseOnDate';}, Type: 'Edm.DateTime', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ClosingTime = { valueOf: function(){return 'ClosingTime';}, Type: 'Edm.Time', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.AssignedDate = { valueOf: function(){return 'AssignedDate';}, Type: 'Edm.DateTime', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Queue = { valueOf: function(){return 'Queue';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResponseAssignee = { valueOf: function(){return 'ResponseAssignee';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.EntitledforService = { valueOf: function(){return 'EntitledforService';}, Type: 'BoYesNoEnum', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ResolutionOnTime = { valueOf: function(){return 'ResolutionOnTime';}, Type: 'Edm.Time', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.AssignedTime = { valueOf: function(){return 'AssignedTime';}, Type: 'Edm.Time', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ClosingDate = { valueOf: function(){return 'ClosingDate';}, Type: 'Edm.DateTime', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 42, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.HandWritten = { valueOf: function(){return 'HandWritten';}, Type: 'BoYesNoEnum', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 44, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.StartTime = { valueOf: function(){return 'StartTime';}, Type: 'Edm.Time', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.EndDueDate = { valueOf: function(){return 'EndDueDate';}, Type: 'Edm.DateTime', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.EndTime = { valueOf: function(){return 'EndTime';}, Type: 'Edm.Time', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Duration = { valueOf: function(){return 'Duration';}, Type: 'Edm.Double', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.DurationType = { valueOf: function(){return 'DurationType';}, Type: 'BoDurations', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Reminder = { valueOf: function(){return 'Reminder';}, Type: 'BoYesNoEnum', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ReminderPeriod = { valueOf: function(){return 'ReminderPeriod';}, Type: 'Edm.Double', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ReminderType = { valueOf: function(){return 'ReminderType';}, Type: 'BoDurations', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.AddressName = { valueOf: function(){return 'AddressName';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'BoAddressType', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Room = { valueOf: function(){return 'Room';}, Type: 'Edm.String', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.DisplayInCalendar = { valueOf: function(){return 'DisplayInCalendar';}, Type: 'BoYesNoEnum', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.CustomerRefNo = { valueOf: function(){return 'CustomerRefNo';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ProblemSubType = { valueOf: function(){return 'ProblemSubType';}, Type: 'Edm.Int32', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ServiceBPType = { valueOf: function(){return 'ServiceBPType';}, Type: 'ServiceTypeEnum', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPContactPerson = { valueOf: function(){return 'BPContactPerson';}, Type: 'Edm.String', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPPhone1 = { valueOf: function(){return 'BPPhone1';}, Type: 'Edm.String', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPPhone2 = { valueOf: function(){return 'BPPhone2';}, Type: 'Edm.String', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPCellular = { valueOf: function(){return 'BPCellular';}, Type: 'Edm.String', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPFax = { valueOf: function(){return 'BPFax';}, Type: 'Edm.String', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPeMail = { valueOf: function(){return 'BPeMail';}, Type: 'Edm.String', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPProjectCode = { valueOf: function(){return 'BPProjectCode';}, Type: 'Edm.String', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPTerritory = { valueOf: function(){return 'BPTerritory';}, Type: 'Edm.Int32', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPShipToCode = { valueOf: function(){return 'BPShipToCode';}, Type: 'Edm.String', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPShipToAddress = { valueOf: function(){return 'BPShipToAddress';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPBillToCode = { valueOf: function(){return 'BPBillToCode';}, Type: 'Edm.String', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.BPBillToAddress = { valueOf: function(){return 'BPBillToAddress';}, Type: 'Edm.String', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.Telephone = { valueOf: function(){return 'Telephone';}, Type: 'Edm.String', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.SupplementaryCode = { valueOf: function(){return 'SupplementaryCode';}, Type: 'Edm.String', Index: 81, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCall.ServiceCallActivities = { valueOf: function(){return 'ServiceCallActivities';}, Type: 'ServiceCallActivity', Index: 82, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ServiceCall.ServiceCallInventoryExpenses = { valueOf: function(){return 'ServiceCallInventoryExpenses';}, Type: 'ServiceCallInventoryExpense', Index: 83, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ServiceCall.ServiceCallSolutions = { valueOf: function(){return 'ServiceCallSolutions';}, Type: 'ServiceCallSolution', Index: 84, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ServiceCall.ServiceCallSchedulings = { valueOf: function(){return 'ServiceCallSchedulings';}, Type: 'ServiceCallScheduling', Index: 85, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ServiceCall.ServiceCallBPAddressComponents = { valueOf: function(){return 'ServiceCallBPAddressComponents';}, Type: 'ServiceCallBPAddressComponent', Index: 86, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ServiceCall.prototype.ServiceCallID = new Number();
SAPB1.ServiceCall.prototype.Subject = new String();
SAPB1.ServiceCall.prototype.CustomerCode = new String();
SAPB1.ServiceCall.prototype.CustomerName = new String();
SAPB1.ServiceCall.prototype.ContactCode = new Number();
SAPB1.ServiceCall.prototype.ManufacturerSerialNum = new String();
SAPB1.ServiceCall.prototype.InternalSerialNum = new String();
SAPB1.ServiceCall.prototype.ContractID = new Number();
SAPB1.ServiceCall.prototype.ContractEndDate = new String();
SAPB1.ServiceCall.prototype.ResolutionDate = new String();
SAPB1.ServiceCall.prototype.ResolutionTime = new String();
SAPB1.ServiceCall.prototype.Origin = new Number();
SAPB1.ServiceCall.prototype.ItemCode = new String();
SAPB1.ServiceCall.prototype.ItemDescription = new String();
SAPB1.ServiceCall.prototype.ItemGroupCode = new Number();
SAPB1.ServiceCall.prototype.Status = new Number();
SAPB1.ServiceCall.prototype.Priority = new String();
SAPB1.ServiceCall.prototype.CallType = new Number();
SAPB1.ServiceCall.prototype.ProblemType = new Number();
SAPB1.ServiceCall.prototype.AssigneeCode = new Number();
SAPB1.ServiceCall.prototype.Description = new String();
SAPB1.ServiceCall.prototype.TechnicianCode = new Number();
SAPB1.ServiceCall.prototype.Resolution = new String();
SAPB1.ServiceCall.prototype.CreationDate = new String();
SAPB1.ServiceCall.prototype.CreationTime = new String();
SAPB1.ServiceCall.prototype.Responder = new Number();
SAPB1.ServiceCall.prototype.UpdatedTime = new String();
SAPB1.ServiceCall.prototype.BelongsToAQueue = new String();
SAPB1.ServiceCall.prototype.ResponseByTime = new String();
SAPB1.ServiceCall.prototype.ResponseByDate = new String();
SAPB1.ServiceCall.prototype.ResolutionOnDate = new String();
SAPB1.ServiceCall.prototype.ResponseOnTime = new String();
SAPB1.ServiceCall.prototype.ResponseOnDate = new String();
SAPB1.ServiceCall.prototype.ClosingTime = new String();
SAPB1.ServiceCall.prototype.AssignedDate = new String();
SAPB1.ServiceCall.prototype.Queue = new String();
SAPB1.ServiceCall.prototype.ResponseAssignee = new Number();
SAPB1.ServiceCall.prototype.EntitledforService = new String();
SAPB1.ServiceCall.prototype.ResolutionOnTime = new String();
SAPB1.ServiceCall.prototype.AssignedTime = new String();
SAPB1.ServiceCall.prototype.ClosingDate = new String();
SAPB1.ServiceCall.prototype.Series = new Number();
SAPB1.ServiceCall.prototype.DocNum = new Number();
SAPB1.ServiceCall.prototype.HandWritten = new String();
SAPB1.ServiceCall.prototype.PeriodIndicator = new String();
SAPB1.ServiceCall.prototype.StartDate = new String();
SAPB1.ServiceCall.prototype.StartTime = new String();
SAPB1.ServiceCall.prototype.EndDueDate = new String();
SAPB1.ServiceCall.prototype.EndTime = new String();
SAPB1.ServiceCall.prototype.Duration = new Number();
SAPB1.ServiceCall.prototype.DurationType = new String();
SAPB1.ServiceCall.prototype.Reminder = new String();
SAPB1.ServiceCall.prototype.ReminderPeriod = new Number();
SAPB1.ServiceCall.prototype.ReminderType = new String();
SAPB1.ServiceCall.prototype.Location = new Number();
SAPB1.ServiceCall.prototype.AddressName = new String();
SAPB1.ServiceCall.prototype.AddressType = new String();
SAPB1.ServiceCall.prototype.Street = new String();
SAPB1.ServiceCall.prototype.City = new String();
SAPB1.ServiceCall.prototype.Room = new String();
SAPB1.ServiceCall.prototype.State = new String();
SAPB1.ServiceCall.prototype.Country = new String();
SAPB1.ServiceCall.prototype.DisplayInCalendar = new String();
SAPB1.ServiceCall.prototype.CustomerRefNo = new String();
SAPB1.ServiceCall.prototype.ProblemSubType = new Number();
SAPB1.ServiceCall.prototype.AttachmentEntry = new Number();
SAPB1.ServiceCall.prototype.ServiceBPType = new String();
SAPB1.ServiceCall.prototype.BPContactPerson = new String();
SAPB1.ServiceCall.prototype.BPPhone1 = new String();
SAPB1.ServiceCall.prototype.BPPhone2 = new String();
SAPB1.ServiceCall.prototype.BPCellular = new String();
SAPB1.ServiceCall.prototype.BPFax = new String();
SAPB1.ServiceCall.prototype.BPeMail = new String();
SAPB1.ServiceCall.prototype.BPProjectCode = new String();
SAPB1.ServiceCall.prototype.BPTerritory = new Number();
SAPB1.ServiceCall.prototype.BPShipToCode = new String();
SAPB1.ServiceCall.prototype.BPShipToAddress = new String();
SAPB1.ServiceCall.prototype.BPBillToCode = new String();
SAPB1.ServiceCall.prototype.BPBillToAddress = new String();
SAPB1.ServiceCall.prototype.Telephone = new String();
SAPB1.ServiceCall.prototype.UpdateDate = new String();
SAPB1.ServiceCall.prototype.SupplementaryCode = new String();
SAPB1.ServiceCall.prototype.ServiceCallActivities = new ServiceCallActivityCollection();
SAPB1.ServiceCall.prototype.ServiceCallInventoryExpenses = new ServiceCallInventoryExpenseCollection();
SAPB1.ServiceCall.prototype.ServiceCallSolutions = new ServiceCallSolutionCollection();
SAPB1.ServiceCall.prototype.ServiceCallSchedulings = new ServiceCallSchedulingCollection();
SAPB1.ServiceCall.prototype.ServiceCallBPAddressComponents = new ServiceCallBPAddressComponentCollection();

SAPB1.ServiceCall.ServiceCallActivity = ServiceCallActivity
SAPB1.ServiceCall.ServiceCallActivityCollection = ServiceCallActivityCollection
SAPB1.ServiceCall.ServiceCallInventoryExpense = ServiceCallInventoryExpense
SAPB1.ServiceCall.ServiceCallInventoryExpenseCollection = ServiceCallInventoryExpenseCollection
SAPB1.ServiceCall.ServiceCallSolution = ServiceCallSolution
SAPB1.ServiceCall.ServiceCallSolutionCollection = ServiceCallSolutionCollection
SAPB1.ServiceCall.ServiceCallScheduling = ServiceCallScheduling
SAPB1.ServiceCall.ServiceCallSchedulingCollection = ServiceCallSchedulingCollection
SAPB1.ServiceCall.ServiceCallBPAddressComponent = ServiceCallBPAddressComponent
SAPB1.ServiceCall.ServiceCallBPAddressComponentCollection = ServiceCallBPAddressComponentCollection

SAPB1.ServiceCall.BoSvcCallPriorities = BoSvcCallPriorities
SAPB1.ServiceCall.BoYesNoEnum = BoYesNoEnum
SAPB1.ServiceCall.BoDurations = BoDurations
SAPB1.ServiceCall.BoAddressType = BoAddressType
SAPB1.ServiceCall.ServiceTypeEnum = ServiceTypeEnum

SAPB1.ServiceCall.create = function (rawObject) {
    var instance = new SAPB1.ServiceCall();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCall.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCall;
