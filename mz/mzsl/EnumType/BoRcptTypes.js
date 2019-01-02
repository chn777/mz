if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRcptTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRcptTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRcptTypes.prototype.constructor = SAPB1.BoRcptTypes;
SAPB1.BoRcptTypes.rSupplier = new SAPB1.BoRcptTypes('rSupplier', 'rSupplier');
SAPB1.BoRcptTypes.rCustomer = new SAPB1.BoRcptTypes('rCustomer', 'rCustomer');
SAPB1.BoRcptTypes.rAccount = new SAPB1.BoRcptTypes('rAccount', 'rAccount');

module.exports = SAPB1.BoRcptTypes;
