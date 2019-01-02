

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FixedAssetEndBalance = function () {
}
SAPB1.FixedAssetEndBalance.prototype = new SAPB1.ComplexType();
SAPB1.FixedAssetEndBalance.prototype.constructor = SAPB1.FixedAssetEndBalance;
SAPB1.FixedAssetEndBalance.HistoricalAPC = { valueOf: function(){return 'HistoricalAPC';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.AcquisitionCost = { valueOf: function(){return 'AcquisitionCost';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.NetBookValue = { valueOf: function(){return 'NetBookValue';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.HistoricalNBV = { valueOf: function(){return 'HistoricalNBV';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.OrdinaryDepreciationValue = { valueOf: function(){return 'OrdinaryDepreciationValue';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.UnplanedDepreciationValue = { valueOf: function(){return 'UnplanedDepreciationValue';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.SpecialDepreciationValue = { valueOf: function(){return 'SpecialDepreciationValue';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.WriteUp = { valueOf: function(){return 'WriteUp';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.SalvageValue = { valueOf: function(){return 'SalvageValue';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetEndBalance.prototype.HistoricalAPC = new Number();
SAPB1.FixedAssetEndBalance.prototype.AcquisitionCost = new Number();
SAPB1.FixedAssetEndBalance.prototype.NetBookValue = new Number();
SAPB1.FixedAssetEndBalance.prototype.HistoricalNBV = new Number();
SAPB1.FixedAssetEndBalance.prototype.OrdinaryDepreciationValue = new Number();
SAPB1.FixedAssetEndBalance.prototype.UnplanedDepreciationValue = new Number();
SAPB1.FixedAssetEndBalance.prototype.SpecialDepreciationValue = new Number();
SAPB1.FixedAssetEndBalance.prototype.WriteUp = new Number();
SAPB1.FixedAssetEndBalance.prototype.SalvageValue = new Number();
SAPB1.FixedAssetEndBalance.prototype.Quantity = new Number();



SAPB1.FixedAssetEndBalance.create = function (rawObject) {
    var instance = new SAPB1.FixedAssetEndBalance();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FixedAssetEndBalance.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FixedAssetEndBalance;
