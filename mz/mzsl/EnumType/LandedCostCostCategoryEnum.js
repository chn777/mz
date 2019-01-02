if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LandedCostCostCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LandedCostCostCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LandedCostCostCategoryEnum.prototype.constructor = SAPB1.LandedCostCostCategoryEnum;
SAPB1.LandedCostCostCategoryEnum.lccc_ExciseCost = new SAPB1.LandedCostCostCategoryEnum('lccc_ExciseCost', 'lccc_ExciseCost');
SAPB1.LandedCostCostCategoryEnum.lccc_CustomsVAT = new SAPB1.LandedCostCostCategoryEnum('lccc_CustomsVAT', 'lccc_CustomsVAT');
SAPB1.LandedCostCostCategoryEnum.lccc_CustomsDuty = new SAPB1.LandedCostCostCategoryEnum('lccc_CustomsDuty', 'lccc_CustomsDuty');

module.exports = SAPB1.LandedCostCostCategoryEnum;
