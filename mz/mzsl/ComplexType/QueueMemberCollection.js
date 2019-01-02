var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.QueueMemberCollection = function () {
}

SAPB1.QueueMemberCollection.prototype = new SAPB1.Collection();
SAPB1.QueueMemberCollection.prototype.constructor = SAPB1.QueueMemberCollection;
//override the default one.    
SAPB1.QueueMemberCollection.get = function (index) {
    return SAPB1.QueueMember.create(this.array[index]);
}

SAPB1.QueueMemberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.QueueMemberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.QueueMember.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.QueueMemberCollection;
