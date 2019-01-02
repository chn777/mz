

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryTransactionDocumentsQuery = function () {
}
SAPB1.InventoryTransactionDocumentsQuery.prototype = new SAPB1.EntityType();
SAPB1.InventoryTransactionDocumentsQuery.prototype.constructor = SAPB1.InventoryTransactionDocumentsQuery;
SAPB1.InventoryTransactionDocumentsQuery.prototype.keys.push('id__');
SAPB1.InventoryTransactionDocumentsQuery.DocmentNumber = { valueOf: function(){return 'DocmentNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DocumentLineInternalKey = { valueOf: function(){return 'DocumentLineInternalKey';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InventoryPostingAccount = { valueOf: function(){return 'InventoryPostingAccount';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DocumentCreatorName = { valueOf: function(){return 'DocumentCreatorName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InboundItemCostLC = { valueOf: function(){return 'InboundItemCostLC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.OutboundItemCostLC = { valueOf: function(){return 'OutboundItemCostLC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SystemDate = { valueOf: function(){return 'SystemDate';}, Type: 'Edm.Date', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SystemDateSQL = { valueOf: function(){return 'SystemDateSQL';}, Type: 'Edm.Date', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SystemYear = { valueOf: function(){return 'SystemYear';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SystemQuarter = { valueOf: function(){return 'SystemQuarter';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SystemMonth = { valueOf: function(){return 'SystemMonth';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SystemWeek = { valueOf: function(){return 'SystemWeek';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.Date', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingYear = { valueOf: function(){return 'PostingYear';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingQuarter = { valueOf: function(){return 'PostingQuarter';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingMonth = { valueOf: function(){return 'PostingMonth';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingWeek = { valueOf: function(){return 'PostingWeek';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingDateSQL = { valueOf: function(){return 'PostingDateSQL';}, Type: 'Edm.Date', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingYearAndQuarter = { valueOf: function(){return 'PostingYearAndQuarter';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingYearAndMonth = { valueOf: function(){return 'PostingYearAndMonth';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PostingYearAndWeek = { valueOf: function(){return 'PostingYearAndWeek';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DocumentTypeCode = { valueOf: function(){return 'DocumentTypeCode';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DocumentTypeShortName = { valueOf: function(){return 'DocumentTypeShortName';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DocumentTypeDisplayName = { valueOf: function(){return 'DocumentTypeDisplayName';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DocumentTypeGroup = { valueOf: function(){return 'DocumentTypeGroup';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemDescriptionAndCode = { valueOf: function(){return 'ItemDescriptionAndCode';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemType = { valueOf: function(){return 'ItemType';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InventoryValuationMethod = { valueOf: function(){return 'InventoryValuationMethod';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IsInventoryItem = { valueOf: function(){return 'IsInventoryItem';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IsSalesItem = { valueOf: function(){return 'IsSalesItem';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IsPurchaseItem = { valueOf: function(){return 'IsPurchaseItem';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.UoMGroup = { valueOf: function(){return 'UoMGroup';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemShippingType = { valueOf: function(){return 'ItemShippingType';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemIsActive = { valueOf: function(){return 'ItemIsActive';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InventoryUoMName = { valueOf: function(){return 'InventoryUoMName';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ItemManufacturer = { valueOf: function(){return 'ItemManufacturer';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DefaultPreferredVendor = { valueOf: function(){return 'DefaultPreferredVendor';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InventoryIsManagedByWarehouse = { valueOf: function(){return 'InventoryIsManagedByWarehouse';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.CompanyRequiredItemQuantity = { valueOf: function(){return 'CompanyRequiredItemQuantity';}, Type: 'Edm.Double', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.CompanyMinimumItemQuantity = { valueOf: function(){return 'CompanyMinimumItemQuantity';}, Type: 'Edm.Double', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.CompanyMaximumItemQuantity = { valueOf: function(){return 'CompanyMaximumItemQuantity';}, Type: 'Edm.Double', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseName = { valueOf: function(){return 'WarehouseName';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseNameAndCode = { valueOf: function(){return 'WarehouseNameAndCode';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseBranchCode = { valueOf: function(){return 'WarehouseBranchCode';}, Type: 'Edm.Int32', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseBranchName = { valueOf: function(){return 'WarehouseBranchName';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseLocation = { valueOf: function(){return 'WarehouseLocation';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseIsActive = { valueOf: function(){return 'WarehouseIsActive';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IsDropShipWarehouse = { valueOf: function(){return 'IsDropShipWarehouse';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IsNettableWarehouse = { valueOf: function(){return 'IsNettableWarehouse';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseCountry = { valueOf: function(){return 'WarehouseCountry';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BinLocationIsEnabled = { valueOf: function(){return 'BinLocationIsEnabled';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WarehouseDefaultBinLocation = { valueOf: function(){return 'WarehouseDefaultBinLocation';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ProjectName = { valueOf: function(){return 'ProjectName';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ProjectNameAndCode = { valueOf: function(){return 'ProjectNameAndCode';}, Type: 'Edm.String', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ProjectIsActive = { valueOf: function(){return 'ProjectIsActive';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerCode = { valueOf: function(){return 'BusinessPartnerCode';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerName = { valueOf: function(){return 'BusinessPartnerName';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerNameAndCode = { valueOf: function(){return 'BusinessPartnerNameAndCode';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerType = { valueOf: function(){return 'BusinessPartnerType';}, Type: 'Edm.String', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerGroupCode = { valueOf: function(){return 'BusinessPartnerGroupCode';}, Type: 'Edm.Int16', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerGroupName = { valueOf: function(){return 'BusinessPartnerGroupName';}, Type: 'Edm.String', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IndustryName = { valueOf: function(){return 'IndustryName';}, Type: 'Edm.String', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IndustryDescription = { valueOf: function(){return 'IndustryDescription';}, Type: 'Edm.String', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerIsActive = { valueOf: function(){return 'BusinessPartnerIsActive';}, Type: 'Edm.String', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.IsCompanyOrPrivate = { valueOf: function(){return 'IsCompanyOrPrivate';}, Type: 'Edm.String', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DunningTermCode = { valueOf: function(){return 'DunningTermCode';}, Type: 'Edm.String', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.DunningTermName = { valueOf: function(){return 'DunningTermName';}, Type: 'Edm.String', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerCurrency = { valueOf: function(){return 'BusinessPartnerCurrency';}, Type: 'Edm.String', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartnerTerritory = { valueOf: function(){return 'BusinessPartnerTerritory';}, Type: 'Edm.String', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BillToOrPayToStreet = { valueOf: function(){return 'BillToOrPayToStreet';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BusinessPartner_FederalTaxID = { valueOf: function(){return 'BusinessPartner_FederalTaxID';}, Type: 'Edm.String', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.MailCountry = { valueOf: function(){return 'MailCountry';}, Type: 'Edm.String', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BillToOrPayToCity = { valueOf: function(){return 'BillToOrPayToCity';}, Type: 'Edm.String', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.BillToOrPayToCountry = { valueOf: function(){return 'BillToOrPayToCountry';}, Type: 'Edm.String', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.AdditionalID = { valueOf: function(){return 'AdditionalID';}, Type: 'Edm.String', Index: 81, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.WithholdingTaxCode = { valueOf: function(){return 'WithholdingTaxCode';}, Type: 'Edm.String', Index: 82, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.UnifiedFederalTaxID = { valueOf: function(){return 'UnifiedFederalTaxID';}, Type: 'Edm.String', Index: 83, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.ResidenceNumberType = { valueOf: function(){return 'ResidenceNumberType';}, Type: 'Edm.String', Index: 84, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.FinancialPeriodInternalKey = { valueOf: function(){return 'FinancialPeriodInternalKey';}, Type: 'Edm.Int32', Index: 85, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.FinancialPeriodCode = { valueOf: function(){return 'FinancialPeriodCode';}, Type: 'Edm.String', Index: 86, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.FinancialPeriodName = { valueOf: function(){return 'FinancialPeriodName';}, Type: 'Edm.String', Index: 87, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PeriodStart = { valueOf: function(){return 'PeriodStart';}, Type: 'Edm.Int32', Index: 88, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PeriodEnd = { valueOf: function(){return 'PeriodEnd';}, Type: 'Edm.Int32', Index: 89, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PeriodStart2 = { valueOf: function(){return 'PeriodStart2';}, Type: 'Edm.Date', Index: 90, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PeriodEnd2 = { valueOf: function(){return 'PeriodEnd2';}, Type: 'Edm.Date', Index: 91, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.Int16', Index: 92, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.FiscalYearStartDate = { valueOf: function(){return 'FiscalYearStartDate';}, Type: 'Edm.Date', Index: 93, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PeriodStatus = { valueOf: function(){return 'PeriodStatus';}, Type: 'Edm.String', Index: 94, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.SubType = { valueOf: function(){return 'SubType';}, Type: 'Edm.String', Index: 95, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 96, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InboundInventoryQuantity = { valueOf: function(){return 'InboundInventoryQuantity';}, Type: 'Edm.Double', Index: 97, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.OutboundInventoryQuantity = { valueOf: function(){return 'OutboundInventoryQuantity';}, Type: 'Edm.Double', Index: 98, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.InboundInventoryValueLC = { valueOf: function(){return 'InboundInventoryValueLC';}, Type: 'Edm.Double', Index: 99, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.OutboundInventoryValueLC = { valueOf: function(){return 'OutboundInventoryValueLC';}, Type: 'Edm.Double', Index: 100, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.id__ = { valueOf: function(){return 'id__';}, Type: 'Edm.Int32', Index: 101, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocmentNumber = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocumentLineInternalKey = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InventoryPostingAccount = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocumentCreatorName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InboundItemCostLC = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.OutboundItemCostLC = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SystemDate = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SystemDateSQL = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SystemYear = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SystemQuarter = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SystemMonth = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SystemWeek = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingDate = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingYear = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingQuarter = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingMonth = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingWeek = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingDateSQL = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingYearAndQuarter = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingYearAndMonth = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PostingYearAndWeek = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocumentTypeCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocumentTypeShortName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocumentTypeDisplayName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DocumentTypeGroup = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemDescription = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemDescriptionAndCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemGroup = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemType = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InventoryValuationMethod = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IsInventoryItem = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IsSalesItem = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IsPurchaseItem = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.UoMGroup = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemShippingType = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemIsActive = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InventoryUoMName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ItemManufacturer = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DefaultPreferredVendor = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InventoryIsManagedByWarehouse = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.CompanyRequiredItemQuantity = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.CompanyMinimumItemQuantity = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.CompanyMaximumItemQuantity = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseNameAndCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseBranchCode = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseBranchName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseLocation = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseIsActive = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IsDropShipWarehouse = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IsNettableWarehouse = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseCountry = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.FederalTaxID = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BinLocationIsEnabled = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WarehouseDefaultBinLocation = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ProjectCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ProjectName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ProjectNameAndCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ProjectIsActive = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerNameAndCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerType = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerGroupCode = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerGroupName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IndustryName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IndustryDescription = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerIsActive = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.IsCompanyOrPrivate = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DunningTermCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.DunningTermName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PaymentMethodCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerCurrency = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartnerTerritory = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BillToOrPayToStreet = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BusinessPartner_FederalTaxID = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.MailCountry = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BillToOrPayToCity = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.BillToOrPayToCountry = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.AdditionalID = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.WithholdingTaxCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.UnifiedFederalTaxID = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.ResidenceNumberType = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.FinancialPeriodInternalKey = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.FinancialPeriodCode = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.FinancialPeriodName = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PeriodStart = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PeriodEnd = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PeriodStart2 = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PeriodEnd2 = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.FiscalYear = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.FiscalYearStartDate = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PeriodStatus = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.SubType = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.PeriodIndicator = new String();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InboundInventoryQuantity = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.OutboundInventoryQuantity = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.InboundInventoryValueLC = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.OutboundInventoryValueLC = new Number();
SAPB1.InventoryTransactionDocumentsQuery.prototype.id__ = new Number();



SAPB1.InventoryTransactionDocumentsQuery.create = function (rawObject) {
    var instance = new SAPB1.InventoryTransactionDocumentsQuery();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryTransactionDocumentsQuery.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryTransactionDocumentsQuery;
