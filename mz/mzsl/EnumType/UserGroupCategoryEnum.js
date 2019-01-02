if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.UserGroupCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.UserGroupCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.UserGroupCategoryEnum.prototype.constructor = SAPB1.UserGroupCategoryEnum;
SAPB1.UserGroupCategoryEnum.gc_Formsetting = new SAPB1.UserGroupCategoryEnum('gc_Formsetting', 'gc_Formsetting');
SAPB1.UserGroupCategoryEnum.gc_UITmplate = new SAPB1.UserGroupCategoryEnum('gc_UITmplate', 'gc_UITmplate');
SAPB1.UserGroupCategoryEnum.gc_Authorization = new SAPB1.UserGroupCategoryEnum('gc_Authorization', 'gc_Authorization');
SAPB1.UserGroupCategoryEnum.gc_All = new SAPB1.UserGroupCategoryEnum('gc_All', 'gc_All');
SAPB1.UserGroupCategoryEnum.gc_Alert = new SAPB1.UserGroupCategoryEnum('gc_Alert', 'gc_Alert');

module.exports = SAPB1.UserGroupCategoryEnum;
