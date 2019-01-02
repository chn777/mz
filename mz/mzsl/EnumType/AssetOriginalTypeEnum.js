if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssetOriginalTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssetOriginalTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssetOriginalTypeEnum.prototype.constructor = SAPB1.AssetOriginalTypeEnum;
SAPB1.AssetOriginalTypeEnum.aotAPCorrectionInvoice = new SAPB1.AssetOriginalTypeEnum('aotAPCorrectionInvoice', 'aotAPCorrectionInvoice');
SAPB1.AssetOriginalTypeEnum.aotFixedAssetsTransfer = new SAPB1.AssetOriginalTypeEnum('aotFixedAssetsTransfer', 'aotFixedAssetsTransfer');
SAPB1.AssetOriginalTypeEnum.aotAPCreditMemo = new SAPB1.AssetOriginalTypeEnum('aotAPCreditMemo', 'aotAPCreditMemo');
SAPB1.AssetOriginalTypeEnum.aotOutgoingPayment = new SAPB1.AssetOriginalTypeEnum('aotOutgoingPayment', 'aotOutgoingPayment');
SAPB1.AssetOriginalTypeEnum.aotFixedAssetsCreditMemo = new SAPB1.AssetOriginalTypeEnum('aotFixedAssetsCreditMemo', 'aotFixedAssetsCreditMemo');
SAPB1.AssetOriginalTypeEnum.aotAPInvoice = new SAPB1.AssetOriginalTypeEnum('aotAPInvoice', 'aotAPInvoice');
SAPB1.AssetOriginalTypeEnum.aotARInvoice = new SAPB1.AssetOriginalTypeEnum('aotARInvoice', 'aotARInvoice');
SAPB1.AssetOriginalTypeEnum.aotAllTransactions = new SAPB1.AssetOriginalTypeEnum('aotAllTransactions', 'aotAllTransactions');
SAPB1.AssetOriginalTypeEnum.aotRetirement = new SAPB1.AssetOriginalTypeEnum('aotRetirement', 'aotRetirement');
SAPB1.AssetOriginalTypeEnum.aotCapitalization = new SAPB1.AssetOriginalTypeEnum('aotCapitalization', 'aotCapitalization');
SAPB1.AssetOriginalTypeEnum.aotManualDepreciation = new SAPB1.AssetOriginalTypeEnum('aotManualDepreciation', 'aotManualDepreciation');

module.exports = SAPB1.AssetOriginalTypeEnum;
