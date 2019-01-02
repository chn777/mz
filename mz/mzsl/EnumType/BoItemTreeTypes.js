if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoItemTreeTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoItemTreeTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoItemTreeTypes.prototype.constructor = SAPB1.BoItemTreeTypes;
SAPB1.BoItemTreeTypes.iProductionTree = new SAPB1.BoItemTreeTypes('iProductionTree', 'iProductionTree');
SAPB1.BoItemTreeTypes.iSalesTree = new SAPB1.BoItemTreeTypes('iSalesTree', 'iSalesTree');
SAPB1.BoItemTreeTypes.iNotATree = new SAPB1.BoItemTreeTypes('iNotATree', 'iNotATree');
SAPB1.BoItemTreeTypes.iIngredient = new SAPB1.BoItemTreeTypes('iIngredient', 'iIngredient');
SAPB1.BoItemTreeTypes.iAssemblyTree = new SAPB1.BoItemTreeTypes('iAssemblyTree', 'iAssemblyTree');
SAPB1.BoItemTreeTypes.iTemplateTree = new SAPB1.BoItemTreeTypes('iTemplateTree', 'iTemplateTree');

module.exports = SAPB1.BoItemTreeTypes;
