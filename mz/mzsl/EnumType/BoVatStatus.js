if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoVatStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoVatStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoVatStatus.prototype.constructor = SAPB1.BoVatStatus;
SAPB1.BoVatStatus.vExempted = new SAPB1.BoVatStatus('vExempted', 'vExempted');
SAPB1.BoVatStatus.vEC = new SAPB1.BoVatStatus('vEC', 'vEC');
SAPB1.BoVatStatus.vLiable = new SAPB1.BoVatStatus('vLiable', 'vLiable');

module.exports = SAPB1.BoVatStatus;
