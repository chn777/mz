if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPickStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPickStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPickStatus.prototype.constructor = SAPB1.BoPickStatus;
SAPB1.BoPickStatus.ps_PartiallyPicked = new SAPB1.BoPickStatus('ps_PartiallyPicked', 'ps_PartiallyPicked');
SAPB1.BoPickStatus.ps_Released = new SAPB1.BoPickStatus('ps_Released', 'ps_Released');
SAPB1.BoPickStatus.ps_Closed = new SAPB1.BoPickStatus('ps_Closed', 'ps_Closed');
SAPB1.BoPickStatus.ps_Picked = new SAPB1.BoPickStatus('ps_Picked', 'ps_Picked');
SAPB1.BoPickStatus.ps_PartiallyDelivered = new SAPB1.BoPickStatus('ps_PartiallyDelivered', 'ps_PartiallyDelivered');

module.exports = SAPB1.BoPickStatus;
