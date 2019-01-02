var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserValidValuesCollection = function () {
}

SAPB1.UserValidValuesCollection.prototype = new SAPB1.Collection();
SAPB1.UserValidValuesCollection.prototype.constructor = SAPB1.UserValidValuesCollection;
//override the default one.    
SAPB1.UserValidValuesCollection.get = function (index) {
    return SAPB1.UserValidValues.create(this.array[index]);
}

SAPB1.UserValidValuesCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserValidValuesCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserValidValues.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserValidValuesCollection;
