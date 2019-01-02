var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CallMessageArgumentCollection = function () {
}

SAPB1.CallMessageArgumentCollection.prototype = new SAPB1.Collection();
SAPB1.CallMessageArgumentCollection.prototype.constructor = SAPB1.CallMessageArgumentCollection;
//override the default one.    
SAPB1.CallMessageArgumentCollection.get = function (index) {
    return SAPB1.CallMessageArgument.create(this.array[index]);
}

SAPB1.CallMessageArgumentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CallMessageArgumentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CallMessageArgument.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CallMessageArgumentCollection;
