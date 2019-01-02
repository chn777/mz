if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GeneratedAssetStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GeneratedAssetStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GeneratedAssetStatusEnum.prototype.constructor = SAPB1.GeneratedAssetStatusEnum;
SAPB1.GeneratedAssetStatusEnum.gasOpen = new SAPB1.GeneratedAssetStatusEnum('gasOpen', 'gasOpen');
SAPB1.GeneratedAssetStatusEnum.gasClosed = new SAPB1.GeneratedAssetStatusEnum('gasClosed', 'gasClosed');

module.exports = SAPB1.GeneratedAssetStatusEnum;
