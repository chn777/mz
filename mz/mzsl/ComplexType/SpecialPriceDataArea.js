var SpecialPriceQuantityArea = require('ComplexType/SpecialPriceQuantityArea')
var SpecialPriceQuantityAreaCollection = require('ComplexType/SpecialPriceQuantityAreaCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SpecialPriceDataArea = function () {
}
SAPB1.SpecialPriceDataArea.prototype = new SAPB1.ComplexType();
SAPB1.SpecialPriceDataArea.prototype.constructor = SAPB1.SpecialPriceDataArea;
SAPB1.SpecialPriceDataArea.PriceCurrency = { valueOf: function(){return 'PriceCurrency';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.AutoUpdate = { valueOf: function(){return 'AutoUpdate';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.Dateto = { valueOf: function(){return 'Dateto';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.Discount = { valueOf: function(){return 'Discount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.SpecialPrice = { valueOf: function(){return 'SpecialPrice';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.DateFrom = { valueOf: function(){return 'DateFrom';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.PriceListNo = { valueOf: function(){return 'PriceListNo';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SpecialPriceDataArea.SpecialPriceQuantityAreas = { valueOf: function(){return 'SpecialPriceQuantityAreas';}, Type: 'SpecialPriceQuantityArea', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SpecialPriceDataArea.prototype.PriceCurrency = new String();
SAPB1.SpecialPriceDataArea.prototype.AutoUpdate = new String();
SAPB1.SpecialPriceDataArea.prototype.Dateto = new String();
SAPB1.SpecialPriceDataArea.prototype.Discount = new Number();
SAPB1.SpecialPriceDataArea.prototype.SpecialPrice = new Number();
SAPB1.SpecialPriceDataArea.prototype.DateFrom = new String();
SAPB1.SpecialPriceDataArea.prototype.BPCode = new String();
SAPB1.SpecialPriceDataArea.prototype.PriceListNo = new Number();
SAPB1.SpecialPriceDataArea.prototype.ItemNo = new String();
SAPB1.SpecialPriceDataArea.prototype.RowNumber = new Number();
SAPB1.SpecialPriceDataArea.prototype.SpecialPriceQuantityAreas = new SpecialPriceQuantityAreaCollection();

SAPB1.SpecialPriceDataArea.SpecialPriceQuantityArea = SpecialPriceQuantityArea
SAPB1.SpecialPriceDataArea.SpecialPriceQuantityAreaCollection = SpecialPriceQuantityAreaCollection

SAPB1.SpecialPriceDataArea.BoYesNoEnum = BoYesNoEnum

SAPB1.SpecialPriceDataArea.create = function (rawObject) {
    var instance = new SAPB1.SpecialPriceDataArea();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SpecialPriceDataArea.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SpecialPriceDataArea;
