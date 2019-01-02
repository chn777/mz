if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BinActionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BinActionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BinActionTypeEnum.prototype.constructor = SAPB1.BinActionTypeEnum;
SAPB1.BinActionTypeEnum.batToWarehouse = new SAPB1.BinActionTypeEnum('batToWarehouse', 'batToWarehouse');
SAPB1.BinActionTypeEnum.batFromWarehouse = new SAPB1.BinActionTypeEnum('batFromWarehouse', 'batFromWarehouse');

module.exports = SAPB1.BinActionTypeEnum;
