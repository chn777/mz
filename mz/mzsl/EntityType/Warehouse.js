
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoDocWhsAutoIssueMethod = require('EnumType/BoDocWhsAutoIssueMethod')
var ReceivingBinLocationsMethodEnum = require('EnumType/ReceivingBinLocationsMethodEnum')
var AutoAllocOnReceiptMethodEnum = require('EnumType/AutoAllocOnReceiptMethodEnum')
var ReceivingUpToMethodEnum = require('EnumType/ReceivingUpToMethodEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Warehouse = function () {
}
SAPB1.Warehouse.prototype = new SAPB1.EntityType();
SAPB1.Warehouse.prototype.constructor = SAPB1.Warehouse;
SAPB1.Warehouse.prototype.keys.push('WarehouseCode');
SAPB1.Warehouse.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.StockInflationOffsetAccount = { valueOf: function(){return 'StockInflationOffsetAccount';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.DecreasingAccount = { valueOf: function(){return 'DecreasingAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.PurchaseAccount = { valueOf: function(){return 'PurchaseAccount';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.EURevenuesAccount = { valueOf: function(){return 'EURevenuesAccount';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ReturningAccount = { valueOf: function(){return 'ReturningAccount';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ShippedGoodsAccount = { valueOf: function(){return 'ShippedGoodsAccount';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.StockInflationAdjustAccount = { valueOf: function(){return 'StockInflationAdjustAccount';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.AllowUseTax = { valueOf: function(){return 'AllowUseTax';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.CostInflationAccount = { valueOf: function(){return 'CostInflationAccount';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ForeignExpensesAccount = { valueOf: function(){return 'ForeignExpensesAccount';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.EUExpensesAccount = { valueOf: function(){return 'EUExpensesAccount';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.CostInflationOffsetAccount = { valueOf: function(){return 'CostInflationOffsetAccount';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ExpensesClearingAccount = { valueOf: function(){return 'ExpensesClearingAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.PurchaseReturningAccount = { valueOf: function(){return 'PurchaseReturningAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.VATInRevenueAccount = { valueOf: function(){return 'VATInRevenueAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ExpenseAccount = { valueOf: function(){return 'ExpenseAccount';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.DecreaseGLAccount = { valueOf: function(){return 'DecreaseGLAccount';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.RevenuesAccount = { valueOf: function(){return 'RevenuesAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.TaxGroup = { valueOf: function(){return 'TaxGroup';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ExemptRevenuesAccount = { valueOf: function(){return 'ExemptRevenuesAccount';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.PurchaseOffsetAccount = { valueOf: function(){return 'PurchaseOffsetAccount';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.CostOfGoodsSold = { valueOf: function(){return 'CostOfGoodsSold';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 27, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Warehouse.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.PriceDifferencesAccount = { valueOf: function(){return 'PriceDifferencesAccount';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.VarianceAccount = { valueOf: function(){return 'VarianceAccount';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.IncreaseGLAccount = { valueOf: function(){return 'IncreaseGLAccount';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ExchangeRateDifferencesAccount = { valueOf: function(){return 'ExchangeRateDifferencesAccount';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WIPMaterialAccount = { valueOf: function(){return 'WIPMaterialAccount';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WarehouseName = { valueOf: function(){return 'WarehouseName';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.DropShip = { valueOf: function(){return 'DropShip';}, Type: 'BoYesNoEnum', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WIPMaterialVarianceAccount = { valueOf: function(){return 'WIPMaterialVarianceAccount';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.TransfersAcc = { valueOf: function(){return 'TransfersAcc';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.InternalKey = { valueOf: function(){return 'InternalKey';}, Type: 'Edm.Int32', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ForeignRevenuesAcc = { valueOf: function(){return 'ForeignRevenuesAcc';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.BuildingFloorRoom = { valueOf: function(){return 'BuildingFloorRoom';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Nettable = { valueOf: function(){return 'Nettable';}, Type: 'BoYesNoEnum', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.IncreasingAcc = { valueOf: function(){return 'IncreasingAcc';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ExpenseOffsetingAct = { valueOf: function(){return 'ExpenseOffsetingAct';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.GoodsClearingAcc = { valueOf: function(){return 'GoodsClearingAcc';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.StockAccount = { valueOf: function(){return 'StockAccount';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.BusinessPlaceID = { valueOf: function(){return 'BusinessPlaceID';}, Type: 'Edm.Int32', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.PurchaseCreditAcc = { valueOf: function(){return 'PurchaseCreditAcc';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.EUPurchaseCreditAcc = { valueOf: function(){return 'EUPurchaseCreditAcc';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ForeignPurchaseCreditAcc = { valueOf: function(){return 'ForeignPurchaseCreditAcc';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.SalesCreditAcc = { valueOf: function(){return 'SalesCreditAcc';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.SalesCreditEUAcc = { valueOf: function(){return 'SalesCreditEUAcc';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ExemptedCredits = { valueOf: function(){return 'ExemptedCredits';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.SalesCreditForeignAcc = { valueOf: function(){return 'SalesCreditForeignAcc';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.NegativeInventoryAdjustmentAccount = { valueOf: function(){return 'NegativeInventoryAdjustmentAccount';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WHShipToName = { valueOf: function(){return 'WHShipToName';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Excisable = { valueOf: function(){return 'Excisable';}, Type: 'BoYesNoEnum', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WHIncomingCenvatAccount = { valueOf: function(){return 'WHIncomingCenvatAccount';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WHOutgoingCenvatAccount = { valueOf: function(){return 'WHOutgoingCenvatAccount';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.StockInTransitAccount = { valueOf: function(){return 'StockInTransitAccount';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.WipOffsetProfitAndLossAccount = { valueOf: function(){return 'WipOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.InventoryOffsetProfitAndLossAccount = { valueOf: function(){return 'InventoryOffsetProfitAndLossAccount';}, Type: 'Edm.String', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'Edm.String', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Storekeeper = { valueOf: function(){return 'Storekeeper';}, Type: 'Edm.Int32', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Shipper = { valueOf: function(){return 'Shipper';}, Type: 'Edm.String', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ManageSerialAndBatchNumbers = { valueOf: function(){return 'ManageSerialAndBatchNumbers';}, Type: 'BoYesNoEnum', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.GlobalLocationNumber = { valueOf: function(){return 'GlobalLocationNumber';}, Type: 'Edm.String', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.EnableBinLocations = { valueOf: function(){return 'EnableBinLocations';}, Type: 'BoYesNoEnum', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.BinLocCodeSeparator = { valueOf: function(){return 'BinLocCodeSeparator';}, Type: 'Edm.String', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.DefaultBin = { valueOf: function(){return 'DefaultBin';}, Type: 'Edm.Int32', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.DefaultBinEnforced = { valueOf: function(){return 'DefaultBinEnforced';}, Type: 'BoYesNoEnum', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.AutoAllocOnIssue = { valueOf: function(){return 'AutoAllocOnIssue';}, Type: 'BoDocWhsAutoIssueMethod', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.EnableReceivingBinLocations = { valueOf: function(){return 'EnableReceivingBinLocations';}, Type: 'BoYesNoEnum', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ReceivingBinLocationsBy = { valueOf: function(){return 'ReceivingBinLocationsBy';}, Type: 'ReceivingBinLocationsMethodEnum', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.PurchaseBalanceAccount = { valueOf: function(){return 'PurchaseBalanceAccount';}, Type: 'Edm.String', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.RestrictReceiptToEmptyBinLocation = { valueOf: function(){return 'RestrictReceiptToEmptyBinLocation';}, Type: 'BoYesNoEnum', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ReceiveUpToMaxQuantity = { valueOf: function(){return 'ReceiveUpToMaxQuantity';}, Type: 'BoYesNoEnum', Index: 81, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.AutoAllocOnReceipt = { valueOf: function(){return 'AutoAllocOnReceipt';}, Type: 'AutoAllocOnReceiptMethodEnum', Index: 82, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ReceiveUpToMaxWeight = { valueOf: function(){return 'ReceiveUpToMaxWeight';}, Type: 'BoYesNoEnum', Index: 83, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.ReceiveUpToMethod = { valueOf: function(){return 'ReceiveUpToMethod';}, Type: 'ReceivingUpToMethodEnum', Index: 84, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Warehouse.prototype.Street = new String();
SAPB1.Warehouse.prototype.StockInflationOffsetAccount = new String();
SAPB1.Warehouse.prototype.ZipCode = new String();
SAPB1.Warehouse.prototype.DecreasingAccount = new String();
SAPB1.Warehouse.prototype.PurchaseAccount = new String();
SAPB1.Warehouse.prototype.EURevenuesAccount = new String();
SAPB1.Warehouse.prototype.ReturningAccount = new String();
SAPB1.Warehouse.prototype.ShippedGoodsAccount = new String();
SAPB1.Warehouse.prototype.StockInflationAdjustAccount = new String();
SAPB1.Warehouse.prototype.AllowUseTax = new String();
SAPB1.Warehouse.prototype.CostInflationAccount = new String();
SAPB1.Warehouse.prototype.ForeignExpensesAccount = new String();
SAPB1.Warehouse.prototype.EUExpensesAccount = new String();
SAPB1.Warehouse.prototype.CostInflationOffsetAccount = new String();
SAPB1.Warehouse.prototype.ExpensesClearingAccount = new String();
SAPB1.Warehouse.prototype.PurchaseReturningAccount = new String();
SAPB1.Warehouse.prototype.VATInRevenueAccount = new String();
SAPB1.Warehouse.prototype.FederalTaxID = new String();
SAPB1.Warehouse.prototype.Location = new Number();
SAPB1.Warehouse.prototype.Block = new String();
SAPB1.Warehouse.prototype.ExpenseAccount = new String();
SAPB1.Warehouse.prototype.DecreaseGLAccount = new String();
SAPB1.Warehouse.prototype.RevenuesAccount = new String();
SAPB1.Warehouse.prototype.TaxGroup = new String();
SAPB1.Warehouse.prototype.ExemptRevenuesAccount = new String();
SAPB1.Warehouse.prototype.PurchaseOffsetAccount = new String();
SAPB1.Warehouse.prototype.CostOfGoodsSold = new String();
SAPB1.Warehouse.prototype.WarehouseCode = new String();
SAPB1.Warehouse.prototype.State = new String();
SAPB1.Warehouse.prototype.City = new String();
SAPB1.Warehouse.prototype.PriceDifferencesAccount = new String();
SAPB1.Warehouse.prototype.VarianceAccount = new String();
SAPB1.Warehouse.prototype.Country = new String();
SAPB1.Warehouse.prototype.IncreaseGLAccount = new String();
SAPB1.Warehouse.prototype.ExchangeRateDifferencesAccount = new String();
SAPB1.Warehouse.prototype.WIPMaterialAccount = new String();
SAPB1.Warehouse.prototype.WarehouseName = new String();
SAPB1.Warehouse.prototype.DropShip = new String();
SAPB1.Warehouse.prototype.WIPMaterialVarianceAccount = new String();
SAPB1.Warehouse.prototype.TransfersAcc = new String();
SAPB1.Warehouse.prototype.InternalKey = new Number();
SAPB1.Warehouse.prototype.ForeignRevenuesAcc = new String();
SAPB1.Warehouse.prototype.BuildingFloorRoom = new String();
SAPB1.Warehouse.prototype.County = new String();
SAPB1.Warehouse.prototype.Nettable = new String();
SAPB1.Warehouse.prototype.IncreasingAcc = new String();
SAPB1.Warehouse.prototype.ExpenseOffsetingAct = new String();
SAPB1.Warehouse.prototype.GoodsClearingAcc = new String();
SAPB1.Warehouse.prototype.StockAccount = new String();
SAPB1.Warehouse.prototype.BusinessPlaceID = new Number();
SAPB1.Warehouse.prototype.PurchaseCreditAcc = new String();
SAPB1.Warehouse.prototype.EUPurchaseCreditAcc = new String();
SAPB1.Warehouse.prototype.ForeignPurchaseCreditAcc = new String();
SAPB1.Warehouse.prototype.SalesCreditAcc = new String();
SAPB1.Warehouse.prototype.SalesCreditEUAcc = new String();
SAPB1.Warehouse.prototype.ExemptedCredits = new String();
SAPB1.Warehouse.prototype.SalesCreditForeignAcc = new String();
SAPB1.Warehouse.prototype.NegativeInventoryAdjustmentAccount = new String();
SAPB1.Warehouse.prototype.WHShipToName = new String();
SAPB1.Warehouse.prototype.Excisable = new String();
SAPB1.Warehouse.prototype.WHIncomingCenvatAccount = new String();
SAPB1.Warehouse.prototype.WHOutgoingCenvatAccount = new String();
SAPB1.Warehouse.prototype.StockInTransitAccount = new String();
SAPB1.Warehouse.prototype.WipOffsetProfitAndLossAccount = new String();
SAPB1.Warehouse.prototype.InventoryOffsetProfitAndLossAccount = new String();
SAPB1.Warehouse.prototype.AddressType = new String();
SAPB1.Warehouse.prototype.StreetNo = new String();
SAPB1.Warehouse.prototype.Storekeeper = new Number();
SAPB1.Warehouse.prototype.Shipper = new String();
SAPB1.Warehouse.prototype.ManageSerialAndBatchNumbers = new String();
SAPB1.Warehouse.prototype.GlobalLocationNumber = new String();
SAPB1.Warehouse.prototype.EnableBinLocations = new String();
SAPB1.Warehouse.prototype.BinLocCodeSeparator = new String();
SAPB1.Warehouse.prototype.DefaultBin = new Number();
SAPB1.Warehouse.prototype.DefaultBinEnforced = new String();
SAPB1.Warehouse.prototype.AutoAllocOnIssue = new String();
SAPB1.Warehouse.prototype.EnableReceivingBinLocations = new String();
SAPB1.Warehouse.prototype.ReceivingBinLocationsBy = new String();
SAPB1.Warehouse.prototype.PurchaseBalanceAccount = new String();
SAPB1.Warehouse.prototype.Inactive = new String();
SAPB1.Warehouse.prototype.RestrictReceiptToEmptyBinLocation = new String();
SAPB1.Warehouse.prototype.ReceiveUpToMaxQuantity = new String();
SAPB1.Warehouse.prototype.AutoAllocOnReceipt = new String();
SAPB1.Warehouse.prototype.ReceiveUpToMaxWeight = new String();
SAPB1.Warehouse.prototype.ReceiveUpToMethod = new String();


SAPB1.Warehouse.BoYesNoEnum = BoYesNoEnum
SAPB1.Warehouse.BoDocWhsAutoIssueMethod = BoDocWhsAutoIssueMethod
SAPB1.Warehouse.ReceivingBinLocationsMethodEnum = ReceivingBinLocationsMethodEnum
SAPB1.Warehouse.AutoAllocOnReceiptMethodEnum = AutoAllocOnReceiptMethodEnum
SAPB1.Warehouse.ReceivingUpToMethodEnum = ReceivingUpToMethodEnum

SAPB1.Warehouse.create = function (rawObject) {
    var instance = new SAPB1.Warehouse();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Warehouse.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Warehouse;
