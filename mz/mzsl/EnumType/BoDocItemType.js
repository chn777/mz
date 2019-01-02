if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocItemType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocItemType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocItemType.prototype.constructor = SAPB1.BoDocItemType;
SAPB1.BoDocItemType.dit_Item = new SAPB1.BoDocItemType('dit_Item', 'dit_Item');
SAPB1.BoDocItemType.dit_Resource = new SAPB1.BoDocItemType('dit_Resource', 'dit_Resource');

module.exports = SAPB1.BoDocItemType;
