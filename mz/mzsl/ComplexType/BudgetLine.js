

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BudgetLine = function () {
}
SAPB1.BudgetLine.prototype = new SAPB1.ComplexType();
SAPB1.BudgetLine.prototype.constructor = SAPB1.BudgetLine;
SAPB1.BudgetLine.PrecentOfAnnualBudgetAmount = { valueOf: function(){return 'PrecentOfAnnualBudgetAmount';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.RowDetails = { valueOf: function(){return 'RowDetails';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutExpenSysDebit = { valueOf: function(){return 'FutExpenSysDebit';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutExpenDebit = { valueOf: function(){return 'FutExpenDebit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutExpenSysCredit = { valueOf: function(){return 'FutExpenSysCredit';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutExpenCredit = { valueOf: function(){return 'FutExpenCredit';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutIncomesSysCredit = { valueOf: function(){return 'FutIncomesSysCredit';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutIncomesSysDebit = { valueOf: function(){return 'FutIncomesSysDebit';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutIncomesCredit = { valueOf: function(){return 'FutIncomesCredit';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BudgetSysTotDebit = { valueOf: function(){return 'BudgetSysTotDebit';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BalSysTotDebit = { valueOf: function(){return 'BalSysTotDebit';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BalTotDebit = { valueOf: function(){return 'BalTotDebit';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BudgetTotCredit = { valueOf: function(){return 'BudgetTotCredit';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BudgetSysTotCredit = { valueOf: function(){return 'BudgetSysTotCredit';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BudgetTotDebit = { valueOf: function(){return 'BudgetTotDebit';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BalSysTotCredit = { valueOf: function(){return 'BalSysTotCredit';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BalTotCredit = { valueOf: function(){return 'BalTotCredit';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.BudgetKey = { valueOf: function(){return 'BudgetKey';}, Type: 'Edm.Int32', Index: 18, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.FutureIncomeDeb = { valueOf: function(){return 'FutureIncomeDeb';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetLine.prototype.PrecentOfAnnualBudgetAmount = new Number();
SAPB1.BudgetLine.prototype.RowDetails = new String();
SAPB1.BudgetLine.prototype.RowNumber = new Number();
SAPB1.BudgetLine.prototype.FutExpenSysDebit = new Number();
SAPB1.BudgetLine.prototype.FutExpenDebit = new Number();
SAPB1.BudgetLine.prototype.FutExpenSysCredit = new Number();
SAPB1.BudgetLine.prototype.FutExpenCredit = new Number();
SAPB1.BudgetLine.prototype.FutIncomesSysCredit = new Number();
SAPB1.BudgetLine.prototype.FutIncomesSysDebit = new Number();
SAPB1.BudgetLine.prototype.FutIncomesCredit = new Number();
SAPB1.BudgetLine.prototype.BudgetSysTotDebit = new Number();
SAPB1.BudgetLine.prototype.BalSysTotDebit = new Number();
SAPB1.BudgetLine.prototype.BalTotDebit = new Number();
SAPB1.BudgetLine.prototype.BudgetTotCredit = new Number();
SAPB1.BudgetLine.prototype.BudgetSysTotCredit = new Number();
SAPB1.BudgetLine.prototype.BudgetTotDebit = new Number();
SAPB1.BudgetLine.prototype.BalSysTotCredit = new Number();
SAPB1.BudgetLine.prototype.BalTotCredit = new Number();
SAPB1.BudgetLine.prototype.BudgetKey = new Number();
SAPB1.BudgetLine.prototype.AccountCode = new String();
SAPB1.BudgetLine.prototype.FutureIncomeDeb = new Number();



SAPB1.BudgetLine.create = function (rawObject) {
    var instance = new SAPB1.BudgetLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BudgetLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BudgetLine;
