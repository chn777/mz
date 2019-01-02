if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoProductionOrderStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoProductionOrderStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoProductionOrderStatusEnum.prototype.constructor = SAPB1.BoProductionOrderStatusEnum;
SAPB1.BoProductionOrderStatusEnum.boposPlanned = new SAPB1.BoProductionOrderStatusEnum('boposPlanned', 'boposPlanned');
SAPB1.BoProductionOrderStatusEnum.boposReleased = new SAPB1.BoProductionOrderStatusEnum('boposReleased', 'boposReleased');
SAPB1.BoProductionOrderStatusEnum.boposCancelled = new SAPB1.BoProductionOrderStatusEnum('boposCancelled', 'boposCancelled');
SAPB1.BoProductionOrderStatusEnum.boposClosed = new SAPB1.BoProductionOrderStatusEnum('boposClosed', 'boposClosed');

module.exports = SAPB1.BoProductionOrderStatusEnum;
