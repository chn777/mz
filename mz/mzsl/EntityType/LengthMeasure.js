

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LengthMeasure = function () {
}
SAPB1.LengthMeasure.prototype = new SAPB1.EntityType();
SAPB1.LengthMeasure.prototype.constructor = SAPB1.LengthMeasure;
SAPB1.LengthMeasure.prototype.keys.push('UnitCode');
SAPB1.LengthMeasure.UnitCode = { valueOf: function(){return 'UnitCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LengthMeasure.UnitDisplay = { valueOf: function(){return 'UnitDisplay';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LengthMeasure.UnitName = { valueOf: function(){return 'UnitName';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LengthMeasure.UnitCodeforQuantityDisplay = { valueOf: function(){return 'UnitCodeforQuantityDisplay';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LengthMeasure.UnitLengthinmm = { valueOf: function(){return 'UnitLengthinmm';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LengthMeasure.prototype.UnitCode = new Number();
SAPB1.LengthMeasure.prototype.UnitDisplay = new String();
SAPB1.LengthMeasure.prototype.UnitName = new String();
SAPB1.LengthMeasure.prototype.UnitCodeforQuantityDisplay = new String();
SAPB1.LengthMeasure.prototype.UnitLengthinmm = new Number();



SAPB1.LengthMeasure.create = function (rawObject) {
    var instance = new SAPB1.LengthMeasure();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LengthMeasure.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LengthMeasure;
