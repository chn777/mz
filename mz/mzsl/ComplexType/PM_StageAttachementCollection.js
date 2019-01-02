var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PM_StageAttachementCollection = function () {
}

SAPB1.PM_StageAttachementCollection.prototype = new SAPB1.Collection();
SAPB1.PM_StageAttachementCollection.prototype.constructor = SAPB1.PM_StageAttachementCollection;
//override the default one.    
SAPB1.PM_StageAttachementCollection.get = function (index) {
    return SAPB1.PM_StageAttachement.create(this.array[index]);
}

SAPB1.PM_StageAttachementCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PM_StageAttachementCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PM_StageAttachement.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PM_StageAttachementCollection;
