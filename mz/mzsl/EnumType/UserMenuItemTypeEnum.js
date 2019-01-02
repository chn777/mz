if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.UserMenuItemTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.UserMenuItemTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.UserMenuItemTypeEnum.prototype.constructor = SAPB1.UserMenuItemTypeEnum;
SAPB1.UserMenuItemTypeEnum.umitReport = new SAPB1.UserMenuItemTypeEnum('umitReport', 'umitReport');
SAPB1.UserMenuItemTypeEnum.umitFolder = new SAPB1.UserMenuItemTypeEnum('umitFolder', 'umitFolder');
SAPB1.UserMenuItemTypeEnum.umitForm = new SAPB1.UserMenuItemTypeEnum('umitForm', 'umitForm');
SAPB1.UserMenuItemTypeEnum.umitQuery = new SAPB1.UserMenuItemTypeEnum('umitQuery', 'umitQuery');
SAPB1.UserMenuItemTypeEnum.umitLink = new SAPB1.UserMenuItemTypeEnum('umitLink', 'umitLink');

module.exports = SAPB1.UserMenuItemTypeEnum;
