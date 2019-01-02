if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSerialNumberStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSerialNumberStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSerialNumberStatus.prototype.constructor = SAPB1.BoSerialNumberStatus;
SAPB1.BoSerialNumberStatus.sns_Loaned = new SAPB1.BoSerialNumberStatus('sns_Loaned', 'sns_Loaned');
SAPB1.BoSerialNumberStatus.sns_InLab = new SAPB1.BoSerialNumberStatus('sns_InLab', 'sns_InLab');
SAPB1.BoSerialNumberStatus.sns_Terminated = new SAPB1.BoSerialNumberStatus('sns_Terminated', 'sns_Terminated');
SAPB1.BoSerialNumberStatus.sns_Returned = new SAPB1.BoSerialNumberStatus('sns_Returned', 'sns_Returned');
SAPB1.BoSerialNumberStatus.sns_Active = new SAPB1.BoSerialNumberStatus('sns_Active', 'sns_Active');

module.exports = SAPB1.BoSerialNumberStatus;
