if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.UserActionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.UserActionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.UserActionTypeEnum.prototype.constructor = SAPB1.UserActionTypeEnum;
SAPB1.UserActionTypeEnum.actionRemoveUser = new SAPB1.UserActionTypeEnum('actionRemoveUser', 'actionRemoveUser');
SAPB1.UserActionTypeEnum.actionChPasswd = new SAPB1.UserActionTypeEnum('actionChPasswd', 'actionChPasswd');
SAPB1.UserActionTypeEnum.actionUnlockFail = new SAPB1.UserActionTypeEnum('actionUnlockFail', 'actionUnlockFail');
SAPB1.UserActionTypeEnum.actionLogin = new SAPB1.UserActionTypeEnum('actionLogin', 'actionLogin');
SAPB1.UserActionTypeEnum.actionSelectSU = new SAPB1.UserActionTypeEnum('actionSelectSU', 'actionSelectSU');
SAPB1.UserActionTypeEnum.actionLogoff = new SAPB1.UserActionTypeEnum('actionLogoff', 'actionLogoff');
SAPB1.UserActionTypeEnum.actionDeselectSU = new SAPB1.UserActionTypeEnum('actionDeselectSU', 'actionDeselectSU');
SAPB1.UserActionTypeEnum.actionCreateUser = new SAPB1.UserActionTypeEnum('actionCreateUser', 'actionCreateUser');
SAPB1.UserActionTypeEnum.actionLoginFail = new SAPB1.UserActionTypeEnum('actionLoginFail', 'actionLoginFail');
SAPB1.UserActionTypeEnum.actionLock = new SAPB1.UserActionTypeEnum('actionLock', 'actionLock');
SAPB1.UserActionTypeEnum.actionUnlock = new SAPB1.UserActionTypeEnum('actionUnlock', 'actionUnlock');

module.exports = SAPB1.UserActionTypeEnum;
