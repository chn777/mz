if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AmountCatTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AmountCatTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AmountCatTypeEnum.prototype.constructor = SAPB1.AmountCatTypeEnum;
SAPB1.AmountCatTypeEnum.act_Open = new SAPB1.AmountCatTypeEnum('act_Open', 'act_Open');
SAPB1.AmountCatTypeEnum.act_Invoiced = new SAPB1.AmountCatTypeEnum('act_Invoiced', 'act_Invoiced');

module.exports = SAPB1.AmountCatTypeEnum;
