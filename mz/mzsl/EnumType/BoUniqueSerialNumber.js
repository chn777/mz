if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoUniqueSerialNumber = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoUniqueSerialNumber.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoUniqueSerialNumber.prototype.constructor = SAPB1.BoUniqueSerialNumber;
SAPB1.BoUniqueSerialNumber.usn_MfrSerialNumber = new SAPB1.BoUniqueSerialNumber('usn_MfrSerialNumber', 'usn_MfrSerialNumber');
SAPB1.BoUniqueSerialNumber.usn_LotNumber = new SAPB1.BoUniqueSerialNumber('usn_LotNumber', 'usn_LotNumber');
SAPB1.BoUniqueSerialNumber.usn_None = new SAPB1.BoUniqueSerialNumber('usn_None', 'usn_None');
SAPB1.BoUniqueSerialNumber.usn_SerialNumber = new SAPB1.BoUniqueSerialNumber('usn_SerialNumber', 'usn_SerialNumber');

module.exports = SAPB1.BoUniqueSerialNumber;
