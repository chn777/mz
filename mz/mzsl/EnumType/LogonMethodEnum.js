if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LogonMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LogonMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LogonMethodEnum.prototype.constructor = SAPB1.LogonMethodEnum;
SAPB1.LogonMethodEnum.lmNoControl = new SAPB1.LogonMethodEnum('lmNoControl', 'lmNoControl');
SAPB1.LogonMethodEnum.lmBOneIntegrationFramework = new SAPB1.LogonMethodEnum('lmBOneIntegrationFramework', 'lmBOneIntegrationFramework');
SAPB1.LogonMethodEnum.lmStandardLogon = new SAPB1.LogonMethodEnum('lmStandardLogon', 'lmStandardLogon');

module.exports = SAPB1.LogonMethodEnum;
