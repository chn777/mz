if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoExtensionErrorActionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoExtensionErrorActionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoExtensionErrorActionEnum.prototype.constructor = SAPB1.BoExtensionErrorActionEnum;
SAPB1.BoExtensionErrorActionEnum.eeaIgnore = new SAPB1.BoExtensionErrorActionEnum('eeaIgnore', 'eeaIgnore');
SAPB1.BoExtensionErrorActionEnum.eeaPrompt = new SAPB1.BoExtensionErrorActionEnum('eeaPrompt', 'eeaPrompt');
SAPB1.BoExtensionErrorActionEnum.eeaStop = new SAPB1.BoExtensionErrorActionEnum('eeaStop', 'eeaStop');

module.exports = SAPB1.BoExtensionErrorActionEnum;
