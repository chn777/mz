if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCurrencyCheck = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCurrencyCheck.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCurrencyCheck.prototype.constructor = SAPB1.BoCurrencyCheck;
SAPB1.BoCurrencyCheck.cc_Block = new SAPB1.BoCurrencyCheck('cc_Block', 'cc_Block');
SAPB1.BoCurrencyCheck.cc_NoMessage = new SAPB1.BoCurrencyCheck('cc_NoMessage', 'cc_NoMessage');

module.exports = SAPB1.BoCurrencyCheck;
