if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssetStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssetStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssetStatusEnum.prototype.constructor = SAPB1.AssetStatusEnum;
SAPB1.AssetStatusEnum.New = new SAPB1.AssetStatusEnum('New', 'New');
SAPB1.AssetStatusEnum.Active = new SAPB1.AssetStatusEnum('Active', 'Active');
SAPB1.AssetStatusEnum.Inactive = new SAPB1.AssetStatusEnum('Inactive', 'Inactive');

module.exports = SAPB1.AssetStatusEnum;
