var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WTDBPCollection = function () {
}

SAPB1.WTDBPCollection.prototype = new SAPB1.Collection();
SAPB1.WTDBPCollection.prototype.constructor = SAPB1.WTDBPCollection;
//override the default one.    
SAPB1.WTDBPCollection.get = function (index) {
    return SAPB1.WTDBP.create(this.array[index]);
}

SAPB1.WTDBPCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WTDBPCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WTDBP.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WTDBPCollection;
