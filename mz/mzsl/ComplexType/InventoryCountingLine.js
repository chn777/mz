var InventoryCountingLineUoM = require('ComplexType/InventoryCountingLineUoM')
var InventoryCountingLineUoMCollection = require('ComplexType/InventoryCountingLineUoMCollection')
var InventoryCountingSerialNumber = require('ComplexType/InventoryCountingSerialNumber')
var InventoryCountingSerialNumberCollection = require('ComplexType/InventoryCountingSerialNumberCollection')
var InventoryCountingBatchNumber = require('ComplexType/InventoryCountingBatchNumber')
var InventoryCountingBatchNumberCollection = require('ComplexType/InventoryCountingBatchNumberCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var CountingLineStatusEnum = require('EnumType/CountingLineStatusEnum')
var CounterTypeEnum = require('EnumType/CounterTypeEnum')
var MultipleCounterRoleEnum = require('EnumType/MultipleCounterRoleEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryCountingLine = function () {
}
SAPB1.InventoryCountingLine.prototype = new SAPB1.ComplexType();
SAPB1.InventoryCountingLine.prototype.constructor = SAPB1.InventoryCountingLine;
SAPB1.InventoryCountingLine.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.Freeze = { valueOf: function(){return 'Freeze';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.BinEntry = { valueOf: function(){return 'BinEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.InWarehouseQuantity = { valueOf: function(){return 'InWarehouseQuantity';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.Counted = { valueOf: function(){return 'Counted';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.BarCode = { valueOf: function(){return 'BarCode';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.UoMCountedQuantity = { valueOf: function(){return 'UoMCountedQuantity';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.ItemsPerUnit = { valueOf: function(){return 'ItemsPerUnit';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CountedQuantity = { valueOf: function(){return 'CountedQuantity';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.Variance = { valueOf: function(){return 'Variance';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.VariancePercentage = { valueOf: function(){return 'VariancePercentage';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.TargetEntry = { valueOf: function(){return 'TargetEntry';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.TargetLine = { valueOf: function(){return 'TargetLine';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.TargetType = { valueOf: function(){return 'TargetType';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.TargetReference = { valueOf: function(){return 'TargetReference';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.Manufacturer = { valueOf: function(){return 'Manufacturer';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.SupplierCatalogNo = { valueOf: function(){return 'SupplierCatalogNo';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.PreferredVendor = { valueOf: function(){return 'PreferredVendor';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CostingCode = { valueOf: function(){return 'CostingCode';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CostingCode2 = { valueOf: function(){return 'CostingCode2';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CostingCode3 = { valueOf: function(){return 'CostingCode3';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CostingCode4 = { valueOf: function(){return 'CostingCode4';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CostingCode5 = { valueOf: function(){return 'CostingCode5';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.LineStatus = { valueOf: function(){return 'LineStatus';}, Type: 'CountingLineStatusEnum', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CounterType = { valueOf: function(){return 'CounterType';}, Type: 'CounterTypeEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.CounterID = { valueOf: function(){return 'CounterID';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.MultipleCounterRole = { valueOf: function(){return 'MultipleCounterRole';}, Type: 'MultipleCounterRoleEnum', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCountingLine.InventoryCountingLineUoMs = { valueOf: function(){return 'InventoryCountingLineUoMs';}, Type: 'InventoryCountingLineUoM', Index: 35, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryCountingLine.InventoryCountingSerialNumbers = { valueOf: function(){return 'InventoryCountingSerialNumbers';}, Type: 'InventoryCountingSerialNumber', Index: 36, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryCountingLine.InventoryCountingBatchNumbers = { valueOf: function(){return 'InventoryCountingBatchNumbers';}, Type: 'InventoryCountingBatchNumber', Index: 37, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryCountingLine.prototype.DocumentEntry = new Number();
SAPB1.InventoryCountingLine.prototype.LineNumber = new Number();
SAPB1.InventoryCountingLine.prototype.ItemCode = new String();
SAPB1.InventoryCountingLine.prototype.ItemDescription = new String();
SAPB1.InventoryCountingLine.prototype.Freeze = new String();
SAPB1.InventoryCountingLine.prototype.WarehouseCode = new String();
SAPB1.InventoryCountingLine.prototype.BinEntry = new Number();
SAPB1.InventoryCountingLine.prototype.InWarehouseQuantity = new Number();
SAPB1.InventoryCountingLine.prototype.Counted = new String();
SAPB1.InventoryCountingLine.prototype.UoMCode = new String();
SAPB1.InventoryCountingLine.prototype.BarCode = new String();
SAPB1.InventoryCountingLine.prototype.UoMCountedQuantity = new Number();
SAPB1.InventoryCountingLine.prototype.ItemsPerUnit = new Number();
SAPB1.InventoryCountingLine.prototype.CountedQuantity = new Number();
SAPB1.InventoryCountingLine.prototype.Variance = new Number();
SAPB1.InventoryCountingLine.prototype.VariancePercentage = new Number();
SAPB1.InventoryCountingLine.prototype.VisualOrder = new Number();
SAPB1.InventoryCountingLine.prototype.TargetEntry = new Number();
SAPB1.InventoryCountingLine.prototype.TargetLine = new Number();
SAPB1.InventoryCountingLine.prototype.TargetType = new Number();
SAPB1.InventoryCountingLine.prototype.TargetReference = new String();
SAPB1.InventoryCountingLine.prototype.ProjectCode = new String();
SAPB1.InventoryCountingLine.prototype.Manufacturer = new Number();
SAPB1.InventoryCountingLine.prototype.SupplierCatalogNo = new String();
SAPB1.InventoryCountingLine.prototype.PreferredVendor = new String();
SAPB1.InventoryCountingLine.prototype.CostingCode = new String();
SAPB1.InventoryCountingLine.prototype.CostingCode2 = new String();
SAPB1.InventoryCountingLine.prototype.CostingCode3 = new String();
SAPB1.InventoryCountingLine.prototype.CostingCode4 = new String();
SAPB1.InventoryCountingLine.prototype.CostingCode5 = new String();
SAPB1.InventoryCountingLine.prototype.Remarks = new String();
SAPB1.InventoryCountingLine.prototype.LineStatus = new String();
SAPB1.InventoryCountingLine.prototype.CounterType = new String();
SAPB1.InventoryCountingLine.prototype.CounterID = new Number();
SAPB1.InventoryCountingLine.prototype.MultipleCounterRole = new String();
SAPB1.InventoryCountingLine.prototype.InventoryCountingLineUoMs = new InventoryCountingLineUoMCollection();
SAPB1.InventoryCountingLine.prototype.InventoryCountingSerialNumbers = new InventoryCountingSerialNumberCollection();
SAPB1.InventoryCountingLine.prototype.InventoryCountingBatchNumbers = new InventoryCountingBatchNumberCollection();

SAPB1.InventoryCountingLine.InventoryCountingLineUoM = InventoryCountingLineUoM
SAPB1.InventoryCountingLine.InventoryCountingLineUoMCollection = InventoryCountingLineUoMCollection
SAPB1.InventoryCountingLine.InventoryCountingSerialNumber = InventoryCountingSerialNumber
SAPB1.InventoryCountingLine.InventoryCountingSerialNumberCollection = InventoryCountingSerialNumberCollection
SAPB1.InventoryCountingLine.InventoryCountingBatchNumber = InventoryCountingBatchNumber
SAPB1.InventoryCountingLine.InventoryCountingBatchNumberCollection = InventoryCountingBatchNumberCollection

SAPB1.InventoryCountingLine.BoYesNoEnum = BoYesNoEnum
SAPB1.InventoryCountingLine.CountingLineStatusEnum = CountingLineStatusEnum
SAPB1.InventoryCountingLine.CounterTypeEnum = CounterTypeEnum
SAPB1.InventoryCountingLine.MultipleCounterRoleEnum = MultipleCounterRoleEnum

SAPB1.InventoryCountingLine.create = function (rawObject) {
    var instance = new SAPB1.InventoryCountingLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryCountingLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryCountingLine;
