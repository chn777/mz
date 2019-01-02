if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EcmActionLogTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EcmActionLogTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EcmActionLogTypeEnum.prototype.constructor = SAPB1.EcmActionLogTypeEnum;
SAPB1.EcmActionLogTypeEnum.altSend = new SAPB1.EcmActionLogTypeEnum('altSend', 'altSend');
SAPB1.EcmActionLogTypeEnum.altNote = new SAPB1.EcmActionLogTypeEnum('altNote', 'altNote');
SAPB1.EcmActionLogTypeEnum.altImport = new SAPB1.EcmActionLogTypeEnum('altImport', 'altImport');
SAPB1.EcmActionLogTypeEnum.altError = new SAPB1.EcmActionLogTypeEnum('altError', 'altError');
SAPB1.EcmActionLogTypeEnum.altWarning = new SAPB1.EcmActionLogTypeEnum('altWarning', 'altWarning');
SAPB1.EcmActionLogTypeEnum.altReceive = new SAPB1.EcmActionLogTypeEnum('altReceive', 'altReceive');

module.exports = SAPB1.EcmActionLogTypeEnum;
