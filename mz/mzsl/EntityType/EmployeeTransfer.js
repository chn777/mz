var EmployeeTransferDetail = require('ComplexType/EmployeeTransferDetail')
var EmployeeTransferDetailCollection = require('ComplexType/EmployeeTransferDetailCollection')

var EmployeeTransferStatusEnum = require('EnumType/EmployeeTransferStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeTransfer = function () {
}
SAPB1.EmployeeTransfer.prototype = new SAPB1.EntityType();
SAPB1.EmployeeTransfer.prototype.constructor = SAPB1.EmployeeTransfer;
SAPB1.EmployeeTransfer.prototype.keys.push('TransferID');
SAPB1.EmployeeTransfer.TransferID = { valueOf: function(){return 'TransferID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.TransStartDate = { valueOf: function(){return 'TransStartDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.TransStartTime = { valueOf: function(){return 'TransStartTime';}, Type: 'Edm.Time', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.TransEndDate = { valueOf: function(){return 'TransEndDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.TransEndTime = { valueOf: function(){return 'TransEndTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.Status = { valueOf: function(){return 'Status';}, Type: 'EmployeeTransferStatusEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.Comment = { valueOf: function(){return 'Comment';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeTransfer.EmployeeTransferDetails = { valueOf: function(){return 'EmployeeTransferDetails';}, Type: 'EmployeeTransferDetail', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.EmployeeTransfer.prototype.TransferID = new Number();
SAPB1.EmployeeTransfer.prototype.TransStartDate = new String();
SAPB1.EmployeeTransfer.prototype.TransStartTime = new String();
SAPB1.EmployeeTransfer.prototype.TransEndDate = new String();
SAPB1.EmployeeTransfer.prototype.TransEndTime = new String();
SAPB1.EmployeeTransfer.prototype.Status = new String();
SAPB1.EmployeeTransfer.prototype.Comment = new String();
SAPB1.EmployeeTransfer.prototype.EmployeeTransferDetails = new EmployeeTransferDetailCollection();

SAPB1.EmployeeTransfer.EmployeeTransferDetail = EmployeeTransferDetail
SAPB1.EmployeeTransfer.EmployeeTransferDetailCollection = EmployeeTransferDetailCollection

SAPB1.EmployeeTransfer.EmployeeTransferStatusEnum = EmployeeTransferStatusEnum

SAPB1.EmployeeTransfer.create = function (rawObject) {
    var instance = new SAPB1.EmployeeTransfer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeTransfer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeTransfer;
