if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssetDocumentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssetDocumentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssetDocumentTypeEnum.prototype.constructor = SAPB1.AssetDocumentTypeEnum;
SAPB1.AssetDocumentTypeEnum.adtAssetClassTransfer = new SAPB1.AssetDocumentTypeEnum('adtAssetClassTransfer', 'adtAssetClassTransfer');
SAPB1.AssetDocumentTypeEnum.adtOrdinaryDepreciation = new SAPB1.AssetDocumentTypeEnum('adtOrdinaryDepreciation', 'adtOrdinaryDepreciation');
SAPB1.AssetDocumentTypeEnum.adtSpecialDepreciation = new SAPB1.AssetDocumentTypeEnum('adtSpecialDepreciation', 'adtSpecialDepreciation');
SAPB1.AssetDocumentTypeEnum.adtSales = new SAPB1.AssetDocumentTypeEnum('adtSales', 'adtSales');
SAPB1.AssetDocumentTypeEnum.adtAssetTransfer = new SAPB1.AssetDocumentTypeEnum('adtAssetTransfer', 'adtAssetTransfer');
SAPB1.AssetDocumentTypeEnum.adtUnplannedDepreciation = new SAPB1.AssetDocumentTypeEnum('adtUnplannedDepreciation', 'adtUnplannedDepreciation');
SAPB1.AssetDocumentTypeEnum.adtAppreciation = new SAPB1.AssetDocumentTypeEnum('adtAppreciation', 'adtAppreciation');
SAPB1.AssetDocumentTypeEnum.adtScrapping = new SAPB1.AssetDocumentTypeEnum('adtScrapping', 'adtScrapping');

module.exports = SAPB1.AssetDocumentTypeEnum;
