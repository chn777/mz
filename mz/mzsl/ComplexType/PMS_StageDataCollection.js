var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PMS_StageDataCollection = function () {
}

SAPB1.PMS_StageDataCollection.prototype = new SAPB1.Collection();
SAPB1.PMS_StageDataCollection.prototype.constructor = SAPB1.PMS_StageDataCollection;
//override the default one.    
SAPB1.PMS_StageDataCollection.get = function (index) {
    return SAPB1.PMS_StageData.create(this.array[index]);
}

SAPB1.PMS_StageDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PMS_StageDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PMS_StageData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PMS_StageDataCollection;
