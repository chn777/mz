if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPlanningSystem = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPlanningSystem.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPlanningSystem.prototype.constructor = SAPB1.BoPlanningSystem;
SAPB1.BoPlanningSystem.bop_None = new SAPB1.BoPlanningSystem('bop_None', 'bop_None');
SAPB1.BoPlanningSystem.bop_MRP = new SAPB1.BoPlanningSystem('bop_MRP', 'bop_MRP');

module.exports = SAPB1.BoPlanningSystem;
