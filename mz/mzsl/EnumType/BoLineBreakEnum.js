if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoLineBreakEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoLineBreakEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoLineBreakEnum.prototype.constructor = SAPB1.BoLineBreakEnum;
SAPB1.BoLineBreakEnum.rlsDivideIntoRows = new SAPB1.BoLineBreakEnum('rlsDivideIntoRows', 'rlsDivideIntoRows');
SAPB1.BoLineBreakEnum.rlsAdjustToCell = new SAPB1.BoLineBreakEnum('rlsAdjustToCell', 'rlsAdjustToCell');
SAPB1.BoLineBreakEnum.rlsAllowOverflow = new SAPB1.BoLineBreakEnum('rlsAllowOverflow', 'rlsAllowOverflow');

module.exports = SAPB1.BoLineBreakEnum;
