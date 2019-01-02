var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ReconciliationJournalEntryLineCollection = function () {
}

SAPB1.ReconciliationJournalEntryLineCollection.prototype = new SAPB1.Collection();
SAPB1.ReconciliationJournalEntryLineCollection.prototype.constructor = SAPB1.ReconciliationJournalEntryLineCollection;
//override the default one.    
SAPB1.ReconciliationJournalEntryLineCollection.get = function (index) {
    return SAPB1.ReconciliationJournalEntryLine.create(this.array[index]);
}

SAPB1.ReconciliationJournalEntryLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ReconciliationJournalEntryLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ReconciliationJournalEntryLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ReconciliationJournalEntryLineCollection;
