
var BoApprovalRequestDecisionEnum = require('EnumType/BoApprovalRequestDecisionEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalRequestDecision = function () {
}
SAPB1.ApprovalRequestDecision.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalRequestDecision.prototype.constructor = SAPB1.ApprovalRequestDecision;
SAPB1.ApprovalRequestDecision.ApproverUserName = { valueOf: function(){return 'ApproverUserName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestDecision.ApproverPassword = { valueOf: function(){return 'ApproverPassword';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestDecision.Status = { valueOf: function(){return 'Status';}, Type: 'BoApprovalRequestDecisionEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestDecision.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestDecision.prototype.ApproverUserName = new String();
SAPB1.ApprovalRequestDecision.prototype.ApproverPassword = new String();
SAPB1.ApprovalRequestDecision.prototype.Status = new String();
SAPB1.ApprovalRequestDecision.prototype.Remarks = new String();


SAPB1.ApprovalRequestDecision.BoApprovalRequestDecisionEnum = BoApprovalRequestDecisionEnum

SAPB1.ApprovalRequestDecision.create = function (rawObject) {
    var instance = new SAPB1.ApprovalRequestDecision();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalRequestDecision.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalRequestDecision;
