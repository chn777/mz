
var CounterTypeEnum = require('EnumType/CounterTypeEnum')
var MultipleCounterRoleEnum = require('EnumType/MultipleCounterRoleEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryCountingBatchNumber = function () {
}
SAPB1.InventoryCountingBatchNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryCountingBatchNumber.prototype.constructor = SAPB1.InventoryCountingBatchNumber;
SAPB1.InventoryCountingBatchNumber.BatchNumber = { valueOf: function(){return 'BatchNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.ManufacturerSerialNumber = { valueOf: function(){return 'ManufacturerSerialNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.InternalSerialNumber = { valueOf: function(){return 'InternalSerialNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.ExpiryDate = { valueOf: function(){return 'ExpiryDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.ManufactureDate = { valueOf: function(){return 'ManufactureDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.AddmisionDate = { valueOf: function(){return 'AddmisionDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.Notes = { valueOf: function(){return 'Notes';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 10, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.CounterType = { valueOf: function(){return 'CounterType';}, Type: 'CounterTypeEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.CounterID = { valueOf: function(){return 'CounterID';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.MultipleCounterRole = { valueOf: function(){return 'MultipleCounterRole';}, Type: 'MultipleCounterRoleEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingBatchNumber.prototype.BatchNumber = new String();
SAPB1.InventoryCountingBatchNumber.prototype.ManufacturerSerialNumber = new String();
SAPB1.InventoryCountingBatchNumber.prototype.InternalSerialNumber = new String();
SAPB1.InventoryCountingBatchNumber.prototype.ExpiryDate = new String();
SAPB1.InventoryCountingBatchNumber.prototype.ManufactureDate = new String();
SAPB1.InventoryCountingBatchNumber.prototype.AddmisionDate = new String();
SAPB1.InventoryCountingBatchNumber.prototype.Location = new String();
SAPB1.InventoryCountingBatchNumber.prototype.Notes = new String();
SAPB1.InventoryCountingBatchNumber.prototype.Quantity = new Number();
SAPB1.InventoryCountingBatchNumber.prototype.BaseLineNumber = new Number();
SAPB1.InventoryCountingBatchNumber.prototype.DocumentEntry = new Number();
SAPB1.InventoryCountingBatchNumber.prototype.CounterType = new String();
SAPB1.InventoryCountingBatchNumber.prototype.CounterID = new Number();
SAPB1.InventoryCountingBatchNumber.prototype.MultipleCounterRole = new String();
SAPB1.InventoryCountingBatchNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryCountingBatchNumber.prototype.TrackingNoteLine = new Number();


SAPB1.InventoryCountingBatchNumber.CounterTypeEnum = CounterTypeEnum
SAPB1.InventoryCountingBatchNumber.MultipleCounterRoleEnum = MultipleCounterRoleEnum

SAPB1.InventoryCountingBatchNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryCountingBatchNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryCountingBatchNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryCountingBatchNumber;
