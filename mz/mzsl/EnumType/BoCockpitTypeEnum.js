if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCockpitTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCockpitTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCockpitTypeEnum.prototype.constructor = SAPB1.BoCockpitTypeEnum;
SAPB1.BoCockpitTypeEnum.cptt_TemplateCockpit = new SAPB1.BoCockpitTypeEnum('cptt_TemplateCockpit', 'cptt_TemplateCockpit');
SAPB1.BoCockpitTypeEnum.cptt_UserCockpit = new SAPB1.BoCockpitTypeEnum('cptt_UserCockpit', 'cptt_UserCockpit');

module.exports = SAPB1.BoCockpitTypeEnum;
