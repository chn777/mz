var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.MessageDataLineCollection = function () {
}

SAPB1.MessageDataLineCollection.prototype = new SAPB1.Collection();
SAPB1.MessageDataLineCollection.prototype.constructor = SAPB1.MessageDataLineCollection;
//override the default one.    
SAPB1.MessageDataLineCollection.get = function (index) {
    return SAPB1.MessageDataLine.create(this.array[index]);
}

SAPB1.MessageDataLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.MessageDataLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.MessageDataLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.MessageDataLineCollection;
