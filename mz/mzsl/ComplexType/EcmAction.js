
var EcmActionTypeEnum = require('EnumType/EcmActionTypeEnum')
var EcmActionStatusEnum = require('EnumType/EcmActionStatusEnum')
var EcmActionPeriodTypeEnum = require('EnumType/EcmActionPeriodTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var EcmActionGenerationTypeEnum = require('EnumType/EcmActionGenerationTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EcmAction = function () {
}
SAPB1.EcmAction.prototype = new SAPB1.ComplexType();
SAPB1.EcmAction.prototype.constructor = SAPB1.EcmAction;
SAPB1.EcmAction.ActionID = { valueOf: function(){return 'ActionID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Protocol = { valueOf: function(){return 'Protocol';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Type = { valueOf: function(){return 'Type';}, Type: 'EcmActionTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Status = { valueOf: function(){return 'Status';}, Type: 'EcmActionStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Message = { valueOf: function(){return 'Message';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Environment = { valueOf: function(){return 'Environment';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.BusinessPlace = { valueOf: function(){return 'BusinessPlace';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.Submits = { valueOf: function(){return 'Submits';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.ObjectID = { valueOf: function(){return 'ObjectID';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.ReportID = { valueOf: function(){return 'ReportID';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.SourceType = { valueOf: function(){return 'SourceType';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.SourceObject = { valueOf: function(){return 'SourceObject';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.AssignedID = { valueOf: function(){return 'AssignedID';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.DocumentBatch = { valueOf: function(){return 'DocumentBatch';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.DocumentBatchLine = { valueOf: function(){return 'DocumentBatchLine';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.PeriodType = { valueOf: function(){return 'PeriodType';}, Type: 'EcmActionPeriodTypeEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.PeriodNumber = { valueOf: function(){return 'PeriodNumber';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.PeriodYear = { valueOf: function(){return 'PeriodYear';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.PeriodDateFrom = { valueOf: function(){return 'PeriodDateFrom';}, Type: 'Edm.DateTime', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.PeriodDateTo = { valueOf: function(){return 'PeriodDateTo';}, Type: 'Edm.DateTime', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.IsRemoved = { valueOf: function(){return 'IsRemoved';}, Type: 'BoYesNoEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.IsCanceled = { valueOf: function(){return 'IsCanceled';}, Type: 'BoYesNoEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.GenerationType = { valueOf: function(){return 'GenerationType';}, Type: 'EcmActionGenerationTypeEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmAction.prototype.ActionID = new Number();
SAPB1.EcmAction.prototype.Protocol = new String();
SAPB1.EcmAction.prototype.Type = new String();
SAPB1.EcmAction.prototype.Description = new String();
SAPB1.EcmAction.prototype.Status = new String();
SAPB1.EcmAction.prototype.Message = new String();
SAPB1.EcmAction.prototype.Environment = new Number();
SAPB1.EcmAction.prototype.BusinessPlace = new Number();
SAPB1.EcmAction.prototype.Submits = new Number();
SAPB1.EcmAction.prototype.ObjectID = new String();
SAPB1.EcmAction.prototype.ReportID = new String();
SAPB1.EcmAction.prototype.SourceType = new String();
SAPB1.EcmAction.prototype.SourceObject = new Number();
SAPB1.EcmAction.prototype.AssignedID = new String();
SAPB1.EcmAction.prototype.DocumentBatch = new String();
SAPB1.EcmAction.prototype.DocumentBatchLine = new Number();
SAPB1.EcmAction.prototype.PeriodType = new String();
SAPB1.EcmAction.prototype.PeriodNumber = new Number();
SAPB1.EcmAction.prototype.PeriodYear = new Number();
SAPB1.EcmAction.prototype.PeriodDateFrom = new String();
SAPB1.EcmAction.prototype.PeriodDateTo = new String();
SAPB1.EcmAction.prototype.IsRemoved = new String();
SAPB1.EcmAction.prototype.IsCanceled = new String();
SAPB1.EcmAction.prototype.GenerationType = new String();


SAPB1.EcmAction.EcmActionTypeEnum = EcmActionTypeEnum
SAPB1.EcmAction.EcmActionStatusEnum = EcmActionStatusEnum
SAPB1.EcmAction.EcmActionPeriodTypeEnum = EcmActionPeriodTypeEnum
SAPB1.EcmAction.BoYesNoEnum = BoYesNoEnum
SAPB1.EcmAction.EcmActionGenerationTypeEnum = EcmActionGenerationTypeEnum

SAPB1.EcmAction.create = function (rawObject) {
    var instance = new SAPB1.EcmAction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EcmAction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EcmAction;
