
var LandedCostBaseDocumentTypeEnum = require('EnumType/LandedCostBaseDocumentTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LandedCost_ItemLine = function () {
}
SAPB1.LandedCost_ItemLine.prototype = new SAPB1.ComplexType();
SAPB1.LandedCost_ItemLine.prototype.constructor = SAPB1.LandedCost_ItemLine;
SAPB1.LandedCost_ItemLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BaseDocumentType = { valueOf: function(){return 'BaseDocumentType';}, Type: 'LandedCostBaseDocumentTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BaseEntry = { valueOf: function(){return 'BaseEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BaseDocumentPrice = { valueOf: function(){return 'BaseDocumentPrice';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ProjectedCustoms = { valueOf: function(){return 'ProjectedCustoms';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ProjectedCustomsFC = { valueOf: function(){return 'ProjectedCustomsFC';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Expenditure = { valueOf: function(){return 'Expenditure';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ExpenditureFC = { valueOf: function(){return 'ExpenditureFC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.WarehousePrice = { valueOf: function(){return 'WarehousePrice';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.WarehousePriceFC = { valueOf: function(){return 'WarehousePriceFC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.LineTotal = { valueOf: function(){return 'LineTotal';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.LineTotalFC = { valueOf: function(){return 'LineTotalFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Volume = { valueOf: function(){return 'Volume';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.VolumeUoM = { valueOf: function(){return 'VolumeUoM';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Weight1 = { valueOf: function(){return 'Weight1';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Weight1UnitCode = { valueOf: function(){return 'Weight1UnitCode';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Weight2 = { valueOf: function(){return 'Weight2';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Weight2UnitCode = { valueOf: function(){return 'Weight2UnitCode';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.VendorCode = { valueOf: function(){return 'VendorCode';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.FactorWithoutCustoms = { valueOf: function(){return 'FactorWithoutCustoms';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.FactorWithCustoms = { valueOf: function(){return 'FactorWithCustoms';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.InventoryUoM = { valueOf: function(){return 'InventoryUoM';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BlockNumber = { valueOf: function(){return 'BlockNumber';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ImportLog = { valueOf: function(){return 'ImportLog';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.OriginalWarehouse = { valueOf: function(){return 'OriginalWarehouse';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ReleaseNumber = { valueOf: function(){return 'ReleaseNumber';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.VariantCosts = { valueOf: function(){return 'VariantCosts';}, Type: 'Edm.Double', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.FixCosts = { valueOf: function(){return 'FixCosts';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.VariantCostsFC = { valueOf: function(){return 'VariantCostsFC';}, Type: 'Edm.Double', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.FixCostsFC = { valueOf: function(){return 'FixCostsFC';}, Type: 'Edm.Double', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Customs = { valueOf: function(){return 'Customs';}, Type: 'Edm.Double', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsFC = { valueOf: function(){return 'CustomsFC';}, Type: 'Edm.Double', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BaseDocumentValueLineTotal = { valueOf: function(){return 'BaseDocumentValueLineTotal';}, Type: 'Edm.Double', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BaseDocumentValueLineTotalFC = { valueOf: function(){return 'BaseDocumentValueLineTotalFC';}, Type: 'Edm.Double', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.AllocatedUnitCostsLineTotal = { valueOf: function(){return 'AllocatedUnitCostsLineTotal';}, Type: 'Edm.Double', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.AllocatedUnitCostsLineTotalFC = { valueOf: function(){return 'AllocatedUnitCostsLineTotalFC';}, Type: 'Edm.Double', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsValue = { valueOf: function(){return 'CustomsValue';}, Type: 'Edm.Double', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsValueFC = { valueOf: function(){return 'CustomsValueFC';}, Type: 'Edm.Double', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.TotalCosts = { valueOf: function(){return 'TotalCosts';}, Type: 'Edm.Double', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.TotalCostsFC = { valueOf: function(){return 'TotalCostsFC';}, Type: 'Edm.Double', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.TotalVolume = { valueOf: function(){return 'TotalVolume';}, Type: 'Edm.Double', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.BaseLine = { valueOf: function(){return 'BaseLine';}, Type: 'Edm.Int32', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.TotalLineProjectedCustoms = { valueOf: function(){return 'TotalLineProjectedCustoms';}, Type: 'Edm.Double', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.AllocatedCostsLineTotal = { valueOf: function(){return 'AllocatedCostsLineTotal';}, Type: 'Edm.Double', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.FOBandIncludedCosts = { valueOf: function(){return 'FOBandIncludedCosts';}, Type: 'Edm.Double', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.FOBandIncludedCostsFC = { valueOf: function(){return 'FOBandIncludedCostsFC';}, Type: 'Edm.Double', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.AutomaticExpenditure = { valueOf: function(){return 'AutomaticExpenditure';}, Type: 'BoYesNoEnum', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.InventoryValuation = { valueOf: function(){return 'InventoryValuation';}, Type: 'BoYesNoEnum', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.OriginLine = { valueOf: function(){return 'OriginLine';}, Type: 'Edm.Int32', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsGroupRate = { valueOf: function(){return 'CustomsGroupRate';}, Type: 'Edm.Double', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.VatGroup = { valueOf: function(){return 'VatGroup';}, Type: 'Edm.String', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.VatPercent = { valueOf: function(){return 'VatPercent';}, Type: 'Edm.Double', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ExciseSum = { valueOf: function(){return 'ExciseSum';}, Type: 'Edm.Double', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ExciseSumFC = { valueOf: function(){return 'ExciseSumFC';}, Type: 'Edm.Double', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.ExciseAffectStock = { valueOf: function(){return 'ExciseAffectStock';}, Type: 'BoYesNoEnum', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsCost = { valueOf: function(){return 'CustomsCost';}, Type: 'Edm.Double', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsCostFC = { valueOf: function(){return 'CustomsCostFC';}, Type: 'Edm.Double', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsAffectStock = { valueOf: function(){return 'CustomsAffectStock';}, Type: 'BoYesNoEnum', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsVat = { valueOf: function(){return 'CustomsVat';}, Type: 'Edm.Double', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsVatFC = { valueOf: function(){return 'CustomsVatFC';}, Type: 'Edm.Double', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CustomsVatAffectStock = { valueOf: function(){return 'CustomsVatAffectStock';}, Type: 'BoYesNoEnum', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CCDNumber = { valueOf: function(){return 'CCDNumber';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CorrectedBaseDocumentValue = { valueOf: function(){return 'CorrectedBaseDocumentValue';}, Type: 'Edm.Double', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.CorrectedBaseDocumentValueFC = { valueOf: function(){return 'CorrectedBaseDocumentValueFC';}, Type: 'Edm.Double', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_ItemLine.prototype.DocEntry = new Number();
SAPB1.LandedCost_ItemLine.prototype.LineNumber = new Number();
SAPB1.LandedCost_ItemLine.prototype.BaseDocumentType = new String();
SAPB1.LandedCost_ItemLine.prototype.BaseEntry = new Number();
SAPB1.LandedCost_ItemLine.prototype.Number = new String();
SAPB1.LandedCost_ItemLine.prototype.ItemDescription = new String();
SAPB1.LandedCost_ItemLine.prototype.Quantity = new Number();
SAPB1.LandedCost_ItemLine.prototype.BaseDocumentPrice = new Number();
SAPB1.LandedCost_ItemLine.prototype.Rate = new Number();
SAPB1.LandedCost_ItemLine.prototype.ProjectedCustoms = new Number();
SAPB1.LandedCost_ItemLine.prototype.ProjectedCustomsFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.Expenditure = new Number();
SAPB1.LandedCost_ItemLine.prototype.ExpenditureFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.WarehousePrice = new Number();
SAPB1.LandedCost_ItemLine.prototype.WarehousePriceFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.LineTotal = new Number();
SAPB1.LandedCost_ItemLine.prototype.LineTotalFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.Volume = new Number();
SAPB1.LandedCost_ItemLine.prototype.VolumeUoM = new Number();
SAPB1.LandedCost_ItemLine.prototype.Weight1 = new Number();
SAPB1.LandedCost_ItemLine.prototype.Weight1UnitCode = new Number();
SAPB1.LandedCost_ItemLine.prototype.Weight2 = new Number();
SAPB1.LandedCost_ItemLine.prototype.Weight2UnitCode = new Number();
SAPB1.LandedCost_ItemLine.prototype.VendorCode = new String();
SAPB1.LandedCost_ItemLine.prototype.Reference = new String();
SAPB1.LandedCost_ItemLine.prototype.FactorWithoutCustoms = new Number();
SAPB1.LandedCost_ItemLine.prototype.FactorWithCustoms = new Number();
SAPB1.LandedCost_ItemLine.prototype.InventoryUoM = new String();
SAPB1.LandedCost_ItemLine.prototype.BlockNumber = new String();
SAPB1.LandedCost_ItemLine.prototype.ImportLog = new String();
SAPB1.LandedCost_ItemLine.prototype.OriginalWarehouse = new String();
SAPB1.LandedCost_ItemLine.prototype.Warehouse = new String();
SAPB1.LandedCost_ItemLine.prototype.ReleaseNumber = new Number();
SAPB1.LandedCost_ItemLine.prototype.VariantCosts = new Number();
SAPB1.LandedCost_ItemLine.prototype.FixCosts = new Number();
SAPB1.LandedCost_ItemLine.prototype.VariantCostsFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.FixCostsFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.Customs = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.BaseDocumentValueLineTotal = new Number();
SAPB1.LandedCost_ItemLine.prototype.BaseDocumentValueLineTotalFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.AllocatedUnitCostsLineTotal = new Number();
SAPB1.LandedCost_ItemLine.prototype.AllocatedUnitCostsLineTotalFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsValue = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsValueFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.TotalCosts = new Number();
SAPB1.LandedCost_ItemLine.prototype.TotalCostsFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.TotalVolume = new Number();
SAPB1.LandedCost_ItemLine.prototype.BaseLine = new Number();
SAPB1.LandedCost_ItemLine.prototype.TotalLineProjectedCustoms = new Number();
SAPB1.LandedCost_ItemLine.prototype.AllocatedCostsLineTotal = new Number();
SAPB1.LandedCost_ItemLine.prototype.FOBandIncludedCosts = new Number();
SAPB1.LandedCost_ItemLine.prototype.FOBandIncludedCostsFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.Project = new String();
SAPB1.LandedCost_ItemLine.prototype.DistributionRule = new String();
SAPB1.LandedCost_ItemLine.prototype.DistributionRule2 = new String();
SAPB1.LandedCost_ItemLine.prototype.DistributionRule3 = new String();
SAPB1.LandedCost_ItemLine.prototype.DistributionRule4 = new String();
SAPB1.LandedCost_ItemLine.prototype.DistributionRule5 = new String();
SAPB1.LandedCost_ItemLine.prototype.PriceList = new Number();
SAPB1.LandedCost_ItemLine.prototype.AutomaticExpenditure = new String();
SAPB1.LandedCost_ItemLine.prototype.InventoryValuation = new String();
SAPB1.LandedCost_ItemLine.prototype.OriginLine = new Number();
SAPB1.LandedCost_ItemLine.prototype.Currency = new String();
SAPB1.LandedCost_ItemLine.prototype.CustomsGroupRate = new Number();
SAPB1.LandedCost_ItemLine.prototype.VatGroup = new String();
SAPB1.LandedCost_ItemLine.prototype.VatPercent = new Number();
SAPB1.LandedCost_ItemLine.prototype.ExciseSum = new Number();
SAPB1.LandedCost_ItemLine.prototype.ExciseSumFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.ExciseAffectStock = new String();
SAPB1.LandedCost_ItemLine.prototype.CustomsCost = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsCostFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsAffectStock = new String();
SAPB1.LandedCost_ItemLine.prototype.CustomsVat = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsVatFC = new Number();
SAPB1.LandedCost_ItemLine.prototype.CustomsVatAffectStock = new String();
SAPB1.LandedCost_ItemLine.prototype.CCDNumber = new String();
SAPB1.LandedCost_ItemLine.prototype.CorrectedBaseDocumentValue = new Number();
SAPB1.LandedCost_ItemLine.prototype.CorrectedBaseDocumentValueFC = new Number();


SAPB1.LandedCost_ItemLine.LandedCostBaseDocumentTypeEnum = LandedCostBaseDocumentTypeEnum
SAPB1.LandedCost_ItemLine.BoYesNoEnum = BoYesNoEnum

SAPB1.LandedCost_ItemLine.create = function (rawObject) {
    var instance = new SAPB1.LandedCost_ItemLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LandedCost_ItemLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LandedCost_ItemLine;
