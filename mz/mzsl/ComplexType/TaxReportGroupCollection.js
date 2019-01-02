var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxReportGroupCollection = function () {
}

SAPB1.TaxReportGroupCollection.prototype = new SAPB1.Collection();
SAPB1.TaxReportGroupCollection.prototype.constructor = SAPB1.TaxReportGroupCollection;
//override the default one.    
SAPB1.TaxReportGroupCollection.get = function (index) {
    return SAPB1.TaxReportGroup.create(this.array[index]);
}

SAPB1.TaxReportGroupCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxReportGroupCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxReportGroup.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxReportGroupCollection;
