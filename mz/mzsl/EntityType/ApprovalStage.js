var ApprovalStageApprover = require('ComplexType/ApprovalStageApprover')
var ApprovalStageApproverCollection = require('ComplexType/ApprovalStageApproverCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalStage = function () {
}
SAPB1.ApprovalStage.prototype = new SAPB1.EntityType();
SAPB1.ApprovalStage.prototype.constructor = SAPB1.ApprovalStage;
SAPB1.ApprovalStage.prototype.keys.push('Code');
SAPB1.ApprovalStage.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalStage.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalStage.NoOfApproversRequired = { valueOf: function(){return 'NoOfApproversRequired';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalStage.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalStage.ApprovalStageApprovers = { valueOf: function(){return 'ApprovalStageApprovers';}, Type: 'ApprovalStageApprover', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ApprovalStage.prototype.Code = new Number();
SAPB1.ApprovalStage.prototype.Name = new String();
SAPB1.ApprovalStage.prototype.NoOfApproversRequired = new Number();
SAPB1.ApprovalStage.prototype.Remarks = new String();
SAPB1.ApprovalStage.prototype.ApprovalStageApprovers = new ApprovalStageApproverCollection();

SAPB1.ApprovalStage.ApprovalStageApprover = ApprovalStageApprover
SAPB1.ApprovalStage.ApprovalStageApproverCollection = ApprovalStageApproverCollection


SAPB1.ApprovalStage.create = function (rawObject) {
    var instance = new SAPB1.ApprovalStage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalStage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalStage;
