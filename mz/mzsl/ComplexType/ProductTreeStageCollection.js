var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ProductTreeStageCollection = function () {
}

SAPB1.ProductTreeStageCollection.prototype = new SAPB1.Collection();
SAPB1.ProductTreeStageCollection.prototype.constructor = SAPB1.ProductTreeStageCollection;
//override the default one.    
SAPB1.ProductTreeStageCollection.get = function (index) {
    return SAPB1.ProductTreeStage.create(this.array[index]);
}

SAPB1.ProductTreeStageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ProductTreeStageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ProductTreeStage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ProductTreeStageCollection;
