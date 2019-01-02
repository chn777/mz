

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.JournalEntryDocumentType = function () {
}
SAPB1.JournalEntryDocumentType.prototype = new SAPB1.EntityType();
SAPB1.JournalEntryDocumentType.prototype.constructor = SAPB1.JournalEntryDocumentType;
SAPB1.JournalEntryDocumentType.prototype.keys.push('JournalEntryType');
SAPB1.JournalEntryDocumentType.JournalEntryType = { valueOf: function(){return 'JournalEntryType';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.JournalEntryDocumentType.DocTypeDescription = { valueOf: function(){return 'DocTypeDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryDocumentType.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryDocumentType.prototype.JournalEntryType = new String();
SAPB1.JournalEntryDocumentType.prototype.DocTypeDescription = new String();
SAPB1.JournalEntryDocumentType.prototype.ShortName = new String();



SAPB1.JournalEntryDocumentType.create = function (rawObject) {
    var instance = new SAPB1.JournalEntryDocumentType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.JournalEntryDocumentType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.JournalEntryDocumentType;
