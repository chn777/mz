if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.VMCommunicationStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.VMCommunicationStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.VMCommunicationStatusEnum.prototype.constructor = SAPB1.VMCommunicationStatusEnum;
SAPB1.VMCommunicationStatusEnum.vmcs_Pending = new SAPB1.VMCommunicationStatusEnum('vmcs_Pending', 'vmcs_Pending');
SAPB1.VMCommunicationStatusEnum.vmcs_Successful = new SAPB1.VMCommunicationStatusEnum('vmcs_Successful', 'vmcs_Successful');
SAPB1.VMCommunicationStatusEnum.vmcs_Rejected = new SAPB1.VMCommunicationStatusEnum('vmcs_Rejected', 'vmcs_Rejected');
SAPB1.VMCommunicationStatusEnum.vmcs_New = new SAPB1.VMCommunicationStatusEnum('vmcs_New', 'vmcs_New');
SAPB1.VMCommunicationStatusEnum.vmcs_Error = new SAPB1.VMCommunicationStatusEnum('vmcs_Error', 'vmcs_Error');

module.exports = SAPB1.VMCommunicationStatusEnum;
