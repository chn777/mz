

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingBatchNumber = function () {
}
SAPB1.InventoryPostingBatchNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingBatchNumber.prototype.constructor = SAPB1.InventoryPostingBatchNumber;
SAPB1.InventoryPostingBatchNumber.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.BatchNumber = { valueOf: function(){return 'BatchNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.AddmisionDate = { valueOf: function(){return 'AddmisionDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingBatchNumber.prototype.DocumentEntry = new Number();
SAPB1.InventoryPostingBatchNumber.prototype.BatchNumber = new String();
SAPB1.InventoryPostingBatchNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.InventoryPostingBatchNumber.prototype.InternalSerialNumber = new String();
SAPB1.InventoryPostingBatchNumber.prototype.ExpiryDate = new String();
SAPB1.InventoryPostingBatchNumber.prototype.ManufactureDate = new String();
SAPB1.InventoryPostingBatchNumber.prototype.AddmisionDate = new String();
SAPB1.InventoryPostingBatchNumber.prototype.Location = new String();
SAPB1.InventoryPostingBatchNumber.prototype.Notes = new String();
SAPB1.InventoryPostingBatchNumber.prototype.Quantity = new Number();
SAPB1.InventoryPostingBatchNumber.prototype.BaseLineNumber = new Number();
SAPB1.InventoryPostingBatchNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryPostingBatchNumber.prototype.TrackingNoteLine = new Number();



SAPB1.InventoryPostingBatchNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingBatchNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingBatchNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingBatchNumber;
