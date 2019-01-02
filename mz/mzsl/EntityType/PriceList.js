
var BoRoundingMethod = require('EnumType/BoRoundingMethod')
var BoPriceListGroupNum = require('EnumType/BoPriceListGroupNum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoRoundingRule = require('EnumType/BoRoundingRule')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PriceList = function () {
}
SAPB1.PriceList.prototype = new SAPB1.EntityType();
SAPB1.PriceList.prototype.constructor = SAPB1.PriceList;
SAPB1.PriceList.prototype.keys.push('PriceListNo');
SAPB1.PriceList.RoundingMethod = { valueOf: function(){return 'RoundingMethod';}, Type: 'BoRoundingMethod', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.GroupNum = { valueOf: function(){return 'GroupNum';}, Type: 'BoPriceListGroupNum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.BasePriceList = { valueOf: function(){return 'BasePriceList';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.Factor = { valueOf: function(){return 'Factor';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.PriceListNo = { valueOf: function(){return 'PriceListNo';}, Type: 'Edm.Int32', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PriceList.PriceListName = { valueOf: function(){return 'PriceListName';}, Type: 'Edm.String', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PriceList.IsGrossPrice = { valueOf: function(){return 'IsGrossPrice';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.DefaultPrimeCurrency = { valueOf: function(){return 'DefaultPrimeCurrency';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.DefaultAdditionalCurrency1 = { valueOf: function(){return 'DefaultAdditionalCurrency1';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.DefaultAdditionalCurrency2 = { valueOf: function(){return 'DefaultAdditionalCurrency2';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.RoundingRule = { valueOf: function(){return 'RoundingRule';}, Type: 'BoRoundingRule', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.FixedAmount = { valueOf: function(){return 'FixedAmount';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PriceList.prototype.RoundingMethod = new String();
SAPB1.PriceList.prototype.GroupNum = new String();
SAPB1.PriceList.prototype.BasePriceList = new Number();
SAPB1.PriceList.prototype.Factor = new Number();
SAPB1.PriceList.prototype.PriceListNo = new Number();
SAPB1.PriceList.prototype.PriceListName = new String();
SAPB1.PriceList.prototype.IsGrossPrice = new String();
SAPB1.PriceList.prototype.Active = new String();
SAPB1.PriceList.prototype.ValidFrom = new String();
SAPB1.PriceList.prototype.ValidTo = new String();
SAPB1.PriceList.prototype.DefaultPrimeCurrency = new String();
SAPB1.PriceList.prototype.DefaultAdditionalCurrency1 = new String();
SAPB1.PriceList.prototype.DefaultAdditionalCurrency2 = new String();
SAPB1.PriceList.prototype.RoundingRule = new String();
SAPB1.PriceList.prototype.FixedAmount = new Number();


SAPB1.PriceList.BoRoundingMethod = BoRoundingMethod
SAPB1.PriceList.BoPriceListGroupNum = BoPriceListGroupNum
SAPB1.PriceList.BoYesNoEnum = BoYesNoEnum
SAPB1.PriceList.BoRoundingRule = BoRoundingRule

SAPB1.PriceList.create = function (rawObject) {
    var instance = new SAPB1.PriceList();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PriceList.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PriceList;
