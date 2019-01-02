var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AlternativeItemCollection = function () {
}

SAPB1.AlternativeItemCollection.prototype = new SAPB1.Collection();
SAPB1.AlternativeItemCollection.prototype.constructor = SAPB1.AlternativeItemCollection;
//override the default one.    
SAPB1.AlternativeItemCollection.get = function (index) {
    return SAPB1.AlternativeItem.create(this.array[index]);
}

SAPB1.AlternativeItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AlternativeItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AlternativeItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AlternativeItemCollection;
