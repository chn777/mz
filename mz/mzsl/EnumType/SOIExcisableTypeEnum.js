if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SOIExcisableTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SOIExcisableTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SOIExcisableTypeEnum.prototype.constructor = SAPB1.SOIExcisableTypeEnum;
SAPB1.SOIExcisableTypeEnum.se_Exemption = new SAPB1.SOIExcisableTypeEnum('se_Exemption', 'se_Exemption');
SAPB1.SOIExcisableTypeEnum.se_NotExcisable = new SAPB1.SOIExcisableTypeEnum('se_NotExcisable', 'se_NotExcisable');
SAPB1.SOIExcisableTypeEnum.se_Excisable = new SAPB1.SOIExcisableTypeEnum('se_Excisable', 'se_Excisable');
SAPB1.SOIExcisableTypeEnum.se_PaidToOther = new SAPB1.SOIExcisableTypeEnum('se_PaidToOther', 'se_PaidToOther');

module.exports = SAPB1.SOIExcisableTypeEnum;
