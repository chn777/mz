var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BlobTableKeySegmentCollection = function () {
}

SAPB1.BlobTableKeySegmentCollection.prototype = new SAPB1.Collection();
SAPB1.BlobTableKeySegmentCollection.prototype.constructor = SAPB1.BlobTableKeySegmentCollection;
//override the default one.    
SAPB1.BlobTableKeySegmentCollection.get = function (index) {
    return SAPB1.BlobTableKeySegment.create(this.array[index]);
}

SAPB1.BlobTableKeySegmentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BlobTableKeySegmentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BlobTableKeySegment.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BlobTableKeySegmentCollection;
