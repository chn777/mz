if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacityTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacityTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacityTypeEnum.prototype.constructor = SAPB1.ResourceCapacityTypeEnum;
SAPB1.ResourceCapacityTypeEnum.rctOrdered = new SAPB1.ResourceCapacityTypeEnum('rctOrdered', 'rctOrdered');
SAPB1.ResourceCapacityTypeEnum.rctConsumed = new SAPB1.ResourceCapacityTypeEnum('rctConsumed', 'rctConsumed');
SAPB1.ResourceCapacityTypeEnum.rctInternal = new SAPB1.ResourceCapacityTypeEnum('rctInternal', 'rctInternal');
SAPB1.ResourceCapacityTypeEnum.rctCommitted = new SAPB1.ResourceCapacityTypeEnum('rctCommitted', 'rctCommitted');

module.exports = SAPB1.ResourceCapacityTypeEnum;
