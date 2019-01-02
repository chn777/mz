if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoForecastViewType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoForecastViewType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoForecastViewType.prototype.constructor = SAPB1.BoForecastViewType;
SAPB1.BoForecastViewType.fvtDaily = new SAPB1.BoForecastViewType('fvtDaily', 'fvtDaily');
SAPB1.BoForecastViewType.fvtWeekly = new SAPB1.BoForecastViewType('fvtWeekly', 'fvtWeekly');
SAPB1.BoForecastViewType.fvtMonthly = new SAPB1.BoForecastViewType('fvtMonthly', 'fvtMonthly');

module.exports = SAPB1.BoForecastViewType;
