if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacityActionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacityActionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacityActionEnum.prototype.constructor = SAPB1.ResourceCapacityActionEnum;
SAPB1.ResourceCapacityActionEnum.rcaIssueForProductionCreate = new SAPB1.ResourceCapacityActionEnum('rcaIssueForProductionCreate', 'rcaIssueForProductionCreate');
SAPB1.ResourceCapacityActionEnum.rcaUnknown = new SAPB1.ResourceCapacityActionEnum('rcaUnknown', 'rcaUnknown');
SAPB1.ResourceCapacityActionEnum.rcaProductionOrderReschedule = new SAPB1.ResourceCapacityActionEnum('rcaProductionOrderReschedule', 'rcaProductionOrderReschedule');
SAPB1.ResourceCapacityActionEnum.rcaProductionOrderAddLine = new SAPB1.ResourceCapacityActionEnum('rcaProductionOrderAddLine', 'rcaProductionOrderAddLine');
SAPB1.ResourceCapacityActionEnum.rcaProductionOrderCreate = new SAPB1.ResourceCapacityActionEnum('rcaProductionOrderCreate', 'rcaProductionOrderCreate');
SAPB1.ResourceCapacityActionEnum.rcaProductionOrderClose = new SAPB1.ResourceCapacityActionEnum('rcaProductionOrderClose', 'rcaProductionOrderClose');
SAPB1.ResourceCapacityActionEnum.rcaReceiptFromProductionCreate = new SAPB1.ResourceCapacityActionEnum('rcaReceiptFromProductionCreate', 'rcaReceiptFromProductionCreate');
SAPB1.ResourceCapacityActionEnum.rcaProductionOrderDeleteLine = new SAPB1.ResourceCapacityActionEnum('rcaProductionOrderDeleteLine', 'rcaProductionOrderDeleteLine');
SAPB1.ResourceCapacityActionEnum.rcaProductionOrderUpdateLine = new SAPB1.ResourceCapacityActionEnum('rcaProductionOrderUpdateLine', 'rcaProductionOrderUpdateLine');

module.exports = SAPB1.ResourceCapacityActionEnum;
