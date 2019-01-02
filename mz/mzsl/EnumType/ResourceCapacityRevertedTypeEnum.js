if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceCapacityRevertedTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceCapacityRevertedTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceCapacityRevertedTypeEnum.prototype.constructor = SAPB1.ResourceCapacityRevertedTypeEnum;
SAPB1.ResourceCapacityRevertedTypeEnum.rcrtNone = new SAPB1.ResourceCapacityRevertedTypeEnum('rcrtNone', 'rcrtNone');
SAPB1.ResourceCapacityRevertedTypeEnum.rcrtIssueForProduction = new SAPB1.ResourceCapacityRevertedTypeEnum('rcrtIssueForProduction', 'rcrtIssueForProduction');

module.exports = SAPB1.ResourceCapacityRevertedTypeEnum;
