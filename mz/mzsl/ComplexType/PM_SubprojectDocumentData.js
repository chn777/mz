var PMS_StageData = require('ComplexType/PMS_StageData')
var PMS_StageDataCollection = require('ComplexType/PMS_StageDataCollection')
var PMS_OpenIssueData = require('ComplexType/PMS_OpenIssueData')
var PMS_OpenIssueDataCollection = require('ComplexType/PMS_OpenIssueDataCollection')
var PMS_DocumentData = require('ComplexType/PMS_DocumentData')
var PMS_DocumentDataCollection = require('ComplexType/PMS_DocumentDataCollection')
var PMS_ActivityData = require('ComplexType/PMS_ActivityData')
var PMS_ActivityDataCollection = require('ComplexType/PMS_ActivityDataCollection')
var PMS_WorkOrderData = require('ComplexType/PMS_WorkOrderData')
var PMS_WorkOrderDataCollection = require('ComplexType/PMS_WorkOrderDataCollection')
var PMS_SummaryData = require('ComplexType/PMS_SummaryData')
var PMS_DocAttachement = require('ComplexType/PMS_DocAttachement')
var PMS_DocAttachementCollection = require('ComplexType/PMS_DocAttachementCollection')
var PMS_StageAttachement = require('ComplexType/PMS_StageAttachement')
var PMS_StageAttachementCollection = require('ComplexType/PMS_StageAttachementCollection')

var SubprojectStatusTypeEnum = require('EnumType/SubprojectStatusTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_SubprojectDocumentData = function () {
}
SAPB1.PM_SubprojectDocumentData.prototype = new SAPB1.ComplexType();
SAPB1.PM_SubprojectDocumentData.prototype.constructor = SAPB1.PM_SubprojectDocumentData;
SAPB1.PM_SubprojectDocumentData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.SubprojectName = { valueOf: function(){return 'SubprojectName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.FinishedPercent = { valueOf: function(){return 'FinishedPercent';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.ParentID = { valueOf: function(){return 'ParentID';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.ProjectID = { valueOf: function(){return 'ProjectID';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.Order = { valueOf: function(){return 'Order';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.SubprojectType = { valueOf: function(){return 'SubprojectType';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.SubprojectContribution = { valueOf: function(){return 'SubprojectContribution';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.SubprojectStatus = { valueOf: function(){return 'SubprojectStatus';}, Type: 'SubprojectStatusTypeEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.SubprojectEndDate = { valueOf: function(){return 'SubprojectEndDate';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.ActualCost = { valueOf: function(){return 'ActualCost';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.PlannedCost = { valueOf: function(){return 'PlannedCost';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.SubprojectDepth = { valueOf: function(){return 'SubprojectDepth';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectDocumentData.PMS_StagesCollection = { valueOf: function(){return 'PMS_StagesCollection';}, Type: 'PMS_StageData', Index: 16, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_OpenIssuesCollection = { valueOf: function(){return 'PMS_OpenIssuesCollection';}, Type: 'PMS_OpenIssueData', Index: 17, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_DocumentsCollection = { valueOf: function(){return 'PMS_DocumentsCollection';}, Type: 'PMS_DocumentData', Index: 18, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_ActivitiesCollection = { valueOf: function(){return 'PMS_ActivitiesCollection';}, Type: 'PMS_ActivityData', Index: 19, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_WorkOrdersCollection = { valueOf: function(){return 'PMS_WorkOrdersCollection';}, Type: 'PMS_WorkOrderData', Index: 20, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_SummaryData = { valueOf: function(){return 'PMS_SummaryData';}, Type: 'PMS_SummaryData', Index: 21, Nullable: true, IsArray: false, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_DocAttachements = { valueOf: function(){return 'PMS_DocAttachements';}, Type: 'PMS_DocAttachement', Index: 22, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.PMS_StageAttachements = { valueOf: function(){return 'PMS_StageAttachements';}, Type: 'PMS_StageAttachement', Index: 23, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_SubprojectDocumentData.prototype.AbsEntry = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.Owner = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.SubprojectName = new String();
SAPB1.PM_SubprojectDocumentData.prototype.StartDate = new String();
SAPB1.PM_SubprojectDocumentData.prototype.FinishedPercent = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.ParentID = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.ProjectID = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.Order = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.SubprojectType = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.SubprojectContribution = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.SubprojectStatus = new String();
SAPB1.PM_SubprojectDocumentData.prototype.SubprojectEndDate = new String();
SAPB1.PM_SubprojectDocumentData.prototype.ActualCost = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.PlannedCost = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.SubprojectDepth = new Number();
SAPB1.PM_SubprojectDocumentData.prototype.DueDate = new String();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_StagesCollection = new PMS_StageDataCollection();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_OpenIssuesCollection = new PMS_OpenIssueDataCollection();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_DocumentsCollection = new PMS_DocumentDataCollection();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_ActivitiesCollection = new PMS_ActivityDataCollection();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_WorkOrdersCollection = new PMS_WorkOrderDataCollection();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_SummaryData = new PMS_SummaryData();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_DocAttachements = new PMS_DocAttachementCollection();
SAPB1.PM_SubprojectDocumentData.prototype.PMS_StageAttachements = new PMS_StageAttachementCollection();

SAPB1.PM_SubprojectDocumentData.PMS_StageData = PMS_StageData
SAPB1.PM_SubprojectDocumentData.PMS_StageDataCollection = PMS_StageDataCollection
SAPB1.PM_SubprojectDocumentData.PMS_OpenIssueData = PMS_OpenIssueData
SAPB1.PM_SubprojectDocumentData.PMS_OpenIssueDataCollection = PMS_OpenIssueDataCollection
SAPB1.PM_SubprojectDocumentData.PMS_DocumentData = PMS_DocumentData
SAPB1.PM_SubprojectDocumentData.PMS_DocumentDataCollection = PMS_DocumentDataCollection
SAPB1.PM_SubprojectDocumentData.PMS_ActivityData = PMS_ActivityData
SAPB1.PM_SubprojectDocumentData.PMS_ActivityDataCollection = PMS_ActivityDataCollection
SAPB1.PM_SubprojectDocumentData.PMS_WorkOrderData = PMS_WorkOrderData
SAPB1.PM_SubprojectDocumentData.PMS_WorkOrderDataCollection = PMS_WorkOrderDataCollection
SAPB1.PM_SubprojectDocumentData.PMS_SummaryData = PMS_SummaryData
SAPB1.PM_SubprojectDocumentData.PMS_DocAttachement = PMS_DocAttachement
SAPB1.PM_SubprojectDocumentData.PMS_DocAttachementCollection = PMS_DocAttachementCollection
SAPB1.PM_SubprojectDocumentData.PMS_StageAttachement = PMS_StageAttachement
SAPB1.PM_SubprojectDocumentData.PMS_StageAttachementCollection = PMS_StageAttachementCollection

SAPB1.PM_SubprojectDocumentData.SubprojectStatusTypeEnum = SubprojectStatusTypeEnum

SAPB1.PM_SubprojectDocumentData.create = function (rawObject) {
    var instance = new SAPB1.PM_SubprojectDocumentData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_SubprojectDocumentData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_SubprojectDocumentData;
