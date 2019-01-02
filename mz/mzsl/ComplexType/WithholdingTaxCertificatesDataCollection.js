var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WithholdingTaxCertificatesDataCollection = function () {
}

SAPB1.WithholdingTaxCertificatesDataCollection.prototype = new SAPB1.Collection();
SAPB1.WithholdingTaxCertificatesDataCollection.prototype.constructor = SAPB1.WithholdingTaxCertificatesDataCollection;
//override the default one.    
SAPB1.WithholdingTaxCertificatesDataCollection.get = function (index) {
    return SAPB1.WithholdingTaxCertificatesData.create(this.array[index]);
}

SAPB1.WithholdingTaxCertificatesDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WithholdingTaxCertificatesDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WithholdingTaxCertificatesData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WithholdingTaxCertificatesDataCollection;
