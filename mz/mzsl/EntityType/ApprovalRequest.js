var ApprovalRequestLine = require('ComplexType/ApprovalRequestLine')
var ApprovalRequestLineCollection = require('ComplexType/ApprovalRequestLineCollection')
var ApprovalRequestDecision = require('ComplexType/ApprovalRequestDecision')
var ApprovalRequestDecisionCollection = require('ComplexType/ApprovalRequestDecisionCollection')

var BoApprovalRequestStatusEnum = require('EnumType/BoApprovalRequestStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalRequest = function () {
}
SAPB1.ApprovalRequest.prototype = new SAPB1.EntityType();
SAPB1.ApprovalRequest.prototype.constructor = SAPB1.ApprovalRequest;
SAPB1.ApprovalRequest.prototype.keys.push('Code');
SAPB1.ApprovalRequest.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.ApprovalTemplatesID = { valueOf: function(){return 'ApprovalTemplatesID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.ObjectType = { valueOf: function(){return 'ObjectType';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.IsDraft = { valueOf: function(){return 'IsDraft';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.ObjectEntry = { valueOf: function(){return 'ObjectEntry';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.Status = { valueOf: function(){return 'Status';}, Type: 'BoApprovalRequestStatusEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.CurrentStage = { valueOf: function(){return 'CurrentStage';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.OriginatorID = { valueOf: function(){return 'OriginatorID';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.CreationTime = { valueOf: function(){return 'CreationTime';}, Type: 'Edm.Time', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.DraftEntry = { valueOf: function(){return 'DraftEntry';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.DraftType = { valueOf: function(){return 'DraftType';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequest.ApprovalRequestLines = { valueOf: function(){return 'ApprovalRequestLines';}, Type: 'ApprovalRequestLine', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalRequest.ApprovalRequestDecisions = { valueOf: function(){return 'ApprovalRequestDecisions';}, Type: 'ApprovalRequestDecision', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalRequest.prototype.Code = new Number();
SAPB1.ApprovalRequest.prototype.ApprovalTemplatesID = new Number();
SAPB1.ApprovalRequest.prototype.ObjectType = new String();
SAPB1.ApprovalRequest.prototype.IsDraft = new String();
SAPB1.ApprovalRequest.prototype.ObjectEntry = new Number();
SAPB1.ApprovalRequest.prototype.Status = new String();
SAPB1.ApprovalRequest.prototype.Remarks = new String();
SAPB1.ApprovalRequest.prototype.CurrentStage = new Number();
SAPB1.ApprovalRequest.prototype.OriginatorID = new Number();
SAPB1.ApprovalRequest.prototype.CreationDate = new String();
SAPB1.ApprovalRequest.prototype.CreationTime = new String();
SAPB1.ApprovalRequest.prototype.DraftEntry = new Number();
SAPB1.ApprovalRequest.prototype.DraftType = new String();
SAPB1.ApprovalRequest.prototype.ApprovalRequestLines = new ApprovalRequestLineCollection();
SAPB1.ApprovalRequest.prototype.ApprovalRequestDecisions = new ApprovalRequestDecisionCollection();

SAPB1.ApprovalRequest.ApprovalRequestLine = ApprovalRequestLine
SAPB1.ApprovalRequest.ApprovalRequestLineCollection = ApprovalRequestLineCollection
SAPB1.ApprovalRequest.ApprovalRequestDecision = ApprovalRequestDecision
SAPB1.ApprovalRequest.ApprovalRequestDecisionCollection = ApprovalRequestDecisionCollection

SAPB1.ApprovalRequest.BoApprovalRequestStatusEnum = BoApprovalRequestStatusEnum

SAPB1.ApprovalRequest.create = function (rawObject) {
    var instance = new SAPB1.ApprovalRequest();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalRequest.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalRequest;
