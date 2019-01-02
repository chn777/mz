if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RetirementPeriodControlEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RetirementPeriodControlEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RetirementPeriodControlEnum.prototype.constructor = SAPB1.RetirementPeriodControlEnum;
SAPB1.RetirementPeriodControlEnum.rpcOnlyAfterEndOfUsefulLife = new SAPB1.RetirementPeriodControlEnum('rpcOnlyAfterEndOfUsefulLife', 'rpcOnlyAfterEndOfUsefulLife');
SAPB1.RetirementPeriodControlEnum.rpcProRataTemporis = new SAPB1.RetirementPeriodControlEnum('rpcProRataTemporis', 'rpcProRataTemporis');
SAPB1.RetirementPeriodControlEnum.rpcHalfYearConvention = new SAPB1.RetirementPeriodControlEnum('rpcHalfYearConvention', 'rpcHalfYearConvention');

module.exports = SAPB1.RetirementPeriodControlEnum;
