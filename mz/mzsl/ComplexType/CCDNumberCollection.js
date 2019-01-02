var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CCDNumberCollection = function () {
}

SAPB1.CCDNumberCollection.prototype = new SAPB1.Collection();
SAPB1.CCDNumberCollection.prototype.constructor = SAPB1.CCDNumberCollection;
//override the default one.    
SAPB1.CCDNumberCollection.get = function (index) {
    return SAPB1.CCDNumber.create(this.array[index]);
}

SAPB1.CCDNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CCDNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CCDNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CCDNumberCollection;
