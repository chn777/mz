var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WorkOrder_LineCollection = function () {
}

SAPB1.WorkOrder_LineCollection.prototype = new SAPB1.Collection();
SAPB1.WorkOrder_LineCollection.prototype.constructor = SAPB1.WorkOrder_LineCollection;
//override the default one.    
SAPB1.WorkOrder_LineCollection.get = function (index) {
    return SAPB1.WorkOrder_Line.create(this.array[index]);
}

SAPB1.WorkOrder_LineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WorkOrder_LineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WorkOrder_Line.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WorkOrder_LineCollection;
