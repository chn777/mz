if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ElectronicDocGenTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ElectronicDocGenTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ElectronicDocGenTypeEnum.prototype.constructor = SAPB1.ElectronicDocGenTypeEnum;
SAPB1.ElectronicDocGenTypeEnum.edgt_Generate = new SAPB1.ElectronicDocGenTypeEnum('edgt_Generate', 'edgt_Generate');
SAPB1.ElectronicDocGenTypeEnum.edgt_NotRelevant = new SAPB1.ElectronicDocGenTypeEnum('edgt_NotRelevant', 'edgt_NotRelevant');
SAPB1.ElectronicDocGenTypeEnum.edgt_GenerateLater = new SAPB1.ElectronicDocGenTypeEnum('edgt_GenerateLater', 'edgt_GenerateLater');

module.exports = SAPB1.ElectronicDocGenTypeEnum;
