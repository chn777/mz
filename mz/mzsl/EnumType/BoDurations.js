if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDurations = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDurations.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDurations.prototype.constructor = SAPB1.BoDurations;
SAPB1.BoDurations.du_Hours = new SAPB1.BoDurations('du_Hours', 'du_Hours');
SAPB1.BoDurations.du_Days = new SAPB1.BoDurations('du_Days', 'du_Days');
SAPB1.BoDurations.du_Minuts = new SAPB1.BoDurations('du_Minuts', 'du_Minuts');
SAPB1.BoDurations.du_Seconds = new SAPB1.BoDurations('du_Seconds', 'du_Seconds');

module.exports = SAPB1.BoDurations;
