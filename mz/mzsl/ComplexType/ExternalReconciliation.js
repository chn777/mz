var ReconciliationJournalEntryLine = require('ComplexType/ReconciliationJournalEntryLine')
var ReconciliationJournalEntryLineCollection = require('ComplexType/ReconciliationJournalEntryLineCollection')
var ReconciliationBankStatementLine = require('ComplexType/ReconciliationBankStatementLine')
var ReconciliationBankStatementLineCollection = require('ComplexType/ReconciliationBankStatementLineCollection')

var ReconciliationAccountTypeEnum = require('EnumType/ReconciliationAccountTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExternalReconciliation = function () {
}
SAPB1.ExternalReconciliation.prototype = new SAPB1.ComplexType();
SAPB1.ExternalReconciliation.prototype.constructor = SAPB1.ExternalReconciliation;
SAPB1.ExternalReconciliation.ReconciliationAccountType = { valueOf: function(){return 'ReconciliationAccountType';}, Type: 'ReconciliationAccountTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.ReconciliationNo = { valueOf: function(){return 'ReconciliationNo';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.Amount = { valueOf: function(){return 'Amount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.CurrencyType = { valueOf: function(){return 'CurrencyType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.ReconciliationType = { valueOf: function(){return 'ReconciliationType';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.ReconciliationDate = { valueOf: function(){return 'ReconciliationDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliation.ReconciliationJournalEntryLines = { valueOf: function(){return 'ReconciliationJournalEntryLines';}, Type: 'ReconciliationJournalEntryLine', Index: 8, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ExternalReconciliation.ReconciliationBankStatementLines = { valueOf: function(){return 'ReconciliationBankStatementLines';}, Type: 'ReconciliationBankStatementLine', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ExternalReconciliation.prototype.ReconciliationAccountType = new String();
SAPB1.ExternalReconciliation.prototype.AccountCode = new String();
SAPB1.ExternalReconciliation.prototype.ReconciliationNo = new Number();
SAPB1.ExternalReconciliation.prototype.Amount = new Number();
SAPB1.ExternalReconciliation.prototype.CurrencyType = new String();
SAPB1.ExternalReconciliation.prototype.ReconciliationType = new String();
SAPB1.ExternalReconciliation.prototype.ReconciliationDate = new String();
SAPB1.ExternalReconciliation.prototype.CreationDate = new String();
SAPB1.ExternalReconciliation.prototype.ReconciliationJournalEntryLines = new ReconciliationJournalEntryLineCollection();
SAPB1.ExternalReconciliation.prototype.ReconciliationBankStatementLines = new ReconciliationBankStatementLineCollection();

SAPB1.ExternalReconciliation.ReconciliationJournalEntryLine = ReconciliationJournalEntryLine
SAPB1.ExternalReconciliation.ReconciliationJournalEntryLineCollection = ReconciliationJournalEntryLineCollection
SAPB1.ExternalReconciliation.ReconciliationBankStatementLine = ReconciliationBankStatementLine
SAPB1.ExternalReconciliation.ReconciliationBankStatementLineCollection = ReconciliationBankStatementLineCollection

SAPB1.ExternalReconciliation.ReconciliationAccountTypeEnum = ReconciliationAccountTypeEnum

SAPB1.ExternalReconciliation.create = function (rawObject) {
    var instance = new SAPB1.ExternalReconciliation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExternalReconciliation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExternalReconciliation;
