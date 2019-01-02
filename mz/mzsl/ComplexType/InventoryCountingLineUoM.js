
var CounterTypeEnum = require('EnumType/CounterTypeEnum')
var MultipleCounterRoleEnum = require('EnumType/MultipleCounterRoleEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryCountingLineUoM = function () {
}
SAPB1.InventoryCountingLineUoM.prototype = new SAPB1.ComplexType();
SAPB1.InventoryCountingLineUoM.prototype.constructor = SAPB1.InventoryCountingLineUoM;
SAPB1.InventoryCountingLineUoM.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.ChildNumber = { valueOf: function(){return 'ChildNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.UoMCountedQuantity = { valueOf: function(){return 'UoMCountedQuantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.ItemsPerUnit = { valueOf: function(){return 'ItemsPerUnit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.CountedQuantity = { valueOf: function(){return 'CountedQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.BarCode = { valueOf: function(){return 'BarCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.CounterType = { valueOf: function(){return 'CounterType';}, Type: 'CounterTypeEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.CounterID = { valueOf: function(){return 'CounterID';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.MultipleCounterRole = { valueOf: function(){return 'MultipleCounterRole';}, Type: 'MultipleCounterRoleEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLineUoM.prototype.DocumentEntry = new Number();
SAPB1.InventoryCountingLineUoM.prototype.LineNumber = new Number();
SAPB1.InventoryCountingLineUoM.prototype.ChildNumber = new Number();
SAPB1.InventoryCountingLineUoM.prototype.UoMCountedQuantity = new Number();
SAPB1.InventoryCountingLineUoM.prototype.ItemsPerUnit = new Number();
SAPB1.InventoryCountingLineUoM.prototype.CountedQuantity = new Number();
SAPB1.InventoryCountingLineUoM.prototype.UoMCode = new String();
SAPB1.InventoryCountingLineUoM.prototype.BarCode = new String();
SAPB1.InventoryCountingLineUoM.prototype.CounterType = new String();
SAPB1.InventoryCountingLineUoM.prototype.CounterID = new Number();
SAPB1.InventoryCountingLineUoM.prototype.MultipleCounterRole = new String();


SAPB1.InventoryCountingLineUoM.CounterTypeEnum = CounterTypeEnum
SAPB1.InventoryCountingLineUoM.MultipleCounterRoleEnum = MultipleCounterRoleEnum

SAPB1.InventoryCountingLineUoM.create = function (rawObject) {
    var instance = new SAPB1.InventoryCountingLineUoM();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryCountingLineUoM.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryCountingLineUoM;
