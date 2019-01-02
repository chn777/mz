if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CurrenciesDecimalsEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CurrenciesDecimalsEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CurrenciesDecimalsEnum.prototype.constructor = SAPB1.CurrenciesDecimalsEnum;
SAPB1.CurrenciesDecimalsEnum.cd2Digits = new SAPB1.CurrenciesDecimalsEnum('cd2Digits', 'cd2Digits');
SAPB1.CurrenciesDecimalsEnum.cd5Digits = new SAPB1.CurrenciesDecimalsEnum('cd5Digits', 'cd5Digits');
SAPB1.CurrenciesDecimalsEnum.cd3Digits = new SAPB1.CurrenciesDecimalsEnum('cd3Digits', 'cd3Digits');
SAPB1.CurrenciesDecimalsEnum.cdWithoutDecimals = new SAPB1.CurrenciesDecimalsEnum('cdWithoutDecimals', 'cdWithoutDecimals');
SAPB1.CurrenciesDecimalsEnum.cd6Digits = new SAPB1.CurrenciesDecimalsEnum('cd6Digits', 'cd6Digits');
SAPB1.CurrenciesDecimalsEnum.cdDefault = new SAPB1.CurrenciesDecimalsEnum('cdDefault', 'cdDefault');
SAPB1.CurrenciesDecimalsEnum.cd4Digits = new SAPB1.CurrenciesDecimalsEnum('cd4Digits', 'cd4Digits');
SAPB1.CurrenciesDecimalsEnum.cd1Digit = new SAPB1.CurrenciesDecimalsEnum('cd1Digit', 'cd1Digit');

module.exports = SAPB1.CurrenciesDecimalsEnum;
