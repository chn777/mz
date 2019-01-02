if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSvcExpPartTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSvcExpPartTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSvcExpPartTypes.prototype.constructor = SAPB1.BoSvcExpPartTypes;
SAPB1.BoSvcExpPartTypes.sep_Inventory = new SAPB1.BoSvcExpPartTypes('sep_Inventory', 'sep_Inventory');
SAPB1.BoSvcExpPartTypes.sep_NonInventory = new SAPB1.BoSvcExpPartTypes('sep_NonInventory', 'sep_NonInventory');

module.exports = SAPB1.BoSvcExpPartTypes;
