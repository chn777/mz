var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CheckInParamsCollection = function () {
}

SAPB1.CheckInParamsCollection.prototype = new SAPB1.Collection();
SAPB1.CheckInParamsCollection.prototype.constructor = SAPB1.CheckInParamsCollection;
//override the default one.    
SAPB1.CheckInParamsCollection.get = function (index) {
    return SAPB1.CheckInParams.create(this.array[index]);
}

SAPB1.CheckInParamsCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CheckInParamsCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CheckInParams.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CheckInParamsCollection;
