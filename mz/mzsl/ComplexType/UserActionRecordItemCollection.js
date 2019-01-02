var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserActionRecordItemCollection = function () {
}

SAPB1.UserActionRecordItemCollection.prototype = new SAPB1.Collection();
SAPB1.UserActionRecordItemCollection.prototype.constructor = SAPB1.UserActionRecordItemCollection;
//override the default one.    
SAPB1.UserActionRecordItemCollection.get = function (index) {
    return SAPB1.UserActionRecordItem.create(this.array[index]);
}

SAPB1.UserActionRecordItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserActionRecordItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserActionRecordItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserActionRecordItemCollection;
