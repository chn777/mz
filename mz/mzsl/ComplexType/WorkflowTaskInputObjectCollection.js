var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WorkflowTaskInputObjectCollection = function () {
}

SAPB1.WorkflowTaskInputObjectCollection.prototype = new SAPB1.Collection();
SAPB1.WorkflowTaskInputObjectCollection.prototype.constructor = SAPB1.WorkflowTaskInputObjectCollection;
//override the default one.    
SAPB1.WorkflowTaskInputObjectCollection.get = function (index) {
    return SAPB1.WorkflowTaskInputObject.create(this.array[index]);
}

SAPB1.WorkflowTaskInputObjectCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WorkflowTaskInputObjectCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WorkflowTaskInputObject.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WorkflowTaskInputObjectCollection;
