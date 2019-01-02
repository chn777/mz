if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AlertManagementFrequencyType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AlertManagementFrequencyType.prototype = SAPB1.EnumBase.prototype;
SAPB1.AlertManagementFrequencyType.prototype.constructor = SAPB1.AlertManagementFrequencyType;
SAPB1.AlertManagementFrequencyType.atfi_Minutes = new SAPB1.AlertManagementFrequencyType('atfi_Minutes', 'atfi_Minutes');
SAPB1.AlertManagementFrequencyType.atfi_Weeks = new SAPB1.AlertManagementFrequencyType('atfi_Weeks', 'atfi_Weeks');
SAPB1.AlertManagementFrequencyType.atfi_Hours = new SAPB1.AlertManagementFrequencyType('atfi_Hours', 'atfi_Hours');
SAPB1.AlertManagementFrequencyType.atfi_Monthly = new SAPB1.AlertManagementFrequencyType('atfi_Monthly', 'atfi_Monthly');
SAPB1.AlertManagementFrequencyType.atfi_Days = new SAPB1.AlertManagementFrequencyType('atfi_Days', 'atfi_Days');

module.exports = SAPB1.AlertManagementFrequencyType;
