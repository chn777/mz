var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.MTC_CIOTRN1Collection = function () {
}

SAPB1.MTC_CIOTRN1Collection.prototype = new SAPB1.Collection();
SAPB1.MTC_CIOTRN1Collection.prototype.constructor = SAPB1.MTC_CIOTRN1Collection;
//override the default one.    
SAPB1.MTC_CIOTRN1Collection.get = function (index) {
    return SAPB1.MTC_CIOTRN1.create(this.array[index]);
}

SAPB1.MTC_CIOTRN1Collection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.MTC_CIOTRN1Collection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.MTC_CIOTRN1.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.MTC_CIOTRN1Collection;
