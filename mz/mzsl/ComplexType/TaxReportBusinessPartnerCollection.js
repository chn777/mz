var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxReportBusinessPartnerCollection = function () {
}

SAPB1.TaxReportBusinessPartnerCollection.prototype = new SAPB1.Collection();
SAPB1.TaxReportBusinessPartnerCollection.prototype.constructor = SAPB1.TaxReportBusinessPartnerCollection;
//override the default one.    
SAPB1.TaxReportBusinessPartnerCollection.get = function (index) {
    return SAPB1.TaxReportBusinessPartner.create(this.array[index]);
}

SAPB1.TaxReportBusinessPartnerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxReportBusinessPartnerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxReportBusinessPartner.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxReportBusinessPartnerCollection;
