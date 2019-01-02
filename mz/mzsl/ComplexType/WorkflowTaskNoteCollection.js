var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WorkflowTaskNoteCollection = function () {
}

SAPB1.WorkflowTaskNoteCollection.prototype = new SAPB1.Collection();
SAPB1.WorkflowTaskNoteCollection.prototype.constructor = SAPB1.WorkflowTaskNoteCollection;
//override the default one.    
SAPB1.WorkflowTaskNoteCollection.get = function (index) {
    return SAPB1.WorkflowTaskNote.create(this.array[index]);
}

SAPB1.WorkflowTaskNoteCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WorkflowTaskNoteCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WorkflowTaskNote.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WorkflowTaskNoteCollection;
