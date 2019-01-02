var ItemUoMPackage = require('ComplexType/ItemUoMPackage')
var ItemUoMPackageCollection = require('ComplexType/ItemUoMPackageCollection')

var ItemUoMTypeEnum = require('EnumType/ItemUoMTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemUnitOfMeasurement = function () {
}
SAPB1.ItemUnitOfMeasurement.prototype = new SAPB1.ComplexType();
SAPB1.ItemUnitOfMeasurement.prototype.constructor = SAPB1.ItemUnitOfMeasurement;
SAPB1.ItemUnitOfMeasurement.UoMType = { valueOf: function(){return 'UoMType';}, Type: 'ItemUoMTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.DefaultBarcode = { valueOf: function(){return 'DefaultBarcode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.DefaultPackage = { valueOf: function(){return 'DefaultPackage';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Length1 = { valueOf: function(){return 'Length1';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Length1Unit = { valueOf: function(){return 'Length1Unit';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Length2 = { valueOf: function(){return 'Length2';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Length2Unit = { valueOf: function(){return 'Length2Unit';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Width1 = { valueOf: function(){return 'Width1';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Width1Unit = { valueOf: function(){return 'Width1Unit';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Width2 = { valueOf: function(){return 'Width2';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Width2Unit = { valueOf: function(){return 'Width2Unit';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Height1 = { valueOf: function(){return 'Height1';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Height1Unit = { valueOf: function(){return 'Height1Unit';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Height2 = { valueOf: function(){return 'Height2';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Height2Unit = { valueOf: function(){return 'Height2Unit';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Volume = { valueOf: function(){return 'Volume';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.VolumeUnit = { valueOf: function(){return 'VolumeUnit';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Weight1 = { valueOf: function(){return 'Weight1';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Weight1Unit = { valueOf: function(){return 'Weight1Unit';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Weight2 = { valueOf: function(){return 'Weight2';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.Weight2Unit = { valueOf: function(){return 'Weight2Unit';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUnitOfMeasurement.ItemUoMPackageCollection = { valueOf: function(){return 'ItemUoMPackageCollection';}, Type: 'ItemUoMPackage', Index: 22, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ItemUnitOfMeasurement.prototype.UoMType = new String();
SAPB1.ItemUnitOfMeasurement.prototype.UoMEntry = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.DefaultBarcode = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.DefaultPackage = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Length1 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Length1Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Length2 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Length2Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Width1 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Width1Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Width2 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Width2Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Height1 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Height1Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Height2 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Height2Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Volume = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.VolumeUnit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Weight1 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Weight1Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Weight2 = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.Weight2Unit = new Number();
SAPB1.ItemUnitOfMeasurement.prototype.ItemUoMPackageCollection = new ItemUoMPackageCollection();

SAPB1.ItemUnitOfMeasurement.ItemUoMPackage = ItemUoMPackage
SAPB1.ItemUnitOfMeasurement.ItemUoMPackageCollection = ItemUoMPackageCollection

SAPB1.ItemUnitOfMeasurement.ItemUoMTypeEnum = ItemUoMTypeEnum

SAPB1.ItemUnitOfMeasurement.create = function (rawObject) {
    var instance = new SAPB1.ItemUnitOfMeasurement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemUnitOfMeasurement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemUnitOfMeasurement;
