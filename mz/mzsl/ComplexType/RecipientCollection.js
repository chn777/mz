var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.RecipientCollection = function () {
}

SAPB1.RecipientCollection.prototype = new SAPB1.Collection();
SAPB1.RecipientCollection.prototype.constructor = SAPB1.RecipientCollection;
//override the default one.    
SAPB1.RecipientCollection.get = function (index) {
    return SAPB1.Recipient.create(this.array[index]);
}

SAPB1.RecipientCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.RecipientCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.Recipient.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.RecipientCollection;
