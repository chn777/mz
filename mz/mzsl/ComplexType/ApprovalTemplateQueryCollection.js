var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalTemplateQueryCollection = function () {
}

SAPB1.ApprovalTemplateQueryCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalTemplateQueryCollection.prototype.constructor = SAPB1.ApprovalTemplateQueryCollection;
//override the default one.    
SAPB1.ApprovalTemplateQueryCollection.get = function (index) {
    return SAPB1.ApprovalTemplateQuery.create(this.array[index]);
}

SAPB1.ApprovalTemplateQueryCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalTemplateQueryCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalTemplateQuery.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalTemplateQueryCollection;
