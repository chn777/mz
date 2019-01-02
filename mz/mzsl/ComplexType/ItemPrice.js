var UoMPrice = require('ComplexType/UoMPrice')
var UoMPriceCollection = require('ComplexType/UoMPriceCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemPrice = function () {
}
SAPB1.ItemPrice.prototype = new SAPB1.ComplexType();
SAPB1.ItemPrice.prototype.constructor = SAPB1.ItemPrice;
SAPB1.ItemPrice.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.AdditionalPrice1 = { valueOf: function(){return 'AdditionalPrice1';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.AdditionalCurrency1 = { valueOf: function(){return 'AdditionalCurrency1';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.AdditionalPrice2 = { valueOf: function(){return 'AdditionalPrice2';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.AdditionalCurrency2 = { valueOf: function(){return 'AdditionalCurrency2';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.BasePriceList = { valueOf: function(){return 'BasePriceList';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.Factor = { valueOf: function(){return 'Factor';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPrice.UoMPrices = { valueOf: function(){return 'UoMPrices';}, Type: 'UoMPrice', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ItemPrice.prototype.PriceList = new Number();
SAPB1.ItemPrice.prototype.Price = new Number();
SAPB1.ItemPrice.prototype.Currency = new String();
SAPB1.ItemPrice.prototype.AdditionalPrice1 = new Number();
SAPB1.ItemPrice.prototype.AdditionalCurrency1 = new String();
SAPB1.ItemPrice.prototype.AdditionalPrice2 = new Number();
SAPB1.ItemPrice.prototype.AdditionalCurrency2 = new String();
SAPB1.ItemPrice.prototype.BasePriceList = new Number();
SAPB1.ItemPrice.prototype.Factor = new Number();
SAPB1.ItemPrice.prototype.UoMPrices = new UoMPriceCollection();

SAPB1.ItemPrice.UoMPrice = UoMPrice
SAPB1.ItemPrice.UoMPriceCollection = UoMPriceCollection


SAPB1.ItemPrice.create = function (rawObject) {
    var instance = new SAPB1.ItemPrice();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemPrice.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemPrice;
