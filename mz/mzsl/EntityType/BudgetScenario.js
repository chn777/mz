
var BoRoundingMethod = require('EnumType/BoRoundingMethod')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BudgetScenario = function () {
}
SAPB1.BudgetScenario.prototype = new SAPB1.EntityType();
SAPB1.BudgetScenario.prototype.constructor = SAPB1.BudgetScenario;
SAPB1.BudgetScenario.prototype.keys.push('Numerator');
SAPB1.BudgetScenario.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.InitialRatioPercentage = { valueOf: function(){return 'InitialRatioPercentage';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.StartofFiscalYear = { valueOf: function(){return 'StartofFiscalYear';}, Type: 'Edm.DateTime', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.BasicBudget = { valueOf: function(){return 'BasicBudget';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.RoundingMethod = { valueOf: function(){return 'RoundingMethod';}, Type: 'BoRoundingMethod', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetScenario.prototype.Name = new String();
SAPB1.BudgetScenario.prototype.InitialRatioPercentage = new Number();
SAPB1.BudgetScenario.prototype.StartofFiscalYear = new String();
SAPB1.BudgetScenario.prototype.BasicBudget = new Number();
SAPB1.BudgetScenario.prototype.Numerator = new Number();
SAPB1.BudgetScenario.prototype.RoundingMethod = new String();
SAPB1.BudgetScenario.prototype.Project = new String();
SAPB1.BudgetScenario.prototype.DistributionRule = new String();
SAPB1.BudgetScenario.prototype.DistributionRule2 = new String();
SAPB1.BudgetScenario.prototype.DistributionRule3 = new String();
SAPB1.BudgetScenario.prototype.DistributionRule4 = new String();
SAPB1.BudgetScenario.prototype.DistributionRule5 = new String();


SAPB1.BudgetScenario.BoRoundingMethod = BoRoundingMethod

SAPB1.BudgetScenario.create = function (rawObject) {
    var instance = new SAPB1.BudgetScenario();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BudgetScenario.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BudgetScenario;
