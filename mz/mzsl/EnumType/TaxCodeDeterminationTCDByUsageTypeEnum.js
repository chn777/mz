if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum.prototype.constructor = SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum;
SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum.tcdbutLine = new SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum('tcdbutLine', 'tcdbutLine');
SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum.tcdbutDefaultPurchase = new SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum('tcdbutDefaultPurchase', 'tcdbutDefaultPurchase');
SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum.tcdbutDefaultSales = new SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum('tcdbutDefaultSales', 'tcdbutDefaultSales');

module.exports = SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum;
