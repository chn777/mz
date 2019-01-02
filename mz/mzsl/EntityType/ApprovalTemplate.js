var ApprovalTemplateUser = require('ComplexType/ApprovalTemplateUser')
var ApprovalTemplateUserCollection = require('ComplexType/ApprovalTemplateUserCollection')
var ApprovalTemplateStage = require('ComplexType/ApprovalTemplateStage')
var ApprovalTemplateStageCollection = require('ComplexType/ApprovalTemplateStageCollection')
var ApprovalTemplateDocument = require('ComplexType/ApprovalTemplateDocument')
var ApprovalTemplateDocumentCollection = require('ComplexType/ApprovalTemplateDocumentCollection')
var ApprovalTemplateTerm = require('ComplexType/ApprovalTemplateTerm')
var ApprovalTemplateTermCollection = require('ComplexType/ApprovalTemplateTermCollection')
var ApprovalTemplateQuery = require('ComplexType/ApprovalTemplateQuery')
var ApprovalTemplateQueryCollection = require('ComplexType/ApprovalTemplateQueryCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalTemplate = function () {
}
SAPB1.ApprovalTemplate.prototype = new SAPB1.EntityType();
SAPB1.ApprovalTemplate.prototype.constructor = SAPB1.ApprovalTemplate;
SAPB1.ApprovalTemplate.prototype.keys.push('Code');
SAPB1.ApprovalTemplate.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplate.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplate.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplate.UseTerms = { valueOf: function(){return 'UseTerms';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplate.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplate.IsActiveWhenUpdatingDocuments = { valueOf: function(){return 'IsActiveWhenUpdatingDocuments';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplate.ApprovalTemplateUsers = { valueOf: function(){return 'ApprovalTemplateUsers';}, Type: 'ApprovalTemplateUser', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalTemplate.ApprovalTemplateStages = { valueOf: function(){return 'ApprovalTemplateStages';}, Type: 'ApprovalTemplateStage', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalTemplate.ApprovalTemplateDocuments = { valueOf: function(){return 'ApprovalTemplateDocuments';}, Type: 'ApprovalTemplateDocument', Index: 8, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalTemplate.ApprovalTemplateTerms = { valueOf: function(){return 'ApprovalTemplateTerms';}, Type: 'ApprovalTemplateTerm', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalTemplate.ApprovalTemplateQueries = { valueOf: function(){return 'ApprovalTemplateQueries';}, Type: 'ApprovalTemplateQuery', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalTemplate.prototype.Code = new Number();
SAPB1.ApprovalTemplate.prototype.Name = new String();
SAPB1.ApprovalTemplate.prototype.Remarks = new String();
SAPB1.ApprovalTemplate.prototype.UseTerms = new String();
SAPB1.ApprovalTemplate.prototype.IsActive = new String();
SAPB1.ApprovalTemplate.prototype.IsActiveWhenUpdatingDocuments = new String();
SAPB1.ApprovalTemplate.prototype.ApprovalTemplateUsers = new ApprovalTemplateUserCollection();
SAPB1.ApprovalTemplate.prototype.ApprovalTemplateStages = new ApprovalTemplateStageCollection();
SAPB1.ApprovalTemplate.prototype.ApprovalTemplateDocuments = new ApprovalTemplateDocumentCollection();
SAPB1.ApprovalTemplate.prototype.ApprovalTemplateTerms = new ApprovalTemplateTermCollection();
SAPB1.ApprovalTemplate.prototype.ApprovalTemplateQueries = new ApprovalTemplateQueryCollection();

SAPB1.ApprovalTemplate.ApprovalTemplateUser = ApprovalTemplateUser
SAPB1.ApprovalTemplate.ApprovalTemplateUserCollection = ApprovalTemplateUserCollection
SAPB1.ApprovalTemplate.ApprovalTemplateStage = ApprovalTemplateStage
SAPB1.ApprovalTemplate.ApprovalTemplateStageCollection = ApprovalTemplateStageCollection
SAPB1.ApprovalTemplate.ApprovalTemplateDocument = ApprovalTemplateDocument
SAPB1.ApprovalTemplate.ApprovalTemplateDocumentCollection = ApprovalTemplateDocumentCollection
SAPB1.ApprovalTemplate.ApprovalTemplateTerm = ApprovalTemplateTerm
SAPB1.ApprovalTemplate.ApprovalTemplateTermCollection = ApprovalTemplateTermCollection
SAPB1.ApprovalTemplate.ApprovalTemplateQuery = ApprovalTemplateQuery
SAPB1.ApprovalTemplate.ApprovalTemplateQueryCollection = ApprovalTemplateQueryCollection

SAPB1.ApprovalTemplate.BoYesNoEnum = BoYesNoEnum

SAPB1.ApprovalTemplate.create = function (rawObject) {
    var instance = new SAPB1.ApprovalTemplate();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalTemplate.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalTemplate;
