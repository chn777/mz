if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoProductSources = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoProductSources.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoProductSources.prototype.constructor = SAPB1.BoProductSources;
SAPB1.BoProductSources.bps_ProducedByCompany = new SAPB1.BoProductSources('bps_ProducedByCompany', 'bps_ProducedByCompany');
SAPB1.BoProductSources.bps_ImportedByCompany = new SAPB1.BoProductSources('bps_ImportedByCompany', 'bps_ImportedByCompany');
SAPB1.BoProductSources.bps_PurchasedFromDomVendor = new SAPB1.BoProductSources('bps_PurchasedFromDomVendor', 'bps_PurchasedFromDomVendor');
SAPB1.BoProductSources.bps_ImportedGoodsPurchasedFromDomVendor = new SAPB1.BoProductSources('bps_ImportedGoodsPurchasedFromDomVendor', 'bps_ImportedGoodsPurchasedFromDomVendor');

module.exports = SAPB1.BoProductSources;
