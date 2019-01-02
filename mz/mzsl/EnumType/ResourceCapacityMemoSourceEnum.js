if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacityMemoSourceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacityMemoSourceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacityMemoSourceEnum.prototype.constructor = SAPB1.ResourceCapacityMemoSourceEnum;
SAPB1.ResourceCapacityMemoSourceEnum.rcmsSetDailyInternalCapacitiesForm = new SAPB1.ResourceCapacityMemoSourceEnum('rcmsSetDailyInternalCapacitiesForm', 'rcmsSetDailyInternalCapacitiesForm');
SAPB1.ResourceCapacityMemoSourceEnum.rcmsResourceCapacityForm = new SAPB1.ResourceCapacityMemoSourceEnum('rcmsResourceCapacityForm', 'rcmsResourceCapacityForm');
SAPB1.ResourceCapacityMemoSourceEnum.rcmsUnknown = new SAPB1.ResourceCapacityMemoSourceEnum('rcmsUnknown', 'rcmsUnknown');

module.exports = SAPB1.ResourceCapacityMemoSourceEnum;
