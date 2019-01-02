var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxReportAccountCollection = function () {
}

SAPB1.TaxReportAccountCollection.prototype = new SAPB1.Collection();
SAPB1.TaxReportAccountCollection.prototype.constructor = SAPB1.TaxReportAccountCollection;
//override the default one.    
SAPB1.TaxReportAccountCollection.get = function (index) {
    return SAPB1.TaxReportAccount.create(this.array[index]);
}

SAPB1.TaxReportAccountCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxReportAccountCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxReportAccount.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxReportAccountCollection;
