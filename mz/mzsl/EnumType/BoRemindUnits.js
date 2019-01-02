if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRemindUnits = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRemindUnits.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRemindUnits.prototype.constructor = SAPB1.BoRemindUnits;
SAPB1.BoRemindUnits.reu_Month = new SAPB1.BoRemindUnits('reu_Month', 'reu_Month');
SAPB1.BoRemindUnits.reu_Days = new SAPB1.BoRemindUnits('reu_Days', 'reu_Days');
SAPB1.BoRemindUnits.reu_Weeks = new SAPB1.BoRemindUnits('reu_Weeks', 'reu_Weeks');

module.exports = SAPB1.BoRemindUnits;
