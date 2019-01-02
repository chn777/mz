
var BatchDetailServiceStatusEnum = require('EnumType/BatchDetailServiceStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BatchNumberDetail = function () {
}
SAPB1.BatchNumberDetail.prototype = new SAPB1.EntityType();
SAPB1.BatchNumberDetail.prototype.constructor = SAPB1.BatchNumberDetail;
SAPB1.BatchNumberDetail.prototype.keys.push('DocEntry');
SAPB1.BatchNumberDetail.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.Status = { valueOf: function(){return 'Status';}, Type: 'BatchDetailServiceStatusEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.Batch = { valueOf: function(){return 'Batch';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.BatchAttribute1 = { valueOf: function(){return 'BatchAttribute1';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.BatchAttribute2 = { valueOf: function(){return 'BatchAttribute2';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.AdmissionDate = { valueOf: function(){return 'AdmissionDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.ManufacturingDate = { valueOf: function(){return 'ManufacturingDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.ExpirationDate = { valueOf: function(){return 'ExpirationDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.SystemNumber = { valueOf: function(){return 'SystemNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BatchNumberDetail.prototype.DocEntry = new Number();
SAPB1.BatchNumberDetail.prototype.ItemCode = new String();
SAPB1.BatchNumberDetail.prototype.ItemDescription = new String();
SAPB1.BatchNumberDetail.prototype.Status = new String();
SAPB1.BatchNumberDetail.prototype.Batch = new String();
SAPB1.BatchNumberDetail.prototype.BatchAttribute1 = new String();
SAPB1.BatchNumberDetail.prototype.BatchAttribute2 = new String();
SAPB1.BatchNumberDetail.prototype.AdmissionDate = new String();
SAPB1.BatchNumberDetail.prototype.ManufacturingDate = new String();
SAPB1.BatchNumberDetail.prototype.ExpirationDate = new String();
SAPB1.BatchNumberDetail.prototype.Details = new String();
SAPB1.BatchNumberDetail.prototype.SystemNumber = new Number();


SAPB1.BatchNumberDetail.BatchDetailServiceStatusEnum = BatchDetailServiceStatusEnum

SAPB1.BatchNumberDetail.create = function (rawObject) {
    var instance = new SAPB1.BatchNumberDetail();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BatchNumberDetail.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BatchNumberDetail;
