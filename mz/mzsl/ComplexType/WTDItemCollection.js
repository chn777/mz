var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WTDItemCollection = function () {
}

SAPB1.WTDItemCollection.prototype = new SAPB1.Collection();
SAPB1.WTDItemCollection.prototype.constructor = SAPB1.WTDItemCollection;
//override the default one.    
SAPB1.WTDItemCollection.get = function (index) {
    return SAPB1.WTDItem.create(this.array[index]);
}

SAPB1.WTDItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WTDItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WTDItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WTDItemCollection;
