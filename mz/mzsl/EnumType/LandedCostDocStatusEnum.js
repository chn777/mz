if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LandedCostDocStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LandedCostDocStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LandedCostDocStatusEnum.prototype.constructor = SAPB1.LandedCostDocStatusEnum;
SAPB1.LandedCostDocStatusEnum.lcClosed = new SAPB1.LandedCostDocStatusEnum('lcClosed', 'lcClosed');
SAPB1.LandedCostDocStatusEnum.lcOpen = new SAPB1.LandedCostDocStatusEnum('lcOpen', 'lcOpen');

module.exports = SAPB1.LandedCostDocStatusEnum;
