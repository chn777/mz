var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PMS_DocAttachementCollection = function () {
}

SAPB1.PMS_DocAttachementCollection.prototype = new SAPB1.Collection();
SAPB1.PMS_DocAttachementCollection.prototype.constructor = SAPB1.PMS_DocAttachementCollection;
//override the default one.    
SAPB1.PMS_DocAttachementCollection.get = function (index) {
    return SAPB1.PMS_DocAttachement.create(this.array[index]);
}

SAPB1.PMS_DocAttachementCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PMS_DocAttachementCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PMS_DocAttachement.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PMS_DocAttachementCollection;
