if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ItemTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ItemTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ItemTypeEnum.prototype.constructor = SAPB1.ItemTypeEnum;
SAPB1.ItemTypeEnum.itLabor = new SAPB1.ItemTypeEnum('itLabor', 'itLabor');
SAPB1.ItemTypeEnum.itFixedAssets = new SAPB1.ItemTypeEnum('itFixedAssets', 'itFixedAssets');
SAPB1.ItemTypeEnum.itTravel = new SAPB1.ItemTypeEnum('itTravel', 'itTravel');
SAPB1.ItemTypeEnum.itItems = new SAPB1.ItemTypeEnum('itItems', 'itItems');

module.exports = SAPB1.ItemTypeEnum;
