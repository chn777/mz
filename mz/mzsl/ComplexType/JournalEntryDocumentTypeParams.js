

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.JournalEntryDocumentTypeParams = function () {
}
SAPB1.JournalEntryDocumentTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.JournalEntryDocumentTypeParams.prototype.constructor = SAPB1.JournalEntryDocumentTypeParams;
SAPB1.JournalEntryDocumentTypeParams.JournalEntryType = { valueOf: function(){return 'JournalEntryType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryDocumentTypeParams.DocTypeDescription = { valueOf: function(){return 'DocTypeDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryDocumentTypeParams.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryDocumentTypeParams.prototype.JournalEntryType = new String();
SAPB1.JournalEntryDocumentTypeParams.prototype.DocTypeDescription = new String();
SAPB1.JournalEntryDocumentTypeParams.prototype.ShortName = new String();



SAPB1.JournalEntryDocumentTypeParams.create = function (rawObject) {
    var instance = new SAPB1.JournalEntryDocumentTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.JournalEntryDocumentTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.JournalEntryDocumentTypeParams;
