var ItemCycleCount = require('ComplexType/ItemCycleCount')
var ItemCycleCountCollection = require('ComplexType/ItemCycleCountCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemWarehouseInfo = function () {
}
SAPB1.ItemWarehouseInfo.prototype = new SAPB1.ComplexType();
SAPB1.ItemWarehouseInfo.prototype.constructor = SAPB1.ItemWarehouseInfo;
SAPB1.ItemWarehouseInfo.MinimalStock = { valueOf: function(){return 'MinimalStock';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.MaximalStock = { valueOf: function(){return 'MaximalStock';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.MinimalOrder = { valueOf: function(){return 'MinimalOrder';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.StandardAveragePrice = { valueOf: function(){return 'StandardAveragePrice';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.InventoryAccount = { valueOf: function(){return 'InventoryAccount';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.CostAccount = { valueOf: function(){return 'CostAccount';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.TransferAccount = { valueOf: function(){return 'TransferAccount';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.RevenuesAccount = { valueOf: function(){return 'RevenuesAccount';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.VarienceAccount = { valueOf: function(){return 'VarienceAccount';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.DecreasingAccount = { valueOf: function(){return 'DecreasingAccount';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.IncreasingAccount = { valueOf: function(){return 'IncreasingAccount';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ReturningAccount = { valueOf: function(){return 'ReturningAccount';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ExpensesAccount = { valueOf: function(){return 'ExpensesAccount';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.EURevenuesAccount = { valueOf: function(){return 'EURevenuesAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.EUExpensesAccount = { valueOf: function(){return 'EUExpensesAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ForeignRevenueAcc = { valueOf: function(){return 'ForeignRevenueAcc';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ForeignExpensAcc = { valueOf: function(){return 'ForeignExpensAcc';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ExemptIncomeAcc = { valueOf: function(){return 'ExemptIncomeAcc';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.PriceDifferenceAcc = { valueOf: function(){return 'PriceDifferenceAcc';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.InStock = { valueOf: function(){return 'InStock';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.Committed = { valueOf: function(){return 'Committed';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.Ordered = { valueOf: function(){return 'Ordered';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.CountedQuantity = { valueOf: function(){return 'CountedQuantity';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WasCounted = { valueOf: function(){return 'WasCounted';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.Counted = { valueOf: function(){return 'Counted';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ExpenseClearingAct = { valueOf: function(){return 'ExpenseClearingAct';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.PurchaseCreditAcc = { valueOf: function(){return 'PurchaseCreditAcc';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.EUPurchaseCreditAcc = { valueOf: function(){return 'EUPurchaseCreditAcc';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ForeignPurchaseCreditAcc = { valueOf: function(){return 'ForeignPurchaseCreditAcc';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.SalesCreditAcc = { valueOf: function(){return 'SalesCreditAcc';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.SalesCreditEUAcc = { valueOf: function(){return 'SalesCreditEUAcc';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ExemptedCredits = { valueOf: function(){return 'ExemptedCredits';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.SalesCreditForeignAcc = { valueOf: function(){return 'SalesCreditForeignAcc';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ExpenseOffsettingAccount = { valueOf: function(){return 'ExpenseOffsettingAccount';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WipAccount = { valueOf: function(){return 'WipAccount';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ExchangeRateDifferencesAcct = { valueOf: function(){return 'ExchangeRateDifferencesAcct';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.GoodsClearingAcct = { valueOf: function(){return 'GoodsClearingAcct';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.NegativeInventoryAdjustmentAccount = { valueOf: function(){return 'NegativeInventoryAdjustmentAccount';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.CostInflationOffsetAccount = { valueOf: function(){return 'CostInflationOffsetAccount';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.GLDecreaseAcct = { valueOf: function(){return 'GLDecreaseAcct';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.GLIncreaseAcct = { valueOf: function(){return 'GLIncreaseAcct';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.PAReturnAcct = { valueOf: function(){return 'PAReturnAcct';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.PurchaseAcct = { valueOf: function(){return 'PurchaseAcct';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.PurchaseOffsetAcct = { valueOf: function(){return 'PurchaseOffsetAcct';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ShippedGoodsAccount = { valueOf: function(){return 'ShippedGoodsAccount';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.StockInflationOffsetAccount = { valueOf: function(){return 'StockInflationOffsetAccount';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.StockInflationAdjustAccount = { valueOf: function(){return 'StockInflationAdjustAccount';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.VATInRevenueAccount = { valueOf: function(){return 'VATInRevenueAccount';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WipVarianceAccount = { valueOf: function(){return 'WipVarianceAccount';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.CostInflationAccount = { valueOf: function(){return 'CostInflationAccount';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WHIncomingCenvatAccount = { valueOf: function(){return 'WHIncomingCenvatAccount';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WHOutgoingCenvatAccount = { valueOf: function(){return 'WHOutgoingCenvatAccount';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.StockInTransitAccount = { valueOf: function(){return 'StockInTransitAccount';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.WipOffsetProfitAndLossAccount = { valueOf: function(){return 'WipOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.InventoryOffsetProfitAndLossAccount = { valueOf: function(){return 'InventoryOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.DefaultBin = { valueOf: function(){return 'DefaultBin';}, Type: 'Edm.Int32', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.DefaultBinEnforced = { valueOf: function(){return 'DefaultBinEnforced';}, Type: 'BoYesNoEnum', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.PurchaseBalanceAccount = { valueOf: function(){return 'PurchaseBalanceAccount';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 61, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemWarehouseInfo.ItemCycleCounts = { valueOf: function(){return 'ItemCycleCounts';}, Type: 'ItemCycleCount', Index: 62, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ItemWarehouseInfo.prototype.MinimalStock = new Number();
SAPB1.ItemWarehouseInfo.prototype.MaximalStock = new Number();
SAPB1.ItemWarehouseInfo.prototype.MinimalOrder = new Number();
SAPB1.ItemWarehouseInfo.prototype.StandardAveragePrice = new Number();
SAPB1.ItemWarehouseInfo.prototype.Locked = new String();
SAPB1.ItemWarehouseInfo.prototype.InventoryAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.CostAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.TransferAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.RevenuesAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.VarienceAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.DecreasingAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.IncreasingAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.ReturningAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.ExpensesAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.EURevenuesAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.EUExpensesAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.ForeignRevenueAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.ForeignExpensAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.ExemptIncomeAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.PriceDifferenceAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.WarehouseCode = new String();
SAPB1.ItemWarehouseInfo.prototype.InStock = new Number();
SAPB1.ItemWarehouseInfo.prototype.Committed = new Number();
SAPB1.ItemWarehouseInfo.prototype.Ordered = new Number();
SAPB1.ItemWarehouseInfo.prototype.CountedQuantity = new Number();
SAPB1.ItemWarehouseInfo.prototype.WasCounted = new String();
SAPB1.ItemWarehouseInfo.prototype.UserSignature = new Number();
SAPB1.ItemWarehouseInfo.prototype.Counted = new Number();
SAPB1.ItemWarehouseInfo.prototype.ExpenseClearingAct = new String();
SAPB1.ItemWarehouseInfo.prototype.PurchaseCreditAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.EUPurchaseCreditAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.ForeignPurchaseCreditAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.SalesCreditAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.SalesCreditEUAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.ExemptedCredits = new String();
SAPB1.ItemWarehouseInfo.prototype.SalesCreditForeignAcc = new String();
SAPB1.ItemWarehouseInfo.prototype.ExpenseOffsettingAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.WipAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.ExchangeRateDifferencesAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.GoodsClearingAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.NegativeInventoryAdjustmentAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.CostInflationOffsetAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.GLDecreaseAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.GLIncreaseAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.PAReturnAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.PurchaseAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.PurchaseOffsetAcct = new String();
SAPB1.ItemWarehouseInfo.prototype.ShippedGoodsAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.StockInflationOffsetAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.StockInflationAdjustAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.VATInRevenueAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.WipVarianceAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.CostInflationAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.WHIncomingCenvatAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.WHOutgoingCenvatAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.StockInTransitAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.WipOffsetProfitAndLossAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.InventoryOffsetProfitAndLossAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.DefaultBin = new Number();
SAPB1.ItemWarehouseInfo.prototype.DefaultBinEnforced = new String();
SAPB1.ItemWarehouseInfo.prototype.PurchaseBalanceAccount = new String();
SAPB1.ItemWarehouseInfo.prototype.ItemCode = new String();
SAPB1.ItemWarehouseInfo.prototype.ItemCycleCounts = new ItemCycleCountCollection();

SAPB1.ItemWarehouseInfo.ItemCycleCount = ItemCycleCount
SAPB1.ItemWarehouseInfo.ItemCycleCountCollection = ItemCycleCountCollection

SAPB1.ItemWarehouseInfo.BoYesNoEnum = BoYesNoEnum

SAPB1.ItemWarehouseInfo.create = function (rawObject) {
    var instance = new SAPB1.ItemWarehouseInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemWarehouseInfo.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.ItemWarehouseInfo;
