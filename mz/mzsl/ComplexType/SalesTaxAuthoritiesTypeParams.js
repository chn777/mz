

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxAuthoritiesTypeParams = function () {
}
SAPB1.SalesTaxAuthoritiesTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.SalesTaxAuthoritiesTypeParams.prototype.constructor = SAPB1.SalesTaxAuthoritiesTypeParams;
SAPB1.SalesTaxAuthoritiesTypeParams.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthoritiesTypeParams.prototype.Numerator = new Number();



SAPB1.SalesTaxAuthoritiesTypeParams.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxAuthoritiesTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxAuthoritiesTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxAuthoritiesTypeParams;
