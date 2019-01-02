if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.WithholdingTaxCodeCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.WithholdingTaxCodeCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.WithholdingTaxCodeCategoryEnum.prototype.constructor = SAPB1.WithholdingTaxCodeCategoryEnum;
SAPB1.WithholdingTaxCodeCategoryEnum.wtcc_Payment = new SAPB1.WithholdingTaxCodeCategoryEnum('wtcc_Payment', 'wtcc_Payment');
SAPB1.WithholdingTaxCodeCategoryEnum.wtcc_Invoice = new SAPB1.WithholdingTaxCodeCategoryEnum('wtcc_Invoice', 'wtcc_Invoice');

module.exports = SAPB1.WithholdingTaxCodeCategoryEnum;
