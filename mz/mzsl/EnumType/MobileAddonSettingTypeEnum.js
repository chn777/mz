if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.MobileAddonSettingTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.MobileAddonSettingTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.MobileAddonSettingTypeEnum.prototype.constructor = SAPB1.MobileAddonSettingTypeEnum;
SAPB1.MobileAddonSettingTypeEnum.mastHome = new SAPB1.MobileAddonSettingTypeEnum('mastHome', 'mastHome');
SAPB1.MobileAddonSettingTypeEnum.mastModule = new SAPB1.MobileAddonSettingTypeEnum('mastModule', 'mastModule');

module.exports = SAPB1.MobileAddonSettingTypeEnum;
