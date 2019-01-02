
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UoMPrice = function () {
}
SAPB1.UoMPrice.prototype = new SAPB1.ComplexType();
SAPB1.UoMPrice.prototype.constructor = SAPB1.UoMPrice;
SAPB1.UoMPrice.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.ReduceBy = { valueOf: function(){return 'ReduceBy';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.AdditionalReduceBy1 = { valueOf: function(){return 'AdditionalReduceBy1';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.AdditionalPrice1 = { valueOf: function(){return 'AdditionalPrice1';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.AdditionalCurrency1 = { valueOf: function(){return 'AdditionalCurrency1';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.AdditionalReduceBy2 = { valueOf: function(){return 'AdditionalReduceBy2';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.AdditionalPrice2 = { valueOf: function(){return 'AdditionalPrice2';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.AdditionalCurrency2 = { valueOf: function(){return 'AdditionalCurrency2';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.Auto = { valueOf: function(){return 'Auto';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMPrice.prototype.PriceList = new Number();
SAPB1.UoMPrice.prototype.UoMEntry = new Number();
SAPB1.UoMPrice.prototype.ReduceBy = new Number();
SAPB1.UoMPrice.prototype.Price = new Number();
SAPB1.UoMPrice.prototype.Currency = new String();
SAPB1.UoMPrice.prototype.AdditionalReduceBy1 = new Number();
SAPB1.UoMPrice.prototype.AdditionalPrice1 = new Number();
SAPB1.UoMPrice.prototype.AdditionalCurrency1 = new String();
SAPB1.UoMPrice.prototype.AdditionalReduceBy2 = new Number();
SAPB1.UoMPrice.prototype.AdditionalPrice2 = new Number();
SAPB1.UoMPrice.prototype.AdditionalCurrency2 = new String();
SAPB1.UoMPrice.prototype.Auto = new String();


SAPB1.UoMPrice.BoYesNoEnum = BoYesNoEnum

SAPB1.UoMPrice.create = function (rawObject) {
    var instance = new SAPB1.UoMPrice();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UoMPrice.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UoMPrice;
