
var CounterTypeEnum = require('EnumType/CounterTypeEnum')
var MultipleCounterRoleEnum = require('EnumType/MultipleCounterRoleEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryCountingSerialNumber = function () {
}
SAPB1.InventoryCountingSerialNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryCountingSerialNumber.prototype.constructor = SAPB1.InventoryCountingSerialNumber;
SAPB1.InventoryCountingSerialNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.ReceptionDate = { valueOf: function(){return 'ReceptionDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.WarrantyStart = { valueOf: function(){return 'WarrantyStart';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.WarrantyEnd = { valueOf: function(){return 'WarrantyEnd';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.BatchID = { valueOf: function(){return 'BatchID';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.SystemSerialNumber = { valueOf: function(){return 'SystemSerialNumber';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 13, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.CounterType = { valueOf: function(){return 'CounterType';}, Type: 'CounterTypeEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.CounterID = { valueOf: function(){return 'CounterID';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.MultipleCounterRole = { valueOf: function(){return 'MultipleCounterRole';}, Type: 'MultipleCounterRoleEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingSerialNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.InventoryCountingSerialNumber.prototype.InternalSerialNumber = new String();
SAPB1.InventoryCountingSerialNumber.prototype.ExpiryDate = new String();
SAPB1.InventoryCountingSerialNumber.prototype.ManufactureDate = new String();
SAPB1.InventoryCountingSerialNumber.prototype.ReceptionDate = new String();
SAPB1.InventoryCountingSerialNumber.prototype.WarrantyStart = new String();
SAPB1.InventoryCountingSerialNumber.prototype.WarrantyEnd = new String();
SAPB1.InventoryCountingSerialNumber.prototype.Location = new String();
SAPB1.InventoryCountingSerialNumber.prototype.Notes = new String();
SAPB1.InventoryCountingSerialNumber.prototype.BatchID = new String();
SAPB1.InventoryCountingSerialNumber.prototype.SystemSerialNumber = new Number();
SAPB1.InventoryCountingSerialNumber.prototype.BaseLineNumber = new Number();
SAPB1.InventoryCountingSerialNumber.prototype.Quantity = new Number();
SAPB1.InventoryCountingSerialNumber.prototype.DocumentEntry = new Number();
SAPB1.InventoryCountingSerialNumber.prototype.CounterType = new String();
SAPB1.InventoryCountingSerialNumber.prototype.CounterID = new Number();
SAPB1.InventoryCountingSerialNumber.prototype.MultipleCounterRole = new String();
SAPB1.InventoryCountingSerialNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryCountingSerialNumber.prototype.TrackingNoteLine = new Number();


SAPB1.InventoryCountingSerialNumber.CounterTypeEnum = CounterTypeEnum
SAPB1.InventoryCountingSerialNumber.MultipleCounterRoleEnum = MultipleCounterRoleEnum

SAPB1.InventoryCountingSerialNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryCountingSerialNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryCountingSerialNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryCountingSerialNumber;
