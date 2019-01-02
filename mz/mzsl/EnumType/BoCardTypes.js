if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCardTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCardTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCardTypes.prototype.constructor = SAPB1.BoCardTypes;
SAPB1.BoCardTypes.cSupplier = new SAPB1.BoCardTypes('cSupplier', 'cSupplier');
SAPB1.BoCardTypes.cCustomer = new SAPB1.BoCardTypes('cCustomer', 'cCustomer');
SAPB1.BoCardTypes.cLid = new SAPB1.BoCardTypes('cLid', 'cLid');

module.exports = SAPB1.BoCardTypes;
