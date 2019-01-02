if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BADivationAlertLevelEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BADivationAlertLevelEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BADivationAlertLevelEnum.prototype.constructor = SAPB1.BADivationAlertLevelEnum;
SAPB1.BADivationAlertLevelEnum.badal_NoWarning = new SAPB1.BADivationAlertLevelEnum('badal_NoWarning', 'badal_NoWarning');
SAPB1.BADivationAlertLevelEnum.badal_Block = new SAPB1.BADivationAlertLevelEnum('badal_Block', 'badal_Block');
SAPB1.BADivationAlertLevelEnum.badal_Warning = new SAPB1.BADivationAlertLevelEnum('badal_Warning', 'badal_Warning');

module.exports = SAPB1.BADivationAlertLevelEnum;
