if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CommissionTradeTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CommissionTradeTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CommissionTradeTypeEnum.prototype.constructor = SAPB1.CommissionTradeTypeEnum;
SAPB1.CommissionTradeTypeEnum.ct_Consignor = new SAPB1.CommissionTradeTypeEnum('ct_Consignor', 'ct_Consignor');
SAPB1.CommissionTradeTypeEnum.ct_SalesAgent = new SAPB1.CommissionTradeTypeEnum('ct_SalesAgent', 'ct_SalesAgent');
SAPB1.CommissionTradeTypeEnum.ct_PurchaseAgent = new SAPB1.CommissionTradeTypeEnum('ct_PurchaseAgent', 'ct_PurchaseAgent');
SAPB1.CommissionTradeTypeEnum.ct_Empty = new SAPB1.CommissionTradeTypeEnum('ct_Empty', 'ct_Empty');

module.exports = SAPB1.CommissionTradeTypeEnum;
