if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ImportOrExportTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ImportOrExportTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ImportOrExportTypeEnum.prototype.constructor = SAPB1.ImportOrExportTypeEnum;
SAPB1.ImportOrExportTypeEnum.et_Deemed_ImportsOrExports = new SAPB1.ImportOrExportTypeEnum('et_Deemed_ImportsOrExports', 'et_Deemed_ImportsOrExports');
SAPB1.ImportOrExportTypeEnum.et_IpmortsOrExports = new SAPB1.ImportOrExportTypeEnum('et_IpmortsOrExports', 'et_IpmortsOrExports');
SAPB1.ImportOrExportTypeEnum.et_SEZ_Unit = new SAPB1.ImportOrExportTypeEnum('et_SEZ_Unit', 'et_SEZ_Unit');
SAPB1.ImportOrExportTypeEnum.et_SEZ_Developer = new SAPB1.ImportOrExportTypeEnum('et_SEZ_Developer', 'et_SEZ_Developer');

module.exports = SAPB1.ImportOrExportTypeEnum;
