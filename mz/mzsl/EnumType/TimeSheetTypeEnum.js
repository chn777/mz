if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TimeSheetTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TimeSheetTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TimeSheetTypeEnum.prototype.constructor = SAPB1.TimeSheetTypeEnum;
SAPB1.TimeSheetTypeEnum.tsh_User = new SAPB1.TimeSheetTypeEnum('tsh_User', 'tsh_User');
SAPB1.TimeSheetTypeEnum.tsh_Employee = new SAPB1.TimeSheetTypeEnum('tsh_Employee', 'tsh_Employee');
SAPB1.TimeSheetTypeEnum.tsh_Other = new SAPB1.TimeSheetTypeEnum('tsh_Other', 'tsh_Other');

module.exports = SAPB1.TimeSheetTypeEnum;
