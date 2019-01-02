var DistributionRuleLine = require('ComplexType/DistributionRuleLine')
var DistributionRuleLineCollection = require('ComplexType/DistributionRuleLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DistributionRule = function () {
}
SAPB1.DistributionRule.prototype = new SAPB1.EntityType();
SAPB1.DistributionRule.prototype.constructor = SAPB1.DistributionRule;
SAPB1.DistributionRule.prototype.keys.push('FactorCode');
SAPB1.DistributionRule.FactorCode = { valueOf: function(){return 'FactorCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.FactorDescription = { valueOf: function(){return 'FactorDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.TotalFactor = { valueOf: function(){return 'TotalFactor';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.Direct = { valueOf: function(){return 'Direct';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.InWhichDimension = { valueOf: function(){return 'InWhichDimension';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.IsFixedAmount = { valueOf: function(){return 'IsFixedAmount';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRule.DistributionRuleLines = { valueOf: function(){return 'DistributionRuleLines';}, Type: 'DistributionRuleLine', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DistributionRule.prototype.FactorCode = new String();
SAPB1.DistributionRule.prototype.FactorDescription = new String();
SAPB1.DistributionRule.prototype.TotalFactor = new Number();
SAPB1.DistributionRule.prototype.Direct = new String();
SAPB1.DistributionRule.prototype.InWhichDimension = new Number();
SAPB1.DistributionRule.prototype.Active = new String();
SAPB1.DistributionRule.prototype.IsFixedAmount = new String();
SAPB1.DistributionRule.prototype.DistributionRuleLines = new DistributionRuleLineCollection();

SAPB1.DistributionRule.DistributionRuleLine = DistributionRuleLine
SAPB1.DistributionRule.DistributionRuleLineCollection = DistributionRuleLineCollection

SAPB1.DistributionRule.BoYesNoEnum = BoYesNoEnum

SAPB1.DistributionRule.create = function (rawObject) {
    var instance = new SAPB1.DistributionRule();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DistributionRule.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DistributionRule;
