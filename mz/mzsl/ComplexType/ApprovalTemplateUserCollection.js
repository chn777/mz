var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalTemplateUserCollection = function () {
}

SAPB1.ApprovalTemplateUserCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalTemplateUserCollection.prototype.constructor = SAPB1.ApprovalTemplateUserCollection;
//override the default one.    
SAPB1.ApprovalTemplateUserCollection.get = function (index) {
    return SAPB1.ApprovalTemplateUser.create(this.array[index]);
}

SAPB1.ApprovalTemplateUserCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalTemplateUserCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalTemplateUser.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalTemplateUserCollection;
