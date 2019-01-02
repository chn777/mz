

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SerialNumber = function () {
}
SAPB1.SerialNumber.prototype = new SAPB1.ComplexType();
SAPB1.SerialNumber.prototype.constructor = SAPB1.SerialNumber;
SAPB1.SerialNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.ReceptionDate = { valueOf: function(){return 'ReceptionDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.WarrantyStart = { valueOf: function(){return 'WarrantyStart';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.WarrantyEnd = { valueOf: function(){return 'WarrantyEnd';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.BatchID = { valueOf: function(){return 'BatchID';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.SystemSerialNumber = { valueOf: function(){return 'SystemSerialNumber';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.SerialNumber.prototype.InternalSerialNumber = new String();
SAPB1.SerialNumber.prototype.ExpiryDate = new String();
SAPB1.SerialNumber.prototype.ManufactureDate = new String();
SAPB1.SerialNumber.prototype.ReceptionDate = new String();
SAPB1.SerialNumber.prototype.WarrantyStart = new String();
SAPB1.SerialNumber.prototype.WarrantyEnd = new String();
SAPB1.SerialNumber.prototype.Location = new String();
SAPB1.SerialNumber.prototype.Notes = new String();
SAPB1.SerialNumber.prototype.BatchID = new String();
SAPB1.SerialNumber.prototype.SystemSerialNumber = new Number();
SAPB1.SerialNumber.prototype.BaseLineNumber = new Number();
SAPB1.SerialNumber.prototype.Quantity = new Number();
SAPB1.SerialNumber.prototype.TrackingNote = new Number();
SAPB1.SerialNumber.prototype.TrackingNoteLine = new Number();



SAPB1.SerialNumber.create = function (rawObject) {
    var instance = new SAPB1.SerialNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SerialNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SerialNumber;
