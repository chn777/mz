

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemPriceReturnParams = function () {
}
SAPB1.ItemPriceReturnParams.prototype = new SAPB1.ComplexType();
SAPB1.ItemPriceReturnParams.prototype.constructor = SAPB1.ItemPriceReturnParams;
SAPB1.ItemPriceReturnParams.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceReturnParams.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceReturnParams.Discount = { valueOf: function(){return 'Discount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceReturnParams.prototype.Price = new Number();
SAPB1.ItemPriceReturnParams.prototype.Currency = new String();
SAPB1.ItemPriceReturnParams.prototype.Discount = new Number();



SAPB1.ItemPriceReturnParams.create = function (rawObject) {
    var instance = new SAPB1.ItemPriceReturnParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemPriceReturnParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemPriceReturnParams;
