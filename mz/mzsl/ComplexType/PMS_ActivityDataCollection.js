var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PMS_ActivityDataCollection = function () {
}

SAPB1.PMS_ActivityDataCollection.prototype = new SAPB1.Collection();
SAPB1.PMS_ActivityDataCollection.prototype.constructor = SAPB1.PMS_ActivityDataCollection;
//override the default one.    
SAPB1.PMS_ActivityDataCollection.get = function (index) {
    return SAPB1.PMS_ActivityData.create(this.array[index]);
}

SAPB1.PMS_ActivityDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PMS_ActivityDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PMS_ActivityData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PMS_ActivityDataCollection;
