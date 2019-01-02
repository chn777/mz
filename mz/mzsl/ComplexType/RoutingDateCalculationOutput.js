

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RoutingDateCalculationOutput = function () {
}
SAPB1.RoutingDateCalculationOutput.prototype = new SAPB1.ComplexType();
SAPB1.RoutingDateCalculationOutput.prototype.constructor = SAPB1.RoutingDateCalculationOutput;
SAPB1.RoutingDateCalculationOutput.ResultDate = { valueOf: function(){return 'ResultDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationOutput.Proportion = { valueOf: function(){return 'Proportion';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationOutput.prototype.ResultDate = new String();
SAPB1.RoutingDateCalculationOutput.prototype.Proportion = new Number();



SAPB1.RoutingDateCalculationOutput.create = function (rawObject) {
    var instance = new SAPB1.RoutingDateCalculationOutput();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RoutingDateCalculationOutput.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RoutingDateCalculationOutput;
