if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.StageDepTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.StageDepTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.StageDepTypeEnum.prototype.constructor = SAPB1.StageDepTypeEnum;
SAPB1.StageDepTypeEnum.sdt_Subproject = new SAPB1.StageDepTypeEnum('sdt_Subproject', 'sdt_Subproject');
SAPB1.StageDepTypeEnum.sdt_Project = new SAPB1.StageDepTypeEnum('sdt_Project', 'sdt_Project');

module.exports = SAPB1.StageDepTypeEnum;
