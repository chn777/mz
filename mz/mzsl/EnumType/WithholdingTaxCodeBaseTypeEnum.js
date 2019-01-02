if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.WithholdingTaxCodeBaseTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.WithholdingTaxCodeBaseTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.WithholdingTaxCodeBaseTypeEnum.prototype.constructor = SAPB1.WithholdingTaxCodeBaseTypeEnum;
SAPB1.WithholdingTaxCodeBaseTypeEnum.wtcbt_Gross = new SAPB1.WithholdingTaxCodeBaseTypeEnum('wtcbt_Gross', 'wtcbt_Gross');
SAPB1.WithholdingTaxCodeBaseTypeEnum.wtcbt_VAT = new SAPB1.WithholdingTaxCodeBaseTypeEnum('wtcbt_VAT', 'wtcbt_VAT');
SAPB1.WithholdingTaxCodeBaseTypeEnum.wtcbt_Gross_VAT = new SAPB1.WithholdingTaxCodeBaseTypeEnum('wtcbt_Gross_VAT', 'wtcbt_Gross_VAT');
SAPB1.WithholdingTaxCodeBaseTypeEnum.wtcbt_Net = new SAPB1.WithholdingTaxCodeBaseTypeEnum('wtcbt_Net', 'wtcbt_Net');

module.exports = SAPB1.WithholdingTaxCodeBaseTypeEnum;
