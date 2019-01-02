

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryOpeningBalanceBatchNumber = function () {
}
SAPB1.InventoryOpeningBalanceBatchNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.constructor = SAPB1.InventoryOpeningBalanceBatchNumber;
SAPB1.InventoryOpeningBalanceBatchNumber.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.BatchNumber = { valueOf: function(){return 'BatchNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.AddmisionDate = { valueOf: function(){return 'AddmisionDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.DocumentEntry = new Number();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.BatchNumber = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.InternalSerialNumber = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.ExpiryDate = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.ManufactureDate = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.AddmisionDate = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.Location = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.Notes = new String();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.Quantity = new Number();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.BaseLineNumber = new Number();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryOpeningBalanceBatchNumber.prototype.TrackingNoteLine = new Number();



SAPB1.InventoryOpeningBalanceBatchNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryOpeningBalanceBatchNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryOpeningBalanceBatchNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryOpeningBalanceBatchNumber;
