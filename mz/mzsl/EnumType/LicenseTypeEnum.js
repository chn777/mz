if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LicenseTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LicenseTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LicenseTypeEnum.prototype.constructor = SAPB1.LicenseTypeEnum;
SAPB1.LicenseTypeEnum.lkSOA = new SAPB1.LicenseTypeEnum('lkSOA', 'lkSOA');
SAPB1.LicenseTypeEnum.lkIdirect = new SAPB1.LicenseTypeEnum('lkIdirect', 'lkIdirect');
SAPB1.LicenseTypeEnum.lkB1iIndirect = new SAPB1.LicenseTypeEnum('lkB1iIndirect', 'lkB1iIndirect');
SAPB1.LicenseTypeEnum.lkB1i = new SAPB1.LicenseTypeEnum('lkB1i', 'lkB1i');
SAPB1.LicenseTypeEnum.lkSOAIndirect = new SAPB1.LicenseTypeEnum('lkSOAIndirect', 'lkSOAIndirect');

module.exports = SAPB1.LicenseTypeEnum;
