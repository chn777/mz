

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BudgetCostAccountingLine = function () {
}
SAPB1.BudgetCostAccountingLine.prototype = new SAPB1.ComplexType();
SAPB1.BudgetCostAccountingLine.prototype.constructor = SAPB1.BudgetCostAccountingLine;
SAPB1.BudgetCostAccountingLine.DistrRuleCode = { valueOf: function(){return 'DistrRuleCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetCostAccountingLine.Dimension = { valueOf: function(){return 'Dimension';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetCostAccountingLine.DistrRuleDebitLC = { valueOf: function(){return 'DistrRuleDebitLC';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetCostAccountingLine.DistrRuleDebitSC = { valueOf: function(){return 'DistrRuleDebitSC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetCostAccountingLine.DistrRuleCreditLC = { valueOf: function(){return 'DistrRuleCreditLC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetCostAccountingLine.DistrRuleCreditSC = { valueOf: function(){return 'DistrRuleCreditSC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetCostAccountingLine.prototype.DistrRuleCode = new String();
SAPB1.BudgetCostAccountingLine.prototype.Dimension = new Number();
SAPB1.BudgetCostAccountingLine.prototype.DistrRuleDebitLC = new Number();
SAPB1.BudgetCostAccountingLine.prototype.DistrRuleDebitSC = new Number();
SAPB1.BudgetCostAccountingLine.prototype.DistrRuleCreditLC = new Number();
SAPB1.BudgetCostAccountingLine.prototype.DistrRuleCreditSC = new Number();



SAPB1.BudgetCostAccountingLine.create = function (rawObject) {
    var instance = new SAPB1.BudgetCostAccountingLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BudgetCostAccountingLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BudgetCostAccountingLine;
