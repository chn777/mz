var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentLineCollection = function () {
}

SAPB1.DocumentLineCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentLineCollection.prototype.constructor = SAPB1.DocumentLineCollection;
//override the default one.    
SAPB1.DocumentLineCollection.get = function (index) {
    return SAPB1.DocumentLine.create(this.array[index]);
}

SAPB1.DocumentLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentLineCollection;
