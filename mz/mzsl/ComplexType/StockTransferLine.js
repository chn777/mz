var SerialNumber = require('ComplexType/SerialNumber')
var SerialNumberCollection = require('ComplexType/SerialNumberCollection')
var BatchNumber = require('ComplexType/BatchNumber')
var BatchNumberCollection = require('ComplexType/BatchNumberCollection')
var CCDNumber = require('ComplexType/CCDNumber')
var CCDNumberCollection = require('ComplexType/CCDNumberCollection')
var StockTransferLinesBinAllocation = require('ComplexType/StockTransferLinesBinAllocation')
var StockTransferLinesBinAllocationCollection = require('ComplexType/StockTransferLinesBinAllocationCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var InvBaseDocTypeEnum = require('EnumType/InvBaseDocTypeEnum')
var BoStatus = require('EnumType/BoStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.StockTransferLine = function () {
}
SAPB1.StockTransferLine.prototype = new SAPB1.ComplexType();
SAPB1.StockTransferLine.prototype.constructor = SAPB1.StockTransferLine;
SAPB1.StockTransferLine.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DiscountPercent = { valueOf: function(){return 'DiscountPercent';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.VendorNum = { valueOf: function(){return 'VendorNum';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.SerialNumber = { valueOf: function(){return 'SerialNumber';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.FromWarehouseCode = { valueOf: function(){return 'FromWarehouseCode';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Factor = { valueOf: function(){return 'Factor';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Factor2 = { valueOf: function(){return 'Factor2';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Factor3 = { valueOf: function(){return 'Factor3';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.Factor4 = { valueOf: function(){return 'Factor4';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.UseBaseUnits = { valueOf: function(){return 'UseBaseUnits';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.MeasureUnit = { valueOf: function(){return 'MeasureUnit';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.UnitsOfMeasurment = { valueOf: function(){return 'UnitsOfMeasurment';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'InvBaseDocTypeEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.BaseLine = { valueOf: function(){return 'BaseLine';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.BaseEntry = { valueOf: function(){return 'BaseEntry';}, Type: 'Edm.Int32', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.UnitPrice = { valueOf: function(){return 'UnitPrice';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.InventoryQuantity = { valueOf: function(){return 'InventoryQuantity';}, Type: 'Edm.Double', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.RemainingOpenQuantity = { valueOf: function(){return 'RemainingOpenQuantity';}, Type: 'Edm.Double', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.RemainingOpenInventoryQuantity = { valueOf: function(){return 'RemainingOpenInventoryQuantity';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.LineStatus = { valueOf: function(){return 'LineStatus';}, Type: 'BoStatus', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLine.SerialNumbers = { valueOf: function(){return 'SerialNumbers';}, Type: 'SerialNumber', Index: 36, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.StockTransferLine.BatchNumbers = { valueOf: function(){return 'BatchNumbers';}, Type: 'BatchNumber', Index: 37, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.StockTransferLine.CCDNumbers = { valueOf: function(){return 'CCDNumbers';}, Type: 'CCDNumber', Index: 38, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.StockTransferLine.StockTransferLinesBinAllocations = { valueOf: function(){return 'StockTransferLinesBinAllocations';}, Type: 'StockTransferLinesBinAllocation', Index: 39, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.StockTransferLine.prototype.LineNum = new Number();
SAPB1.StockTransferLine.prototype.DocEntry = new Number();
SAPB1.StockTransferLine.prototype.ItemCode = new String();
SAPB1.StockTransferLine.prototype.ItemDescription = new String();
SAPB1.StockTransferLine.prototype.Quantity = new Number();
SAPB1.StockTransferLine.prototype.Price = new Number();
SAPB1.StockTransferLine.prototype.Currency = new String();
SAPB1.StockTransferLine.prototype.Rate = new Number();
SAPB1.StockTransferLine.prototype.DiscountPercent = new Number();
SAPB1.StockTransferLine.prototype.VendorNum = new String();
SAPB1.StockTransferLine.prototype.SerialNumber = new String();
SAPB1.StockTransferLine.prototype.WarehouseCode = new String();
SAPB1.StockTransferLine.prototype.FromWarehouseCode = new String();
SAPB1.StockTransferLine.prototype.ProjectCode = new String();
SAPB1.StockTransferLine.prototype.Factor = new Number();
SAPB1.StockTransferLine.prototype.Factor2 = new Number();
SAPB1.StockTransferLine.prototype.Factor3 = new Number();
SAPB1.StockTransferLine.prototype.Factor4 = new Number();
SAPB1.StockTransferLine.prototype.DistributionRule = new String();
SAPB1.StockTransferLine.prototype.DistributionRule2 = new String();
SAPB1.StockTransferLine.prototype.DistributionRule3 = new String();
SAPB1.StockTransferLine.prototype.DistributionRule4 = new String();
SAPB1.StockTransferLine.prototype.DistributionRule5 = new String();
SAPB1.StockTransferLine.prototype.UseBaseUnits = new String();
SAPB1.StockTransferLine.prototype.MeasureUnit = new String();
SAPB1.StockTransferLine.prototype.UnitsOfMeasurment = new Number();
SAPB1.StockTransferLine.prototype.BaseType = new String();
SAPB1.StockTransferLine.prototype.BaseLine = new Number();
SAPB1.StockTransferLine.prototype.BaseEntry = new Number();
SAPB1.StockTransferLine.prototype.UnitPrice = new Number();
SAPB1.StockTransferLine.prototype.UoMEntry = new Number();
SAPB1.StockTransferLine.prototype.UoMCode = new String();
SAPB1.StockTransferLine.prototype.InventoryQuantity = new Number();
SAPB1.StockTransferLine.prototype.RemainingOpenQuantity = new Number();
SAPB1.StockTransferLine.prototype.RemainingOpenInventoryQuantity = new Number();
SAPB1.StockTransferLine.prototype.LineStatus = new String();
SAPB1.StockTransferLine.prototype.SerialNumbers = new SerialNumberCollection();
SAPB1.StockTransferLine.prototype.BatchNumbers = new BatchNumberCollection();
SAPB1.StockTransferLine.prototype.CCDNumbers = new CCDNumberCollection();
SAPB1.StockTransferLine.prototype.StockTransferLinesBinAllocations = new StockTransferLinesBinAllocationCollection();

SAPB1.StockTransferLine.SerialNumber = SerialNumber
SAPB1.StockTransferLine.SerialNumberCollection = SerialNumberCollection
SAPB1.StockTransferLine.BatchNumber = BatchNumber
SAPB1.StockTransferLine.BatchNumberCollection = BatchNumberCollection
SAPB1.StockTransferLine.CCDNumber = CCDNumber
SAPB1.StockTransferLine.CCDNumberCollection = CCDNumberCollection
SAPB1.StockTransferLine.StockTransferLinesBinAllocation = StockTransferLinesBinAllocation
SAPB1.StockTransferLine.StockTransferLinesBinAllocationCollection = StockTransferLinesBinAllocationCollection

SAPB1.StockTransferLine.BoYesNoEnum = BoYesNoEnum
SAPB1.StockTransferLine.InvBaseDocTypeEnum = InvBaseDocTypeEnum
SAPB1.StockTransferLine.BoStatus = BoStatus

SAPB1.StockTransferLine.create = function (rawObject) {
    var instance = new SAPB1.StockTransferLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.StockTransferLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.StockTransferLine;
