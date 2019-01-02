

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PurchaseAnalysisQuery = function () {
}
SAPB1.PurchaseAnalysisQuery.prototype = new SAPB1.EntityType();
SAPB1.PurchaseAnalysisQuery.prototype.constructor = SAPB1.PurchaseAnalysisQuery;
SAPB1.PurchaseAnalysisQuery.prototype.keys.push('id__');
SAPB1.PurchaseAnalysisQuery.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentRowNumber = { valueOf: function(){return 'DocumentRowNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.LineDocumentOwner = { valueOf: function(){return 'LineDocumentOwner';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PayToCountry = { valueOf: function(){return 'PayToCountry';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.UnitPriceLC = { valueOf: function(){return 'UnitPriceLC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ShipToCountry = { valueOf: function(){return 'ShipToCountry';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.Date', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingYear = { valueOf: function(){return 'PostingYear';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingQuarter = { valueOf: function(){return 'PostingQuarter';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingMonth = { valueOf: function(){return 'PostingMonth';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingWeek = { valueOf: function(){return 'PostingWeek';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingDateSQL = { valueOf: function(){return 'PostingDateSQL';}, Type: 'Edm.Date', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingYearAndQuarter = { valueOf: function(){return 'PostingYearAndQuarter';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingYearAndMonth = { valueOf: function(){return 'PostingYearAndMonth';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PostingYearAndWeek = { valueOf: function(){return 'PostingYearAndWeek';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.Date', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueYear = { valueOf: function(){return 'DueYear';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueQuarter = { valueOf: function(){return 'DueQuarter';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueMonth = { valueOf: function(){return 'DueMonth';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueWeek = { valueOf: function(){return 'DueWeek';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueDateSQL = { valueOf: function(){return 'DueDateSQL';}, Type: 'Edm.Date', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueYearAndQuarter = { valueOf: function(){return 'DueYearAndQuarter';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueYearAndMonth = { valueOf: function(){return 'DueYearAndMonth';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DueYearAndWeek = { valueOf: function(){return 'DueYearAndWeek';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentDate = { valueOf: function(){return 'DocumentDate';}, Type: 'Edm.Date', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentYear = { valueOf: function(){return 'DocumentYear';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentQuarter = { valueOf: function(){return 'DocumentQuarter';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentMonth = { valueOf: function(){return 'DocumentMonth';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentWeek = { valueOf: function(){return 'DocumentWeek';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentDateSQL = { valueOf: function(){return 'DocumentDateSQL';}, Type: 'Edm.Date', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentYearAndQuarter = { valueOf: function(){return 'DocumentYearAndQuarter';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentYearAndMonth = { valueOf: function(){return 'DocumentYearAndMonth';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentYearAndWeek = { valueOf: function(){return 'DocumentYearAndWeek';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.FinancialPeriodInternalKey = { valueOf: function(){return 'FinancialPeriodInternalKey';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.FinancialPeriodCode = { valueOf: function(){return 'FinancialPeriodCode';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.FinancialPeriodName = { valueOf: function(){return 'FinancialPeriodName';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PeriodStart = { valueOf: function(){return 'PeriodStart';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PeriodEnd = { valueOf: function(){return 'PeriodEnd';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PeriodStart2 = { valueOf: function(){return 'PeriodStart2';}, Type: 'Edm.Date', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PeriodEnd2 = { valueOf: function(){return 'PeriodEnd2';}, Type: 'Edm.Date', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.Int16', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.FiscalYearStartDate = { valueOf: function(){return 'FiscalYearStartDate';}, Type: 'Edm.Date', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PeriodStatus = { valueOf: function(){return 'PeriodStatus';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.SubType = { valueOf: function(){return 'SubType';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentTypeCode = { valueOf: function(){return 'DocumentTypeCode';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentTypeShortName = { valueOf: function(){return 'DocumentTypeShortName';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentTypeDisplayName = { valueOf: function(){return 'DocumentTypeDisplayName';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentTypeGroup = { valueOf: function(){return 'DocumentTypeGroup';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.SalesEmployeeOrBuyerNumber = { valueOf: function(){return 'SalesEmployeeOrBuyerNumber';}, Type: 'Edm.Int32', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.SalesEmployeeOrBuyerName = { valueOf: function(){return 'SalesEmployeeOrBuyerName';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.EmployeeIsActive = { valueOf: function(){return 'EmployeeIsActive';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.EmployeeBranch = { valueOf: function(){return 'EmployeeBranch';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.EmployeeDepartment = { valueOf: function(){return 'EmployeeDepartment';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.Manager = { valueOf: function(){return 'Manager';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerCode = { valueOf: function(){return 'BusinessPartnerCode';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerName = { valueOf: function(){return 'BusinessPartnerName';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerNameAndCode = { valueOf: function(){return 'BusinessPartnerNameAndCode';}, Type: 'Edm.String', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerType = { valueOf: function(){return 'BusinessPartnerType';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerGroupName = { valueOf: function(){return 'BusinessPartnerGroupName';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IndustryName = { valueOf: function(){return 'IndustryName';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IndustryDescription = { valueOf: function(){return 'IndustryDescription';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerIsActive = { valueOf: function(){return 'BusinessPartnerIsActive';}, Type: 'Edm.String', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsCompanyOrPrivate = { valueOf: function(){return 'IsCompanyOrPrivate';}, Type: 'Edm.String', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DunningTermCode = { valueOf: function(){return 'DunningTermCode';}, Type: 'Edm.String', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DunningTermName = { valueOf: function(){return 'DunningTermName';}, Type: 'Edm.String', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BusinessPartnerTerritory = { valueOf: function(){return 'BusinessPartnerTerritory';}, Type: 'Edm.String', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BranchCode = { valueOf: function(){return 'BranchCode';}, Type: 'Edm.Int32', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BranchName = { valueOf: function(){return 'BranchName';}, Type: 'Edm.String', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BranchCountry = { valueOf: function(){return 'BranchCountry';}, Type: 'Edm.String', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BranchIsActive = { valueOf: function(){return 'BranchIsActive';}, Type: 'Edm.String', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsMainBranch = { valueOf: function(){return 'IsMainBranch';}, Type: 'Edm.String', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BranchRegistrationNumber = { valueOf: function(){return 'BranchRegistrationNumber';}, Type: 'Edm.String', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemDescriptionAndCode = { valueOf: function(){return 'ItemDescriptionAndCode';}, Type: 'Edm.String', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.String', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemType = { valueOf: function(){return 'ItemType';}, Type: 'Edm.String', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.InventoryValuationMethod = { valueOf: function(){return 'InventoryValuationMethod';}, Type: 'Edm.String', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsInventoryItem = { valueOf: function(){return 'IsInventoryItem';}, Type: 'Edm.String', Index: 81, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsSalesItem = { valueOf: function(){return 'IsSalesItem';}, Type: 'Edm.String', Index: 82, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsPurchaseItem = { valueOf: function(){return 'IsPurchaseItem';}, Type: 'Edm.String', Index: 83, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.UoMGroup = { valueOf: function(){return 'UoMGroup';}, Type: 'Edm.String', Index: 84, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemShippingType = { valueOf: function(){return 'ItemShippingType';}, Type: 'Edm.String', Index: 85, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemIsActive = { valueOf: function(){return 'ItemIsActive';}, Type: 'Edm.String', Index: 86, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.InventoryUoMName = { valueOf: function(){return 'InventoryUoMName';}, Type: 'Edm.String', Index: 87, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ItemManufacturer = { valueOf: function(){return 'ItemManufacturer';}, Type: 'Edm.String', Index: 88, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DefaultPreferredVendor = { valueOf: function(){return 'DefaultPreferredVendor';}, Type: 'Edm.String', Index: 89, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.InventoryIsManagedByWarehouse = { valueOf: function(){return 'InventoryIsManagedByWarehouse';}, Type: 'Edm.String', Index: 90, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.CompanyRequiredItemQuantity = { valueOf: function(){return 'CompanyRequiredItemQuantity';}, Type: 'Edm.Double', Index: 91, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.CompanyMinimumItemQuantity = { valueOf: function(){return 'CompanyMinimumItemQuantity';}, Type: 'Edm.Double', Index: 92, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.CompanyMaximumItemQuantity = { valueOf: function(){return 'CompanyMaximumItemQuantity';}, Type: 'Edm.Double', Index: 93, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 94, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseName = { valueOf: function(){return 'WarehouseName';}, Type: 'Edm.String', Index: 95, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseNameAndCode = { valueOf: function(){return 'WarehouseNameAndCode';}, Type: 'Edm.String', Index: 96, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseBranchCode = { valueOf: function(){return 'WarehouseBranchCode';}, Type: 'Edm.Int32', Index: 97, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseBranchName = { valueOf: function(){return 'WarehouseBranchName';}, Type: 'Edm.String', Index: 98, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseLocation = { valueOf: function(){return 'WarehouseLocation';}, Type: 'Edm.String', Index: 99, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseIsActive = { valueOf: function(){return 'WarehouseIsActive';}, Type: 'Edm.String', Index: 100, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsDropShipWarehouse = { valueOf: function(){return 'IsDropShipWarehouse';}, Type: 'Edm.String', Index: 101, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.IsNettableWarehouse = { valueOf: function(){return 'IsNettableWarehouse';}, Type: 'Edm.String', Index: 102, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseCountry = { valueOf: function(){return 'WarehouseCountry';}, Type: 'Edm.String', Index: 103, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.BinLocationIsEnabled = { valueOf: function(){return 'BinLocationIsEnabled';}, Type: 'Edm.String', Index: 104, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.WarehouseDefaultBinLocation = { valueOf: function(){return 'WarehouseDefaultBinLocation';}, Type: 'Edm.String', Index: 105, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 106, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ProjectName = { valueOf: function(){return 'ProjectName';}, Type: 'Edm.String', Index: 107, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ProjectNameAndCode = { valueOf: function(){return 'ProjectNameAndCode';}, Type: 'Edm.String', Index: 108, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.ProjectIsActive = { valueOf: function(){return 'ProjectIsActive';}, Type: 'Edm.String', Index: 109, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.CancellationStatus = { valueOf: function(){return 'CancellationStatus';}, Type: 'Edm.String', Index: 110, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.DocumentStatus = { valueOf: function(){return 'DocumentStatus';}, Type: 'Edm.String', Index: 111, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.MerchandiseType = { valueOf: function(){return 'MerchandiseType';}, Type: 'Edm.String', Index: 112, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.QuantityInInventoryUoM = { valueOf: function(){return 'QuantityInInventoryUoM';}, Type: 'Edm.Double', Index: 113, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.NetPurchaseAmountLC = { valueOf: function(){return 'NetPurchaseAmountLC';}, Type: 'Edm.Double', Index: 114, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.NetPurchaseAmountSC = { valueOf: function(){return 'NetPurchaseAmountSC';}, Type: 'Edm.Double', Index: 115, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.id__ = { valueOf: function(){return 'id__';}, Type: 'Edm.Int32', Index: 116, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PurchaseAnalysisQuery.prototype.DocumentNumber = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentRowNumber = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.LineDocumentOwner = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PayToCountry = new String();
SAPB1.PurchaseAnalysisQuery.prototype.UnitPriceLC = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.ShipToCountry = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingDate = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingYear = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingQuarter = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingMonth = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingWeek = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingDateSQL = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingYearAndQuarter = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingYearAndMonth = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PostingYearAndWeek = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueDate = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueYear = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueQuarter = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueMonth = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueWeek = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueDateSQL = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueYearAndQuarter = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueYearAndMonth = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DueYearAndWeek = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentDate = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentYear = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentQuarter = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentMonth = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentWeek = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentDateSQL = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentYearAndQuarter = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentYearAndMonth = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentYearAndWeek = new String();
SAPB1.PurchaseAnalysisQuery.prototype.FinancialPeriodInternalKey = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.FinancialPeriodCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.FinancialPeriodName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PeriodStart = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.PeriodEnd = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.PeriodStart2 = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PeriodEnd2 = new String();
SAPB1.PurchaseAnalysisQuery.prototype.FiscalYear = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.FiscalYearStartDate = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PeriodStatus = new String();
SAPB1.PurchaseAnalysisQuery.prototype.SubType = new String();
SAPB1.PurchaseAnalysisQuery.prototype.PeriodIndicator = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentTypeCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentTypeShortName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentTypeDisplayName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentTypeGroup = new String();
SAPB1.PurchaseAnalysisQuery.prototype.SalesEmployeeOrBuyerNumber = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.SalesEmployeeOrBuyerName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.EmployeeIsActive = new String();
SAPB1.PurchaseAnalysisQuery.prototype.UserCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.UserName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.EmployeeBranch = new String();
SAPB1.PurchaseAnalysisQuery.prototype.EmployeeDepartment = new String();
SAPB1.PurchaseAnalysisQuery.prototype.Manager = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerNameAndCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerType = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerGroupName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IndustryName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IndustryDescription = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerIsActive = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsCompanyOrPrivate = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DunningTermCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DunningTermName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BusinessPartnerTerritory = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BranchCode = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.BranchName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BranchCountry = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BranchIsActive = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsMainBranch = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BranchRegistrationNumber = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemDescription = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemDescriptionAndCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemGroup = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemType = new String();
SAPB1.PurchaseAnalysisQuery.prototype.InventoryValuationMethod = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsInventoryItem = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsSalesItem = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsPurchaseItem = new String();
SAPB1.PurchaseAnalysisQuery.prototype.UoMGroup = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemShippingType = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemIsActive = new String();
SAPB1.PurchaseAnalysisQuery.prototype.InventoryUoMName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ItemManufacturer = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DefaultPreferredVendor = new String();
SAPB1.PurchaseAnalysisQuery.prototype.InventoryIsManagedByWarehouse = new String();
SAPB1.PurchaseAnalysisQuery.prototype.CompanyRequiredItemQuantity = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.CompanyMinimumItemQuantity = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.CompanyMaximumItemQuantity = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseNameAndCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseBranchCode = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseBranchName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseLocation = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseIsActive = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsDropShipWarehouse = new String();
SAPB1.PurchaseAnalysisQuery.prototype.IsNettableWarehouse = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseCountry = new String();
SAPB1.PurchaseAnalysisQuery.prototype.BinLocationIsEnabled = new String();
SAPB1.PurchaseAnalysisQuery.prototype.WarehouseDefaultBinLocation = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ProjectCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ProjectName = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ProjectNameAndCode = new String();
SAPB1.PurchaseAnalysisQuery.prototype.ProjectIsActive = new String();
SAPB1.PurchaseAnalysisQuery.prototype.CancellationStatus = new String();
SAPB1.PurchaseAnalysisQuery.prototype.DocumentStatus = new String();
SAPB1.PurchaseAnalysisQuery.prototype.MerchandiseType = new String();
SAPB1.PurchaseAnalysisQuery.prototype.QuantityInInventoryUoM = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.NetPurchaseAmountLC = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.NetPurchaseAmountSC = new Number();
SAPB1.PurchaseAnalysisQuery.prototype.id__ = new Number();



SAPB1.PurchaseAnalysisQuery.create = function (rawObject) {
    var instance = new SAPB1.PurchaseAnalysisQuery();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PurchaseAnalysisQuery.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PurchaseAnalysisQuery;
