var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalTemplateDocumentCollection = function () {
}

SAPB1.ApprovalTemplateDocumentCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalTemplateDocumentCollection.prototype.constructor = SAPB1.ApprovalTemplateDocumentCollection;
//override the default one.    
SAPB1.ApprovalTemplateDocumentCollection.get = function (index) {
    return SAPB1.ApprovalTemplateDocument.create(this.array[index]);
}

SAPB1.ApprovalTemplateDocumentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalTemplateDocumentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalTemplateDocument.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalTemplateDocumentCollection;
