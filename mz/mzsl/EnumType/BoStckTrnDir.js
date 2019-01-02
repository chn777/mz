if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoStckTrnDir = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoStckTrnDir.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoStckTrnDir.prototype.constructor = SAPB1.BoStckTrnDir;
SAPB1.BoStckTrnDir.bos_TransferFromTechnician = new SAPB1.BoStckTrnDir('bos_TransferFromTechnician', 'bos_TransferFromTechnician');
SAPB1.BoStckTrnDir.bos_TransferToTechnician = new SAPB1.BoStckTrnDir('bos_TransferToTechnician', 'bos_TransferToTechnician');

module.exports = SAPB1.BoStckTrnDir;
