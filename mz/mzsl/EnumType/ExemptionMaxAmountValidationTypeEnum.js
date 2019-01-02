if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ExemptionMaxAmountValidationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ExemptionMaxAmountValidationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ExemptionMaxAmountValidationTypeEnum.prototype.constructor = SAPB1.ExemptionMaxAmountValidationTypeEnum;
SAPB1.ExemptionMaxAmountValidationTypeEnum.emaAccumulated = new SAPB1.ExemptionMaxAmountValidationTypeEnum('emaAccumulated', 'emaAccumulated');
SAPB1.ExemptionMaxAmountValidationTypeEnum.emaIndividual = new SAPB1.ExemptionMaxAmountValidationTypeEnum('emaIndividual', 'emaIndividual');

module.exports = SAPB1.ExemptionMaxAmountValidationTypeEnum;
