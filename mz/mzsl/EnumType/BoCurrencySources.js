if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCurrencySources = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCurrencySources.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCurrencySources.prototype.constructor = SAPB1.BoCurrencySources;
SAPB1.BoCurrencySources.bocs_SystemCurrency = new SAPB1.BoCurrencySources('bocs_SystemCurrency', 'bocs_SystemCurrency');
SAPB1.BoCurrencySources.bocs_LocalCurrency = new SAPB1.BoCurrencySources('bocs_LocalCurrency', 'bocs_LocalCurrency');
SAPB1.BoCurrencySources.bocs_BPCurrency = new SAPB1.BoCurrencySources('bocs_BPCurrency', 'bocs_BPCurrency');

module.exports = SAPB1.BoCurrencySources;
