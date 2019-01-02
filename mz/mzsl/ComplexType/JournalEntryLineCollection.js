var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.JournalEntryLineCollection = function () {
}

SAPB1.JournalEntryLineCollection.prototype = new SAPB1.Collection();
SAPB1.JournalEntryLineCollection.prototype.constructor = SAPB1.JournalEntryLineCollection;
//override the default one.    
SAPB1.JournalEntryLineCollection.get = function (index) {
    return SAPB1.JournalEntryLine.create(this.array[index]);
}

SAPB1.JournalEntryLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.JournalEntryLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.JournalEntryLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.JournalEntryLineCollection;
