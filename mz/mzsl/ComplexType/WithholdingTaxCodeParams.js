

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxCodeParams = function () {
}
SAPB1.WithholdingTaxCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxCodeParams.prototype.constructor = SAPB1.WithholdingTaxCodeParams;
SAPB1.WithholdingTaxCodeParams.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodeParams.prototype.WTCode = new String();



SAPB1.WithholdingTaxCodeParams.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxCodeParams;
