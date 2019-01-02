if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ProductionItemType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ProductionItemType.prototype = SAPB1.EnumBase.prototype;
SAPB1.ProductionItemType.prototype.constructor = SAPB1.ProductionItemType;
SAPB1.ProductionItemType.pit_Item = new SAPB1.ProductionItemType('pit_Item', 'pit_Item');
SAPB1.ProductionItemType.pit_Text = new SAPB1.ProductionItemType('pit_Text', 'pit_Text');
SAPB1.ProductionItemType.pit_Resource = new SAPB1.ProductionItemType('pit_Resource', 'pit_Resource');

module.exports = SAPB1.ProductionItemType;
