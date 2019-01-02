if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RetirementMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RetirementMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RetirementMethodEnum.prototype.constructor = SAPB1.RetirementMethodEnum;
SAPB1.RetirementMethodEnum.rmNet = new SAPB1.RetirementMethodEnum('rmNet', 'rmNet');
SAPB1.RetirementMethodEnum.rmGross = new SAPB1.RetirementMethodEnum('rmGross', 'rmGross');

module.exports = SAPB1.RetirementMethodEnum;
