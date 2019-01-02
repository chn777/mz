var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CheckLineCollection = function () {
}

SAPB1.CheckLineCollection.prototype = new SAPB1.Collection();
SAPB1.CheckLineCollection.prototype.constructor = SAPB1.CheckLineCollection;
//override the default one.    
SAPB1.CheckLineCollection.get = function (index) {
    return SAPB1.CheckLine.create(this.array[index]);
}

SAPB1.CheckLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CheckLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CheckLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CheckLineCollection;
