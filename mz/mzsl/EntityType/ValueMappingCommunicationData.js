
var VMCommunicationTypeEnum = require('EnumType/VMCommunicationTypeEnum')
var VMCommunicationStatusEnum = require('EnumType/VMCommunicationStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ValueMappingCommunicationData = function () {
}
SAPB1.ValueMappingCommunicationData.prototype = new SAPB1.EntityType();
SAPB1.ValueMappingCommunicationData.prototype.constructor = SAPB1.ValueMappingCommunicationData;
SAPB1.ValueMappingCommunicationData.prototype.keys.push('AbsEntry');
SAPB1.ValueMappingCommunicationData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.ThirdPartySystemId = { valueOf: function(){return 'ThirdPartySystemId';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.ObjectId = { valueOf: function(){return 'ObjectId';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.CommunicationType = { valueOf: function(){return 'CommunicationType';}, Type: 'VMCommunicationTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.StartTime = { valueOf: function(){return 'StartTime';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.EndTime = { valueOf: function(){return 'EndTime';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.Message = { valueOf: function(){return 'Message';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.Status = { valueOf: function(){return 'Status';}, Type: 'VMCommunicationStatusEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ValueMappingCommunicationData.prototype.AbsEntry = new Number();
SAPB1.ValueMappingCommunicationData.prototype.ThirdPartySystemId = new Number();
SAPB1.ValueMappingCommunicationData.prototype.ObjectId = new Number();
SAPB1.ValueMappingCommunicationData.prototype.CommunicationType = new String();
SAPB1.ValueMappingCommunicationData.prototype.StartDate = new String();
SAPB1.ValueMappingCommunicationData.prototype.StartTime = new Number();
SAPB1.ValueMappingCommunicationData.prototype.EndDate = new String();
SAPB1.ValueMappingCommunicationData.prototype.EndTime = new Number();
SAPB1.ValueMappingCommunicationData.prototype.Message = new String();
SAPB1.ValueMappingCommunicationData.prototype.Status = new String();


SAPB1.ValueMappingCommunicationData.VMCommunicationTypeEnum = VMCommunicationTypeEnum
SAPB1.ValueMappingCommunicationData.VMCommunicationStatusEnum = VMCommunicationStatusEnum

SAPB1.ValueMappingCommunicationData.create = function (rawObject) {
    var instance = new SAPB1.ValueMappingCommunicationData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ValueMappingCommunicationData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ValueMappingCommunicationData;
