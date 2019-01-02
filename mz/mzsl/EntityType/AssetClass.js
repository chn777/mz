var AssetClassLine = require('ComplexType/AssetClassLine')
var AssetClassLineCollection = require('ComplexType/AssetClassLineCollection')

var AssetTypeEnum = require('EnumType/AssetTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetClass = function () {
}
SAPB1.AssetClass.prototype = new SAPB1.EntityType();
SAPB1.AssetClass.prototype.constructor = SAPB1.AssetClass;
SAPB1.AssetClass.prototype.keys.push('Code');
SAPB1.AssetClass.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetClass.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClass.AssetType = { valueOf: function(){return 'AssetType';}, Type: 'AssetTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClass.ValueLimitFrom = { valueOf: function(){return 'ValueLimitFrom';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClass.ValueLimitTo = { valueOf: function(){return 'ValueLimitTo';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClass.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClass.AttributeGroup = { valueOf: function(){return 'AttributeGroup';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClass.AssetClassCollection = { valueOf: function(){return 'AssetClassCollection';}, Type: 'AssetClassLine', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AssetClass.prototype.Code = new String();
SAPB1.AssetClass.prototype.Description = new String();
SAPB1.AssetClass.prototype.AssetType = new String();
SAPB1.AssetClass.prototype.ValueLimitFrom = new Number();
SAPB1.AssetClass.prototype.ValueLimitTo = new Number();
SAPB1.AssetClass.prototype.BPLID = new Number();
SAPB1.AssetClass.prototype.AttributeGroup = new Number();
SAPB1.AssetClass.prototype.AssetClassCollection = new AssetClassLineCollection();

SAPB1.AssetClass.AssetClassLine = AssetClassLine
SAPB1.AssetClass.AssetClassLineCollection = AssetClassLineCollection

SAPB1.AssetClass.AssetTypeEnum = AssetTypeEnum

SAPB1.AssetClass.create = function (rawObject) {
    var instance = new SAPB1.AssetClass();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetClass.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetClass;
