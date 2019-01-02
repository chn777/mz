if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResidenceNumberTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResidenceNumberTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResidenceNumberTypeEnum.prototype.constructor = SAPB1.ResidenceNumberTypeEnum;
SAPB1.ResidenceNumberTypeEnum.rntCertificateofFiscalResidence = new SAPB1.ResidenceNumberTypeEnum('rntCertificateofFiscalResidence', 'rntCertificateofFiscalResidence');
SAPB1.ResidenceNumberTypeEnum.rntPassport = new SAPB1.ResidenceNumberTypeEnum('rntPassport', 'rntPassport');
SAPB1.ResidenceNumberTypeEnum.rntVATRegistrationNumber = new SAPB1.ResidenceNumberTypeEnum('rntVATRegistrationNumber', 'rntVATRegistrationNumber');
SAPB1.ResidenceNumberTypeEnum.rntFiscalIDIssuedbytheResidenceCountry = new SAPB1.ResidenceNumberTypeEnum('rntFiscalIDIssuedbytheResidenceCountry', 'rntFiscalIDIssuedbytheResidenceCountry');
SAPB1.ResidenceNumberTypeEnum.rntSpanishFiscalID = new SAPB1.ResidenceNumberTypeEnum('rntSpanishFiscalID', 'rntSpanishFiscalID');
SAPB1.ResidenceNumberTypeEnum.rntOtherDocument = new SAPB1.ResidenceNumberTypeEnum('rntOtherDocument', 'rntOtherDocument');

module.exports = SAPB1.ResidenceNumberTypeEnum;
