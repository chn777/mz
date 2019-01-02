
var AssetTransactionTypeEnum = require('EnumType/AssetTransactionTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FixedAssetValues = function () {
}
SAPB1.FixedAssetValues.prototype = new SAPB1.ComplexType();
SAPB1.FixedAssetValues.prototype.constructor = SAPB1.FixedAssetValues;
SAPB1.FixedAssetValues.TransactionType = { valueOf: function(){return 'TransactionType';}, Type: 'AssetTransactionTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.AcquisitionCost = { valueOf: function(){return 'AcquisitionCost';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.DepreciationValue = { valueOf: function(){return 'DepreciationValue';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.NetBookValue = { valueOf: function(){return 'NetBookValue';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.OrdinaryDepreciationValue = { valueOf: function(){return 'OrdinaryDepreciationValue';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.UnplanedDepreciationValue = { valueOf: function(){return 'UnplanedDepreciationValue';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.SpecialDepreciationValue = { valueOf: function(){return 'SpecialDepreciationValue';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.WriteUp = { valueOf: function(){return 'WriteUp';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.Appreciation = { valueOf: function(){return 'Appreciation';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValues.prototype.TransactionType = new String();
SAPB1.FixedAssetValues.prototype.AcquisitionCost = new Number();
SAPB1.FixedAssetValues.prototype.Quantity = new Number();
SAPB1.FixedAssetValues.prototype.DepreciationValue = new Number();
SAPB1.FixedAssetValues.prototype.NetBookValue = new Number();
SAPB1.FixedAssetValues.prototype.OrdinaryDepreciationValue = new Number();
SAPB1.FixedAssetValues.prototype.UnplanedDepreciationValue = new Number();
SAPB1.FixedAssetValues.prototype.SpecialDepreciationValue = new Number();
SAPB1.FixedAssetValues.prototype.WriteUp = new Number();
SAPB1.FixedAssetValues.prototype.Appreciation = new Number();


SAPB1.FixedAssetValues.AssetTransactionTypeEnum = AssetTransactionTypeEnum

SAPB1.FixedAssetValues.create = function (rawObject) {
    var instance = new SAPB1.FixedAssetValues();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FixedAssetValues.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FixedAssetValues;
