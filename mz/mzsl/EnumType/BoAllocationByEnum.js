if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAllocationByEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAllocationByEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAllocationByEnum.prototype.constructor = SAPB1.BoAllocationByEnum;
SAPB1.BoAllocationByEnum.ab_Weight = new SAPB1.BoAllocationByEnum('ab_Weight', 'ab_Weight');
SAPB1.BoAllocationByEnum.ab_CashValueBeforeCustoms = new SAPB1.BoAllocationByEnum('ab_CashValueBeforeCustoms', 'ab_CashValueBeforeCustoms');
SAPB1.BoAllocationByEnum.ab_Equal = new SAPB1.BoAllocationByEnum('ab_Equal', 'ab_Equal');
SAPB1.BoAllocationByEnum.ab_Quantity = new SAPB1.BoAllocationByEnum('ab_Quantity', 'ab_Quantity');
SAPB1.BoAllocationByEnum.ab_Volume = new SAPB1.BoAllocationByEnum('ab_Volume', 'ab_Volume');
SAPB1.BoAllocationByEnum.ab_CashValueAfterCustoms = new SAPB1.BoAllocationByEnum('ab_CashValueAfterCustoms', 'ab_CashValueAfterCustoms');

module.exports = SAPB1.BoAllocationByEnum;
