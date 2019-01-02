if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EmployeeTransferProcessingStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EmployeeTransferProcessingStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EmployeeTransferProcessingStatusEnum.prototype.constructor = SAPB1.EmployeeTransferProcessingStatusEnum;
SAPB1.EmployeeTransferProcessingStatusEnum.etps_Error = new SAPB1.EmployeeTransferProcessingStatusEnum('etps_Error', 'etps_Error');
SAPB1.EmployeeTransferProcessingStatusEnum.etps_Sent = new SAPB1.EmployeeTransferProcessingStatusEnum('etps_Sent', 'etps_Sent');
SAPB1.EmployeeTransferProcessingStatusEnum.etps_New = new SAPB1.EmployeeTransferProcessingStatusEnum('etps_New', 'etps_New');
SAPB1.EmployeeTransferProcessingStatusEnum.etps_Accepted = new SAPB1.EmployeeTransferProcessingStatusEnum('etps_Accepted', 'etps_Accepted');

module.exports = SAPB1.EmployeeTransferProcessingStatusEnum;
