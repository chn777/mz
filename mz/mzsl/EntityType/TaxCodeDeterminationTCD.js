var TaxCodeDeterminationTCDDefaultWT = require('ComplexType/TaxCodeDeterminationTCDDefaultWT')
var TaxCodeDeterminationTCDDefaultWTCollection = require('ComplexType/TaxCodeDeterminationTCDDefaultWTCollection')
var TaxCodeDeterminationTCDByUsage = require('ComplexType/TaxCodeDeterminationTCDByUsage')
var TaxCodeDeterminationTCDByUsageCollection = require('ComplexType/TaxCodeDeterminationTCDByUsageCollection')
var TaxCodeDeterminationTCDKeyField = require('ComplexType/TaxCodeDeterminationTCDKeyField')
var TaxCodeDeterminationTCDKeyFieldCollection = require('ComplexType/TaxCodeDeterminationTCDKeyFieldCollection')

var TaxCodeDeterminationTCDTypeEnum = require('EnumType/TaxCodeDeterminationTCDTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCD = function () {
}
SAPB1.TaxCodeDeterminationTCD.prototype = new SAPB1.EntityType();
SAPB1.TaxCodeDeterminationTCD.prototype.constructor = SAPB1.TaxCodeDeterminationTCD;
SAPB1.TaxCodeDeterminationTCD.prototype.keys.push('AbsId');
SAPB1.TaxCodeDeterminationTCD.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCD.TcdType = { valueOf: function(){return 'TcdType';}, Type: 'TaxCodeDeterminationTCDTypeEnum', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCD.DftArCode = { valueOf: function(){return 'DftArCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCD.DftApCode = { valueOf: function(){return 'DftApCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDDefaultWTs = { valueOf: function(){return 'TaxCodeDeterminationTCDDefaultWTs';}, Type: 'TaxCodeDeterminationTCDDefaultWT', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDByUsages = { valueOf: function(){return 'TaxCodeDeterminationTCDByUsages';}, Type: 'TaxCodeDeterminationTCDByUsage', Index: 5, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDKeyFields = { valueOf: function(){return 'TaxCodeDeterminationTCDKeyFields';}, Type: 'TaxCodeDeterminationTCDKeyField', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCD.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCD.prototype.TcdType = new String();
SAPB1.TaxCodeDeterminationTCD.prototype.DftArCode = new String();
SAPB1.TaxCodeDeterminationTCD.prototype.DftApCode = new String();
SAPB1.TaxCodeDeterminationTCD.prototype.TaxCodeDeterminationTCDDefaultWTs = new TaxCodeDeterminationTCDDefaultWTCollection();
SAPB1.TaxCodeDeterminationTCD.prototype.TaxCodeDeterminationTCDByUsages = new TaxCodeDeterminationTCDByUsageCollection();
SAPB1.TaxCodeDeterminationTCD.prototype.TaxCodeDeterminationTCDKeyFields = new TaxCodeDeterminationTCDKeyFieldCollection();

SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDDefaultWT = TaxCodeDeterminationTCDDefaultWT
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDDefaultWTCollection = TaxCodeDeterminationTCDDefaultWTCollection
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDByUsage = TaxCodeDeterminationTCDByUsage
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDByUsageCollection = TaxCodeDeterminationTCDByUsageCollection
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDKeyField = TaxCodeDeterminationTCDKeyField
SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDKeyFieldCollection = TaxCodeDeterminationTCDKeyFieldCollection

SAPB1.TaxCodeDeterminationTCD.TaxCodeDeterminationTCDTypeEnum = TaxCodeDeterminationTCDTypeEnum

SAPB1.TaxCodeDeterminationTCD.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCD();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCD.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCD;
