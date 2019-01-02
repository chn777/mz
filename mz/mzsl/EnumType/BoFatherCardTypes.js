if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoFatherCardTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoFatherCardTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoFatherCardTypes.prototype.constructor = SAPB1.BoFatherCardTypes;
SAPB1.BoFatherCardTypes.cDelivery_sum = new SAPB1.BoFatherCardTypes('cDelivery_sum', 'cDelivery_sum');
SAPB1.BoFatherCardTypes.cPayments_sum = new SAPB1.BoFatherCardTypes('cPayments_sum', 'cPayments_sum');

module.exports = SAPB1.BoFatherCardTypes;
