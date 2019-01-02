if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ApprovalTemplateConditionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ApprovalTemplateConditionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ApprovalTemplateConditionTypeEnum.prototype.constructor = SAPB1.ApprovalTemplateConditionTypeEnum;
SAPB1.ApprovalTemplateConditionTypeEnum.atctUndefined = new SAPB1.ApprovalTemplateConditionTypeEnum('atctUndefined', 'atctUndefined');
SAPB1.ApprovalTemplateConditionTypeEnum.atctDeviationFromCreditLine = new SAPB1.ApprovalTemplateConditionTypeEnum('atctDeviationFromCreditLine', 'atctDeviationFromCreditLine');
SAPB1.ApprovalTemplateConditionTypeEnum.atctDeviationFromObligo = new SAPB1.ApprovalTemplateConditionTypeEnum('atctDeviationFromObligo', 'atctDeviationFromObligo');
SAPB1.ApprovalTemplateConditionTypeEnum.atctTotalDocument = new SAPB1.ApprovalTemplateConditionTypeEnum('atctTotalDocument', 'atctTotalDocument');
SAPB1.ApprovalTemplateConditionTypeEnum.atctGrossProfitPercent = new SAPB1.ApprovalTemplateConditionTypeEnum('atctGrossProfitPercent', 'atctGrossProfitPercent');
SAPB1.ApprovalTemplateConditionTypeEnum.atctDiscountPercent = new SAPB1.ApprovalTemplateConditionTypeEnum('atctDiscountPercent', 'atctDiscountPercent');
SAPB1.ApprovalTemplateConditionTypeEnum.atctCountedQuantity = new SAPB1.ApprovalTemplateConditionTypeEnum('atctCountedQuantity', 'atctCountedQuantity');
SAPB1.ApprovalTemplateConditionTypeEnum.atctVariance = new SAPB1.ApprovalTemplateConditionTypeEnum('atctVariance', 'atctVariance');
SAPB1.ApprovalTemplateConditionTypeEnum.atctQuantity = new SAPB1.ApprovalTemplateConditionTypeEnum('atctQuantity', 'atctQuantity');
SAPB1.ApprovalTemplateConditionTypeEnum.atctTotalLine = new SAPB1.ApprovalTemplateConditionTypeEnum('atctTotalLine', 'atctTotalLine');
SAPB1.ApprovalTemplateConditionTypeEnum.atctVariancePercent = new SAPB1.ApprovalTemplateConditionTypeEnum('atctVariancePercent', 'atctVariancePercent');
SAPB1.ApprovalTemplateConditionTypeEnum.atctDeviationFromBudget = new SAPB1.ApprovalTemplateConditionTypeEnum('atctDeviationFromBudget', 'atctDeviationFromBudget');
SAPB1.ApprovalTemplateConditionTypeEnum.atctItemCode = new SAPB1.ApprovalTemplateConditionTypeEnum('atctItemCode', 'atctItemCode');

module.exports = SAPB1.ApprovalTemplateConditionTypeEnum;
