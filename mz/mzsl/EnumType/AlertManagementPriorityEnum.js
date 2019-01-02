if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AlertManagementPriorityEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AlertManagementPriorityEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AlertManagementPriorityEnum.prototype.constructor = SAPB1.AlertManagementPriorityEnum;
SAPB1.AlertManagementPriorityEnum.atp_High = new SAPB1.AlertManagementPriorityEnum('atp_High', 'atp_High');
SAPB1.AlertManagementPriorityEnum.atp_Low = new SAPB1.AlertManagementPriorityEnum('atp_Low', 'atp_Low');
SAPB1.AlertManagementPriorityEnum.atp_Normal = new SAPB1.AlertManagementPriorityEnum('atp_Normal', 'atp_Normal');

module.exports = SAPB1.AlertManagementPriorityEnum;
