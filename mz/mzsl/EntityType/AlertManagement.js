var AlertManagementRecipient = require('ComplexType/AlertManagementRecipient')
var AlertManagementRecipientCollection = require('ComplexType/AlertManagementRecipientCollection')
var AlertManagementDocument = require('ComplexType/AlertManagementDocument')
var AlertManagementDocumentCollection = require('ComplexType/AlertManagementDocumentCollection')

var AlertManagementTypeEnum = require('EnumType/AlertManagementTypeEnum')
var AlertManagementPriorityEnum = require('EnumType/AlertManagementPriorityEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var AlertManagementFrequencyType = require('EnumType/AlertManagementFrequencyType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AlertManagement = function () {
}
SAPB1.AlertManagement.prototype = new SAPB1.EntityType();
SAPB1.AlertManagement.prototype.constructor = SAPB1.AlertManagement;
SAPB1.AlertManagement.prototype.keys.push('Code');
SAPB1.AlertManagement.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.Type = { valueOf: function(){return 'Type';}, Type: 'AlertManagementTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.Priority = { valueOf: function(){return 'Priority';}, Type: 'AlertManagementPriorityEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.Param = { valueOf: function(){return 'Param';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.QueryID = { valueOf: function(){return 'QueryID';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.FrequencyType = { valueOf: function(){return 'FrequencyType';}, Type: 'AlertManagementFrequencyType', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.DayOfExecution = { valueOf: function(){return 'DayOfExecution';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.ExecutionTime = { valueOf: function(){return 'ExecutionTime';}, Type: 'Edm.Time', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.LastExecutionDate = { valueOf: function(){return 'LastExecutionDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.LastExecutionTime = { valueOf: function(){return 'LastExecutionTime';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.NextExecutionDate = { valueOf: function(){return 'NextExecutionDate';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.NextExecutionTime = { valueOf: function(){return 'NextExecutionTime';}, Type: 'Edm.Time', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.SaveHistory = { valueOf: function(){return 'SaveHistory';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.FrequencyInterval = { valueOf: function(){return 'FrequencyInterval';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagement.AlertManagementRecipients = { valueOf: function(){return 'AlertManagementRecipients';}, Type: 'AlertManagementRecipient', Index: 16, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AlertManagement.AlertManagementDocuments = { valueOf: function(){return 'AlertManagementDocuments';}, Type: 'AlertManagementDocument', Index: 17, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AlertManagement.prototype.Code = new Number();
SAPB1.AlertManagement.prototype.Name = new String();
SAPB1.AlertManagement.prototype.Type = new String();
SAPB1.AlertManagement.prototype.Priority = new String();
SAPB1.AlertManagement.prototype.Active = new String();
SAPB1.AlertManagement.prototype.Param = new String();
SAPB1.AlertManagement.prototype.QueryID = new Number();
SAPB1.AlertManagement.prototype.FrequencyType = new String();
SAPB1.AlertManagement.prototype.DayOfExecution = new Number();
SAPB1.AlertManagement.prototype.ExecutionTime = new String();
SAPB1.AlertManagement.prototype.LastExecutionDate = new String();
SAPB1.AlertManagement.prototype.LastExecutionTime = new Number();
SAPB1.AlertManagement.prototype.NextExecutionDate = new String();
SAPB1.AlertManagement.prototype.NextExecutionTime = new String();
SAPB1.AlertManagement.prototype.SaveHistory = new String();
SAPB1.AlertManagement.prototype.FrequencyInterval = new Number();
SAPB1.AlertManagement.prototype.AlertManagementRecipients = new AlertManagementRecipientCollection();
SAPB1.AlertManagement.prototype.AlertManagementDocuments = new AlertManagementDocumentCollection();

SAPB1.AlertManagement.AlertManagementRecipient = AlertManagementRecipient
SAPB1.AlertManagement.AlertManagementRecipientCollection = AlertManagementRecipientCollection
SAPB1.AlertManagement.AlertManagementDocument = AlertManagementDocument
SAPB1.AlertManagement.AlertManagementDocumentCollection = AlertManagementDocumentCollection

SAPB1.AlertManagement.AlertManagementTypeEnum = AlertManagementTypeEnum
SAPB1.AlertManagement.AlertManagementPriorityEnum = AlertManagementPriorityEnum
SAPB1.AlertManagement.BoYesNoEnum = BoYesNoEnum
SAPB1.AlertManagement.AlertManagementFrequencyType = AlertManagementFrequencyType

SAPB1.AlertManagement.create = function (rawObject) {
    var instance = new SAPB1.AlertManagement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AlertManagement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AlertManagement;
