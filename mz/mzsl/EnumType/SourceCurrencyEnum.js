if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SourceCurrencyEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SourceCurrencyEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SourceCurrencyEnum.prototype.constructor = SAPB1.SourceCurrencyEnum;
SAPB1.SourceCurrencyEnum.sc_AdditionalCurrency1 = new SAPB1.SourceCurrencyEnum('sc_AdditionalCurrency1', 'sc_AdditionalCurrency1');
SAPB1.SourceCurrencyEnum.sc_AdditionalCurrency2 = new SAPB1.SourceCurrencyEnum('sc_AdditionalCurrency2', 'sc_AdditionalCurrency2');
SAPB1.SourceCurrencyEnum.sc_PrimaryCurrency = new SAPB1.SourceCurrencyEnum('sc_PrimaryCurrency', 'sc_PrimaryCurrency');

module.exports = SAPB1.SourceCurrencyEnum;
