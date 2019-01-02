if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EmployeeTransferStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EmployeeTransferStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EmployeeTransferStatusEnum.prototype.constructor = SAPB1.EmployeeTransferStatusEnum;
SAPB1.EmployeeTransferStatusEnum.ets_Accepted = new SAPB1.EmployeeTransferStatusEnum('ets_Accepted', 'ets_Accepted');
SAPB1.EmployeeTransferStatusEnum.ets_Processing = new SAPB1.EmployeeTransferStatusEnum('ets_Processing', 'ets_Processing');
SAPB1.EmployeeTransferStatusEnum.ets_Sent = new SAPB1.EmployeeTransferStatusEnum('ets_Sent', 'ets_Sent');
SAPB1.EmployeeTransferStatusEnum.ets_Received = new SAPB1.EmployeeTransferStatusEnum('ets_Received', 'ets_Received');
SAPB1.EmployeeTransferStatusEnum.ets_New = new SAPB1.EmployeeTransferStatusEnum('ets_New', 'ets_New');
SAPB1.EmployeeTransferStatusEnum.ets_Error = new SAPB1.EmployeeTransferStatusEnum('ets_Error', 'ets_Error');

module.exports = SAPB1.EmployeeTransferStatusEnum;
