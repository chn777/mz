

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemPriceParams = function () {
}
SAPB1.ItemPriceParams.prototype = new SAPB1.ComplexType();
SAPB1.ItemPriceParams.prototype.constructor = SAPB1.ItemPriceParams;
SAPB1.ItemPriceParams.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.BlanketAgreementNumber = { valueOf: function(){return 'BlanketAgreementNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.BlanketAgreementLine = { valueOf: function(){return 'BlanketAgreementLine';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.UoMQuantity = { valueOf: function(){return 'UoMQuantity';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.InventoryQuantity = { valueOf: function(){return 'InventoryQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPriceParams.prototype.Date = new String();
SAPB1.ItemPriceParams.prototype.UoMEntry = new Number();
SAPB1.ItemPriceParams.prototype.BlanketAgreementNumber = new Number();
SAPB1.ItemPriceParams.prototype.BlanketAgreementLine = new Number();
SAPB1.ItemPriceParams.prototype.UoMQuantity = new Number();
SAPB1.ItemPriceParams.prototype.InventoryQuantity = new Number();
SAPB1.ItemPriceParams.prototype.Currency = new String();
SAPB1.ItemPriceParams.prototype.ItemCode = new String();
SAPB1.ItemPriceParams.prototype.CardCode = new String();
SAPB1.ItemPriceParams.prototype.PriceList = new Number();



SAPB1.ItemPriceParams.create = function (rawObject) {
    var instance = new SAPB1.ItemPriceParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemPriceParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemPriceParams;
