if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SpecialDepreciationCalculationMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SpecialDepreciationCalculationMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SpecialDepreciationCalculationMethodEnum.prototype.constructor = SAPB1.SpecialDepreciationCalculationMethodEnum;
SAPB1.SpecialDepreciationCalculationMethodEnum.spcmAlternative = new SAPB1.SpecialDepreciationCalculationMethodEnum('spcmAlternative', 'spcmAlternative');
SAPB1.SpecialDepreciationCalculationMethodEnum.spcmAdditional = new SAPB1.SpecialDepreciationCalculationMethodEnum('spcmAdditional', 'spcmAdditional');

module.exports = SAPB1.SpecialDepreciationCalculationMethodEnum;
