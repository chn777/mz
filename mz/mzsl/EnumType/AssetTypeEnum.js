if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssetTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssetTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssetTypeEnum.prototype.constructor = SAPB1.AssetTypeEnum;
SAPB1.AssetTypeEnum.atAssetTypeGeneral = new SAPB1.AssetTypeEnum('atAssetTypeGeneral', 'atAssetTypeGeneral');
SAPB1.AssetTypeEnum.atAssetTypeLowValueAsset = new SAPB1.AssetTypeEnum('atAssetTypeLowValueAsset', 'atAssetTypeLowValueAsset');

module.exports = SAPB1.AssetTypeEnum;
