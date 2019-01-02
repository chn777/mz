if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSoClosedInTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSoClosedInTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSoClosedInTypes.prototype.constructor = SAPB1.BoSoClosedInTypes;
SAPB1.BoSoClosedInTypes.sos_Weeks = new SAPB1.BoSoClosedInTypes('sos_Weeks', 'sos_Weeks');
SAPB1.BoSoClosedInTypes.sos_Days = new SAPB1.BoSoClosedInTypes('sos_Days', 'sos_Days');
SAPB1.BoSoClosedInTypes.sos_Months = new SAPB1.BoSoClosedInTypes('sos_Months', 'sos_Months');

module.exports = SAPB1.BoSoClosedInTypes;
