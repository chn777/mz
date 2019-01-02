

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesForecastParams = function () {
}
SAPB1.SalesForecastParams.prototype = new SAPB1.ComplexType();
SAPB1.SalesForecastParams.prototype.constructor = SAPB1.SalesForecastParams;
SAPB1.SalesForecastParams.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecastParams.prototype.Numerator = new Number();



SAPB1.SalesForecastParams.create = function (rawObject) {
    var instance = new SAPB1.SalesForecastParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesForecastParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesForecastParams;
