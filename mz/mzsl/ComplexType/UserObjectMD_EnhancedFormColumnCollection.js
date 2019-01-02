var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserObjectMD_EnhancedFormColumnCollection = function () {
}

SAPB1.UserObjectMD_EnhancedFormColumnCollection.prototype = new SAPB1.Collection();
SAPB1.UserObjectMD_EnhancedFormColumnCollection.prototype.constructor = SAPB1.UserObjectMD_EnhancedFormColumnCollection;
//override the default one.    
SAPB1.UserObjectMD_EnhancedFormColumnCollection.get = function (index) {
    return SAPB1.UserObjectMD_EnhancedFormColumn.create(this.array[index]);
}

SAPB1.UserObjectMD_EnhancedFormColumnCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserObjectMD_EnhancedFormColumnCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserObjectMD_EnhancedFormColumn.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserObjectMD_EnhancedFormColumnCollection;
