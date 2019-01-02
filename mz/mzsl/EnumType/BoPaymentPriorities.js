if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPaymentPriorities = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPaymentPriorities.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPaymentPriorities.prototype.constructor = SAPB1.BoPaymentPriorities;
SAPB1.BoPaymentPriorities.bopp_Priority_6 = new SAPB1.BoPaymentPriorities('bopp_Priority_6', 'bopp_Priority_6');
SAPB1.BoPaymentPriorities.bopp_Priority_5 = new SAPB1.BoPaymentPriorities('bopp_Priority_5', 'bopp_Priority_5');
SAPB1.BoPaymentPriorities.bopp_Priority_2 = new SAPB1.BoPaymentPriorities('bopp_Priority_2', 'bopp_Priority_2');
SAPB1.BoPaymentPriorities.bopp_Priority_1 = new SAPB1.BoPaymentPriorities('bopp_Priority_1', 'bopp_Priority_1');
SAPB1.BoPaymentPriorities.bopp_Priority_4 = new SAPB1.BoPaymentPriorities('bopp_Priority_4', 'bopp_Priority_4');
SAPB1.BoPaymentPriorities.bopp_Priority_3 = new SAPB1.BoPaymentPriorities('bopp_Priority_3', 'bopp_Priority_3');

module.exports = SAPB1.BoPaymentPriorities;
