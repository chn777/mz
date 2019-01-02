if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoFrequency = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoFrequency.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoFrequency.prototype.constructor = SAPB1.BoFrequency;
SAPB1.BoFrequency.bof_Monthly = new SAPB1.BoFrequency('bof_Monthly', 'bof_Monthly');
SAPB1.BoFrequency.bof_Weekly = new SAPB1.BoFrequency('bof_Weekly', 'bof_Weekly');
SAPB1.BoFrequency.bof_Annually = new SAPB1.BoFrequency('bof_Annually', 'bof_Annually');
SAPB1.BoFrequency.bof_Quarterly = new SAPB1.BoFrequency('bof_Quarterly', 'bof_Quarterly');
SAPB1.BoFrequency.bof_Every4Weeks = new SAPB1.BoFrequency('bof_Every4Weeks', 'bof_Every4Weeks');
SAPB1.BoFrequency.bof_HalfYearly = new SAPB1.BoFrequency('bof_HalfYearly', 'bof_HalfYearly');
SAPB1.BoFrequency.bof_EveryXDays = new SAPB1.BoFrequency('bof_EveryXDays', 'bof_EveryXDays');
SAPB1.BoFrequency.bof_Daily = new SAPB1.BoFrequency('bof_Daily', 'bof_Daily');
SAPB1.BoFrequency.bof_OneTime = new SAPB1.BoFrequency('bof_OneTime', 'bof_OneTime');

module.exports = SAPB1.BoFrequency;
