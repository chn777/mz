if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AttributeGroupFieldTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AttributeGroupFieldTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AttributeGroupFieldTypeEnum.prototype.constructor = SAPB1.AttributeGroupFieldTypeEnum;
SAPB1.AttributeGroupFieldTypeEnum.agftNumeric = new SAPB1.AttributeGroupFieldTypeEnum('agftNumeric', 'agftNumeric');
SAPB1.AttributeGroupFieldTypeEnum.agftPrice = new SAPB1.AttributeGroupFieldTypeEnum('agftPrice', 'agftPrice');
SAPB1.AttributeGroupFieldTypeEnum.agftQuantity = new SAPB1.AttributeGroupFieldTypeEnum('agftQuantity', 'agftQuantity');
SAPB1.AttributeGroupFieldTypeEnum.agftDate = new SAPB1.AttributeGroupFieldTypeEnum('agftDate', 'agftDate');
SAPB1.AttributeGroupFieldTypeEnum.agftAmount = new SAPB1.AttributeGroupFieldTypeEnum('agftAmount', 'agftAmount');
SAPB1.AttributeGroupFieldTypeEnum.agftText = new SAPB1.AttributeGroupFieldTypeEnum('agftText', 'agftText');

module.exports = SAPB1.AttributeGroupFieldTypeEnum;
