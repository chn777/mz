if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BrazilStringIndexerTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BrazilStringIndexerTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BrazilStringIndexerTypes.prototype.constructor = SAPB1.BrazilStringIndexerTypes;
SAPB1.BrazilStringIndexerTypes.bsitNatureOfCalculationBase = new SAPB1.BrazilStringIndexerTypes('bsitNatureOfCalculationBase', 'bsitNatureOfCalculationBase');
SAPB1.BrazilStringIndexerTypes.bsitBeverageTable = new SAPB1.BrazilStringIndexerTypes('bsitBeverageTable', 'bsitBeverageTable');
SAPB1.BrazilStringIndexerTypes.bsitImportationDocumentType = new SAPB1.BrazilStringIndexerTypes('bsitImportationDocumentType', 'bsitImportationDocumentType');
SAPB1.BrazilStringIndexerTypes.bsitCreditOrigin = new SAPB1.BrazilStringIndexerTypes('bsitCreditOrigin', 'bsitCreditOrigin');
SAPB1.BrazilStringIndexerTypes.bsitBeverageGroup = new SAPB1.BrazilStringIndexerTypes('bsitBeverageGroup', 'bsitBeverageGroup');
SAPB1.BrazilStringIndexerTypes.bsitInvalid = new SAPB1.BrazilStringIndexerTypes('bsitInvalid', 'bsitInvalid');
SAPB1.BrazilStringIndexerTypes.bsitReferentialAccountCode = new SAPB1.BrazilStringIndexerTypes('bsitReferentialAccountCode', 'bsitReferentialAccountCode');
SAPB1.BrazilStringIndexerTypes.bsitCreditContributionOrigin = new SAPB1.BrazilStringIndexerTypes('bsitCreditContributionOrigin', 'bsitCreditContributionOrigin');
SAPB1.BrazilStringIndexerTypes.bsitIPIPeriod = new SAPB1.BrazilStringIndexerTypes('bsitIPIPeriod', 'bsitIPIPeriod');
SAPB1.BrazilStringIndexerTypes.bsitSPEDProfile = new SAPB1.BrazilStringIndexerTypes('bsitSPEDProfile', 'bsitSPEDProfile');

module.exports = SAPB1.BrazilStringIndexerTypes;
