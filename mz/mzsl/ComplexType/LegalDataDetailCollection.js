var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.LegalDataDetailCollection = function () {
}

SAPB1.LegalDataDetailCollection.prototype = new SAPB1.Collection();
SAPB1.LegalDataDetailCollection.prototype.constructor = SAPB1.LegalDataDetailCollection;
//override the default one.    
SAPB1.LegalDataDetailCollection.get = function (index) {
    return SAPB1.LegalDataDetail.create(this.array[index]);
}

SAPB1.LegalDataDetailCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.LegalDataDetailCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.LegalDataDetail.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.LegalDataDetailCollection;
