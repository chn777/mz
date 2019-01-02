if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxCodeDeterminationTCDTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxCodeDeterminationTCDTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxCodeDeterminationTCDTypeEnum.prototype.constructor = SAPB1.TaxCodeDeterminationTCDTypeEnum;
SAPB1.TaxCodeDeterminationTCDTypeEnum.tcdtMaterialItem = new SAPB1.TaxCodeDeterminationTCDTypeEnum('tcdtMaterialItem', 'tcdtMaterialItem');
SAPB1.TaxCodeDeterminationTCDTypeEnum.tcdtServiceItem = new SAPB1.TaxCodeDeterminationTCDTypeEnum('tcdtServiceItem', 'tcdtServiceItem');
SAPB1.TaxCodeDeterminationTCDTypeEnum.tcdtServiceDocument = new SAPB1.TaxCodeDeterminationTCDTypeEnum('tcdtServiceDocument', 'tcdtServiceDocument');
SAPB1.TaxCodeDeterminationTCDTypeEnum.tcdtWithholdingTax = new SAPB1.TaxCodeDeterminationTCDTypeEnum('tcdtWithholdingTax', 'tcdtWithholdingTax');

module.exports = SAPB1.TaxCodeDeterminationTCDTypeEnum;
