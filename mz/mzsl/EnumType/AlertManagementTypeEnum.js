if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AlertManagementTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AlertManagementTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AlertManagementTypeEnum.prototype.constructor = SAPB1.AlertManagementTypeEnum;
SAPB1.AlertManagementTypeEnum.att_System = new SAPB1.AlertManagementTypeEnum('att_System', 'att_System');
SAPB1.AlertManagementTypeEnum.att_User = new SAPB1.AlertManagementTypeEnum('att_User', 'att_User');

module.exports = SAPB1.AlertManagementTypeEnum;
