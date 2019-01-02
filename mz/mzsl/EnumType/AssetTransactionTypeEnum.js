if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssetTransactionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssetTransactionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssetTransactionTypeEnum.prototype.constructor = SAPB1.AssetTransactionTypeEnum;
SAPB1.AssetTransactionTypeEnum.att_UplannedDepreciation = new SAPB1.AssetTransactionTypeEnum('att_UplannedDepreciation', 'att_UplannedDepreciation');
SAPB1.AssetTransactionTypeEnum.att_Acquistion = new SAPB1.AssetTransactionTypeEnum('att_Acquistion', 'att_Acquistion');
SAPB1.AssetTransactionTypeEnum.att_SpecialDepreciation = new SAPB1.AssetTransactionTypeEnum('att_SpecialDepreciation', 'att_SpecialDepreciation');
SAPB1.AssetTransactionTypeEnum.att_Transfer = new SAPB1.AssetTransactionTypeEnum('att_Transfer', 'att_Transfer');
SAPB1.AssetTransactionTypeEnum.att_WriteUp = new SAPB1.AssetTransactionTypeEnum('att_WriteUp', 'att_WriteUp');
SAPB1.AssetTransactionTypeEnum.att_Retirement = new SAPB1.AssetTransactionTypeEnum('att_Retirement', 'att_Retirement');
SAPB1.AssetTransactionTypeEnum.att_BeginningOfYear = new SAPB1.AssetTransactionTypeEnum('att_BeginningOfYear', 'att_BeginningOfYear');
SAPB1.AssetTransactionTypeEnum.att_OrdinaryDepreciation = new SAPB1.AssetTransactionTypeEnum('att_OrdinaryDepreciation', 'att_OrdinaryDepreciation');
SAPB1.AssetTransactionTypeEnum.att_EndOfYear = new SAPB1.AssetTransactionTypeEnum('att_EndOfYear', 'att_EndOfYear');

module.exports = SAPB1.AssetTransactionTypeEnum;
