if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSoOsStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSoOsStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSoOsStatus.prototype.constructor = SAPB1.BoSoOsStatus;
SAPB1.BoSoOsStatus.sos_Missed = new SAPB1.BoSoOsStatus('sos_Missed', 'sos_Missed');
SAPB1.BoSoOsStatus.sos_Sold = new SAPB1.BoSoOsStatus('sos_Sold', 'sos_Sold');
SAPB1.BoSoOsStatus.sos_Open = new SAPB1.BoSoOsStatus('sos_Open', 'sos_Open');

module.exports = SAPB1.BoSoOsStatus;
