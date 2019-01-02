var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemDepreciationParameterCollection = function () {
}

SAPB1.ItemDepreciationParameterCollection.prototype = new SAPB1.Collection();
SAPB1.ItemDepreciationParameterCollection.prototype.constructor = SAPB1.ItemDepreciationParameterCollection;
//override the default one.    
SAPB1.ItemDepreciationParameterCollection.get = function (index) {
    return SAPB1.ItemDepreciationParameter.create(this.array[index]);
}

SAPB1.ItemDepreciationParameterCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemDepreciationParameterCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemDepreciationParameter.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemDepreciationParameterCollection;
