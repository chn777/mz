var ItemGroupsWarehouseInfo = require('ComplexType/ItemGroupsWarehouseInfo')
var ItemGroupsWarehouseInfoCollection = require('ComplexType/ItemGroupsWarehouseInfoCollection')

var BoProcurementMethod = require('EnumType/BoProcurementMethod')
var BoMRPComponentWarehouse = require('EnumType/BoMRPComponentWarehouse')
var BoInventorySystem = require('EnumType/BoInventorySystem')
var BoPlanningSystem = require('EnumType/BoPlanningSystem')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var ItemClassEnum = require('EnumType/ItemClassEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemGroups = function () {
}
SAPB1.ItemGroups.prototype = new SAPB1.EntityType();
SAPB1.ItemGroups.prototype.constructor = SAPB1.ItemGroups;
SAPB1.ItemGroups.prototype.keys.push('Number');
SAPB1.ItemGroups.PriceDifferencesAccount = { valueOf: function(){return 'PriceDifferencesAccount';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.StockInflationAdjustAccount = { valueOf: function(){return 'StockInflationAdjustAccount';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.MinimumOrderQuantity = { valueOf: function(){return 'MinimumOrderQuantity';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.OrderInterval = { valueOf: function(){return 'OrderInterval';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ExchangeRateDifferencesAccount = { valueOf: function(){return 'ExchangeRateDifferencesAccount';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.IncreasingAccount = { valueOf: function(){return 'IncreasingAccount';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.StockInflationOffsetAccount = { valueOf: function(){return 'StockInflationOffsetAccount';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ProcurementMethod = { valueOf: function(){return 'ProcurementMethod';}, Type: 'BoProcurementMethod', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ComponentWarehouse = { valueOf: function(){return 'ComponentWarehouse';}, Type: 'BoMRPComponentWarehouse', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.PurchaseOffsetAccount = { valueOf: function(){return 'PurchaseOffsetAccount';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.InventorySystem = { valueOf: function(){return 'InventorySystem';}, Type: 'BoInventorySystem', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.WIPMaterialVarianceAccount = { valueOf: function(){return 'WIPMaterialVarianceAccount';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.PlanningSystem = { valueOf: function(){return 'PlanningSystem';}, Type: 'BoPlanningSystem', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.PurchaseAccount = { valueOf: function(){return 'PurchaseAccount';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ReturningAccount = { valueOf: function(){return 'ReturningAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.CostInflationAccount = { valueOf: function(){return 'CostInflationAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ExpensesAccount = { valueOf: function(){return 'ExpensesAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.RevenuesAccount = { valueOf: function(){return 'RevenuesAccount';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.TransfersAccount = { valueOf: function(){return 'TransfersAccount';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.LeadTime = { valueOf: function(){return 'LeadTime';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.OrderMultiple = { valueOf: function(){return 'OrderMultiple';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.CostInflationOffsetAccount = { valueOf: function(){return 'CostInflationOffsetAccount';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.InventoryAccount = { valueOf: function(){return 'InventoryAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.DecreaseGLAccount = { valueOf: function(){return 'DecreaseGLAccount';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.Int32', Index: 24, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.GoodsClearingAccount = { valueOf: function(){return 'GoodsClearingAccount';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.IncreaseGLAccount = { valueOf: function(){return 'IncreaseGLAccount';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ForeignRevenuesAccount = { valueOf: function(){return 'ForeignRevenuesAccount';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.Alert = { valueOf: function(){return 'Alert';}, Type: 'BoYesNoEnum', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.WIPMaterialAccount = { valueOf: function(){return 'WIPMaterialAccount';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ShippedGoodsAccount = { valueOf: function(){return 'ShippedGoodsAccount';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ExemptRevenuesAccount = { valueOf: function(){return 'ExemptRevenuesAccount';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.DecreasingAccount = { valueOf: function(){return 'DecreasingAccount';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.VATInRevenueAccount = { valueOf: function(){return 'VATInRevenueAccount';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.VarianceAccount = { valueOf: function(){return 'VarianceAccount';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.EUExpensesAccount = { valueOf: function(){return 'EUExpensesAccount';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ForeignExpensesAccount = { valueOf: function(){return 'ForeignExpensesAccount';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.CycleCode = { valueOf: function(){return 'CycleCode';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.CostAccount = { valueOf: function(){return 'CostAccount';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.EURevenuesAccount = { valueOf: function(){return 'EURevenuesAccount';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.PAReturnAccount = { valueOf: function(){return 'PAReturnAccount';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.GroupName = { valueOf: function(){return 'GroupName';}, Type: 'Edm.String', Index: 41, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ExpenseClearingAct = { valueOf: function(){return 'ExpenseClearingAct';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.PurchaseCreditAcc = { valueOf: function(){return 'PurchaseCreditAcc';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.EUPurchaseCreditAcc = { valueOf: function(){return 'EUPurchaseCreditAcc';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ForeignPurchaseCreditAcc = { valueOf: function(){return 'ForeignPurchaseCreditAcc';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.SalesCreditAcc = { valueOf: function(){return 'SalesCreditAcc';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.SalesCreditEUAcc = { valueOf: function(){return 'SalesCreditEUAcc';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ExemptedCredits = { valueOf: function(){return 'ExemptedCredits';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.SalesCreditForeignAcc = { valueOf: function(){return 'SalesCreditForeignAcc';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ExpenseOffsetAccount = { valueOf: function(){return 'ExpenseOffsetAccount';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.NegativeInventoryAdjustmentAccount = { valueOf: function(){return 'NegativeInventoryAdjustmentAccount';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.WHIncomingCenvatAccount = { valueOf: function(){return 'WHIncomingCenvatAccount';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.WHOutgoingCenvatAccount = { valueOf: function(){return 'WHOutgoingCenvatAccount';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.StockInTransitAccount = { valueOf: function(){return 'StockInTransitAccount';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.WipOffsetProfitAndLossAccount = { valueOf: function(){return 'WipOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.InventoryOffsetProfitAndLossAccount = { valueOf: function(){return 'InventoryOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ToleranceDays = { valueOf: function(){return 'ToleranceDays';}, Type: 'Edm.Int32', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.DefaultUoMGroup = { valueOf: function(){return 'DefaultUoMGroup';}, Type: 'Edm.Int32', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.DefaultInventoryUoM = { valueOf: function(){return 'DefaultInventoryUoM';}, Type: 'Edm.Int32', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.PurchaseBalanceAccount = { valueOf: function(){return 'PurchaseBalanceAccount';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ItemClass = { valueOf: function(){return 'ItemClass';}, Type: 'ItemClassEnum', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.RawMaterial = { valueOf: function(){return 'RawMaterial';}, Type: 'BoYesNoEnum', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.U_BeginStr = { valueOf: function(){return 'U_BeginStr';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroups.ItemGroupsWarehouseInfos = { valueOf: function(){return 'ItemGroupsWarehouseInfos';}, Type: 'ItemGroupsWarehouseInfo', Index: 64, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ItemGroups.prototype.PriceDifferencesAccount = new String();
SAPB1.ItemGroups.prototype.StockInflationAdjustAccount = new String();
SAPB1.ItemGroups.prototype.MinimumOrderQuantity = new Number();
SAPB1.ItemGroups.prototype.OrderInterval = new Number();
SAPB1.ItemGroups.prototype.ExchangeRateDifferencesAccount = new String();
SAPB1.ItemGroups.prototype.IncreasingAccount = new String();
SAPB1.ItemGroups.prototype.StockInflationOffsetAccount = new String();
SAPB1.ItemGroups.prototype.ProcurementMethod = new String();
SAPB1.ItemGroups.prototype.ComponentWarehouse = new String();
SAPB1.ItemGroups.prototype.PurchaseOffsetAccount = new String();
SAPB1.ItemGroups.prototype.InventorySystem = new String();
SAPB1.ItemGroups.prototype.WIPMaterialVarianceAccount = new String();
SAPB1.ItemGroups.prototype.PlanningSystem = new String();
SAPB1.ItemGroups.prototype.PurchaseAccount = new String();
SAPB1.ItemGroups.prototype.ReturningAccount = new String();
SAPB1.ItemGroups.prototype.CostInflationAccount = new String();
SAPB1.ItemGroups.prototype.ExpensesAccount = new String();
SAPB1.ItemGroups.prototype.RevenuesAccount = new String();
SAPB1.ItemGroups.prototype.TransfersAccount = new String();
SAPB1.ItemGroups.prototype.LeadTime = new Number();
SAPB1.ItemGroups.prototype.OrderMultiple = new Number();
SAPB1.ItemGroups.prototype.CostInflationOffsetAccount = new String();
SAPB1.ItemGroups.prototype.InventoryAccount = new String();
SAPB1.ItemGroups.prototype.DecreaseGLAccount = new String();
SAPB1.ItemGroups.prototype.Number = new Number();
SAPB1.ItemGroups.prototype.GoodsClearingAccount = new String();
SAPB1.ItemGroups.prototype.IncreaseGLAccount = new String();
SAPB1.ItemGroups.prototype.ForeignRevenuesAccount = new String();
SAPB1.ItemGroups.prototype.Alert = new String();
SAPB1.ItemGroups.prototype.WIPMaterialAccount = new String();
SAPB1.ItemGroups.prototype.ShippedGoodsAccount = new String();
SAPB1.ItemGroups.prototype.ExemptRevenuesAccount = new String();
SAPB1.ItemGroups.prototype.DecreasingAccount = new String();
SAPB1.ItemGroups.prototype.VATInRevenueAccount = new String();
SAPB1.ItemGroups.prototype.VarianceAccount = new String();
SAPB1.ItemGroups.prototype.EUExpensesAccount = new String();
SAPB1.ItemGroups.prototype.ForeignExpensesAccount = new String();
SAPB1.ItemGroups.prototype.CycleCode = new Number();
SAPB1.ItemGroups.prototype.CostAccount = new String();
SAPB1.ItemGroups.prototype.EURevenuesAccount = new String();
SAPB1.ItemGroups.prototype.PAReturnAccount = new String();
SAPB1.ItemGroups.prototype.GroupName = new String();
SAPB1.ItemGroups.prototype.ExpenseClearingAct = new String();
SAPB1.ItemGroups.prototype.PurchaseCreditAcc = new String();
SAPB1.ItemGroups.prototype.EUPurchaseCreditAcc = new String();
SAPB1.ItemGroups.prototype.ForeignPurchaseCreditAcc = new String();
SAPB1.ItemGroups.prototype.SalesCreditAcc = new String();
SAPB1.ItemGroups.prototype.SalesCreditEUAcc = new String();
SAPB1.ItemGroups.prototype.ExemptedCredits = new String();
SAPB1.ItemGroups.prototype.SalesCreditForeignAcc = new String();
SAPB1.ItemGroups.prototype.ExpenseOffsetAccount = new String();
SAPB1.ItemGroups.prototype.NegativeInventoryAdjustmentAccount = new String();
SAPB1.ItemGroups.prototype.WHIncomingCenvatAccount = new String();
SAPB1.ItemGroups.prototype.WHOutgoingCenvatAccount = new String();
SAPB1.ItemGroups.prototype.StockInTransitAccount = new String();
SAPB1.ItemGroups.prototype.WipOffsetProfitAndLossAccount = new String();
SAPB1.ItemGroups.prototype.InventoryOffsetProfitAndLossAccount = new String();
SAPB1.ItemGroups.prototype.ToleranceDays = new Number();
SAPB1.ItemGroups.prototype.DefaultUoMGroup = new Number();
SAPB1.ItemGroups.prototype.DefaultInventoryUoM = new Number();
SAPB1.ItemGroups.prototype.PurchaseBalanceAccount = new String();
SAPB1.ItemGroups.prototype.ItemClass = new String();
SAPB1.ItemGroups.prototype.RawMaterial = new String();
SAPB1.ItemGroups.prototype.U_BeginStr = new String();
SAPB1.ItemGroups.prototype.ItemGroupsWarehouseInfos = new ItemGroupsWarehouseInfoCollection();

SAPB1.ItemGroups.ItemGroupsWarehouseInfo = ItemGroupsWarehouseInfo
SAPB1.ItemGroups.ItemGroupsWarehouseInfoCollection = ItemGroupsWarehouseInfoCollection

SAPB1.ItemGroups.BoProcurementMethod = BoProcurementMethod
SAPB1.ItemGroups.BoMRPComponentWarehouse = BoMRPComponentWarehouse
SAPB1.ItemGroups.BoInventorySystem = BoInventorySystem
SAPB1.ItemGroups.BoPlanningSystem = BoPlanningSystem
SAPB1.ItemGroups.BoYesNoEnum = BoYesNoEnum
SAPB1.ItemGroups.ItemClassEnum = ItemClassEnum

SAPB1.ItemGroups.create = function (rawObject) {
    var instance = new SAPB1.ItemGroups();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemGroups.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemGroups;
