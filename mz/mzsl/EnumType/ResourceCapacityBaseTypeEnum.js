if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacityBaseTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacityBaseTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacityBaseTypeEnum.prototype.constructor = SAPB1.ResourceCapacityBaseTypeEnum;
SAPB1.ResourceCapacityBaseTypeEnum.rcbtProductionOrder = new SAPB1.ResourceCapacityBaseTypeEnum('rcbtProductionOrder', 'rcbtProductionOrder');
SAPB1.ResourceCapacityBaseTypeEnum.rcbtNone = new SAPB1.ResourceCapacityBaseTypeEnum('rcbtNone', 'rcbtNone');

module.exports = SAPB1.ResourceCapacityBaseTypeEnum;
