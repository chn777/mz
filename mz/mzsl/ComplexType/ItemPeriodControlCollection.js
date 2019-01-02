var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemPeriodControlCollection = function () {
}

SAPB1.ItemPeriodControlCollection.prototype = new SAPB1.Collection();
SAPB1.ItemPeriodControlCollection.prototype.constructor = SAPB1.ItemPeriodControlCollection;
//override the default one.    
SAPB1.ItemPeriodControlCollection.get = function (index) {
    return SAPB1.ItemPeriodControl.create(this.array[index]);
}

SAPB1.ItemPeriodControlCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemPeriodControlCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemPeriodControl.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemPeriodControlCollection;
