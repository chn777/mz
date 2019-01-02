if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ShaamGroupEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ShaamGroupEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ShaamGroupEnum.prototype.constructor = SAPB1.ShaamGroupEnum;
SAPB1.ShaamGroupEnum.sgAgriculturalProducts = new SAPB1.ShaamGroupEnum('sgAgriculturalProducts', 'sgAgriculturalProducts');
SAPB1.ShaamGroupEnum.sgInsuranceCommissions = new SAPB1.ShaamGroupEnum('sgInsuranceCommissions', 'sgInsuranceCommissions');
SAPB1.ShaamGroupEnum.sgServicesAndAsset = new SAPB1.ShaamGroupEnum('sgServicesAndAsset', 'sgServicesAndAsset');
SAPB1.ShaamGroupEnum.sgWHTaxInstructions = new SAPB1.ShaamGroupEnum('sgWHTaxInstructions', 'sgWHTaxInstructions');
SAPB1.ShaamGroupEnum.sgInterestExchangeRateDiffs = new SAPB1.ShaamGroupEnum('sgInterestExchangeRateDiffs', 'sgInterestExchangeRateDiffs');

module.exports = SAPB1.ShaamGroupEnum;
