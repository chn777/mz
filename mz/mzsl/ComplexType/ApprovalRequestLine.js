
var BoApprovalRequestDecisionEnum = require('EnumType/BoApprovalRequestDecisionEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalRequestLine = function () {
}
SAPB1.ApprovalRequestLine.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalRequestLine.prototype.constructor = SAPB1.ApprovalRequestLine;
SAPB1.ApprovalRequestLine.StageCode = { valueOf: function(){return 'StageCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.UserID = { valueOf: function(){return 'UserID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.Status = { valueOf: function(){return 'Status';}, Type: 'BoApprovalRequestDecisionEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Time', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.CreationTime = { valueOf: function(){return 'CreationTime';}, Type: 'Edm.Time', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestLine.prototype.StageCode = new Number();
SAPB1.ApprovalRequestLine.prototype.UserID = new Number();
SAPB1.ApprovalRequestLine.prototype.Status = new String();
SAPB1.ApprovalRequestLine.prototype.Remarks = new String();
SAPB1.ApprovalRequestLine.prototype.UpdateDate = new String();
SAPB1.ApprovalRequestLine.prototype.UpdateTime = new String();
SAPB1.ApprovalRequestLine.prototype.CreationDate = new String();
SAPB1.ApprovalRequestLine.prototype.CreationTime = new String();


SAPB1.ApprovalRequestLine.BoApprovalRequestDecisionEnum = BoApprovalRequestDecisionEnum

SAPB1.ApprovalRequestLine.create = function (rawObject) {
    var instance = new SAPB1.ApprovalRequestLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalRequestLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalRequestLine;
