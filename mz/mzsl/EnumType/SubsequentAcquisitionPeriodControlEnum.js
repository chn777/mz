if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SubsequentAcquisitionPeriodControlEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SubsequentAcquisitionPeriodControlEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SubsequentAcquisitionPeriodControlEnum.prototype.constructor = SAPB1.SubsequentAcquisitionPeriodControlEnum;
SAPB1.SubsequentAcquisitionPeriodControlEnum.sapcProRataTemporis = new SAPB1.SubsequentAcquisitionPeriodControlEnum('sapcProRataTemporis', 'sapcProRataTemporis');
SAPB1.SubsequentAcquisitionPeriodControlEnum.sapcHalfYearConvention = new SAPB1.SubsequentAcquisitionPeriodControlEnum('sapcHalfYearConvention', 'sapcHalfYearConvention');
SAPB1.SubsequentAcquisitionPeriodControlEnum.sapcFullYear = new SAPB1.SubsequentAcquisitionPeriodControlEnum('sapcFullYear', 'sapcFullYear');

module.exports = SAPB1.SubsequentAcquisitionPeriodControlEnum;
