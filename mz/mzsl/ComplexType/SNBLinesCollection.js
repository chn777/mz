var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SNBLinesCollection = function () {
}

SAPB1.SNBLinesCollection.prototype = new SAPB1.Collection();
SAPB1.SNBLinesCollection.prototype.constructor = SAPB1.SNBLinesCollection;
//override the default one.    
SAPB1.SNBLinesCollection.get = function (index) {
    return SAPB1.SNBLines.create(this.array[index]);
}

SAPB1.SNBLinesCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SNBLinesCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SNBLines.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SNBLinesCollection;
