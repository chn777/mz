

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SpecialPriceQuantityArea = function () {
}
SAPB1.SpecialPriceQuantityArea.prototype = new SAPB1.ComplexType();
SAPB1.SpecialPriceQuantityArea.prototype.constructor = SAPB1.SpecialPriceQuantityArea;
SAPB1.SpecialPriceQuantityArea.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.SPDARowNumber = { valueOf: function(){return 'SPDARowNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.SpecialPrice = { valueOf: function(){return 'SpecialPrice';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.PriceCurrency = { valueOf: function(){return 'PriceCurrency';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.Discountin = { valueOf: function(){return 'Discountin';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceQuantityArea.prototype.Quantity = new Number();
SAPB1.SpecialPriceQuantityArea.prototype.SPDARowNumber = new Number();
SAPB1.SpecialPriceQuantityArea.prototype.SpecialPrice = new Number();
SAPB1.SpecialPriceQuantityArea.prototype.ItemNo = new String();
SAPB1.SpecialPriceQuantityArea.prototype.BPCode = new String();
SAPB1.SpecialPriceQuantityArea.prototype.RowNumber = new Number();
SAPB1.SpecialPriceQuantityArea.prototype.PriceCurrency = new String();
SAPB1.SpecialPriceQuantityArea.prototype.Discountin = new Number();
SAPB1.SpecialPriceQuantityArea.prototype.UoMEntry = new Number();



SAPB1.SpecialPriceQuantityArea.create = function (rawObject) {
    var instance = new SAPB1.SpecialPriceQuantityArea();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SpecialPriceQuantityArea.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SpecialPriceQuantityArea;
