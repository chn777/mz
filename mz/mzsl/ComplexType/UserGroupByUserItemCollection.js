var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserGroupByUserItemCollection = function () {
}

SAPB1.UserGroupByUserItemCollection.prototype = new SAPB1.Collection();
SAPB1.UserGroupByUserItemCollection.prototype.constructor = SAPB1.UserGroupByUserItemCollection;
//override the default one.    
SAPB1.UserGroupByUserItemCollection.get = function (index) {
    return SAPB1.UserGroupByUserItem.create(this.array[index]);
}

SAPB1.UserGroupByUserItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserGroupByUserItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserGroupByUserItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserGroupByUserItemCollection;
