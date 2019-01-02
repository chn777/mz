
var BoSubPeriodTypeEnum = require('EnumType/BoSubPeriodTypeEnum')
var GetGLAccountByEnum = require('EnumType/GetGLAccountByEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoBusinessPartnerTypes = require('EnumType/BoBusinessPartnerTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GLAccountAdvancedRule = function () {
}
SAPB1.GLAccountAdvancedRule.prototype = new SAPB1.EntityType();
SAPB1.GLAccountAdvancedRule.prototype.constructor = SAPB1.GLAccountAdvancedRule;
SAPB1.GLAccountAdvancedRule.prototype.keys.push('AbsoluteEntry');
SAPB1.GLAccountAdvancedRule.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.Period = { valueOf: function(){return 'Period';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.BeginningofFinancialYear = { valueOf: function(){return 'BeginningofFinancialYear';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.FinancialYear = { valueOf: function(){return 'FinancialYear';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PeriodName = { valueOf: function(){return 'PeriodName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.SubPeriodType = { valueOf: function(){return 'SubPeriodType';}, Type: 'BoSubPeriodTypeEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.NumberOfPeriods = { valueOf: function(){return 'NumberOfPeriods';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.FromPostingDate = { valueOf: function(){return 'FromPostingDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ToPostingDate = { valueOf: function(){return 'ToPostingDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.FromDueDate = { valueOf: function(){return 'FromDueDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ToDueDate = { valueOf: function(){return 'ToDueDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.FromDocumentDate = { valueOf: function(){return 'FromDocumentDate';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ToDocumentDate = { valueOf: function(){return 'ToDocumentDate';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.BPGroup = { valueOf: function(){return 'BPGroup';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ShipToCountry = { valueOf: function(){return 'ShipToCountry';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ShipToState = { valueOf: function(){return 'ShipToState';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.GetGLAccountBy = { valueOf: function(){return 'GetGLAccountBy';}, Type: 'GetGLAccountByEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.FromDate = { valueOf: function(){return 'FromDate';}, Type: 'Edm.DateTime', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ToDate = { valueOf: function(){return 'ToDate';}, Type: 'Edm.DateTime', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ExpensesAccount = { valueOf: function(){return 'ExpensesAccount';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.RevenuesAccount = { valueOf: function(){return 'RevenuesAccount';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ExemptIncomeAcc = { valueOf: function(){return 'ExemptIncomeAcc';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.InventoryAccount = { valueOf: function(){return 'InventoryAccount';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.CostAccount = { valueOf: function(){return 'CostAccount';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.TransferAccount = { valueOf: function(){return 'TransferAccount';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.VarienceAccount = { valueOf: function(){return 'VarienceAccount';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PriceDifferenceAcc = { valueOf: function(){return 'PriceDifferenceAcc';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.NegativeInventoryAdjustmentAccount = { valueOf: function(){return 'NegativeInventoryAdjustmentAccount';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.DecreasingAccount = { valueOf: function(){return 'DecreasingAccount';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.IncreasingAccount = { valueOf: function(){return 'IncreasingAccount';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ReturningAccount = { valueOf: function(){return 'ReturningAccount';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.EURevenuesAccount = { valueOf: function(){return 'EURevenuesAccount';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.EUExpensesAccount = { valueOf: function(){return 'EUExpensesAccount';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ForeignRevenueAcc = { valueOf: function(){return 'ForeignRevenueAcc';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ForeignExpensAcc = { valueOf: function(){return 'ForeignExpensAcc';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PurchaseAcct = { valueOf: function(){return 'PurchaseAcct';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PAReturnAcct = { valueOf: function(){return 'PAReturnAcct';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PurchaseOffsetAcct = { valueOf: function(){return 'PurchaseOffsetAcct';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ExchangeRateDifferencesAcct = { valueOf: function(){return 'ExchangeRateDifferencesAcct';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.GoodsClearingAcct = { valueOf: function(){return 'GoodsClearingAcct';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.GLDecreaseAcct = { valueOf: function(){return 'GLDecreaseAcct';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.GLIncreaseAcct = { valueOf: function(){return 'GLIncreaseAcct';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.WipAccount = { valueOf: function(){return 'WipAccount';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.WipVarianceAccount = { valueOf: function(){return 'WipVarianceAccount';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.WipOffsetProfitAndLossAccount = { valueOf: function(){return 'WipOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.InventoryOffsetProfitAndLossAccount = { valueOf: function(){return 'InventoryOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.StockInflationAdjustAccount = { valueOf: function(){return 'StockInflationAdjustAccount';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.StockInflationOffsetAccount = { valueOf: function(){return 'StockInflationOffsetAccount';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.CostInflationAccount = { valueOf: function(){return 'CostInflationAccount';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.CostInflationOffsetAccount = { valueOf: function(){return 'CostInflationOffsetAccount';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ExpenseClearingAct = { valueOf: function(){return 'ExpenseClearingAct';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ExpenseOffsettingAccount = { valueOf: function(){return 'ExpenseOffsettingAccount';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.StockInTransitAccount = { valueOf: function(){return 'StockInTransitAccount';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ShippedGoodsAccount = { valueOf: function(){return 'ShippedGoodsAccount';}, Type: 'Edm.String', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.VATInRevenueAccount = { valueOf: function(){return 'VATInRevenueAccount';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.SalesCreditAcc = { valueOf: function(){return 'SalesCreditAcc';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PurchaseCreditAcc = { valueOf: function(){return 'PurchaseCreditAcc';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ExemptedCredits = { valueOf: function(){return 'ExemptedCredits';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.SalesCreditForeignAcc = { valueOf: function(){return 'SalesCreditForeignAcc';}, Type: 'Edm.String', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.ForeignPurchaseCreditAcc = { valueOf: function(){return 'ForeignPurchaseCreditAcc';}, Type: 'Edm.String', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.SalesCreditEUAcc = { valueOf: function(){return 'SalesCreditEUAcc';}, Type: 'Edm.String', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.EUPurchaseCreditAcc = { valueOf: function(){return 'EUPurchaseCreditAcc';}, Type: 'Edm.String', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.PurchaseBalanceAccount = { valueOf: function(){return 'PurchaseBalanceAccount';}, Type: 'Edm.String', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.WHIncomingCenvatAccount = { valueOf: function(){return 'WHIncomingCenvatAccount';}, Type: 'Edm.String', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.WHOutgoingCenvatAccount = { valueOf: function(){return 'WHOutgoingCenvatAccount';}, Type: 'Edm.String', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.BusinessPartnerType = { valueOf: function(){return 'BusinessPartnerType';}, Type: 'BoBusinessPartnerTypes', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.VATGroup = { valueOf: function(){return 'VATGroup';}, Type: 'Edm.String', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.Usage = { valueOf: function(){return 'Usage';}, Type: 'Edm.Int32', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.UDF1 = { valueOf: function(){return 'UDF1';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.UDF2 = { valueOf: function(){return 'UDF2';}, Type: 'Edm.String', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.UDF3 = { valueOf: function(){return 'UDF3';}, Type: 'Edm.String', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.UDF4 = { valueOf: function(){return 'UDF4';}, Type: 'Edm.String', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.UDF5 = { valueOf: function(){return 'UDF5';}, Type: 'Edm.String', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRule.prototype.AbsoluteEntry = new Number();
SAPB1.GLAccountAdvancedRule.prototype.Period = new String();
SAPB1.GLAccountAdvancedRule.prototype.BeginningofFinancialYear = new String();
SAPB1.GLAccountAdvancedRule.prototype.FinancialYear = new Number();
SAPB1.GLAccountAdvancedRule.prototype.PeriodName = new String();
SAPB1.GLAccountAdvancedRule.prototype.SubPeriodType = new String();
SAPB1.GLAccountAdvancedRule.prototype.NumberOfPeriods = new Number();
SAPB1.GLAccountAdvancedRule.prototype.FromPostingDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.ToPostingDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.FromDueDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.ToDueDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.FromDocumentDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.ToDocumentDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.ItemCode = new String();
SAPB1.GLAccountAdvancedRule.prototype.ItemGroup = new Number();
SAPB1.GLAccountAdvancedRule.prototype.Warehouse = new String();
SAPB1.GLAccountAdvancedRule.prototype.BPGroup = new Number();
SAPB1.GLAccountAdvancedRule.prototype.FederalTaxID = new String();
SAPB1.GLAccountAdvancedRule.prototype.ShipToCountry = new String();
SAPB1.GLAccountAdvancedRule.prototype.ShipToState = new String();
SAPB1.GLAccountAdvancedRule.prototype.Description = new String();
SAPB1.GLAccountAdvancedRule.prototype.Code = new String();
SAPB1.GLAccountAdvancedRule.prototype.GetGLAccountBy = new String();
SAPB1.GLAccountAdvancedRule.prototype.FromDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.ToDate = new String();
SAPB1.GLAccountAdvancedRule.prototype.ExpensesAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.RevenuesAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.ExemptIncomeAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.InventoryAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.CostAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.TransferAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.VarienceAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.PriceDifferenceAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.NegativeInventoryAdjustmentAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.DecreasingAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.IncreasingAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.ReturningAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.EURevenuesAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.EUExpensesAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.ForeignRevenueAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.ForeignExpensAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.PurchaseAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.PAReturnAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.PurchaseOffsetAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.ExchangeRateDifferencesAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.GoodsClearingAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.GLDecreaseAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.GLIncreaseAcct = new String();
SAPB1.GLAccountAdvancedRule.prototype.WipAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.WipVarianceAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.WipOffsetProfitAndLossAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.InventoryOffsetProfitAndLossAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.StockInflationAdjustAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.StockInflationOffsetAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.CostInflationAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.CostInflationOffsetAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.ExpenseClearingAct = new String();
SAPB1.GLAccountAdvancedRule.prototype.ExpenseOffsettingAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.StockInTransitAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.ShippedGoodsAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.VATInRevenueAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.SalesCreditAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.PurchaseCreditAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.ExemptedCredits = new String();
SAPB1.GLAccountAdvancedRule.prototype.SalesCreditForeignAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.ForeignPurchaseCreditAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.SalesCreditEUAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.EUPurchaseCreditAcc = new String();
SAPB1.GLAccountAdvancedRule.prototype.PurchaseBalanceAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.WHIncomingCenvatAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.WHOutgoingCenvatAccount = new String();
SAPB1.GLAccountAdvancedRule.prototype.IsActive = new String();
SAPB1.GLAccountAdvancedRule.prototype.BusinessPartnerType = new String();
SAPB1.GLAccountAdvancedRule.prototype.VATGroup = new String();
SAPB1.GLAccountAdvancedRule.prototype.BPCode = new String();
SAPB1.GLAccountAdvancedRule.prototype.Usage = new Number();
SAPB1.GLAccountAdvancedRule.prototype.UDF1 = new String();
SAPB1.GLAccountAdvancedRule.prototype.UDF2 = new String();
SAPB1.GLAccountAdvancedRule.prototype.UDF3 = new String();
SAPB1.GLAccountAdvancedRule.prototype.UDF4 = new String();
SAPB1.GLAccountAdvancedRule.prototype.UDF5 = new String();


SAPB1.GLAccountAdvancedRule.BoSubPeriodTypeEnum = BoSubPeriodTypeEnum
SAPB1.GLAccountAdvancedRule.GetGLAccountByEnum = GetGLAccountByEnum
SAPB1.GLAccountAdvancedRule.BoYesNoEnum = BoYesNoEnum
SAPB1.GLAccountAdvancedRule.BoBusinessPartnerTypes = BoBusinessPartnerTypes

SAPB1.GLAccountAdvancedRule.create = function (rawObject) {
    var instance = new SAPB1.GLAccountAdvancedRule();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GLAccountAdvancedRule.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GLAccountAdvancedRule;
