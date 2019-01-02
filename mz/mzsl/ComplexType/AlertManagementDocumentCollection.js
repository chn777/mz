var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AlertManagementDocumentCollection = function () {
}

SAPB1.AlertManagementDocumentCollection.prototype = new SAPB1.Collection();
SAPB1.AlertManagementDocumentCollection.prototype.constructor = SAPB1.AlertManagementDocumentCollection;
//override the default one.    
SAPB1.AlertManagementDocumentCollection.get = function (index) {
    return SAPB1.AlertManagementDocument.create(this.array[index]);
}

SAPB1.AlertManagementDocumentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AlertManagementDocumentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AlertManagementDocument.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AlertManagementDocumentCollection;
