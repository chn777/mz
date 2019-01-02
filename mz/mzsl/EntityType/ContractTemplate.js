
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoRemindUnits = require('EnumType/BoRemindUnits')
var BoResolutionUnits = require('EnumType/BoResolutionUnits')
var BoContractTypes = require('EnumType/BoContractTypes')
var BoResponseUnit = require('EnumType/BoResponseUnit')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ContractTemplate = function () {
}
SAPB1.ContractTemplate.prototype = new SAPB1.EntityType();
SAPB1.ContractTemplate.prototype.constructor = SAPB1.ContractTemplate;
SAPB1.ContractTemplate.prototype.keys.push('TemplateName');
SAPB1.ContractTemplate.TemplateName = { valueOf: function(){return 'TemplateName';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.TemplateIsDeleted = { valueOf: function(){return 'TemplateIsDeleted';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.TemplateIsRenewal = { valueOf: function(){return 'TemplateIsRenewal';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.RemindBeforeRenewal = { valueOf: function(){return 'RemindBeforeRenewal';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.RemindUnit = { valueOf: function(){return 'RemindUnit';}, Type: 'BoRemindUnits', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.DurationOfCoverage = { valueOf: function(){return 'DurationOfCoverage';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ResponseValue = { valueOf: function(){return 'ResponseValue';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ResolutionUnit = { valueOf: function(){return 'ResolutionUnit';}, Type: 'BoResolutionUnits', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ContractType = { valueOf: function(){return 'ContractType';}, Type: 'BoContractTypes', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.MondayEnabled = { valueOf: function(){return 'MondayEnabled';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.TuesdayEnabled = { valueOf: function(){return 'TuesdayEnabled';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.WednesdayEnabled = { valueOf: function(){return 'WednesdayEnabled';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ThursdayEnabled = { valueOf: function(){return 'ThursdayEnabled';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.FridayEnabled = { valueOf: function(){return 'FridayEnabled';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.SaturdayEnabled = { valueOf: function(){return 'SaturdayEnabled';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.SundayEnabled = { valueOf: function(){return 'SundayEnabled';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.MondayStart = { valueOf: function(){return 'MondayStart';}, Type: 'Edm.Time', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.MondayEnd = { valueOf: function(){return 'MondayEnd';}, Type: 'Edm.Time', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.TuesdayStart = { valueOf: function(){return 'TuesdayStart';}, Type: 'Edm.Time', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.TuesdayEnd = { valueOf: function(){return 'TuesdayEnd';}, Type: 'Edm.Time', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.WednesdayStart = { valueOf: function(){return 'WednesdayStart';}, Type: 'Edm.Time', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.WednesdayEnd = { valueOf: function(){return 'WednesdayEnd';}, Type: 'Edm.Time', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ThursdayStart = { valueOf: function(){return 'ThursdayStart';}, Type: 'Edm.Time', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ThursdayEnd = { valueOf: function(){return 'ThursdayEnd';}, Type: 'Edm.Time', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.FridayStart = { valueOf: function(){return 'FridayStart';}, Type: 'Edm.Time', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.FridayEnd = { valueOf: function(){return 'FridayEnd';}, Type: 'Edm.Time', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.SaturdayStart = { valueOf: function(){return 'SaturdayStart';}, Type: 'Edm.Time', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.SaturdayEnd = { valueOf: function(){return 'SaturdayEnd';}, Type: 'Edm.Time', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.SundayStart = { valueOf: function(){return 'SundayStart';}, Type: 'Edm.Time', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.SundayEnd = { valueOf: function(){return 'SundayEnd';}, Type: 'Edm.Time', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.IncludeParts = { valueOf: function(){return 'IncludeParts';}, Type: 'BoYesNoEnum', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.IncludeLabor = { valueOf: function(){return 'IncludeLabor';}, Type: 'BoYesNoEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.IncludeTravel = { valueOf: function(){return 'IncludeTravel';}, Type: 'BoYesNoEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.IncludeHolidays = { valueOf: function(){return 'IncludeHolidays';}, Type: 'BoYesNoEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ResponseUnit = { valueOf: function(){return 'ResponseUnit';}, Type: 'BoResponseUnit', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.ResolutionTime = { valueOf: function(){return 'ResolutionTime';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplate.prototype.TemplateName = new String();
SAPB1.ContractTemplate.prototype.TemplateIsDeleted = new String();
SAPB1.ContractTemplate.prototype.TemplateIsRenewal = new String();
SAPB1.ContractTemplate.prototype.RemindBeforeRenewal = new Number();
SAPB1.ContractTemplate.prototype.RemindUnit = new String();
SAPB1.ContractTemplate.prototype.DurationOfCoverage = new Number();
SAPB1.ContractTemplate.prototype.ResponseValue = new Number();
SAPB1.ContractTemplate.prototype.ResolutionUnit = new String();
SAPB1.ContractTemplate.prototype.Description = new String();
SAPB1.ContractTemplate.prototype.ContractType = new String();
SAPB1.ContractTemplate.prototype.MondayEnabled = new String();
SAPB1.ContractTemplate.prototype.TuesdayEnabled = new String();
SAPB1.ContractTemplate.prototype.WednesdayEnabled = new String();
SAPB1.ContractTemplate.prototype.ThursdayEnabled = new String();
SAPB1.ContractTemplate.prototype.FridayEnabled = new String();
SAPB1.ContractTemplate.prototype.SaturdayEnabled = new String();
SAPB1.ContractTemplate.prototype.SundayEnabled = new String();
SAPB1.ContractTemplate.prototype.MondayStart = new String();
SAPB1.ContractTemplate.prototype.MondayEnd = new String();
SAPB1.ContractTemplate.prototype.TuesdayStart = new String();
SAPB1.ContractTemplate.prototype.TuesdayEnd = new String();
SAPB1.ContractTemplate.prototype.WednesdayStart = new String();
SAPB1.ContractTemplate.prototype.WednesdayEnd = new String();
SAPB1.ContractTemplate.prototype.ThursdayStart = new String();
SAPB1.ContractTemplate.prototype.ThursdayEnd = new String();
SAPB1.ContractTemplate.prototype.FridayStart = new String();
SAPB1.ContractTemplate.prototype.FridayEnd = new String();
SAPB1.ContractTemplate.prototype.SaturdayStart = new String();
SAPB1.ContractTemplate.prototype.SaturdayEnd = new String();
SAPB1.ContractTemplate.prototype.SundayStart = new String();
SAPB1.ContractTemplate.prototype.SundayEnd = new String();
SAPB1.ContractTemplate.prototype.IncludeParts = new String();
SAPB1.ContractTemplate.prototype.IncludeLabor = new String();
SAPB1.ContractTemplate.prototype.IncludeTravel = new String();
SAPB1.ContractTemplate.prototype.Remarks = new String();
SAPB1.ContractTemplate.prototype.IncludeHolidays = new String();
SAPB1.ContractTemplate.prototype.ResponseUnit = new String();
SAPB1.ContractTemplate.prototype.ResolutionTime = new Number();
SAPB1.ContractTemplate.prototype.AttachmentEntry = new Number();


SAPB1.ContractTemplate.BoYesNoEnum = BoYesNoEnum
SAPB1.ContractTemplate.BoRemindUnits = BoRemindUnits
SAPB1.ContractTemplate.BoResolutionUnits = BoResolutionUnits
SAPB1.ContractTemplate.BoContractTypes = BoContractTypes
SAPB1.ContractTemplate.BoResponseUnit = BoResponseUnit

SAPB1.ContractTemplate.create = function (rawObject) {
    var instance = new SAPB1.ContractTemplate();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ContractTemplate.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ContractTemplate;
