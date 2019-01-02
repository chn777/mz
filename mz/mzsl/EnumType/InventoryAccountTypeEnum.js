if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InventoryAccountTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InventoryAccountTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InventoryAccountTypeEnum.prototype.constructor = SAPB1.InventoryAccountTypeEnum;
SAPB1.InventoryAccountTypeEnum.iatCostInflationOffset = new SAPB1.InventoryAccountTypeEnum('iatCostInflationOffset', 'iatCostInflationOffset');
SAPB1.InventoryAccountTypeEnum.iatVATInRevenue = new SAPB1.InventoryAccountTypeEnum('iatVATInRevenue', 'iatVATInRevenue');
SAPB1.InventoryAccountTypeEnum.iatFreeOfChargeSales = new SAPB1.InventoryAccountTypeEnum('iatFreeOfChargeSales', 'iatFreeOfChargeSales');
SAPB1.InventoryAccountTypeEnum.iatStockInflationAdjust = new SAPB1.InventoryAccountTypeEnum('iatStockInflationAdjust', 'iatStockInflationAdjust');
SAPB1.InventoryAccountTypeEnum.iatEURevenues = new SAPB1.InventoryAccountTypeEnum('iatEURevenues', 'iatEURevenues');
SAPB1.InventoryAccountTypeEnum.iatGLIncrease = new SAPB1.InventoryAccountTypeEnum('iatGLIncrease', 'iatGLIncrease');
SAPB1.InventoryAccountTypeEnum.iatCostInflation = new SAPB1.InventoryAccountTypeEnum('iatCostInflation', 'iatCostInflation');
SAPB1.InventoryAccountTypeEnum.iatStockInTransit = new SAPB1.InventoryAccountTypeEnum('iatStockInTransit', 'iatStockInTransit');
SAPB1.InventoryAccountTypeEnum.iatPurchaseOffset = new SAPB1.InventoryAccountTypeEnum('iatPurchaseOffset', 'iatPurchaseOffset');
SAPB1.InventoryAccountTypeEnum.iatPriceDifference = new SAPB1.InventoryAccountTypeEnum('iatPriceDifference', 'iatPriceDifference');
SAPB1.InventoryAccountTypeEnum.iatPurchaseBalance = new SAPB1.InventoryAccountTypeEnum('iatPurchaseBalance', 'iatPurchaseBalance');
SAPB1.InventoryAccountTypeEnum.iatExchangeRateDifferences = new SAPB1.InventoryAccountTypeEnum('iatExchangeRateDifferences', 'iatExchangeRateDifferences');
SAPB1.InventoryAccountTypeEnum.iatSalesCreditForeign = new SAPB1.InventoryAccountTypeEnum('iatSalesCreditForeign', 'iatSalesCreditForeign');
SAPB1.InventoryAccountTypeEnum.iatExemptedCredits = new SAPB1.InventoryAccountTypeEnum('iatExemptedCredits', 'iatExemptedCredits');
SAPB1.InventoryAccountTypeEnum.iatGoodsClearing = new SAPB1.InventoryAccountTypeEnum('iatGoodsClearing', 'iatGoodsClearing');
SAPB1.InventoryAccountTypeEnum.iatWHIncomingCenvat = new SAPB1.InventoryAccountTypeEnum('iatWHIncomingCenvat', 'iatWHIncomingCenvat');
SAPB1.InventoryAccountTypeEnum.iatWHOutgoingCenvat = new SAPB1.InventoryAccountTypeEnum('iatWHOutgoingCenvat', 'iatWHOutgoingCenvat');
SAPB1.InventoryAccountTypeEnum.iatEUPurchaseCredit = new SAPB1.InventoryAccountTypeEnum('iatEUPurchaseCredit', 'iatEUPurchaseCredit');
SAPB1.InventoryAccountTypeEnum.iatGLDecrease = new SAPB1.InventoryAccountTypeEnum('iatGLDecrease', 'iatGLDecrease');
SAPB1.InventoryAccountTypeEnum.iatExemptIncome = new SAPB1.InventoryAccountTypeEnum('iatExemptIncome', 'iatExemptIncome');
SAPB1.InventoryAccountTypeEnum.iatPurchase = new SAPB1.InventoryAccountTypeEnum('iatPurchase', 'iatPurchase');
SAPB1.InventoryAccountTypeEnum.iatWip = new SAPB1.InventoryAccountTypeEnum('iatWip', 'iatWip');
SAPB1.InventoryAccountTypeEnum.iatWipOffsetProfitAndLoss = new SAPB1.InventoryAccountTypeEnum('iatWipOffsetProfitAndLoss', 'iatWipOffsetProfitAndLoss');
SAPB1.InventoryAccountTypeEnum.iatDecreasing = new SAPB1.InventoryAccountTypeEnum('iatDecreasing', 'iatDecreasing');
SAPB1.InventoryAccountTypeEnum.iatFreeOfChargePurchase = new SAPB1.InventoryAccountTypeEnum('iatFreeOfChargePurchase', 'iatFreeOfChargePurchase');
SAPB1.InventoryAccountTypeEnum.iatRevenues = new SAPB1.InventoryAccountTypeEnum('iatRevenues', 'iatRevenues');
SAPB1.InventoryAccountTypeEnum.iatSalesCredit = new SAPB1.InventoryAccountTypeEnum('iatSalesCredit', 'iatSalesCredit');
SAPB1.InventoryAccountTypeEnum.iatSalesCreditEU = new SAPB1.InventoryAccountTypeEnum('iatSalesCreditEU', 'iatSalesCreditEU');
SAPB1.InventoryAccountTypeEnum.iatVarience = new SAPB1.InventoryAccountTypeEnum('iatVarience', 'iatVarience');
SAPB1.InventoryAccountTypeEnum.iatForeignExpens = new SAPB1.InventoryAccountTypeEnum('iatForeignExpens', 'iatForeignExpens');
SAPB1.InventoryAccountTypeEnum.iatShippedGoods = new SAPB1.InventoryAccountTypeEnum('iatShippedGoods', 'iatShippedGoods');
SAPB1.InventoryAccountTypeEnum.iatInventory = new SAPB1.InventoryAccountTypeEnum('iatInventory', 'iatInventory');
SAPB1.InventoryAccountTypeEnum.iatPurchaseCredit = new SAPB1.InventoryAccountTypeEnum('iatPurchaseCredit', 'iatPurchaseCredit');
SAPB1.InventoryAccountTypeEnum.iatTransfer = new SAPB1.InventoryAccountTypeEnum('iatTransfer', 'iatTransfer');
SAPB1.InventoryAccountTypeEnum.iatForeignPurchaseCredit = new SAPB1.InventoryAccountTypeEnum('iatForeignPurchaseCredit', 'iatForeignPurchaseCredit');
SAPB1.InventoryAccountTypeEnum.iatIncreasing = new SAPB1.InventoryAccountTypeEnum('iatIncreasing', 'iatIncreasing');
SAPB1.InventoryAccountTypeEnum.iatPAReturn = new SAPB1.InventoryAccountTypeEnum('iatPAReturn', 'iatPAReturn');
SAPB1.InventoryAccountTypeEnum.iatExpenses = new SAPB1.InventoryAccountTypeEnum('iatExpenses', 'iatExpenses');
SAPB1.InventoryAccountTypeEnum.iatEUExpenses = new SAPB1.InventoryAccountTypeEnum('iatEUExpenses', 'iatEUExpenses');
SAPB1.InventoryAccountTypeEnum.iatExpenseOffsetting = new SAPB1.InventoryAccountTypeEnum('iatExpenseOffsetting', 'iatExpenseOffsetting');
SAPB1.InventoryAccountTypeEnum.iatReturning = new SAPB1.InventoryAccountTypeEnum('iatReturning', 'iatReturning');
SAPB1.InventoryAccountTypeEnum.iatWipVariance = new SAPB1.InventoryAccountTypeEnum('iatWipVariance', 'iatWipVariance');
SAPB1.InventoryAccountTypeEnum.iatExpenseClearing = new SAPB1.InventoryAccountTypeEnum('iatExpenseClearing', 'iatExpenseClearing');
SAPB1.InventoryAccountTypeEnum.iatStockInflationOffset = new SAPB1.InventoryAccountTypeEnum('iatStockInflationOffset', 'iatStockInflationOffset');
SAPB1.InventoryAccountTypeEnum.iatForeignRevenue = new SAPB1.InventoryAccountTypeEnum('iatForeignRevenue', 'iatForeignRevenue');
SAPB1.InventoryAccountTypeEnum.iatInventoryOffsetProfitAndLoss = new SAPB1.InventoryAccountTypeEnum('iatInventoryOffsetProfitAndLoss', 'iatInventoryOffsetProfitAndLoss');
SAPB1.InventoryAccountTypeEnum.iatCost = new SAPB1.InventoryAccountTypeEnum('iatCost', 'iatCost');
SAPB1.InventoryAccountTypeEnum.iatNegativeInventoryAdjustment = new SAPB1.InventoryAccountTypeEnum('iatNegativeInventoryAdjustment', 'iatNegativeInventoryAdjustment');

module.exports = SAPB1.InventoryAccountTypeEnum;
