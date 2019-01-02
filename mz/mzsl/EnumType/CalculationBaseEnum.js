if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CalculationBaseEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CalculationBaseEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CalculationBaseEnum.prototype.constructor = SAPB1.CalculationBaseEnum;
SAPB1.CalculationBaseEnum.cbMonthly = new SAPB1.CalculationBaseEnum('cbMonthly', 'cbMonthly');
SAPB1.CalculationBaseEnum.cbYearly = new SAPB1.CalculationBaseEnum('cbYearly', 'cbYearly');

module.exports = SAPB1.CalculationBaseEnum;
