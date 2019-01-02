if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.WithholdingTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.WithholdingTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.WithholdingTypeEnum.prototype.constructor = SAPB1.WithholdingTypeEnum;
SAPB1.WithholdingTypeEnum.wt_IncomeTaxWithholding = new SAPB1.WithholdingTypeEnum('wt_IncomeTaxWithholding', 'wt_IncomeTaxWithholding');
SAPB1.WithholdingTypeEnum.wt_VatWithholding = new SAPB1.WithholdingTypeEnum('wt_VatWithholding', 'wt_VatWithholding');

module.exports = SAPB1.WithholdingTypeEnum;
