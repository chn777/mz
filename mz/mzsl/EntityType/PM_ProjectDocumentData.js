var PM_StageData = require('ComplexType/PM_StageData')
var PM_StageDataCollection = require('ComplexType/PM_StageDataCollection')
var PM_OpenIssueData = require('ComplexType/PM_OpenIssueData')
var PM_OpenIssueDataCollection = require('ComplexType/PM_OpenIssueDataCollection')
var PM_DocumentData = require('ComplexType/PM_DocumentData')
var PM_DocumentDataCollection = require('ComplexType/PM_DocumentDataCollection')
var PM_ActivityData = require('ComplexType/PM_ActivityData')
var PM_ActivityDataCollection = require('ComplexType/PM_ActivityDataCollection')
var PM_WorkOrderData = require('ComplexType/PM_WorkOrderData')
var PM_WorkOrderDataCollection = require('ComplexType/PM_WorkOrderDataCollection')
var PM_SummaryData = require('ComplexType/PM_SummaryData')
var PM_DocAttachement = require('ComplexType/PM_DocAttachement')
var PM_DocAttachementCollection = require('ComplexType/PM_DocAttachementCollection')
var PM_StageAttachement = require('ComplexType/PM_StageAttachement')
var PM_StageAttachementCollection = require('ComplexType/PM_StageAttachementCollection')

var ProjectTypeEnum = require('EnumType/ProjectTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var ProjectStatusTypeEnum = require('EnumType/ProjectStatusTypeEnum')
var RiskLevelTypeEnum = require('EnumType/RiskLevelTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_ProjectDocumentData = function () {
}
SAPB1.PM_ProjectDocumentData.prototype = new SAPB1.EntityType();
SAPB1.PM_ProjectDocumentData.prototype.constructor = SAPB1.PM_ProjectDocumentData;
SAPB1.PM_ProjectDocumentData.prototype.keys.push('AbsEntry');
SAPB1.PM_ProjectDocumentData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.ProjectName = { valueOf: function(){return 'ProjectName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.FinishedPercent = { valueOf: function(){return 'FinishedPercent';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.ProjectType = { valueOf: function(){return 'ProjectType';}, Type: 'ProjectTypeEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.BusinessPartner = { valueOf: function(){return 'BusinessPartner';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.BusinessPartnerName = { valueOf: function(){return 'BusinessPartnerName';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.ContactPerson = { valueOf: function(){return 'ContactPerson';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.Territory = { valueOf: function(){return 'Territory';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.SalesEmployee = { valueOf: function(){return 'SalesEmployee';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.AllowSubprojects = { valueOf: function(){return 'AllowSubprojects';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.ProjectStatus = { valueOf: function(){return 'ProjectStatus';}, Type: 'ProjectStatusTypeEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.ClosingDate = { valueOf: function(){return 'ClosingDate';}, Type: 'Edm.DateTime', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.FinancialProject = { valueOf: function(){return 'FinancialProject';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.RiskLevel = { valueOf: function(){return 'RiskLevel';}, Type: 'RiskLevelTypeEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.Industry = { valueOf: function(){return 'Industry';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.Reason = { valueOf: function(){return 'Reason';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_ProjectDocumentData.PM_StagesCollection = { valueOf: function(){return 'PM_StagesCollection';}, Type: 'PM_StageData', Index: 22, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_OpenIssuesCollection = { valueOf: function(){return 'PM_OpenIssuesCollection';}, Type: 'PM_OpenIssueData', Index: 23, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_DocumentsCollection = { valueOf: function(){return 'PM_DocumentsCollection';}, Type: 'PM_DocumentData', Index: 24, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_ActivitiesCollection = { valueOf: function(){return 'PM_ActivitiesCollection';}, Type: 'PM_ActivityData', Index: 25, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_WorkOrdersCollection = { valueOf: function(){return 'PM_WorkOrdersCollection';}, Type: 'PM_WorkOrderData', Index: 26, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_SummaryData = { valueOf: function(){return 'PM_SummaryData';}, Type: 'PM_SummaryData', Index: 27, Nullable: true, IsArray: false, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_DocAttachements = { valueOf: function(){return 'PM_DocAttachements';}, Type: 'PM_DocAttachement', Index: 28, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.PM_StageAttachements = { valueOf: function(){return 'PM_StageAttachements';}, Type: 'PM_StageAttachement', Index: 29, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_ProjectDocumentData.prototype.AbsEntry = new Number();
SAPB1.PM_ProjectDocumentData.prototype.Owner = new Number();
SAPB1.PM_ProjectDocumentData.prototype.ProjectName = new String();
SAPB1.PM_ProjectDocumentData.prototype.StartDate = new String();
SAPB1.PM_ProjectDocumentData.prototype.FinishedPercent = new Number();
SAPB1.PM_ProjectDocumentData.prototype.DocNum = new Number();
SAPB1.PM_ProjectDocumentData.prototype.Series = new Number();
SAPB1.PM_ProjectDocumentData.prototype.ProjectType = new String();
SAPB1.PM_ProjectDocumentData.prototype.BusinessPartner = new String();
SAPB1.PM_ProjectDocumentData.prototype.BusinessPartnerName = new String();
SAPB1.PM_ProjectDocumentData.prototype.ContactPerson = new Number();
SAPB1.PM_ProjectDocumentData.prototype.Territory = new Number();
SAPB1.PM_ProjectDocumentData.prototype.SalesEmployee = new Number();
SAPB1.PM_ProjectDocumentData.prototype.AllowSubprojects = new String();
SAPB1.PM_ProjectDocumentData.prototype.ProjectStatus = new String();
SAPB1.PM_ProjectDocumentData.prototype.DueDate = new String();
SAPB1.PM_ProjectDocumentData.prototype.ClosingDate = new String();
SAPB1.PM_ProjectDocumentData.prototype.FinancialProject = new String();
SAPB1.PM_ProjectDocumentData.prototype.RiskLevel = new String();
SAPB1.PM_ProjectDocumentData.prototype.Industry = new Number();
SAPB1.PM_ProjectDocumentData.prototype.Reason = new String();
SAPB1.PM_ProjectDocumentData.prototype.AttachmentEntry = new Number();
SAPB1.PM_ProjectDocumentData.prototype.PM_StagesCollection = new PM_StageDataCollection();
SAPB1.PM_ProjectDocumentData.prototype.PM_OpenIssuesCollection = new PM_OpenIssueDataCollection();
SAPB1.PM_ProjectDocumentData.prototype.PM_DocumentsCollection = new PM_DocumentDataCollection();
SAPB1.PM_ProjectDocumentData.prototype.PM_ActivitiesCollection = new PM_ActivityDataCollection();
SAPB1.PM_ProjectDocumentData.prototype.PM_WorkOrdersCollection = new PM_WorkOrderDataCollection();
SAPB1.PM_ProjectDocumentData.prototype.PM_SummaryData = new PM_SummaryData();
SAPB1.PM_ProjectDocumentData.prototype.PM_DocAttachements = new PM_DocAttachementCollection();
SAPB1.PM_ProjectDocumentData.prototype.PM_StageAttachements = new PM_StageAttachementCollection();

SAPB1.PM_ProjectDocumentData.PM_StageData = PM_StageData
SAPB1.PM_ProjectDocumentData.PM_StageDataCollection = PM_StageDataCollection
SAPB1.PM_ProjectDocumentData.PM_OpenIssueData = PM_OpenIssueData
SAPB1.PM_ProjectDocumentData.PM_OpenIssueDataCollection = PM_OpenIssueDataCollection
SAPB1.PM_ProjectDocumentData.PM_DocumentData = PM_DocumentData
SAPB1.PM_ProjectDocumentData.PM_DocumentDataCollection = PM_DocumentDataCollection
SAPB1.PM_ProjectDocumentData.PM_ActivityData = PM_ActivityData
SAPB1.PM_ProjectDocumentData.PM_ActivityDataCollection = PM_ActivityDataCollection
SAPB1.PM_ProjectDocumentData.PM_WorkOrderData = PM_WorkOrderData
SAPB1.PM_ProjectDocumentData.PM_WorkOrderDataCollection = PM_WorkOrderDataCollection
SAPB1.PM_ProjectDocumentData.PM_SummaryData = PM_SummaryData
SAPB1.PM_ProjectDocumentData.PM_DocAttachement = PM_DocAttachement
SAPB1.PM_ProjectDocumentData.PM_DocAttachementCollection = PM_DocAttachementCollection
SAPB1.PM_ProjectDocumentData.PM_StageAttachement = PM_StageAttachement
SAPB1.PM_ProjectDocumentData.PM_StageAttachementCollection = PM_StageAttachementCollection

SAPB1.PM_ProjectDocumentData.ProjectTypeEnum = ProjectTypeEnum
SAPB1.PM_ProjectDocumentData.BoYesNoEnum = BoYesNoEnum
SAPB1.PM_ProjectDocumentData.ProjectStatusTypeEnum = ProjectStatusTypeEnum
SAPB1.PM_ProjectDocumentData.RiskLevelTypeEnum = RiskLevelTypeEnum

SAPB1.PM_ProjectDocumentData.create = function (rawObject) {
    var instance = new SAPB1.PM_ProjectDocumentData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_ProjectDocumentData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_ProjectDocumentData;
