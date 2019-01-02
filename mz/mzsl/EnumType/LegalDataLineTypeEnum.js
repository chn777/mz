if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LegalDataLineTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LegalDataLineTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LegalDataLineTypeEnum.prototype.constructor = SAPB1.LegalDataLineTypeEnum;
SAPB1.LegalDataLineTypeEnum.ldlt_TotalTax = new SAPB1.LegalDataLineTypeEnum('ldlt_TotalTax', 'ldlt_TotalTax');
SAPB1.LegalDataLineTypeEnum.ldlt_DocumentTotal = new SAPB1.LegalDataLineTypeEnum('ldlt_DocumentTotal', 'ldlt_DocumentTotal');
SAPB1.LegalDataLineTypeEnum.ldlt_TaxPerLine = new SAPB1.LegalDataLineTypeEnum('ldlt_TaxPerLine', 'ldlt_TaxPerLine');

module.exports = SAPB1.LegalDataLineTypeEnum;
