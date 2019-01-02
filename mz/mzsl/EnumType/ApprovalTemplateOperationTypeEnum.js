if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ApprovalTemplateOperationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ApprovalTemplateOperationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ApprovalTemplateOperationTypeEnum.prototype.constructor = SAPB1.ApprovalTemplateOperationTypeEnum;
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeNotInRange = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeNotInRange', 'opcodeNotInRange');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeLessOrEqual = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeLessOrEqual', 'opcodeLessOrEqual');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeGreaterThan = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeGreaterThan', 'opcodeGreaterThan');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeGreaterOrEqual = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeGreaterOrEqual', 'opcodeGreaterOrEqual');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeEqual = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeEqual', 'opcodeEqual');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeLessThan = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeLessThan', 'opcodeLessThan');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeInRange = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeInRange', 'opcodeInRange');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeUndefined = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeUndefined', 'opcodeUndefined');
SAPB1.ApprovalTemplateOperationTypeEnum.opcodeDoesNotEqual = new SAPB1.ApprovalTemplateOperationTypeEnum('opcodeDoesNotEqual', 'opcodeDoesNotEqual');

module.exports = SAPB1.ApprovalTemplateOperationTypeEnum;
