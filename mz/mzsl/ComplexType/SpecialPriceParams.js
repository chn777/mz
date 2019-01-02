

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SpecialPriceParams = function () {
}
SAPB1.SpecialPriceParams.prototype = new SAPB1.ComplexType();
SAPB1.SpecialPriceParams.prototype.constructor = SAPB1.SpecialPriceParams;
SAPB1.SpecialPriceParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceParams.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceParams.PriceListNum = { valueOf: function(){return 'PriceListNum';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceParams.prototype.ItemCode = new String();
SAPB1.SpecialPriceParams.prototype.CardCode = new String();
SAPB1.SpecialPriceParams.prototype.PriceListNum = new Number();



SAPB1.SpecialPriceParams.create = function (rawObject) {
    var instance = new SAPB1.SpecialPriceParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SpecialPriceParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SpecialPriceParams;
