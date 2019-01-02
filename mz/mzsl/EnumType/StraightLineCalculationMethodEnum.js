if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.StraightLineCalculationMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.StraightLineCalculationMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.StraightLineCalculationMethodEnum.prototype.constructor = SAPB1.StraightLineCalculationMethodEnum;
SAPB1.StraightLineCalculationMethodEnum.slcmAuquisitionValueDividedByTotalUsefulLife = new SAPB1.StraightLineCalculationMethodEnum('slcmAuquisitionValueDividedByTotalUsefulLife', 'slcmAuquisitionValueDividedByTotalUsefulLife');
SAPB1.StraightLineCalculationMethodEnum.slcmNetBookValueDividedByRemainingLife = new SAPB1.StraightLineCalculationMethodEnum('slcmNetBookValueDividedByRemainingLife', 'slcmNetBookValueDividedByRemainingLife');
SAPB1.StraightLineCalculationMethodEnum.slcmPercentageOfAcquisitionValue = new SAPB1.StraightLineCalculationMethodEnum('slcmPercentageOfAcquisitionValue', 'slcmPercentageOfAcquisitionValue');

module.exports = SAPB1.StraightLineCalculationMethodEnum;
