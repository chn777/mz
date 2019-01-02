var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AccountSegmentationsCategoryCollection = function () {
}

SAPB1.AccountSegmentationsCategoryCollection.prototype = new SAPB1.Collection();
SAPB1.AccountSegmentationsCategoryCollection.prototype.constructor = SAPB1.AccountSegmentationsCategoryCollection;
//override the default one.    
SAPB1.AccountSegmentationsCategoryCollection.get = function (index) {
    return SAPB1.AccountSegmentationsCategory.create(this.array[index]);
}

SAPB1.AccountSegmentationsCategoryCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AccountSegmentationsCategoryCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AccountSegmentationsCategory.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AccountSegmentationsCategoryCollection;
