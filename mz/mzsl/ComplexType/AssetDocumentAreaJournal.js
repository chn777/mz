

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetDocumentAreaJournal = function () {
}
SAPB1.AssetDocumentAreaJournal.prototype = new SAPB1.ComplexType();
SAPB1.AssetDocumentAreaJournal.prototype.constructor = SAPB1.AssetDocumentAreaJournal;
SAPB1.AssetDocumentAreaJournal.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.DepreciationArea = { valueOf: function(){return 'DepreciationArea';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.JournalRemarks = { valueOf: function(){return 'JournalRemarks';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.TransactionNumber = { valueOf: function(){return 'TransactionNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.CancellationJournalRemarks = { valueOf: function(){return 'CancellationJournalRemarks';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.CancellationTransactionNumber = { valueOf: function(){return 'CancellationTransactionNumber';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentAreaJournal.prototype.DocEntry = new Number();
SAPB1.AssetDocumentAreaJournal.prototype.LineNumber = new Number();
SAPB1.AssetDocumentAreaJournal.prototype.DepreciationArea = new String();
SAPB1.AssetDocumentAreaJournal.prototype.JournalRemarks = new String();
SAPB1.AssetDocumentAreaJournal.prototype.TransactionNumber = new Number();
SAPB1.AssetDocumentAreaJournal.prototype.CancellationJournalRemarks = new String();
SAPB1.AssetDocumentAreaJournal.prototype.CancellationTransactionNumber = new Number();



SAPB1.AssetDocumentAreaJournal.create = function (rawObject) {
    var instance = new SAPB1.AssetDocumentAreaJournal();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetDocumentAreaJournal.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetDocumentAreaJournal;
