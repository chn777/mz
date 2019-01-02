if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssetDocumentStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssetDocumentStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssetDocumentStatusEnum.prototype.constructor = SAPB1.AssetDocumentStatusEnum;
SAPB1.AssetDocumentStatusEnum.adsDraft = new SAPB1.AssetDocumentStatusEnum('adsDraft', 'adsDraft');
SAPB1.AssetDocumentStatusEnum.adsPosted = new SAPB1.AssetDocumentStatusEnum('adsPosted', 'adsPosted');
SAPB1.AssetDocumentStatusEnum.adsCancelled = new SAPB1.AssetDocumentStatusEnum('adsCancelled', 'adsCancelled');

module.exports = SAPB1.AssetDocumentStatusEnum;
