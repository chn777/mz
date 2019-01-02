if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoOpenIncPayment = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoOpenIncPayment.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoOpenIncPayment.prototype.constructor = SAPB1.BoOpenIncPayment;
SAPB1.BoOpenIncPayment.oip_Credit = new SAPB1.BoOpenIncPayment('oip_Credit', 'oip_Credit');
SAPB1.BoOpenIncPayment.oip_BankTransfer = new SAPB1.BoOpenIncPayment('oip_BankTransfer', 'oip_BankTransfer');
SAPB1.BoOpenIncPayment.oip_Cash = new SAPB1.BoOpenIncPayment('oip_Cash', 'oip_Cash');
SAPB1.BoOpenIncPayment.oip_Checks = new SAPB1.BoOpenIncPayment('oip_Checks', 'oip_Checks');
SAPB1.BoOpenIncPayment.oip_No = new SAPB1.BoOpenIncPayment('oip_No', 'oip_No');

module.exports = SAPB1.BoOpenIncPayment;
