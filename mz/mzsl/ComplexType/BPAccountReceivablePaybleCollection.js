var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPAccountReceivablePaybleCollection = function () {
}

SAPB1.BPAccountReceivablePaybleCollection.prototype = new SAPB1.Collection();
SAPB1.BPAccountReceivablePaybleCollection.prototype.constructor = SAPB1.BPAccountReceivablePaybleCollection;
//override the default one.    
SAPB1.BPAccountReceivablePaybleCollection.get = function (index) {
    return SAPB1.BPAccountReceivablePayble.create(this.array[index]);
}

SAPB1.BPAccountReceivablePaybleCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPAccountReceivablePaybleCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPAccountReceivablePayble.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPAccountReceivablePaybleCollection;
