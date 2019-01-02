var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.Boxes1099Collection = function () {
}

SAPB1.Boxes1099Collection.prototype = new SAPB1.Collection();
SAPB1.Boxes1099Collection.prototype.constructor = SAPB1.Boxes1099Collection;
//override the default one.    
SAPB1.Boxes1099Collection.get = function (index) {
    return SAPB1.Boxes1099.create(this.array[index]);
}

SAPB1.Boxes1099Collection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.Boxes1099Collection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.Boxes1099.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.Boxes1099Collection;
