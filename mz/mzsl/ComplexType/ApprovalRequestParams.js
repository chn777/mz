
var BoApprovalRequestStatusEnum = require('EnumType/BoApprovalRequestStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalRequestParams = function () {
}
SAPB1.ApprovalRequestParams.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalRequestParams.prototype.constructor = SAPB1.ApprovalRequestParams;
SAPB1.ApprovalRequestParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestParams.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestParams.Status = { valueOf: function(){return 'Status';}, Type: 'BoApprovalRequestStatusEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalRequestParams.prototype.Code = new Number();
SAPB1.ApprovalRequestParams.prototype.Remarks = new String();
SAPB1.ApprovalRequestParams.prototype.Status = new String();


SAPB1.ApprovalRequestParams.BoApprovalRequestStatusEnum = BoApprovalRequestStatusEnum

SAPB1.ApprovalRequestParams.create = function (rawObject) {
    var instance = new SAPB1.ApprovalRequestParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalRequestParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalRequestParams;
