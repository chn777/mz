if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceAllocationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceAllocationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceAllocationEnum.prototype.constructor = SAPB1.ResourceAllocationEnum;
SAPB1.ResourceAllocationEnum.raStartDateForwards = new SAPB1.ResourceAllocationEnum('raStartDateForwards', 'raStartDateForwards');
SAPB1.ResourceAllocationEnum.raEndDateBackwards = new SAPB1.ResourceAllocationEnum('raEndDateBackwards', 'raEndDateBackwards');
SAPB1.ResourceAllocationEnum.raOnEndDate = new SAPB1.ResourceAllocationEnum('raOnEndDate', 'raOnEndDate');
SAPB1.ResourceAllocationEnum.raOnStartDate = new SAPB1.ResourceAllocationEnum('raOnStartDate', 'raOnStartDate');

module.exports = SAPB1.ResourceAllocationEnum;
