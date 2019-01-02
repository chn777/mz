if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AreaTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AreaTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AreaTypeEnum.prototype.constructor = SAPB1.AreaTypeEnum;
SAPB1.AreaTypeEnum.atPostingtoGL = new SAPB1.AreaTypeEnum('atPostingtoGL', 'atPostingtoGL');
SAPB1.AreaTypeEnum.atAdditionalArea = new SAPB1.AreaTypeEnum('atAdditionalArea', 'atAdditionalArea');
SAPB1.AreaTypeEnum.atDerivedArea = new SAPB1.AreaTypeEnum('atDerivedArea', 'atDerivedArea');

module.exports = SAPB1.AreaTypeEnum;
