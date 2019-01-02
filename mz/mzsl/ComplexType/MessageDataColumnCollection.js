var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.MessageDataColumnCollection = function () {
}

SAPB1.MessageDataColumnCollection.prototype = new SAPB1.Collection();
SAPB1.MessageDataColumnCollection.prototype.constructor = SAPB1.MessageDataColumnCollection;
//override the default one.    
SAPB1.MessageDataColumnCollection.get = function (index) {
    return SAPB1.MessageDataColumn.create(this.array[index]);
}

SAPB1.MessageDataColumnCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.MessageDataColumnCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.MessageDataColumn.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.MessageDataColumnCollection;
