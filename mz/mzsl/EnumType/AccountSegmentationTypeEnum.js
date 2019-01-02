if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AccountSegmentationTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AccountSegmentationTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AccountSegmentationTypeEnum.prototype.constructor = SAPB1.AccountSegmentationTypeEnum;
SAPB1.AccountSegmentationTypeEnum.ast_Alphanumeric = new SAPB1.AccountSegmentationTypeEnum('ast_Alphanumeric', 'ast_Alphanumeric');
SAPB1.AccountSegmentationTypeEnum.ast_Numeric = new SAPB1.AccountSegmentationTypeEnum('ast_Numeric', 'ast_Numeric');

module.exports = SAPB1.AccountSegmentationTypeEnum;
