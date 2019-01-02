var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxInvoiceReportLineCollection = function () {
}

SAPB1.TaxInvoiceReportLineCollection.prototype = new SAPB1.Collection();
SAPB1.TaxInvoiceReportLineCollection.prototype.constructor = SAPB1.TaxInvoiceReportLineCollection;
//override the default one.    
SAPB1.TaxInvoiceReportLineCollection.get = function (index) {
    return SAPB1.TaxInvoiceReportLine.create(this.array[index]);
}

SAPB1.TaxInvoiceReportLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxInvoiceReportLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxInvoiceReportLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxInvoiceReportLineCollection;
