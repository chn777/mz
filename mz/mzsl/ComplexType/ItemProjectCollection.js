var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemProjectCollection = function () {
}

SAPB1.ItemProjectCollection.prototype = new SAPB1.Collection();
SAPB1.ItemProjectCollection.prototype.constructor = SAPB1.ItemProjectCollection;
//override the default one.    
SAPB1.ItemProjectCollection.get = function (index) {
    return SAPB1.ItemProject.create(this.array[index]);
}

SAPB1.ItemProjectCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemProjectCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemProject.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemProjectCollection;
