var InventoryOpeningBalanceSerialNumber = require('ComplexType/InventoryOpeningBalanceSerialNumber')
var InventoryOpeningBalanceSerialNumberCollection = require('ComplexType/InventoryOpeningBalanceSerialNumberCollection')
var InventoryOpeningBalanceBatchNumber = require('ComplexType/InventoryOpeningBalanceBatchNumber')
var InventoryOpeningBalanceBatchNumberCollection = require('ComplexType/InventoryOpeningBalanceBatchNumberCollection')
var InventoryOpeningBalanceCCDNumber = require('ComplexType/InventoryOpeningBalanceCCDNumber')
var InventoryOpeningBalanceCCDNumberCollection = require('ComplexType/InventoryOpeningBalanceCCDNumberCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryOpeningBalanceLine = function () {
}
SAPB1.InventoryOpeningBalanceLine.prototype = new SAPB1.ComplexType();
SAPB1.InventoryOpeningBalanceLine.prototype.constructor = SAPB1.InventoryOpeningBalanceLine;
SAPB1.InventoryOpeningBalanceLine.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.BinEntry = { valueOf: function(){return 'BinEntry';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.InWarehouseQuantity = { valueOf: function(){return 'InWarehouseQuantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.OpeningBalance = { valueOf: function(){return 'OpeningBalance';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.BarCode = { valueOf: function(){return 'BarCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.OpenInventoryAccount = { valueOf: function(){return 'OpenInventoryAccount';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.Manufacturer = { valueOf: function(){return 'Manufacturer';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.SupplierCatalogNo = { valueOf: function(){return 'SupplierCatalogNo';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.CostingCode = { valueOf: function(){return 'CostingCode';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.CostingCode2 = { valueOf: function(){return 'CostingCode2';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.CostingCode3 = { valueOf: function(){return 'CostingCode3';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.CostingCode4 = { valueOf: function(){return 'CostingCode4';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.CostingCode5 = { valueOf: function(){return 'CostingCode5';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.PreferredVendor = { valueOf: function(){return 'PreferredVendor';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.AllowBinNegativeQuantity = { valueOf: function(){return 'AllowBinNegativeQuantity';}, Type: 'BoYesNoEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.ActualPrice = { valueOf: function(){return 'ActualPrice';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.PostedValueLC = { valueOf: function(){return 'PostedValueLC';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.PostedValueSC = { valueOf: function(){return 'PostedValueSC';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceSerialNumbers = { valueOf: function(){return 'InventoryOpeningBalanceSerialNumbers';}, Type: 'InventoryOpeningBalanceSerialNumber', Index: 28, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceBatchNumbers = { valueOf: function(){return 'InventoryOpeningBalanceBatchNumbers';}, Type: 'InventoryOpeningBalanceBatchNumber', Index: 29, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceCCDNumbers = { valueOf: function(){return 'InventoryOpeningBalanceCCDNumbers';}, Type: 'InventoryOpeningBalanceCCDNumber', Index: 30, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryOpeningBalanceLine.prototype.DocumentEntry = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.LineNumber = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.ItemCode = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.ItemDescription = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.WarehouseCode = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.BinEntry = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.InWarehouseQuantity = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.OpeningBalance = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.Remarks = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.BarCode = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.VisualOrder = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.Price = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.Total = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.OpenInventoryAccount = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.ProjectCode = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.Manufacturer = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.SupplierCatalogNo = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.CostingCode = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.CostingCode2 = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.CostingCode3 = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.CostingCode4 = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.CostingCode5 = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.PreferredVendor = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.Currency = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.AllowBinNegativeQuantity = new String();
SAPB1.InventoryOpeningBalanceLine.prototype.ActualPrice = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.PostedValueLC = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.PostedValueSC = new Number();
SAPB1.InventoryOpeningBalanceLine.prototype.InventoryOpeningBalanceSerialNumbers = new InventoryOpeningBalanceSerialNumberCollection();
SAPB1.InventoryOpeningBalanceLine.prototype.InventoryOpeningBalanceBatchNumbers = new InventoryOpeningBalanceBatchNumberCollection();
SAPB1.InventoryOpeningBalanceLine.prototype.InventoryOpeningBalanceCCDNumbers = new InventoryOpeningBalanceCCDNumberCollection();

SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceSerialNumber = InventoryOpeningBalanceSerialNumber
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceSerialNumberCollection = InventoryOpeningBalanceSerialNumberCollection
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceBatchNumber = InventoryOpeningBalanceBatchNumber
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceBatchNumberCollection = InventoryOpeningBalanceBatchNumberCollection
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceCCDNumber = InventoryOpeningBalanceCCDNumber
SAPB1.InventoryOpeningBalanceLine.InventoryOpeningBalanceCCDNumberCollection = InventoryOpeningBalanceCCDNumberCollection

SAPB1.InventoryOpeningBalanceLine.BoYesNoEnum = BoYesNoEnum

SAPB1.InventoryOpeningBalanceLine.create = function (rawObject) {
    var instance = new SAPB1.InventoryOpeningBalanceLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryOpeningBalanceLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryOpeningBalanceLine;
