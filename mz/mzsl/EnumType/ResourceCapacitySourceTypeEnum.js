if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacitySourceTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacitySourceTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacitySourceTypeEnum.prototype.constructor = SAPB1.ResourceCapacitySourceTypeEnum;
SAPB1.ResourceCapacitySourceTypeEnum.rcstIssueForProduction = new SAPB1.ResourceCapacitySourceTypeEnum('rcstIssueForProduction', 'rcstIssueForProduction');
SAPB1.ResourceCapacitySourceTypeEnum.rcstNone = new SAPB1.ResourceCapacitySourceTypeEnum('rcstNone', 'rcstNone');
SAPB1.ResourceCapacitySourceTypeEnum.rcstReceiptFromProduction = new SAPB1.ResourceCapacitySourceTypeEnum('rcstReceiptFromProduction', 'rcstReceiptFromProduction');
SAPB1.ResourceCapacitySourceTypeEnum.rcstProductionOrder = new SAPB1.ResourceCapacitySourceTypeEnum('rcstProductionOrder', 'rcstProductionOrder');

module.exports = SAPB1.ResourceCapacitySourceTypeEnum;
