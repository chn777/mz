

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FactoringIndicatorParams = function () {
}
SAPB1.FactoringIndicatorParams.prototype = new SAPB1.ComplexType();
SAPB1.FactoringIndicatorParams.prototype.constructor = SAPB1.FactoringIndicatorParams;
SAPB1.FactoringIndicatorParams.IndicatorCode = { valueOf: function(){return 'IndicatorCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FactoringIndicatorParams.prototype.IndicatorCode = new String();



SAPB1.FactoringIndicatorParams.create = function (rawObject) {
    var instance = new SAPB1.FactoringIndicatorParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FactoringIndicatorParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FactoringIndicatorParams;
