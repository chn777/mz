
var EmployeeTransferProcessingStatusEnum = require('EnumType/EmployeeTransferProcessingStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeTransferDetail = function () {
}
SAPB1.EmployeeTransferDetail.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeTransferDetail.prototype.constructor = SAPB1.EmployeeTransferDetail;
SAPB1.EmployeeTransferDetail.TransferID = { valueOf: function(){return 'TransferID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransferDetail.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransferDetail.TransferedDate = { valueOf: function(){return 'TransferedDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransferDetail.TransferedTime = { valueOf: function(){return 'TransferedTime';}, Type: 'Edm.Time', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransferDetail.Status = { valueOf: function(){return 'Status';}, Type: 'EmployeeTransferProcessingStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransferDetail.Comment = { valueOf: function(){return 'Comment';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransferDetail.prototype.TransferID = new Number();
SAPB1.EmployeeTransferDetail.prototype.EmployeeID = new Number();
SAPB1.EmployeeTransferDetail.prototype.TransferedDate = new String();
SAPB1.EmployeeTransferDetail.prototype.TransferedTime = new String();
SAPB1.EmployeeTransferDetail.prototype.Status = new String();
SAPB1.EmployeeTransferDetail.prototype.Comment = new String();


SAPB1.EmployeeTransferDetail.EmployeeTransferProcessingStatusEnum = EmployeeTransferProcessingStatusEnum

SAPB1.EmployeeTransferDetail.create = function (rawObject) {
    var instance = new SAPB1.EmployeeTransferDetail();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeTransferDetail.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeTransferDetail;
