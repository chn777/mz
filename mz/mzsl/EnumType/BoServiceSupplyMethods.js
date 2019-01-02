if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoServiceSupplyMethods = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoServiceSupplyMethods.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoServiceSupplyMethods.prototype.constructor = SAPB1.BoServiceSupplyMethods;
SAPB1.BoServiceSupplyMethods.ssmImmediate = new SAPB1.BoServiceSupplyMethods('ssmImmediate', 'ssmImmediate');
SAPB1.BoServiceSupplyMethods.ssmToMoreResumptions = new SAPB1.BoServiceSupplyMethods('ssmToMoreResumptions', 'ssmToMoreResumptions');

module.exports = SAPB1.BoServiceSupplyMethods;
