var InventoryPostingLineUoM = require('ComplexType/InventoryPostingLineUoM')
var InventoryPostingLineUoMCollection = require('ComplexType/InventoryPostingLineUoMCollection')
var InventoryPostingSerialNumber = require('ComplexType/InventoryPostingSerialNumber')
var InventoryPostingSerialNumberCollection = require('ComplexType/InventoryPostingSerialNumberCollection')
var InventoryPostingBatchNumber = require('ComplexType/InventoryPostingBatchNumber')
var InventoryPostingBatchNumberCollection = require('ComplexType/InventoryPostingBatchNumberCollection')
var InventoryPostingCCDNumber = require('ComplexType/InventoryPostingCCDNumber')
var InventoryPostingCCDNumberCollection = require('ComplexType/InventoryPostingCCDNumberCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingLine = function () {
}
SAPB1.InventoryPostingLine.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingLine.prototype.constructor = SAPB1.InventoryPostingLine;
SAPB1.InventoryPostingLine.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.BinEntry = { valueOf: function(){return 'BinEntry';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.InWarehouseQuantity = { valueOf: function(){return 'InWarehouseQuantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.BarCode = { valueOf: function(){return 'BarCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.Variance = { valueOf: function(){return 'Variance';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.VariancePercentage = { valueOf: function(){return 'VariancePercentage';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CountedQuantity = { valueOf: function(){return 'CountedQuantity';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CountDate = { valueOf: function(){return 'CountDate';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CountTime = { valueOf: function(){return 'CountTime';}, Type: 'Edm.Time', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.BaseEntry = { valueOf: function(){return 'BaseEntry';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.BaseLine = { valueOf: function(){return 'BaseLine';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.BaseReference = { valueOf: function(){return 'BaseReference';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.InventoryOffsetIncreaseAccount = { valueOf: function(){return 'InventoryOffsetIncreaseAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.InventoryOffsetDecreaseAccount = { valueOf: function(){return 'InventoryOffsetDecreaseAccount';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.Manufacturer = { valueOf: function(){return 'Manufacturer';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.SupplierCatalogNo = { valueOf: function(){return 'SupplierCatalogNo';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.PreferredVendor = { valueOf: function(){return 'PreferredVendor';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CostingCode = { valueOf: function(){return 'CostingCode';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CostingCode2 = { valueOf: function(){return 'CostingCode2';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CostingCode3 = { valueOf: function(){return 'CostingCode3';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CostingCode4 = { valueOf: function(){return 'CostingCode4';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.CostingCode5 = { valueOf: function(){return 'CostingCode5';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.UoMCountedQuantity = { valueOf: function(){return 'UoMCountedQuantity';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.ItemsPerUnit = { valueOf: function(){return 'ItemsPerUnit';}, Type: 'Edm.Double', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.AllowBinNegativeQuantity = { valueOf: function(){return 'AllowBinNegativeQuantity';}, Type: 'BoYesNoEnum', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.ActualPrice = { valueOf: function(){return 'ActualPrice';}, Type: 'Edm.Double', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.PostedValueLC = { valueOf: function(){return 'PostedValueLC';}, Type: 'Edm.Double', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.PostedValueSC = { valueOf: function(){return 'PostedValueSC';}, Type: 'Edm.Double', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLine.InventoryPostingLineUoMs = { valueOf: function(){return 'InventoryPostingLineUoMs';}, Type: 'InventoryPostingLineUoM', Index: 40, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryPostingLine.InventoryPostingSerialNumbers = { valueOf: function(){return 'InventoryPostingSerialNumbers';}, Type: 'InventoryPostingSerialNumber', Index: 41, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryPostingLine.InventoryPostingBatchNumbers = { valueOf: function(){return 'InventoryPostingBatchNumbers';}, Type: 'InventoryPostingBatchNumber', Index: 42, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryPostingLine.InventoryPostingCCDNumbers = { valueOf: function(){return 'InventoryPostingCCDNumbers';}, Type: 'InventoryPostingCCDNumber', Index: 43, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryPostingLine.prototype.DocumentEntry = new Number();
SAPB1.InventoryPostingLine.prototype.LineNumber = new Number();
SAPB1.InventoryPostingLine.prototype.ItemCode = new String();
SAPB1.InventoryPostingLine.prototype.ItemDescription = new String();
SAPB1.InventoryPostingLine.prototype.WarehouseCode = new String();
SAPB1.InventoryPostingLine.prototype.BinEntry = new Number();
SAPB1.InventoryPostingLine.prototype.InWarehouseQuantity = new Number();
SAPB1.InventoryPostingLine.prototype.BarCode = new String();
SAPB1.InventoryPostingLine.prototype.Variance = new Number();
SAPB1.InventoryPostingLine.prototype.VariancePercentage = new Number();
SAPB1.InventoryPostingLine.prototype.CountedQuantity = new Number();
SAPB1.InventoryPostingLine.prototype.Price = new Number();
SAPB1.InventoryPostingLine.prototype.Currency = new String();
SAPB1.InventoryPostingLine.prototype.Total = new Number();
SAPB1.InventoryPostingLine.prototype.VisualOrder = new Number();
SAPB1.InventoryPostingLine.prototype.CountDate = new String();
SAPB1.InventoryPostingLine.prototype.CountTime = new String();
SAPB1.InventoryPostingLine.prototype.BaseEntry = new Number();
SAPB1.InventoryPostingLine.prototype.BaseLine = new Number();
SAPB1.InventoryPostingLine.prototype.BaseType = new Number();
SAPB1.InventoryPostingLine.prototype.BaseReference = new String();
SAPB1.InventoryPostingLine.prototype.Remarks = new String();
SAPB1.InventoryPostingLine.prototype.InventoryOffsetIncreaseAccount = new String();
SAPB1.InventoryPostingLine.prototype.InventoryOffsetDecreaseAccount = new String();
SAPB1.InventoryPostingLine.prototype.ProjectCode = new String();
SAPB1.InventoryPostingLine.prototype.Manufacturer = new Number();
SAPB1.InventoryPostingLine.prototype.SupplierCatalogNo = new String();
SAPB1.InventoryPostingLine.prototype.PreferredVendor = new String();
SAPB1.InventoryPostingLine.prototype.CostingCode = new String();
SAPB1.InventoryPostingLine.prototype.CostingCode2 = new String();
SAPB1.InventoryPostingLine.prototype.CostingCode3 = new String();
SAPB1.InventoryPostingLine.prototype.CostingCode4 = new String();
SAPB1.InventoryPostingLine.prototype.CostingCode5 = new String();
SAPB1.InventoryPostingLine.prototype.UoMCode = new String();
SAPB1.InventoryPostingLine.prototype.UoMCountedQuantity = new Number();
SAPB1.InventoryPostingLine.prototype.ItemsPerUnit = new Number();
SAPB1.InventoryPostingLine.prototype.AllowBinNegativeQuantity = new String();
SAPB1.InventoryPostingLine.prototype.ActualPrice = new Number();
SAPB1.InventoryPostingLine.prototype.PostedValueLC = new Number();
SAPB1.InventoryPostingLine.prototype.PostedValueSC = new Number();
SAPB1.InventoryPostingLine.prototype.InventoryPostingLineUoMs = new InventoryPostingLineUoMCollection();
SAPB1.InventoryPostingLine.prototype.InventoryPostingSerialNumbers = new InventoryPostingSerialNumberCollection();
SAPB1.InventoryPostingLine.prototype.InventoryPostingBatchNumbers = new InventoryPostingBatchNumberCollection();
SAPB1.InventoryPostingLine.prototype.InventoryPostingCCDNumbers = new InventoryPostingCCDNumberCollection();

SAPB1.InventoryPostingLine.InventoryPostingLineUoM = InventoryPostingLineUoM
SAPB1.InventoryPostingLine.InventoryPostingLineUoMCollection = InventoryPostingLineUoMCollection
SAPB1.InventoryPostingLine.InventoryPostingSerialNumber = InventoryPostingSerialNumber
SAPB1.InventoryPostingLine.InventoryPostingSerialNumberCollection = InventoryPostingSerialNumberCollection
SAPB1.InventoryPostingLine.InventoryPostingBatchNumber = InventoryPostingBatchNumber
SAPB1.InventoryPostingLine.InventoryPostingBatchNumberCollection = InventoryPostingBatchNumberCollection
SAPB1.InventoryPostingLine.InventoryPostingCCDNumber = InventoryPostingCCDNumber
SAPB1.InventoryPostingLine.InventoryPostingCCDNumberCollection = InventoryPostingCCDNumberCollection

SAPB1.InventoryPostingLine.BoYesNoEnum = BoYesNoEnum

SAPB1.InventoryPostingLine.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingLine;
