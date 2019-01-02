if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BrazilNumericIndexerTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BrazilNumericIndexerTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BrazilNumericIndexerTypes.prototype.constructor = SAPB1.BrazilNumericIndexerTypes;
SAPB1.BrazilNumericIndexerTypes.bnitBeverageCommercialBrand = new SAPB1.BrazilNumericIndexerTypes('bnitBeverageCommercialBrand', 'bnitBeverageCommercialBrand');
SAPB1.BrazilNumericIndexerTypes.bnitFuelGroup = new SAPB1.BrazilNumericIndexerTypes('bnitFuelGroup', 'bnitFuelGroup');
SAPB1.BrazilNumericIndexerTypes.bnitIncomeNatureCode = new SAPB1.BrazilNumericIndexerTypes('bnitIncomeNatureCode', 'bnitIncomeNatureCode');
SAPB1.BrazilNumericIndexerTypes.bnitExportationNature = new SAPB1.BrazilNumericIndexerTypes('bnitExportationNature', 'bnitExportationNature');
SAPB1.BrazilNumericIndexerTypes.bnitExportationDocumentType = new SAPB1.BrazilNumericIndexerTypes('bnitExportationDocumentType', 'bnitExportationDocumentType');
SAPB1.BrazilNumericIndexerTypes.bnitTributaryType = new SAPB1.BrazilNumericIndexerTypes('bnitTributaryType', 'bnitTributaryType');
SAPB1.BrazilNumericIndexerTypes.bnitNatureOfCompany = new SAPB1.BrazilNumericIndexerTypes('bnitNatureOfCompany', 'bnitNatureOfCompany');
SAPB1.BrazilNumericIndexerTypes.bnitProfitTaxation = new SAPB1.BrazilNumericIndexerTypes('bnitProfitTaxation', 'bnitProfitTaxation');
SAPB1.BrazilNumericIndexerTypes.bnitCompanyQualification = new SAPB1.BrazilNumericIndexerTypes('bnitCompanyQualification', 'bnitCompanyQualification');
SAPB1.BrazilNumericIndexerTypes.bnitIncomeNatureTable = new SAPB1.BrazilNumericIndexerTypes('bnitIncomeNatureTable', 'bnitIncomeNatureTable');
SAPB1.BrazilNumericIndexerTypes.bnitTributaryRegimeCode = new SAPB1.BrazilNumericIndexerTypes('bnitTributaryRegimeCode', 'bnitTributaryRegimeCode');
SAPB1.BrazilNumericIndexerTypes.bnitLadingBillType = new SAPB1.BrazilNumericIndexerTypes('bnitLadingBillType', 'bnitLadingBillType');
SAPB1.BrazilNumericIndexerTypes.bnitEconomicActivityType = new SAPB1.BrazilNumericIndexerTypes('bnitEconomicActivityType', 'bnitEconomicActivityType');
SAPB1.BrazilNumericIndexerTypes.bnitCooperativeAssociationType = new SAPB1.BrazilNumericIndexerTypes('bnitCooperativeAssociationType', 'bnitCooperativeAssociationType');
SAPB1.BrazilNumericIndexerTypes.bnitDeclarerType = new SAPB1.BrazilNumericIndexerTypes('bnitDeclarerType', 'bnitDeclarerType');
SAPB1.BrazilNumericIndexerTypes.bnitInvalid = new SAPB1.BrazilNumericIndexerTypes('bnitInvalid', 'bnitInvalid');
SAPB1.BrazilNumericIndexerTypes.bnitEnvironmentType = new SAPB1.BrazilNumericIndexerTypes('bnitEnvironmentType', 'bnitEnvironmentType');

module.exports = SAPB1.BrazilNumericIndexerTypes;
