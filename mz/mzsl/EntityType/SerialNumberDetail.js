

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SerialNumberDetail = function () {
}
SAPB1.SerialNumberDetail.prototype = new SAPB1.EntityType();
SAPB1.SerialNumberDetail.prototype.constructor = SAPB1.SerialNumberDetail;
SAPB1.SerialNumberDetail.prototype.keys.push('DocEntry');
SAPB1.SerialNumberDetail.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.MfrSerialNo = { valueOf: function(){return 'MfrSerialNo';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.SerialNumber = { valueOf: function(){return 'SerialNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.LotNumber = { valueOf: function(){return 'LotNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.SystemNumber = { valueOf: function(){return 'SystemNumber';}, Type: 'Edm.Int32', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.AdmissionDate = { valueOf: function(){return 'AdmissionDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.ManufacturingDate = { valueOf: function(){return 'ManufacturingDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.ExpirationDate = { valueOf: function(){return 'ExpirationDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.MfrWarrantyStart = { valueOf: function(){return 'MfrWarrantyStart';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.MFrWarrantyEnd = { valueOf: function(){return 'MFrWarrantyEnd';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetail.prototype.DocEntry = new Number();
SAPB1.SerialNumberDetail.prototype.ItemCode = new String();
SAPB1.SerialNumberDetail.prototype.ItemDescription = new String();
SAPB1.SerialNumberDetail.prototype.MfrSerialNo = new String();
SAPB1.SerialNumberDetail.prototype.SerialNumber = new String();
SAPB1.SerialNumberDetail.prototype.LotNumber = new String();
SAPB1.SerialNumberDetail.prototype.SystemNumber = new Number();
SAPB1.SerialNumberDetail.prototype.AdmissionDate = new String();
SAPB1.SerialNumberDetail.prototype.ManufacturingDate = new String();
SAPB1.SerialNumberDetail.prototype.ExpirationDate = new String();
SAPB1.SerialNumberDetail.prototype.MfrWarrantyStart = new String();
SAPB1.SerialNumberDetail.prototype.MFrWarrantyEnd = new String();
SAPB1.SerialNumberDetail.prototype.Location = new String();
SAPB1.SerialNumberDetail.prototype.Details = new String();



SAPB1.SerialNumberDetail.create = function (rawObject) {
    var instance = new SAPB1.SerialNumberDetail();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SerialNumberDetail.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SerialNumberDetail;
