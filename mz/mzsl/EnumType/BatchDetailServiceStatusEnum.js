if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BatchDetailServiceStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BatchDetailServiceStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BatchDetailServiceStatusEnum.prototype.constructor = SAPB1.BatchDetailServiceStatusEnum;
SAPB1.BatchDetailServiceStatusEnum.bdsStatus_Released = new SAPB1.BatchDetailServiceStatusEnum('bdsStatus_Released', 'bdsStatus_Released');
SAPB1.BatchDetailServiceStatusEnum.bdsStatus_Locked = new SAPB1.BatchDetailServiceStatusEnum('bdsStatus_Locked', 'bdsStatus_Locked');
SAPB1.BatchDetailServiceStatusEnum.bdsStatus_NotAccessible = new SAPB1.BatchDetailServiceStatusEnum('bdsStatus_NotAccessible', 'bdsStatus_NotAccessible');

module.exports = SAPB1.BatchDetailServiceStatusEnum;
