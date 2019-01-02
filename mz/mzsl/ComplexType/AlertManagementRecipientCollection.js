var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AlertManagementRecipientCollection = function () {
}

SAPB1.AlertManagementRecipientCollection.prototype = new SAPB1.Collection();
SAPB1.AlertManagementRecipientCollection.prototype.constructor = SAPB1.AlertManagementRecipientCollection;
//override the default one.    
SAPB1.AlertManagementRecipientCollection.get = function (index) {
    return SAPB1.AlertManagementRecipient.create(this.array[index]);
}

SAPB1.AlertManagementRecipientCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AlertManagementRecipientCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AlertManagementRecipient.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AlertManagementRecipientCollection;
