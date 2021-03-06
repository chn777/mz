

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DistributionRuleLine = function () {
}
SAPB1.DistributionRuleLine.prototype = new SAPB1.ComplexType();
SAPB1.DistributionRuleLine.prototype.constructor = SAPB1.DistributionRuleLine;
SAPB1.DistributionRuleLine.CenterCode = { valueOf: function(){return 'CenterCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRuleLine.TotalInCenter = { valueOf: function(){return 'TotalInCenter';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRuleLine.EffectiveFrom = { valueOf: function(){return 'EffectiveFrom';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRuleLine.EffectiveTo = { valueOf: function(){return 'EffectiveTo';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DistributionRuleLine.prototype.CenterCode = new String();
SAPB1.DistributionRuleLine.prototype.TotalInCenter = new Number();
SAPB1.DistributionRuleLine.prototype.EffectiveFrom = new String();
SAPB1.DistributionRuleLine.prototype.EffectiveTo = new String();



SAPB1.DistributionRuleLine.create = function (rawObject) {
    var instance = new SAPB1.DistributionRuleLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DistributionRuleLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DistributionRuleLine;
