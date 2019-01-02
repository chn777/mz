if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTaxPostAccEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTaxPostAccEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTaxPostAccEnum.prototype.constructor = SAPB1.BoTaxPostAccEnum;
SAPB1.BoTaxPostAccEnum.tpa_SalesTaxAccount = new SAPB1.BoTaxPostAccEnum('tpa_SalesTaxAccount', 'tpa_SalesTaxAccount');
SAPB1.BoTaxPostAccEnum.tpa_Default = new SAPB1.BoTaxPostAccEnum('tpa_Default', 'tpa_Default');
SAPB1.BoTaxPostAccEnum.tpa_PurchaseTaxAccount = new SAPB1.BoTaxPostAccEnum('tpa_PurchaseTaxAccount', 'tpa_PurchaseTaxAccount');

module.exports = SAPB1.BoTaxPostAccEnum;
