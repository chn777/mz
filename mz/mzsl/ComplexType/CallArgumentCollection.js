var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CallArgumentCollection = function () {
}

SAPB1.CallArgumentCollection.prototype = new SAPB1.Collection();
SAPB1.CallArgumentCollection.prototype.constructor = SAPB1.CallArgumentCollection;
//override the default one.    
SAPB1.CallArgumentCollection.get = function (index) {
    return SAPB1.CallArgument.create(this.array[index]);
}

SAPB1.CallArgumentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CallArgumentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CallArgument.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CallArgumentCollection;
