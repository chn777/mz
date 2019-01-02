var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AssetDocumentAreaJournalCollection = function () {
}

SAPB1.AssetDocumentAreaJournalCollection.prototype = new SAPB1.Collection();
SAPB1.AssetDocumentAreaJournalCollection.prototype.constructor = SAPB1.AssetDocumentAreaJournalCollection;
//override the default one.    
SAPB1.AssetDocumentAreaJournalCollection.get = function (index) {
    return SAPB1.AssetDocumentAreaJournal.create(this.array[index]);
}

SAPB1.AssetDocumentAreaJournalCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AssetDocumentAreaJournalCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AssetDocumentAreaJournal.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AssetDocumentAreaJournalCollection;
