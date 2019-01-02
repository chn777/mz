
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var StageDepTypeEnum = require('EnumType/StageDepTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMS_StageData = function () {
}
SAPB1.PMS_StageData.prototype = new SAPB1.ComplexType();
SAPB1.PMS_StageData.prototype.constructor = SAPB1.PMS_StageData;
SAPB1.PMS_StageData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageType = { valueOf: function(){return 'StageType';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.CloseDate = { valueOf: function(){return 'CloseDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.Task = { valueOf: function(){return 'Task';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.ExpectedCosts = { valueOf: function(){return 'ExpectedCosts';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.InvoicedAmountSales = { valueOf: function(){return 'InvoicedAmountSales';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.OpenAmountSales = { valueOf: function(){return 'OpenAmountSales';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.InvoicedAmountPurchase = { valueOf: function(){return 'InvoicedAmountPurchase';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.OpenAmountPurchase = { valueOf: function(){return 'OpenAmountPurchase';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.PercentualCompletness = { valueOf: function(){return 'PercentualCompletness';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.IsFinished = { valueOf: function(){return 'IsFinished';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageOwner = { valueOf: function(){return 'StageOwner';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStage1 = { valueOf: function(){return 'DependsOnStage1';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStage2 = { valueOf: function(){return 'DependsOnStage2';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStage3 = { valueOf: function(){return 'DependsOnStage3';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStage4 = { valueOf: function(){return 'DependsOnStage4';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageDependency1Type = { valueOf: function(){return 'StageDependency1Type';}, Type: 'StageDepTypeEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageDependency2Type = { valueOf: function(){return 'StageDependency2Type';}, Type: 'StageDepTypeEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageDependency3Type = { valueOf: function(){return 'StageDependency3Type';}, Type: 'StageDepTypeEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.StageDependency4Type = { valueOf: function(){return 'StageDependency4Type';}, Type: 'StageDepTypeEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStageID1 = { valueOf: function(){return 'DependsOnStageID1';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStageID2 = { valueOf: function(){return 'DependsOnStageID2';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStageID3 = { valueOf: function(){return 'DependsOnStageID3';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.DependsOnStageID4 = { valueOf: function(){return 'DependsOnStageID4';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.UniqueID = { valueOf: function(){return 'UniqueID';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.FinishedDate = { valueOf: function(){return 'FinishedDate';}, Type: 'Edm.DateTime', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageData.prototype.LineID = new Number();
SAPB1.PMS_StageData.prototype.StageID = new Number();
SAPB1.PMS_StageData.prototype.StageType = new Number();
SAPB1.PMS_StageData.prototype.StartDate = new String();
SAPB1.PMS_StageData.prototype.CloseDate = new String();
SAPB1.PMS_StageData.prototype.Task = new Number();
SAPB1.PMS_StageData.prototype.Description = new String();
SAPB1.PMS_StageData.prototype.ExpectedCosts = new Number();
SAPB1.PMS_StageData.prototype.InvoicedAmountSales = new Number();
SAPB1.PMS_StageData.prototype.OpenAmountSales = new Number();
SAPB1.PMS_StageData.prototype.InvoicedAmountPurchase = new Number();
SAPB1.PMS_StageData.prototype.OpenAmountPurchase = new Number();
SAPB1.PMS_StageData.prototype.PercentualCompletness = new Number();
SAPB1.PMS_StageData.prototype.IsFinished = new String();
SAPB1.PMS_StageData.prototype.StageOwner = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStage1 = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStage2 = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStage3 = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStage4 = new Number();
SAPB1.PMS_StageData.prototype.StageDependency1Type = new String();
SAPB1.PMS_StageData.prototype.StageDependency2Type = new String();
SAPB1.PMS_StageData.prototype.StageDependency3Type = new String();
SAPB1.PMS_StageData.prototype.StageDependency4Type = new String();
SAPB1.PMS_StageData.prototype.DependsOnStageID1 = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStageID2 = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStageID3 = new Number();
SAPB1.PMS_StageData.prototype.DependsOnStageID4 = new Number();
SAPB1.PMS_StageData.prototype.AttachmentEntry = new Number();
SAPB1.PMS_StageData.prototype.UniqueID = new String();
SAPB1.PMS_StageData.prototype.FinishedDate = new String();


SAPB1.PMS_StageData.BoYesNoEnum = BoYesNoEnum
SAPB1.PMS_StageData.StageDepTypeEnum = StageDepTypeEnum

SAPB1.PMS_StageData.create = function (rawObject) {
    var instance = new SAPB1.PMS_StageData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMS_StageData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMS_StageData;
