var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ServiceCallActivityCollection = function () {
}

SAPB1.ServiceCallActivityCollection.prototype = new SAPB1.Collection();
SAPB1.ServiceCallActivityCollection.prototype.constructor = SAPB1.ServiceCallActivityCollection;
//override the default one.    
SAPB1.ServiceCallActivityCollection.get = function (index) {
    return SAPB1.ServiceCallActivity.create(this.array[index]);
}

SAPB1.ServiceCallActivityCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ServiceCallActivityCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ServiceCallActivity.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ServiceCallActivityCollection;
