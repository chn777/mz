if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoGSTRegnTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoGSTRegnTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoGSTRegnTypeEnum.prototype.constructor = SAPB1.BoGSTRegnTypeEnum;
SAPB1.BoGSTRegnTypeEnum.gstCompositionLevy = new SAPB1.BoGSTRegnTypeEnum('gstCompositionLevy', 'gstCompositionLevy');
SAPB1.BoGSTRegnTypeEnum.gstGoverDepartPSU = new SAPB1.BoGSTRegnTypeEnum('gstGoverDepartPSU', 'gstGoverDepartPSU');
SAPB1.BoGSTRegnTypeEnum.gstNonResidentTaxablePerson = new SAPB1.BoGSTRegnTypeEnum('gstNonResidentTaxablePerson', 'gstNonResidentTaxablePerson');
SAPB1.BoGSTRegnTypeEnum.gstUNAgencyEmbassy = new SAPB1.BoGSTRegnTypeEnum('gstUNAgencyEmbassy', 'gstUNAgencyEmbassy');
SAPB1.BoGSTRegnTypeEnum.gstRegularTDSISD = new SAPB1.BoGSTRegnTypeEnum('gstRegularTDSISD', 'gstRegularTDSISD');
SAPB1.BoGSTRegnTypeEnum.gstCasualTaxablePerson = new SAPB1.BoGSTRegnTypeEnum('gstCasualTaxablePerson', 'gstCasualTaxablePerson');

module.exports = SAPB1.BoGSTRegnTypeEnum;
