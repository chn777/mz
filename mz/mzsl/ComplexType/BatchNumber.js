

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BatchNumber = function () {
}
SAPB1.BatchNumber.prototype = new SAPB1.ComplexType();
SAPB1.BatchNumber.prototype.constructor = SAPB1.BatchNumber;
SAPB1.BatchNumber.BatchNumber = { valueOf: function(){return 'BatchNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.ManufacturingDate = { valueOf: function(){return 'ManufacturingDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.AddmisionDate = { valueOf: function(){return 'AddmisionDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BatchNumber.prototype.BatchNumber = new String();
SAPB1.BatchNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.BatchNumber.prototype.InternalSerialNumber = new String();
SAPB1.BatchNumber.prototype.ExpiryDate = new String();
SAPB1.BatchNumber.prototype.ManufacturingDate = new String();
SAPB1.BatchNumber.prototype.AddmisionDate = new String();
SAPB1.BatchNumber.prototype.Location = new String();
SAPB1.BatchNumber.prototype.Notes = new String();
SAPB1.BatchNumber.prototype.Quantity = new Number();
SAPB1.BatchNumber.prototype.BaseLineNumber = new Number();
SAPB1.BatchNumber.prototype.TrackingNote = new Number();
SAPB1.BatchNumber.prototype.TrackingNoteLine = new Number();



SAPB1.BatchNumber.create = function (rawObject) {
    var instance = new SAPB1.BatchNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BatchNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BatchNumber;
