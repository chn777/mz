if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum.prototype.constructor = SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum;
SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum.tcddwttDefaultPurchase = new SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum('tcddwttDefaultPurchase', 'tcddwttDefaultPurchase');
SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum.tcddwttDefaultSales = new SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum('tcddwttDefaultSales', 'tcddwttDefaultSales');
SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum.tcddwttLine = new SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum('tcddwttLine', 'tcddwttLine');

module.exports = SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum;
