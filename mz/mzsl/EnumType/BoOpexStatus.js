if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoOpexStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoOpexStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoOpexStatus.prototype.constructor = SAPB1.BoOpexStatus;
SAPB1.BoOpexStatus.bos_Open = new SAPB1.BoOpexStatus('bos_Open', 'bos_Open');
SAPB1.BoOpexStatus.bos_Close = new SAPB1.BoOpexStatus('bos_Close', 'bos_Close');

module.exports = SAPB1.BoOpexStatus;
