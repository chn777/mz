if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPaymentsObjectType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPaymentsObjectType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPaymentsObjectType.prototype.constructor = SAPB1.BoPaymentsObjectType;
SAPB1.BoPaymentsObjectType.bopot_OutgoingPayments = new SAPB1.BoPaymentsObjectType('bopot_OutgoingPayments', 'bopot_OutgoingPayments');
SAPB1.BoPaymentsObjectType.bopot_IncomingPayments = new SAPB1.BoPaymentsObjectType('bopot_IncomingPayments', 'bopot_IncomingPayments');

module.exports = SAPB1.BoPaymentsObjectType;
