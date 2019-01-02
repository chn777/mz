

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PackagesType = function () {
}
SAPB1.PackagesType.prototype = new SAPB1.EntityType();
SAPB1.PackagesType.prototype.constructor = SAPB1.PackagesType;
SAPB1.PackagesType.prototype.keys.push('Code');
SAPB1.PackagesType.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Length1 = { valueOf: function(){return 'Length1';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Length1Unit = { valueOf: function(){return 'Length1Unit';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Length2 = { valueOf: function(){return 'Length2';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Length2Unit = { valueOf: function(){return 'Length2Unit';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Width1 = { valueOf: function(){return 'Width1';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Width1Unit = { valueOf: function(){return 'Width1Unit';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Width2 = { valueOf: function(){return 'Width2';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Width2Unit = { valueOf: function(){return 'Width2Unit';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Height1 = { valueOf: function(){return 'Height1';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Height1Unit = { valueOf: function(){return 'Height1Unit';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Height2 = { valueOf: function(){return 'Height2';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Height2Unit = { valueOf: function(){return 'Height2Unit';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Volume = { valueOf: function(){return 'Volume';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.VolumeUnit = { valueOf: function(){return 'VolumeUnit';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Weight1 = { valueOf: function(){return 'Weight1';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Weight1Unit = { valueOf: function(){return 'Weight1Unit';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Weight2 = { valueOf: function(){return 'Weight2';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.Weight2Unit = { valueOf: function(){return 'Weight2Unit';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PackagesType.prototype.Type = new String();
SAPB1.PackagesType.prototype.Code = new Number();
SAPB1.PackagesType.prototype.Length1 = new Number();
SAPB1.PackagesType.prototype.Length1Unit = new Number();
SAPB1.PackagesType.prototype.Length2 = new Number();
SAPB1.PackagesType.prototype.Length2Unit = new Number();
SAPB1.PackagesType.prototype.Width1 = new Number();
SAPB1.PackagesType.prototype.Width1Unit = new Number();
SAPB1.PackagesType.prototype.Width2 = new Number();
SAPB1.PackagesType.prototype.Width2Unit = new Number();
SAPB1.PackagesType.prototype.Height1 = new Number();
SAPB1.PackagesType.prototype.Height1Unit = new Number();
SAPB1.PackagesType.prototype.Height2 = new Number();
SAPB1.PackagesType.prototype.Height2Unit = new Number();
SAPB1.PackagesType.prototype.Volume = new Number();
SAPB1.PackagesType.prototype.VolumeUnit = new Number();
SAPB1.PackagesType.prototype.Weight1 = new Number();
SAPB1.PackagesType.prototype.Weight1Unit = new Number();
SAPB1.PackagesType.prototype.Weight2 = new Number();
SAPB1.PackagesType.prototype.Weight2Unit = new Number();



SAPB1.PackagesType.create = function (rawObject) {
    var instance = new SAPB1.PackagesType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PackagesType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PackagesType;
