var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalTemplateTermCollection = function () {
}

SAPB1.ApprovalTemplateTermCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalTemplateTermCollection.prototype.constructor = SAPB1.ApprovalTemplateTermCollection;
//override the default one.    
SAPB1.ApprovalTemplateTermCollection.get = function (index) {
    return SAPB1.ApprovalTemplateTerm.create(this.array[index]);
}

SAPB1.ApprovalTemplateTermCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalTemplateTermCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalTemplateTerm.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalTemplateTermCollection;
