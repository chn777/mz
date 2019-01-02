if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GovPayCodePeriodicityEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GovPayCodePeriodicityEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GovPayCodePeriodicityEnum.prototype.constructor = SAPB1.GovPayCodePeriodicityEnum;
SAPB1.GovPayCodePeriodicityEnum.gpcpHalfMonth = new SAPB1.GovPayCodePeriodicityEnum('gpcpHalfMonth', 'gpcpHalfMonth');
SAPB1.GovPayCodePeriodicityEnum.gpcpQuarter = new SAPB1.GovPayCodePeriodicityEnum('gpcpQuarter', 'gpcpQuarter');
SAPB1.GovPayCodePeriodicityEnum.gpcpTenDays = new SAPB1.GovPayCodePeriodicityEnum('gpcpTenDays', 'gpcpTenDays');
SAPB1.GovPayCodePeriodicityEnum.gpcpMonth = new SAPB1.GovPayCodePeriodicityEnum('gpcpMonth', 'gpcpMonth');

module.exports = SAPB1.GovPayCodePeriodicityEnum;
