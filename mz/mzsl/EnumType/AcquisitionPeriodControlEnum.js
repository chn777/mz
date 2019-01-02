if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AcquisitionPeriodControlEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AcquisitionPeriodControlEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AcquisitionPeriodControlEnum.prototype.constructor = SAPB1.AcquisitionPeriodControlEnum;
SAPB1.AcquisitionPeriodControlEnum.apcFirstYearConvention = new SAPB1.AcquisitionPeriodControlEnum('apcFirstYearConvention', 'apcFirstYearConvention');
SAPB1.AcquisitionPeriodControlEnum.apcFullYear = new SAPB1.AcquisitionPeriodControlEnum('apcFullYear', 'apcFullYear');
SAPB1.AcquisitionPeriodControlEnum.apcProRataTemporis = new SAPB1.AcquisitionPeriodControlEnum('apcProRataTemporis', 'apcProRataTemporis');
SAPB1.AcquisitionPeriodControlEnum.apcHalfYear = new SAPB1.AcquisitionPeriodControlEnum('apcHalfYear', 'apcHalfYear');

module.exports = SAPB1.AcquisitionPeriodControlEnum;
