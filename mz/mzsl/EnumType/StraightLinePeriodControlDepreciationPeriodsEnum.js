if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum.prototype.constructor = SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum;
SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum.slpcdpIndividualUsage = new SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum('slpcdpIndividualUsage', 'slpcdpIndividualUsage');
SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum.slpcdpIndividual = new SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum('slpcdpIndividual', 'slpcdpIndividual');
SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum.slpcdpStandard = new SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum('slpcdpStandard', 'slpcdpStandard');

module.exports = SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum;
