if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoMRPComponentWarehouse = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoMRPComponentWarehouse.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoMRPComponentWarehouse.prototype.constructor = SAPB1.BoMRPComponentWarehouse;
SAPB1.BoMRPComponentWarehouse.bomcw_BOM = new SAPB1.BoMRPComponentWarehouse('bomcw_BOM', 'bomcw_BOM');
SAPB1.BoMRPComponentWarehouse.bomcw_Parent = new SAPB1.BoMRPComponentWarehouse('bomcw_Parent', 'bomcw_Parent');

module.exports = SAPB1.BoMRPComponentWarehouse;
