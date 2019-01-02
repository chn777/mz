
var ItemUoMTypeEnum = require('EnumType/ItemUoMTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemUoMPackage = function () {
}
SAPB1.ItemUoMPackage.prototype = new SAPB1.ComplexType();
SAPB1.ItemUoMPackage.prototype.constructor = SAPB1.ItemUoMPackage;
SAPB1.ItemUoMPackage.UoMType = { valueOf: function(){return 'UoMType';}, Type: 'ItemUoMTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.PackageTypeEntry = { valueOf: function(){return 'PackageTypeEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Length1 = { valueOf: function(){return 'Length1';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Length1Unit = { valueOf: function(){return 'Length1Unit';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Length2 = { valueOf: function(){return 'Length2';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Length2Unit = { valueOf: function(){return 'Length2Unit';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Width1 = { valueOf: function(){return 'Width1';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Width1Unit = { valueOf: function(){return 'Width1Unit';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Width2 = { valueOf: function(){return 'Width2';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Width2Unit = { valueOf: function(){return 'Width2Unit';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Height1 = { valueOf: function(){return 'Height1';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Height1Unit = { valueOf: function(){return 'Height1Unit';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Height2 = { valueOf: function(){return 'Height2';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Height2Unit = { valueOf: function(){return 'Height2Unit';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Volume = { valueOf: function(){return 'Volume';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.VolumeUnit = { valueOf: function(){return 'VolumeUnit';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Weight1 = { valueOf: function(){return 'Weight1';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Weight1Unit = { valueOf: function(){return 'Weight1Unit';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Weight2 = { valueOf: function(){return 'Weight2';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.Weight2Unit = { valueOf: function(){return 'Weight2Unit';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.QuantityPerPackage = { valueOf: function(){return 'QuantityPerPackage';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemUoMPackage.prototype.UoMType = new String();
SAPB1.ItemUoMPackage.prototype.UoMEntry = new Number();
SAPB1.ItemUoMPackage.prototype.PackageTypeEntry = new Number();
SAPB1.ItemUoMPackage.prototype.Length1 = new Number();
SAPB1.ItemUoMPackage.prototype.Length1Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Length2 = new Number();
SAPB1.ItemUoMPackage.prototype.Length2Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Width1 = new Number();
SAPB1.ItemUoMPackage.prototype.Width1Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Width2 = new Number();
SAPB1.ItemUoMPackage.prototype.Width2Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Height1 = new Number();
SAPB1.ItemUoMPackage.prototype.Height1Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Height2 = new Number();
SAPB1.ItemUoMPackage.prototype.Height2Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Volume = new Number();
SAPB1.ItemUoMPackage.prototype.VolumeUnit = new Number();
SAPB1.ItemUoMPackage.prototype.Weight1 = new Number();
SAPB1.ItemUoMPackage.prototype.Weight1Unit = new Number();
SAPB1.ItemUoMPackage.prototype.Weight2 = new Number();
SAPB1.ItemUoMPackage.prototype.Weight2Unit = new Number();
SAPB1.ItemUoMPackage.prototype.QuantityPerPackage = new Number();


SAPB1.ItemUoMPackage.ItemUoMTypeEnum = ItemUoMTypeEnum

SAPB1.ItemUoMPackage.create = function (rawObject) {
    var instance = new SAPB1.ItemUoMPackage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemUoMPackage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemUoMPackage;
