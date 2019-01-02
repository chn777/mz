var BudgetLine = require('ComplexType/BudgetLine')
var BudgetLineCollection = require('ComplexType/BudgetLineCollection')
var BudgetCostAccountingLine = require('ComplexType/BudgetCostAccountingLine')
var BudgetCostAccountingLineCollection = require('ComplexType/BudgetCostAccountingLineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Budget = function () {
}
SAPB1.Budget.prototype = new SAPB1.EntityType();
SAPB1.Budget.prototype.constructor = SAPB1.Budget;
SAPB1.Budget.prototype.keys.push('Numerator');
SAPB1.Budget.FutureAnnualExpensesCreditSys = { valueOf: function(){return 'FutureAnnualExpensesCreditSys';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureAnnualExpensesCreditLoc = { valueOf: function(){return 'FutureAnnualExpensesCreditLoc';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureAnnualExpensesDebitSys = { valueOf: function(){return 'FutureAnnualExpensesDebitSys';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureAnnualExpensesDebitLoc = { valueOf: function(){return 'FutureAnnualExpensesDebitLoc';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureAnnualRevenuesCredit = { valueOf: function(){return 'FutureAnnualRevenuesCredit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureAnnualRevenuesDebit = { valueOf: function(){return 'FutureAnnualRevenuesDebit';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureRevenuesDebitSys = { valueOf: function(){return 'FutureRevenuesDebitSys';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.FutureRevenuesDebitLoc = { valueOf: function(){return 'FutureRevenuesDebitLoc';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.ParentAccPercent = { valueOf: function(){return 'ParentAccPercent';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.StartofFiscalYear = { valueOf: function(){return 'StartofFiscalYear';}, Type: 'Edm.DateTime', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Budget.ParentAccountKey = { valueOf: function(){return 'ParentAccountKey';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.TotalAnnualBudgetDebitSys = { valueOf: function(){return 'TotalAnnualBudgetDebitSys';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.BudgetBalanceDebitSys = { valueOf: function(){return 'BudgetBalanceDebitSys';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.BudgetBalanceDebitLoc = { valueOf: function(){return 'BudgetBalanceDebitLoc';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.TotalAnnualBudgetDebitLoc = { valueOf: function(){return 'TotalAnnualBudgetDebitLoc';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.TotalAnnualBudgetCreditSys = { valueOf: function(){return 'TotalAnnualBudgetCreditSys';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.TotalAnnualBudgetCreditLoc = { valueOf: function(){return 'TotalAnnualBudgetCreditLoc';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.BudgetBalanceCreditSys = { valueOf: function(){return 'BudgetBalanceCreditSys';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.BudgetBalanceCreditLoc = { valueOf: function(){return 'BudgetBalanceCreditLoc';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.DivisionCode = { valueOf: function(){return 'DivisionCode';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Budget.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 20, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Budget.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 21, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Budget.BudgetScenario = { valueOf: function(){return 'BudgetScenario';}, Type: 'Edm.Int32', Index: 22, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Budget.BudgetLines = { valueOf: function(){return 'BudgetLines';}, Type: 'BudgetLine', Index: 23, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Budget.BudgetCostAccountingLines = { valueOf: function(){return 'BudgetCostAccountingLines';}, Type: 'BudgetCostAccountingLine', Index: 24, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Budget.prototype.FutureAnnualExpensesCreditSys = new Number();
SAPB1.Budget.prototype.FutureAnnualExpensesCreditLoc = new Number();
SAPB1.Budget.prototype.FutureAnnualExpensesDebitSys = new Number();
SAPB1.Budget.prototype.FutureAnnualExpensesDebitLoc = new Number();
SAPB1.Budget.prototype.FutureAnnualRevenuesCredit = new Number();
SAPB1.Budget.prototype.FutureAnnualRevenuesDebit = new Number();
SAPB1.Budget.prototype.FutureRevenuesDebitSys = new Number();
SAPB1.Budget.prototype.FutureRevenuesDebitLoc = new Number();
SAPB1.Budget.prototype.ParentAccPercent = new Number();
SAPB1.Budget.prototype.StartofFiscalYear = new String();
SAPB1.Budget.prototype.ParentAccountKey = new String();
SAPB1.Budget.prototype.TotalAnnualBudgetDebitSys = new Number();
SAPB1.Budget.prototype.BudgetBalanceDebitSys = new Number();
SAPB1.Budget.prototype.BudgetBalanceDebitLoc = new Number();
SAPB1.Budget.prototype.TotalAnnualBudgetDebitLoc = new Number();
SAPB1.Budget.prototype.TotalAnnualBudgetCreditSys = new Number();
SAPB1.Budget.prototype.TotalAnnualBudgetCreditLoc = new Number();
SAPB1.Budget.prototype.BudgetBalanceCreditSys = new Number();
SAPB1.Budget.prototype.BudgetBalanceCreditLoc = new Number();
SAPB1.Budget.prototype.DivisionCode = new Number();
SAPB1.Budget.prototype.AccountCode = new String();
SAPB1.Budget.prototype.Numerator = new Number();
SAPB1.Budget.prototype.BudgetScenario = new Number();
SAPB1.Budget.prototype.BudgetLines = new BudgetLineCollection();
SAPB1.Budget.prototype.BudgetCostAccountingLines = new BudgetCostAccountingLineCollection();

SAPB1.Budget.BudgetLine = BudgetLine
SAPB1.Budget.BudgetLineCollection = BudgetLineCollection
SAPB1.Budget.BudgetCostAccountingLine = BudgetCostAccountingLine
SAPB1.Budget.BudgetCostAccountingLineCollection = BudgetCostAccountingLineCollection


SAPB1.Budget.create = function (rawObject) {
    var instance = new SAPB1.Budget();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Budget.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Budget;
