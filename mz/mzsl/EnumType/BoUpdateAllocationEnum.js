if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoUpdateAllocationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoUpdateAllocationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoUpdateAllocationEnum.prototype.constructor = SAPB1.BoUpdateAllocationEnum;
SAPB1.BoUpdateAllocationEnum.bouaManual = new SAPB1.BoUpdateAllocationEnum('bouaManual', 'bouaManual');
SAPB1.BoUpdateAllocationEnum.bouaCalculated = new SAPB1.BoUpdateAllocationEnum('bouaCalculated', 'bouaCalculated');
SAPB1.BoUpdateAllocationEnum.bouaRunCalculation = new SAPB1.BoUpdateAllocationEnum('bouaRunCalculation', 'bouaRunCalculation');

module.exports = SAPB1.BoUpdateAllocationEnum;
