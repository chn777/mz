

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LengthMeasureParams = function () {
}
SAPB1.LengthMeasureParams.prototype = new SAPB1.ComplexType();
SAPB1.LengthMeasureParams.prototype.constructor = SAPB1.LengthMeasureParams;
SAPB1.LengthMeasureParams.UnitCode = { valueOf: function(){return 'UnitCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LengthMeasureParams.prototype.UnitCode = new Number();



SAPB1.LengthMeasureParams.create = function (rawObject) {
    var instance = new SAPB1.LengthMeasureParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LengthMeasureParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LengthMeasureParams;
