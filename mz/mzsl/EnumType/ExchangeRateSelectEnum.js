if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ExchangeRateSelectEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ExchangeRateSelectEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ExchangeRateSelectEnum.prototype.constructor = SAPB1.ExchangeRateSelectEnum;
SAPB1.ExchangeRateSelectEnum.ierCurrentRate = new SAPB1.ExchangeRateSelectEnum('ierCurrentRate', 'ierCurrentRate');
SAPB1.ExchangeRateSelectEnum.ierFromInovice = new SAPB1.ExchangeRateSelectEnum('ierFromInovice', 'ierFromInovice');

module.exports = SAPB1.ExchangeRateSelectEnum;
