var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AttributeGroupLineCollection = function () {
}

SAPB1.AttributeGroupLineCollection.prototype = new SAPB1.Collection();
SAPB1.AttributeGroupLineCollection.prototype.constructor = SAPB1.AttributeGroupLineCollection;
//override the default one.    
SAPB1.AttributeGroupLineCollection.get = function (index) {
    return SAPB1.AttributeGroupLine.create(this.array[index]);
}

SAPB1.AttributeGroupLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AttributeGroupLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AttributeGroupLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AttributeGroupLineCollection;
