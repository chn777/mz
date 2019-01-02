var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ActivityRecipientCollection = function () {
}

SAPB1.ActivityRecipientCollection.prototype = new SAPB1.Collection();
SAPB1.ActivityRecipientCollection.prototype.constructor = SAPB1.ActivityRecipientCollection;
//override the default one.    
SAPB1.ActivityRecipientCollection.get = function (index) {
    return SAPB1.ActivityRecipient.create(this.array[index]);
}

SAPB1.ActivityRecipientCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ActivityRecipientCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ActivityRecipient.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ActivityRecipientCollection;
