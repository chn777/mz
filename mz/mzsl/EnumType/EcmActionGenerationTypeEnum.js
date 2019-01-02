if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EcmActionGenerationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EcmActionGenerationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EcmActionGenerationTypeEnum.prototype.constructor = SAPB1.EcmActionGenerationTypeEnum;
SAPB1.EcmActionGenerationTypeEnum.lgtNotRelevant = new SAPB1.EcmActionGenerationTypeEnum('lgtNotRelevant', 'lgtNotRelevant');
SAPB1.EcmActionGenerationTypeEnum.lasGenerateLater = new SAPB1.EcmActionGenerationTypeEnum('lasGenerateLater', 'lasGenerateLater');
SAPB1.EcmActionGenerationTypeEnum.lasGenerate = new SAPB1.EcmActionGenerationTypeEnum('lasGenerate', 'lasGenerate');

module.exports = SAPB1.EcmActionGenerationTypeEnum;
