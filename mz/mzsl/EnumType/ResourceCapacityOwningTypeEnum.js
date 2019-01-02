if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacityOwningTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacityOwningTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacityOwningTypeEnum.prototype.constructor = SAPB1.ResourceCapacityOwningTypeEnum;
SAPB1.ResourceCapacityOwningTypeEnum.rcotIssueForProduction = new SAPB1.ResourceCapacityOwningTypeEnum('rcotIssueForProduction', 'rcotIssueForProduction');
SAPB1.ResourceCapacityOwningTypeEnum.rcotReceiptFromProduction = new SAPB1.ResourceCapacityOwningTypeEnum('rcotReceiptFromProduction', 'rcotReceiptFromProduction');
SAPB1.ResourceCapacityOwningTypeEnum.rcotProductionOrder = new SAPB1.ResourceCapacityOwningTypeEnum('rcotProductionOrder', 'rcotProductionOrder');
SAPB1.ResourceCapacityOwningTypeEnum.rcotNone = new SAPB1.ResourceCapacityOwningTypeEnum('rcotNone', 'rcotNone');

module.exports = SAPB1.ResourceCapacityOwningTypeEnum;
