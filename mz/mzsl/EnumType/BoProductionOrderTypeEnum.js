if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoProductionOrderTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoProductionOrderTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoProductionOrderTypeEnum.prototype.constructor = SAPB1.BoProductionOrderTypeEnum;
SAPB1.BoProductionOrderTypeEnum.bopotSpecial = new SAPB1.BoProductionOrderTypeEnum('bopotSpecial', 'bopotSpecial');
SAPB1.BoProductionOrderTypeEnum.bopotDisassembly = new SAPB1.BoProductionOrderTypeEnum('bopotDisassembly', 'bopotDisassembly');
SAPB1.BoProductionOrderTypeEnum.bopotStandard = new SAPB1.BoProductionOrderTypeEnum('bopotStandard', 'bopotStandard');

module.exports = SAPB1.BoProductionOrderTypeEnum;
