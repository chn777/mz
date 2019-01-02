

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT = function () {
}
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT;
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.prototype.WTCode = new String();



SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT;
