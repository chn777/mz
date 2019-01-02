

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemDistributionRule = function () {
}
SAPB1.ItemDistributionRule.prototype = new SAPB1.ComplexType();
SAPB1.ItemDistributionRule.prototype.constructor = SAPB1.ItemDistributionRule;
SAPB1.ItemDistributionRule.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDistributionRule.prototype.LineNumber = new Number();
SAPB1.ItemDistributionRule.prototype.ValidFrom = new String();
SAPB1.ItemDistributionRule.prototype.ValidTo = new String();
SAPB1.ItemDistributionRule.prototype.DistributionRule = new String();
SAPB1.ItemDistributionRule.prototype.DistributionRule2 = new String();
SAPB1.ItemDistributionRule.prototype.DistributionRule3 = new String();
SAPB1.ItemDistributionRule.prototype.DistributionRule4 = new String();
SAPB1.ItemDistributionRule.prototype.DistributionRule5 = new String();



SAPB1.ItemDistributionRule.create = function (rawObject) {
    var instance = new SAPB1.ItemDistributionRule();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemDistributionRule.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemDistributionRule;
