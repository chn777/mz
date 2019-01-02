if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PMOperationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PMOperationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PMOperationTypeEnum.prototype.constructor = SAPB1.PMOperationTypeEnum;
SAPB1.PMOperationTypeEnum.pm_op_Ignore = new SAPB1.PMOperationTypeEnum('pm_op_Ignore', 'pm_op_Ignore');
SAPB1.PMOperationTypeEnum.pm_op_Add = new SAPB1.PMOperationTypeEnum('pm_op_Add', 'pm_op_Add');
SAPB1.PMOperationTypeEnum.pm_op_Subtract = new SAPB1.PMOperationTypeEnum('pm_op_Subtract', 'pm_op_Subtract');

module.exports = SAPB1.PMOperationTypeEnum;
