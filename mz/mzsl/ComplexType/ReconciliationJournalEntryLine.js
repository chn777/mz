

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReconciliationJournalEntryLine = function () {
}
SAPB1.ReconciliationJournalEntryLine.prototype = new SAPB1.ComplexType();
SAPB1.ReconciliationJournalEntryLine.prototype.constructor = SAPB1.ReconciliationJournalEntryLine;
SAPB1.ReconciliationJournalEntryLine.TransactionNumber = { valueOf: function(){return 'TransactionNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.Ref1 = { valueOf: function(){return 'Ref1';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.Ref2 = { valueOf: function(){return 'Ref2';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.Ref3 = { valueOf: function(){return 'Ref3';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.DebitAmount = { valueOf: function(){return 'DebitAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.CreditAmount = { valueOf: function(){return 'CreditAmount';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationJournalEntryLine.prototype.TransactionNumber = new Number();
SAPB1.ReconciliationJournalEntryLine.prototype.LineNumber = new Number();
SAPB1.ReconciliationJournalEntryLine.prototype.PostingDate = new String();
SAPB1.ReconciliationJournalEntryLine.prototype.DueDate = new String();
SAPB1.ReconciliationJournalEntryLine.prototype.Ref1 = new String();
SAPB1.ReconciliationJournalEntryLine.prototype.Ref2 = new String();
SAPB1.ReconciliationJournalEntryLine.prototype.Ref3 = new String();
SAPB1.ReconciliationJournalEntryLine.prototype.DebitAmount = new Number();
SAPB1.ReconciliationJournalEntryLine.prototype.CreditAmount = new Number();
SAPB1.ReconciliationJournalEntryLine.prototype.Details = new String();



SAPB1.ReconciliationJournalEntryLine.create = function (rawObject) {
    var instance = new SAPB1.ReconciliationJournalEntryLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReconciliationJournalEntryLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReconciliationJournalEntryLine;
