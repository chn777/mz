var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TrackingNoteItemCollection = function () {
}

SAPB1.TrackingNoteItemCollection.prototype = new SAPB1.Collection();
SAPB1.TrackingNoteItemCollection.prototype.constructor = SAPB1.TrackingNoteItemCollection;
//override the default one.    
SAPB1.TrackingNoteItemCollection.get = function (index) {
    return SAPB1.TrackingNoteItem.create(this.array[index]);
}

SAPB1.TrackingNoteItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TrackingNoteItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TrackingNoteItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TrackingNoteItemCollection;
