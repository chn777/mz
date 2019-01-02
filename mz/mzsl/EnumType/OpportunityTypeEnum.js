if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.OpportunityTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.OpportunityTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.OpportunityTypeEnum.prototype.constructor = SAPB1.OpportunityTypeEnum;
SAPB1.OpportunityTypeEnum.boOpSales = new SAPB1.OpportunityTypeEnum('boOpSales', 'boOpSales');
SAPB1.OpportunityTypeEnum.boOpPurchasing = new SAPB1.OpportunityTypeEnum('boOpPurchasing', 'boOpPurchasing');

module.exports = SAPB1.OpportunityTypeEnum;
