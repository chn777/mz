

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FactoringIndicator = function () {
}
SAPB1.FactoringIndicator.prototype = new SAPB1.EntityType();
SAPB1.FactoringIndicator.prototype.constructor = SAPB1.FactoringIndicator;
SAPB1.FactoringIndicator.prototype.keys.push('IndicatorCode');
SAPB1.FactoringIndicator.IndicatorCode = { valueOf: function(){return 'IndicatorCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FactoringIndicator.IndicatorName = { valueOf: function(){return 'IndicatorName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FactoringIndicator.prototype.IndicatorCode = new String();
SAPB1.FactoringIndicator.prototype.IndicatorName = new String();



SAPB1.FactoringIndicator.create = function (rawObject) {
    var instance = new SAPB1.FactoringIndicator();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FactoringIndicator.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FactoringIndicator;
