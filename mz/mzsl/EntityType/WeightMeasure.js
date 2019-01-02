

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WeightMeasure = function () {
}
SAPB1.WeightMeasure.prototype = new SAPB1.EntityType();
SAPB1.WeightMeasure.prototype.constructor = SAPB1.WeightMeasure;
SAPB1.WeightMeasure.prototype.keys.push('UnitCode');
SAPB1.WeightMeasure.UnitCode = { valueOf: function(){return 'UnitCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WeightMeasure.UnitDisplay = { valueOf: function(){return 'UnitDisplay';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WeightMeasure.UnitName = { valueOf: function(){return 'UnitName';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WeightMeasure.UnitWeightinmg = { valueOf: function(){return 'UnitWeightinmg';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WeightMeasure.prototype.UnitCode = new Number();
SAPB1.WeightMeasure.prototype.UnitDisplay = new String();
SAPB1.WeightMeasure.prototype.UnitName = new String();
SAPB1.WeightMeasure.prototype.UnitWeightinmg = new Number();



SAPB1.WeightMeasure.create = function (rawObject) {
    var instance = new SAPB1.WeightMeasure();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WeightMeasure.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WeightMeasure;
