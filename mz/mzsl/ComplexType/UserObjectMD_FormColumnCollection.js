var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserObjectMD_FormColumnCollection = function () {
}

SAPB1.UserObjectMD_FormColumnCollection.prototype = new SAPB1.Collection();
SAPB1.UserObjectMD_FormColumnCollection.prototype.constructor = SAPB1.UserObjectMD_FormColumnCollection;
//override the default one.    
SAPB1.UserObjectMD_FormColumnCollection.get = function (index) {
    return SAPB1.UserObjectMD_FormColumn.create(this.array[index]);
}

SAPB1.UserObjectMD_FormColumnCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserObjectMD_FormColumnCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserObjectMD_FormColumn.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserObjectMD_FormColumnCollection;
