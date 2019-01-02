if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CalculateInterestMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CalculateInterestMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CalculateInterestMethodEnum.prototype.constructor = SAPB1.CalculateInterestMethodEnum;
SAPB1.CalculateInterestMethodEnum.cimOnRemainingAmount = new SAPB1.CalculateInterestMethodEnum('cimOnRemainingAmount', 'cimOnRemainingAmount');
SAPB1.CalculateInterestMethodEnum.cimOnOriginalSum = new SAPB1.CalculateInterestMethodEnum('cimOnOriginalSum', 'cimOnOriginalSum');

module.exports = SAPB1.CalculateInterestMethodEnum;
