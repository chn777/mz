var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ExtendedTranslation_ResultLineCollection = function () {
}

SAPB1.ExtendedTranslation_ResultLineCollection.prototype = new SAPB1.Collection();
SAPB1.ExtendedTranslation_ResultLineCollection.prototype.constructor = SAPB1.ExtendedTranslation_ResultLineCollection;
//override the default one.    
SAPB1.ExtendedTranslation_ResultLineCollection.get = function (index) {
    return SAPB1.ExtendedTranslation_ResultLine.create(this.array[index]);
}

SAPB1.ExtendedTranslation_ResultLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ExtendedTranslation_ResultLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ExtendedTranslation_ResultLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ExtendedTranslation_ResultLineCollection;
