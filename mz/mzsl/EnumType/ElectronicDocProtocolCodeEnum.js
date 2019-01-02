if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ElectronicDocProtocolCodeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ElectronicDocProtocolCodeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ElectronicDocProtocolCodeEnum.prototype.constructor = SAPB1.ElectronicDocProtocolCodeEnum;
SAPB1.ElectronicDocProtocolCodeEnum.edpc_GEN = new SAPB1.ElectronicDocProtocolCodeEnum('edpc_GEN', 'edpc_GEN');
SAPB1.ElectronicDocProtocolCodeEnum.edpc_EET = new SAPB1.ElectronicDocProtocolCodeEnum('edpc_EET', 'edpc_EET');
SAPB1.ElectronicDocProtocolCodeEnum.edpc_MTD = new SAPB1.ElectronicDocProtocolCodeEnum('edpc_MTD', 'edpc_MTD');
SAPB1.ElectronicDocProtocolCodeEnum.edpc_Invalid = new SAPB1.ElectronicDocProtocolCodeEnum('edpc_Invalid', 'edpc_Invalid');
SAPB1.ElectronicDocProtocolCodeEnum.edpc_FPA = new SAPB1.ElectronicDocProtocolCodeEnum('edpc_FPA', 'edpc_FPA');
SAPB1.ElectronicDocProtocolCodeEnum.edpc_CFDI = new SAPB1.ElectronicDocProtocolCodeEnum('edpc_CFDI', 'edpc_CFDI');

module.exports = SAPB1.ElectronicDocProtocolCodeEnum;
