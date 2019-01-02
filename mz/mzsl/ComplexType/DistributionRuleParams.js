

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DistributionRuleParams = function () {
}
SAPB1.DistributionRuleParams.prototype = new SAPB1.ComplexType();
SAPB1.DistributionRuleParams.prototype.constructor = SAPB1.DistributionRuleParams;
SAPB1.DistributionRuleParams.FactorCode = { valueOf: function(){return 'FactorCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRuleParams.FactorDescription = { valueOf: function(){return 'FactorDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRuleParams.prototype.FactorCode = new String();
SAPB1.DistributionRuleParams.prototype.FactorDescription = new String();



SAPB1.DistributionRuleParams.create = function (rawObject) {
    var instance = new SAPB1.DistributionRuleParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DistributionRuleParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DistributionRuleParams;
