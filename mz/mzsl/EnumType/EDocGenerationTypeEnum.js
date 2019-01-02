if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EDocGenerationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EDocGenerationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EDocGenerationTypeEnum.prototype.constructor = SAPB1.EDocGenerationTypeEnum;
SAPB1.EDocGenerationTypeEnum.edocGenerateLater = new SAPB1.EDocGenerationTypeEnum('edocGenerateLater', 'edocGenerateLater');
SAPB1.EDocGenerationTypeEnum.edocGenerate = new SAPB1.EDocGenerationTypeEnum('edocGenerate', 'edocGenerate');
SAPB1.EDocGenerationTypeEnum.edocNotRelevant = new SAPB1.EDocGenerationTypeEnum('edocNotRelevant', 'edocNotRelevant');

module.exports = SAPB1.EDocGenerationTypeEnum;
