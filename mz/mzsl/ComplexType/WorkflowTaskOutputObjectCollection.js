var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WorkflowTaskOutputObjectCollection = function () {
}

SAPB1.WorkflowTaskOutputObjectCollection.prototype = new SAPB1.Collection();
SAPB1.WorkflowTaskOutputObjectCollection.prototype.constructor = SAPB1.WorkflowTaskOutputObjectCollection;
//override the default one.    
SAPB1.WorkflowTaskOutputObjectCollection.get = function (index) {
    return SAPB1.WorkflowTaskOutputObject.create(this.array[index]);
}

SAPB1.WorkflowTaskOutputObjectCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WorkflowTaskOutputObjectCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WorkflowTaskOutputObject.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WorkflowTaskOutputObjectCollection;
