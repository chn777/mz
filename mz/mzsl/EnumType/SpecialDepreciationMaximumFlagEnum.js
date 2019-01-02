if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SpecialDepreciationMaximumFlagEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SpecialDepreciationMaximumFlagEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SpecialDepreciationMaximumFlagEnum.prototype.constructor = SAPB1.SpecialDepreciationMaximumFlagEnum;
SAPB1.SpecialDepreciationMaximumFlagEnum.spmfPercentage = new SAPB1.SpecialDepreciationMaximumFlagEnum('spmfPercentage', 'spmfPercentage');
SAPB1.SpecialDepreciationMaximumFlagEnum.spmfAmount = new SAPB1.SpecialDepreciationMaximumFlagEnum('spmfAmount', 'spmfAmount');

module.exports = SAPB1.SpecialDepreciationMaximumFlagEnum;
