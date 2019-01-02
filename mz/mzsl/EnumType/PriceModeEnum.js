if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PriceModeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PriceModeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PriceModeEnum.prototype.constructor = SAPB1.PriceModeEnum;
SAPB1.PriceModeEnum.pmNet = new SAPB1.PriceModeEnum('pmNet', 'pmNet');
SAPB1.PriceModeEnum.pmGross = new SAPB1.PriceModeEnum('pmGross', 'pmGross');

module.exports = SAPB1.PriceModeEnum;
