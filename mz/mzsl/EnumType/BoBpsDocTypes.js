if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBpsDocTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBpsDocTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBpsDocTypes.prototype.constructor = SAPB1.BoBpsDocTypes;
SAPB1.BoBpsDocTypes.bpdt_PaymentReference = new SAPB1.BoBpsDocTypes('bpdt_PaymentReference', 'bpdt_PaymentReference');
SAPB1.BoBpsDocTypes.bpdt_ISR = new SAPB1.BoBpsDocTypes('bpdt_ISR', 'bpdt_ISR');
SAPB1.BoBpsDocTypes.bpdt_DocNum = new SAPB1.BoBpsDocTypes('bpdt_DocNum', 'bpdt_DocNum');

module.exports = SAPB1.BoBpsDocTypes;
