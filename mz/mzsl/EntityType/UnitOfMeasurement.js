

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UnitOfMeasurement = function () {
}
SAPB1.UnitOfMeasurement.prototype = new SAPB1.EntityType();
SAPB1.UnitOfMeasurement.prototype.constructor = SAPB1.UnitOfMeasurement;
SAPB1.UnitOfMeasurement.prototype.keys.push('AbsEntry');
SAPB1.UnitOfMeasurement.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Length1 = { valueOf: function(){return 'Length1';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Length1Unit = { valueOf: function(){return 'Length1Unit';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Length2 = { valueOf: function(){return 'Length2';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Length2Unit = { valueOf: function(){return 'Length2Unit';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Width1 = { valueOf: function(){return 'Width1';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Width1Unit = { valueOf: function(){return 'Width1Unit';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Width2 = { valueOf: function(){return 'Width2';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Width2Unit = { valueOf: function(){return 'Width2Unit';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Height1 = { valueOf: function(){return 'Height1';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Height1Unit = { valueOf: function(){return 'Height1Unit';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Height2 = { valueOf: function(){return 'Height2';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Height2Unit = { valueOf: function(){return 'Height2Unit';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Volume = { valueOf: function(){return 'Volume';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.VolumeUnit = { valueOf: function(){return 'VolumeUnit';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Weight1 = { valueOf: function(){return 'Weight1';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Weight1Unit = { valueOf: function(){return 'Weight1Unit';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Weight2 = { valueOf: function(){return 'Weight2';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.Weight2Unit = { valueOf: function(){return 'Weight2Unit';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.InternationalSymbol = { valueOf: function(){return 'InternationalSymbol';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurement.prototype.AbsEntry = new Number();
SAPB1.UnitOfMeasurement.prototype.Code = new String();
SAPB1.UnitOfMeasurement.prototype.Name = new String();
SAPB1.UnitOfMeasurement.prototype.Length1 = new Number();
SAPB1.UnitOfMeasurement.prototype.Length1Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Length2 = new Number();
SAPB1.UnitOfMeasurement.prototype.Length2Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Width1 = new Number();
SAPB1.UnitOfMeasurement.prototype.Width1Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Width2 = new Number();
SAPB1.UnitOfMeasurement.prototype.Width2Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Height1 = new Number();
SAPB1.UnitOfMeasurement.prototype.Height1Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Height2 = new Number();
SAPB1.UnitOfMeasurement.prototype.Height2Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Volume = new Number();
SAPB1.UnitOfMeasurement.prototype.VolumeUnit = new Number();
SAPB1.UnitOfMeasurement.prototype.Weight1 = new Number();
SAPB1.UnitOfMeasurement.prototype.Weight1Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.Weight2 = new Number();
SAPB1.UnitOfMeasurement.prototype.Weight2Unit = new Number();
SAPB1.UnitOfMeasurement.prototype.InternationalSymbol = new String();



SAPB1.UnitOfMeasurement.create = function (rawObject) {
    var instance = new SAPB1.UnitOfMeasurement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UnitOfMeasurement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UnitOfMeasurement;
