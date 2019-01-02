

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DimensionParams = function () {
}
SAPB1.DimensionParams.prototype = new SAPB1.ComplexType();
SAPB1.DimensionParams.prototype.constructor = SAPB1.DimensionParams;
SAPB1.DimensionParams.DimensionCode = { valueOf: function(){return 'DimensionCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DimensionParams.DimensionName = { valueOf: function(){return 'DimensionName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DimensionParams.prototype.DimensionCode = new Number();
SAPB1.DimensionParams.prototype.DimensionName = new String();



SAPB1.DimensionParams.create = function (rawObject) {
    var instance = new SAPB1.DimensionParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DimensionParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DimensionParams;
