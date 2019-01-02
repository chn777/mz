if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BlanketAgreementMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BlanketAgreementMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BlanketAgreementMethodEnum.prototype.constructor = SAPB1.BlanketAgreementMethodEnum;
SAPB1.BlanketAgreementMethodEnum.amItem = new SAPB1.BlanketAgreementMethodEnum('amItem', 'amItem');
SAPB1.BlanketAgreementMethodEnum.amMonetary = new SAPB1.BlanketAgreementMethodEnum('amMonetary', 'amMonetary');

module.exports = SAPB1.BlanketAgreementMethodEnum;
