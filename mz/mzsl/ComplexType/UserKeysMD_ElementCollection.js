var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserKeysMD_ElementCollection = function () {
}

SAPB1.UserKeysMD_ElementCollection.prototype = new SAPB1.Collection();
SAPB1.UserKeysMD_ElementCollection.prototype.constructor = SAPB1.UserKeysMD_ElementCollection;
//override the default one.    
SAPB1.UserKeysMD_ElementCollection.get = function (index) {
    return SAPB1.UserKeysMD_Element.create(this.array[index]);
}

SAPB1.UserKeysMD_ElementCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserKeysMD_ElementCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserKeysMD_Element.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserKeysMD_ElementCollection;
