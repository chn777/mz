if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LicenseUpdateTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LicenseUpdateTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LicenseUpdateTypeEnum.prototype.constructor = SAPB1.LicenseUpdateTypeEnum;
SAPB1.LicenseUpdateTypeEnum.ultAssign = new SAPB1.LicenseUpdateTypeEnum('ultAssign', 'ultAssign');
SAPB1.LicenseUpdateTypeEnum.ultRemove = new SAPB1.LicenseUpdateTypeEnum('ultRemove', 'ultRemove');

module.exports = SAPB1.LicenseUpdateTypeEnum;
