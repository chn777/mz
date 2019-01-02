if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BinLocationFieldTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BinLocationFieldTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BinLocationFieldTypeEnum.prototype.constructor = SAPB1.BinLocationFieldTypeEnum;
SAPB1.BinLocationFieldTypeEnum.blftWarehouseSublevel = new SAPB1.BinLocationFieldTypeEnum('blftWarehouseSublevel', 'blftWarehouseSublevel');
SAPB1.BinLocationFieldTypeEnum.blftBinLocationAttribute = new SAPB1.BinLocationFieldTypeEnum('blftBinLocationAttribute', 'blftBinLocationAttribute');

module.exports = SAPB1.BinLocationFieldTypeEnum;
