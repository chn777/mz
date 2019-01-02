if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAdEpnsDistribMethods = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAdEpnsDistribMethods.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAdEpnsDistribMethods.prototype.constructor = SAPB1.BoAdEpnsDistribMethods;
SAPB1.BoAdEpnsDistribMethods.aedm_Volume = new SAPB1.BoAdEpnsDistribMethods('aedm_Volume', 'aedm_Volume');
SAPB1.BoAdEpnsDistribMethods.aedm_Equally = new SAPB1.BoAdEpnsDistribMethods('aedm_Equally', 'aedm_Equally');
SAPB1.BoAdEpnsDistribMethods.aedm_Quantity = new SAPB1.BoAdEpnsDistribMethods('aedm_Quantity', 'aedm_Quantity');
SAPB1.BoAdEpnsDistribMethods.aedm_Weight = new SAPB1.BoAdEpnsDistribMethods('aedm_Weight', 'aedm_Weight');
SAPB1.BoAdEpnsDistribMethods.aedm_RowTotal = new SAPB1.BoAdEpnsDistribMethods('aedm_RowTotal', 'aedm_RowTotal');
SAPB1.BoAdEpnsDistribMethods.aedm_None = new SAPB1.BoAdEpnsDistribMethods('aedm_None', 'aedm_None');

module.exports = SAPB1.BoAdEpnsDistribMethods;
