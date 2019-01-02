var SpecialPriceDataArea = require('ComplexType/SpecialPriceDataArea')
var SpecialPriceDataAreaCollection = require('ComplexType/SpecialPriceDataAreaCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var SourceCurrencyEnum = require('EnumType/SourceCurrencyEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SpecialPrice = function () {
}
SAPB1.SpecialPrice.prototype = new SAPB1.EntityType();
SAPB1.SpecialPrice.prototype.constructor = SAPB1.SpecialPrice;
SAPB1.SpecialPrice.prototype.keys.push('CardCode','ItemCode');
SAPB1.SpecialPrice.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.DiscountPercent = { valueOf: function(){return 'DiscountPercent';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.PriceListNum = { valueOf: function(){return 'PriceListNum';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.AutoUpdate = { valueOf: function(){return 'AutoUpdate';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.SourcePrice = { valueOf: function(){return 'SourcePrice';}, Type: 'SourceCurrencyEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.Valid = { valueOf: function(){return 'Valid';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPrice.SpecialPriceDataAreas = { valueOf: function(){return 'SpecialPriceDataAreas';}, Type: 'SpecialPriceDataArea', Index: 11, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SpecialPrice.prototype.ItemCode = new String();
SAPB1.SpecialPrice.prototype.CardCode = new String();
SAPB1.SpecialPrice.prototype.Price = new Number();
SAPB1.SpecialPrice.prototype.Currency = new String();
SAPB1.SpecialPrice.prototype.DiscountPercent = new Number();
SAPB1.SpecialPrice.prototype.PriceListNum = new Number();
SAPB1.SpecialPrice.prototype.AutoUpdate = new String();
SAPB1.SpecialPrice.prototype.SourcePrice = new String();
SAPB1.SpecialPrice.prototype.Valid = new String();
SAPB1.SpecialPrice.prototype.ValidFrom = new String();
SAPB1.SpecialPrice.prototype.ValidTo = new String();
SAPB1.SpecialPrice.prototype.SpecialPriceDataAreas = new SpecialPriceDataAreaCollection();

SAPB1.SpecialPrice.SpecialPriceDataArea = SpecialPriceDataArea
SAPB1.SpecialPrice.SpecialPriceDataAreaCollection = SpecialPriceDataAreaCollection

SAPB1.SpecialPrice.BoYesNoEnum = BoYesNoEnum
SAPB1.SpecialPrice.SourceCurrencyEnum = SourceCurrencyEnum

SAPB1.SpecialPrice.create = function (rawObject) {
    var instance = new SAPB1.SpecialPrice();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SpecialPrice.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SpecialPrice;
