var SerialNumber = require('ComplexType/SerialNumber')
var SerialNumberCollection = require('ComplexType/SerialNumberCollection')
var BatchNumber = require('ComplexType/BatchNumber')
var BatchNumberCollection = require('ComplexType/BatchNumberCollection')

var BoIssueMethod = require('EnumType/BoIssueMethod')
var ProductionItemType = require('EnumType/ProductionItemType')
var ResourceAllocationEnum = require('EnumType/ResourceAllocationEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductionOrderLine = function () {
}
SAPB1.ProductionOrderLine.prototype = new SAPB1.ComplexType();
SAPB1.ProductionOrderLine.prototype.constructor = SAPB1.ProductionOrderLine;
SAPB1.ProductionOrderLine.DocumentAbsoluteEntry = { valueOf: function(){return 'DocumentAbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.BaseQuantity = { valueOf: function(){return 'BaseQuantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.PlannedQuantity = { valueOf: function(){return 'PlannedQuantity';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.IssuedQuantity = { valueOf: function(){return 'IssuedQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.ProductionOrderIssueType = { valueOf: function(){return 'ProductionOrderIssueType';}, Type: 'BoIssueMethod', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.LocationCode = { valueOf: function(){return 'LocationCode';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.WipAccount = { valueOf: function(){return 'WipAccount';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.ItemType = { valueOf: function(){return 'ItemType';}, Type: 'ProductionItemType', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.LineText = { valueOf: function(){return 'LineText';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.AdditionalQuantity = { valueOf: function(){return 'AdditionalQuantity';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.ResourceAllocation = { valueOf: function(){return 'ResourceAllocation';}, Type: 'ResourceAllocationEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.RequiredDays = { valueOf: function(){return 'RequiredDays';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrderLine.SerialNumbers = { valueOf: function(){return 'SerialNumbers';}, Type: 'SerialNumber', Index: 27, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductionOrderLine.BatchNumbers = { valueOf: function(){return 'BatchNumbers';}, Type: 'BatchNumber', Index: 28, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductionOrderLine.prototype.DocumentAbsoluteEntry = new Number();
SAPB1.ProductionOrderLine.prototype.LineNumber = new Number();
SAPB1.ProductionOrderLine.prototype.ItemNo = new String();
SAPB1.ProductionOrderLine.prototype.BaseQuantity = new Number();
SAPB1.ProductionOrderLine.prototype.PlannedQuantity = new Number();
SAPB1.ProductionOrderLine.prototype.IssuedQuantity = new Number();
SAPB1.ProductionOrderLine.prototype.ProductionOrderIssueType = new String();
SAPB1.ProductionOrderLine.prototype.Warehouse = new String();
SAPB1.ProductionOrderLine.prototype.VisualOrder = new Number();
SAPB1.ProductionOrderLine.prototype.DistributionRule = new String();
SAPB1.ProductionOrderLine.prototype.LocationCode = new Number();
SAPB1.ProductionOrderLine.prototype.Project = new String();
SAPB1.ProductionOrderLine.prototype.DistributionRule2 = new String();
SAPB1.ProductionOrderLine.prototype.DistributionRule3 = new String();
SAPB1.ProductionOrderLine.prototype.DistributionRule4 = new String();
SAPB1.ProductionOrderLine.prototype.DistributionRule5 = new String();
SAPB1.ProductionOrderLine.prototype.UoMEntry = new Number();
SAPB1.ProductionOrderLine.prototype.UoMCode = new Number();
SAPB1.ProductionOrderLine.prototype.WipAccount = new String();
SAPB1.ProductionOrderLine.prototype.ItemType = new String();
SAPB1.ProductionOrderLine.prototype.LineText = new String();
SAPB1.ProductionOrderLine.prototype.AdditionalQuantity = new Number();
SAPB1.ProductionOrderLine.prototype.ResourceAllocation = new String();
SAPB1.ProductionOrderLine.prototype.StartDate = new String();
SAPB1.ProductionOrderLine.prototype.EndDate = new String();
SAPB1.ProductionOrderLine.prototype.StageID = new Number();
SAPB1.ProductionOrderLine.prototype.RequiredDays = new Number();
SAPB1.ProductionOrderLine.prototype.SerialNumbers = new SerialNumberCollection();
SAPB1.ProductionOrderLine.prototype.BatchNumbers = new BatchNumberCollection();

SAPB1.ProductionOrderLine.SerialNumber = SerialNumber
SAPB1.ProductionOrderLine.SerialNumberCollection = SerialNumberCollection
SAPB1.ProductionOrderLine.BatchNumber = BatchNumber
SAPB1.ProductionOrderLine.BatchNumberCollection = BatchNumberCollection

SAPB1.ProductionOrderLine.BoIssueMethod = BoIssueMethod
SAPB1.ProductionOrderLine.ProductionItemType = ProductionItemType
SAPB1.ProductionOrderLine.ResourceAllocationEnum = ResourceAllocationEnum

SAPB1.ProductionOrderLine.create = function (rawObject) {
    var instance = new SAPB1.ProductionOrderLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductionOrderLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductionOrderLine;
