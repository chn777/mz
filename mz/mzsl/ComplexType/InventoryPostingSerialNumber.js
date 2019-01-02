

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingSerialNumber = function () {
}
SAPB1.InventoryPostingSerialNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingSerialNumber.prototype.constructor = SAPB1.InventoryPostingSerialNumber;
SAPB1.InventoryPostingSerialNumber.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.ReceptionDate = { valueOf: function(){return 'ReceptionDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.WarrantyStart = { valueOf: function(){return 'WarrantyStart';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.WarrantyEnd = { valueOf: function(){return 'WarrantyEnd';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.BatchID = { valueOf: function(){return 'BatchID';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.SystemSerialNumber = { valueOf: function(){return 'SystemSerialNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingSerialNumber.prototype.DocumentEntry = new Number();
SAPB1.InventoryPostingSerialNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.InventoryPostingSerialNumber.prototype.InternalSerialNumber = new String();
SAPB1.InventoryPostingSerialNumber.prototype.ExpiryDate = new String();
SAPB1.InventoryPostingSerialNumber.prototype.ManufactureDate = new String();
SAPB1.InventoryPostingSerialNumber.prototype.ReceptionDate = new String();
SAPB1.InventoryPostingSerialNumber.prototype.WarrantyStart = new String();
SAPB1.InventoryPostingSerialNumber.prototype.WarrantyEnd = new String();
SAPB1.InventoryPostingSerialNumber.prototype.Location = new String();
SAPB1.InventoryPostingSerialNumber.prototype.Notes = new String();
SAPB1.InventoryPostingSerialNumber.prototype.BatchID = new String();
SAPB1.InventoryPostingSerialNumber.prototype.SystemSerialNumber = new Number();
SAPB1.InventoryPostingSerialNumber.prototype.BaseLineNumber = new Number();
SAPB1.InventoryPostingSerialNumber.prototype.Quantity = new Number();
SAPB1.InventoryPostingSerialNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryPostingSerialNumber.prototype.TrackingNoteLine = new Number();



SAPB1.InventoryPostingSerialNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingSerialNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingSerialNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingSerialNumber;
