if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoResolutionUnits = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoResolutionUnits.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoResolutionUnits.prototype.constructor = SAPB1.BoResolutionUnits;
SAPB1.BoResolutionUnits.rsu_Hours = new SAPB1.BoResolutionUnits('rsu_Hours', 'rsu_Hours');
SAPB1.BoResolutionUnits.rsu_Days = new SAPB1.BoResolutionUnits('rsu_Days', 'rsu_Days');

module.exports = SAPB1.BoResolutionUnits;
