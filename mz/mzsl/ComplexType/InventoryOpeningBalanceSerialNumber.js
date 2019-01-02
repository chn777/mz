

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryOpeningBalanceSerialNumber = function () {
}
SAPB1.InventoryOpeningBalanceSerialNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.constructor = SAPB1.InventoryOpeningBalanceSerialNumber;
SAPB1.InventoryOpeningBalanceSerialNumber.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.ReceptionDate = { valueOf: function(){return 'ReceptionDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.WarrantyStart = { valueOf: function(){return 'WarrantyStart';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.WarrantyEnd = { valueOf: function(){return 'WarrantyEnd';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.BatchID = { valueOf: function(){return 'BatchID';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.SystemSerialNumber = { valueOf: function(){return 'SystemSerialNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.DocumentEntry = new Number();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.InternalSerialNumber = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.ExpiryDate = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.ManufactureDate = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.ReceptionDate = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.WarrantyStart = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.WarrantyEnd = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.Location = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.Notes = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.BatchID = new String();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.SystemSerialNumber = new Number();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.BaseLineNumber = new Number();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.Quantity = new Number();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryOpeningBalanceSerialNumber.prototype.TrackingNoteLine = new Number();



SAPB1.InventoryOpeningBalanceSerialNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryOpeningBalanceSerialNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryOpeningBalanceSerialNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryOpeningBalanceSerialNumber;
