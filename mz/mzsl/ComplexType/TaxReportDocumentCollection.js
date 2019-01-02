var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxReportDocumentCollection = function () {
}

SAPB1.TaxReportDocumentCollection.prototype = new SAPB1.Collection();
SAPB1.TaxReportDocumentCollection.prototype.constructor = SAPB1.TaxReportDocumentCollection;
//override the default one.    
SAPB1.TaxReportDocumentCollection.get = function (index) {
    return SAPB1.TaxReportDocument.create(this.array[index]);
}

SAPB1.TaxReportDocumentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxReportDocumentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxReportDocument.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxReportDocumentCollection;
