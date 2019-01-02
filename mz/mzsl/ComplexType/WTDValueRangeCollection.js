var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WTDValueRangeCollection = function () {
}

SAPB1.WTDValueRangeCollection.prototype = new SAPB1.Collection();
SAPB1.WTDValueRangeCollection.prototype.constructor = SAPB1.WTDValueRangeCollection;
//override the default one.    
SAPB1.WTDValueRangeCollection.get = function (index) {
    return SAPB1.WTDValueRange.create(this.array[index]);
}

SAPB1.WTDValueRangeCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WTDValueRangeCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WTDValueRange.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WTDValueRangeCollection;
