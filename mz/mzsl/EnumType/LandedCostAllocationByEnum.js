if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LandedCostAllocationByEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LandedCostAllocationByEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LandedCostAllocationByEnum.prototype.constructor = SAPB1.LandedCostAllocationByEnum;
SAPB1.LandedCostAllocationByEnum.asVolume = new SAPB1.LandedCostAllocationByEnum('asVolume', 'asVolume');
SAPB1.LandedCostAllocationByEnum.asLegalCost = new SAPB1.LandedCostAllocationByEnum('asLegalCost', 'asLegalCost');
SAPB1.LandedCostAllocationByEnum.asCashValueAfterCustoms = new SAPB1.LandedCostAllocationByEnum('asCashValueAfterCustoms', 'asCashValueAfterCustoms');
SAPB1.LandedCostAllocationByEnum.asQuantity = new SAPB1.LandedCostAllocationByEnum('asQuantity', 'asQuantity');
SAPB1.LandedCostAllocationByEnum.asEqual = new SAPB1.LandedCostAllocationByEnum('asEqual', 'asEqual');
SAPB1.LandedCostAllocationByEnum.asWeight = new SAPB1.LandedCostAllocationByEnum('asWeight', 'asWeight');
SAPB1.LandedCostAllocationByEnum.asCashValueBeforeCustoms = new SAPB1.LandedCostAllocationByEnum('asCashValueBeforeCustoms', 'asCashValueBeforeCustoms');

module.exports = SAPB1.LandedCostAllocationByEnum;
