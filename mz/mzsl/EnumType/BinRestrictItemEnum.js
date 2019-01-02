if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BinRestrictItemEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BinRestrictItemEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BinRestrictItemEnum.prototype.constructor = SAPB1.BinRestrictItemEnum;
SAPB1.BinRestrictItemEnum.briNone = new SAPB1.BinRestrictItemEnum('briNone', 'briNone');
SAPB1.BinRestrictItemEnum.briSpecificItemGroupOnly = new SAPB1.BinRestrictItemEnum('briSpecificItemGroupOnly', 'briSpecificItemGroupOnly');
SAPB1.BinRestrictItemEnum.briSingleItemOnly = new SAPB1.BinRestrictItemEnum('briSingleItemOnly', 'briSingleItemOnly');
SAPB1.BinRestrictItemEnum.briSpecificItemGroup = new SAPB1.BinRestrictItemEnum('briSpecificItemGroup', 'briSpecificItemGroup');
SAPB1.BinRestrictItemEnum.briSpecificItem = new SAPB1.BinRestrictItemEnum('briSpecificItem', 'briSpecificItem');

module.exports = SAPB1.BinRestrictItemEnum;
