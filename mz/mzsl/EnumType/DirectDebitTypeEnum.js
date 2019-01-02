if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DirectDebitTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DirectDebitTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DirectDebitTypeEnum.prototype.constructor = SAPB1.DirectDebitTypeEnum;
SAPB1.DirectDebitTypeEnum.ddtCORE = new SAPB1.DirectDebitTypeEnum('ddtCORE', 'ddtCORE');
SAPB1.DirectDebitTypeEnum.ddtB2B = new SAPB1.DirectDebitTypeEnum('ddtB2B', 'ddtB2B');
SAPB1.DirectDebitTypeEnum.ddtCOR1 = new SAPB1.DirectDebitTypeEnum('ddtCOR1', 'ddtCOR1');

module.exports = SAPB1.DirectDebitTypeEnum;
