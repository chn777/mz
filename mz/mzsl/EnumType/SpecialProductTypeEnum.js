if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SpecialProductTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SpecialProductTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SpecialProductTypeEnum.prototype.constructor = SAPB1.SpecialProductTypeEnum;
SAPB1.SpecialProductTypeEnum.sptIO = new SAPB1.SpecialProductTypeEnum('sptIO', 'sptIO');
SAPB1.SpecialProductTypeEnum.sptMT = new SAPB1.SpecialProductTypeEnum('sptMT', 'sptMT');

module.exports = SAPB1.SpecialProductTypeEnum;
