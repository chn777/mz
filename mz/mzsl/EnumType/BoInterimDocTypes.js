if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoInterimDocTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoInterimDocTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoInterimDocTypes.prototype.constructor = SAPB1.BoInterimDocTypes;
SAPB1.BoInterimDocTypes.boidt_CashDiscount = new SAPB1.BoInterimDocTypes('boidt_CashDiscount', 'boidt_CashDiscount');
SAPB1.BoInterimDocTypes.boidt_None = new SAPB1.BoInterimDocTypes('boidt_None', 'boidt_None');
SAPB1.BoInterimDocTypes.boidt_ExchangeRate = new SAPB1.BoInterimDocTypes('boidt_ExchangeRate', 'boidt_ExchangeRate');

module.exports = SAPB1.BoInterimDocTypes;
