var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxReportSeriesCollection = function () {
}

SAPB1.TaxReportSeriesCollection.prototype = new SAPB1.Collection();
SAPB1.TaxReportSeriesCollection.prototype.constructor = SAPB1.TaxReportSeriesCollection;
//override the default one.    
SAPB1.TaxReportSeriesCollection.get = function (index) {
    return SAPB1.TaxReportSeries.create(this.array[index]);
}

SAPB1.TaxReportSeriesCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxReportSeriesCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxReportSeries.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxReportSeriesCollection;
