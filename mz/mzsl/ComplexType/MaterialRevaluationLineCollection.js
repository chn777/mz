var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.MaterialRevaluationLineCollection = function () {
}

SAPB1.MaterialRevaluationLineCollection.prototype = new SAPB1.Collection();
SAPB1.MaterialRevaluationLineCollection.prototype.constructor = SAPB1.MaterialRevaluationLineCollection;
//override the default one.    
SAPB1.MaterialRevaluationLineCollection.get = function (index) {
    return SAPB1.MaterialRevaluationLine.create(this.array[index]);
}

SAPB1.MaterialRevaluationLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.MaterialRevaluationLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.MaterialRevaluationLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.MaterialRevaluationLineCollection;
