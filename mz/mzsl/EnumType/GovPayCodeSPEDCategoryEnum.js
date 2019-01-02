if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GovPayCodeSPEDCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GovPayCodeSPEDCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GovPayCodeSPEDCategoryEnum.prototype.constructor = SAPB1.GovPayCodeSPEDCategoryEnum;
SAPB1.GovPayCodeSPEDCategoryEnum.gpcscPIS = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcscPIS', 'gpcscPIS');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcscCOFINS = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcscCOFINS', 'gpcscCOFINS');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcsCONFINSST = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcsCONFINSST', 'gpcsCONFINSST');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcscICMSST = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcscICMSST', 'gpcscICMSST');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcscISS = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcscISS', 'gpcscISS');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcscICMS = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcscICMS', 'gpcscICMS');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcscIPI = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcscIPI', 'gpcscIPI');
SAPB1.GovPayCodeSPEDCategoryEnum.gpcsPISST = new SAPB1.GovPayCodeSPEDCategoryEnum('gpcsPISST', 'gpcsPISST');

module.exports = SAPB1.GovPayCodeSPEDCategoryEnum;
