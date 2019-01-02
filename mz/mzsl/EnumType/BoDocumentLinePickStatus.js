if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocumentLinePickStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocumentLinePickStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocumentLinePickStatus.prototype.constructor = SAPB1.BoDocumentLinePickStatus;
SAPB1.BoDocumentLinePickStatus.dlps_ReleasedForPicking = new SAPB1.BoDocumentLinePickStatus('dlps_ReleasedForPicking', 'dlps_ReleasedForPicking');
SAPB1.BoDocumentLinePickStatus.dlps_PartiallyPicked = new SAPB1.BoDocumentLinePickStatus('dlps_PartiallyPicked', 'dlps_PartiallyPicked');
SAPB1.BoDocumentLinePickStatus.dlps_Picked = new SAPB1.BoDocumentLinePickStatus('dlps_Picked', 'dlps_Picked');
SAPB1.BoDocumentLinePickStatus.dlps_NotPicked = new SAPB1.BoDocumentLinePickStatus('dlps_NotPicked', 'dlps_NotPicked');

module.exports = SAPB1.BoDocumentLinePickStatus;
