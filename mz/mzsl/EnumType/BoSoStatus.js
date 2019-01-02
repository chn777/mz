if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSoStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSoStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSoStatus.prototype.constructor = SAPB1.BoSoStatus;
SAPB1.BoSoStatus.so_Closed = new SAPB1.BoSoStatus('so_Closed', 'so_Closed');
SAPB1.BoSoStatus.so_Open = new SAPB1.BoSoStatus('so_Open', 'so_Open');

module.exports = SAPB1.BoSoStatus;
