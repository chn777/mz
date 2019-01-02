var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentSpecialLineCollection = function () {
}

SAPB1.DocumentSpecialLineCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentSpecialLineCollection.prototype.constructor = SAPB1.DocumentSpecialLineCollection;
//override the default one.    
SAPB1.DocumentSpecialLineCollection.get = function (index) {
    return SAPB1.DocumentSpecialLine.create(this.array[index]);
}

SAPB1.DocumentSpecialLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentSpecialLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentSpecialLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentSpecialLineCollection;
