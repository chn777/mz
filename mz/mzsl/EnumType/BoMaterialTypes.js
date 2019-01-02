if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoMaterialTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoMaterialTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoMaterialTypes.prototype.constructor = SAPB1.BoMaterialTypes;
SAPB1.BoMaterialTypes.mt_SubProduct = new SAPB1.BoMaterialTypes('mt_SubProduct', 'mt_SubProduct');
SAPB1.BoMaterialTypes.mt_GoodsForReseller = new SAPB1.BoMaterialTypes('mt_GoodsForReseller', 'mt_GoodsForReseller');
SAPB1.BoMaterialTypes.mt_OtherInput = new SAPB1.BoMaterialTypes('mt_OtherInput', 'mt_OtherInput');
SAPB1.BoMaterialTypes.mt_FinishedGoods = new SAPB1.BoMaterialTypes('mt_FinishedGoods', 'mt_FinishedGoods');
SAPB1.BoMaterialTypes.mt_IntermediateMaterial = new SAPB1.BoMaterialTypes('mt_IntermediateMaterial', 'mt_IntermediateMaterial');
SAPB1.BoMaterialTypes.mt_Other = new SAPB1.BoMaterialTypes('mt_Other', 'mt_Other');
SAPB1.BoMaterialTypes.mt_Package = new SAPB1.BoMaterialTypes('mt_Package', 'mt_Package');
SAPB1.BoMaterialTypes.mt_FixedAsset = new SAPB1.BoMaterialTypes('mt_FixedAsset', 'mt_FixedAsset');
SAPB1.BoMaterialTypes.mt_RawMaterial = new SAPB1.BoMaterialTypes('mt_RawMaterial', 'mt_RawMaterial');
SAPB1.BoMaterialTypes.mt_GoodsInProcess = new SAPB1.BoMaterialTypes('mt_GoodsInProcess', 'mt_GoodsInProcess');
SAPB1.BoMaterialTypes.mt_ConsumerMaterial = new SAPB1.BoMaterialTypes('mt_ConsumerMaterial', 'mt_ConsumerMaterial');
SAPB1.BoMaterialTypes.mt_Service = new SAPB1.BoMaterialTypes('mt_Service', 'mt_Service');

module.exports = SAPB1.BoMaterialTypes;
