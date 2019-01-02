var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalTemplateStageCollection = function () {
}

SAPB1.ApprovalTemplateStageCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalTemplateStageCollection.prototype.constructor = SAPB1.ApprovalTemplateStageCollection;
//override the default one.    
SAPB1.ApprovalTemplateStageCollection.get = function (index) {
    return SAPB1.ApprovalTemplateStage.create(this.array[index]);
}

SAPB1.ApprovalTemplateStageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalTemplateStageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalTemplateStage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalTemplateStageCollection;
