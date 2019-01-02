if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EcmActionPeriodTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EcmActionPeriodTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EcmActionPeriodTypeEnum.prototype.constructor = SAPB1.EcmActionPeriodTypeEnum;
SAPB1.EcmActionPeriodTypeEnum.aptMonth = new SAPB1.EcmActionPeriodTypeEnum('aptMonth', 'aptMonth');
SAPB1.EcmActionPeriodTypeEnum.aptYear = new SAPB1.EcmActionPeriodTypeEnum('aptYear', 'aptYear');
SAPB1.EcmActionPeriodTypeEnum.aptDateRange = new SAPB1.EcmActionPeriodTypeEnum('aptDateRange', 'aptDateRange');
SAPB1.EcmActionPeriodTypeEnum.aptQuarter = new SAPB1.EcmActionPeriodTypeEnum('aptQuarter', 'aptQuarter');

module.exports = SAPB1.EcmActionPeriodTypeEnum;
