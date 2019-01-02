

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDFreight = function () {
}
SAPB1.WTDFreight.prototype = new SAPB1.ComplexType();
SAPB1.WTDFreight.prototype.constructor = SAPB1.WTDFreight;
SAPB1.WTDFreight.FreightCode = { valueOf: function(){return 'FreightCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDFreight.WTaxCode = { valueOf: function(){return 'WTaxCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDFreight.EffectiveDateFrom = { valueOf: function(){return 'EffectiveDateFrom';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDFreight.EffectiveDateTo = { valueOf: function(){return 'EffectiveDateTo';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDFreight.prototype.FreightCode = new Number();
SAPB1.WTDFreight.prototype.WTaxCode = new String();
SAPB1.WTDFreight.prototype.EffectiveDateFrom = new String();
SAPB1.WTDFreight.prototype.EffectiveDateTo = new String();



SAPB1.WTDFreight.create = function (rawObject) {
    var instance = new SAPB1.WTDFreight();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDFreight.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDFreight;
