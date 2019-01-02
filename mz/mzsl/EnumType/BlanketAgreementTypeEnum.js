if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BlanketAgreementTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BlanketAgreementTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BlanketAgreementTypeEnum.prototype.constructor = SAPB1.BlanketAgreementTypeEnum;
SAPB1.BlanketAgreementTypeEnum.atSpecific = new SAPB1.BlanketAgreementTypeEnum('atSpecific', 'atSpecific');
SAPB1.BlanketAgreementTypeEnum.atGeneral = new SAPB1.BlanketAgreementTypeEnum('atGeneral', 'atGeneral');

module.exports = SAPB1.BlanketAgreementTypeEnum;
