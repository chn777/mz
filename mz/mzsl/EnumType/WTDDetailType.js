if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.WTDDetailType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.WTDDetailType.prototype = SAPB1.EnumBase.prototype;
SAPB1.WTDDetailType.prototype.constructor = SAPB1.WTDDetailType;
SAPB1.WTDDetailType.SpecialRate = new SAPB1.WTDDetailType('SpecialRate', 'SpecialRate');
SAPB1.WTDDetailType.Exemption = new SAPB1.WTDDetailType('Exemption', 'Exemption');
SAPB1.WTDDetailType.Allowed = new SAPB1.WTDDetailType('Allowed', 'Allowed');

module.exports = SAPB1.WTDDetailType;
