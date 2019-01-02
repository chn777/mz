var ProductionOrderLine = require('ComplexType/ProductionOrderLine')
var ProductionOrderLineCollection = require('ComplexType/ProductionOrderLineCollection')
var ProductionOrdersSalesOrderLine = require('ComplexType/ProductionOrdersSalesOrderLine')
var ProductionOrdersSalesOrderLineCollection = require('ComplexType/ProductionOrdersSalesOrderLineCollection')
var ProductionOrdersStage = require('ComplexType/ProductionOrdersStage')
var ProductionOrdersStageCollection = require('ComplexType/ProductionOrdersStageCollection')

var BoProductionOrderStatusEnum = require('EnumType/BoProductionOrderStatusEnum')
var BoProductionOrderTypeEnum = require('EnumType/BoProductionOrderTypeEnum')
var BoProductionOrderOriginEnum = require('EnumType/BoProductionOrderOriginEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var ResourceAllocationEnum = require('EnumType/ResourceAllocationEnum')
var BoUpdateAllocationEnum = require('EnumType/BoUpdateAllocationEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductionOrder = function () {
}
SAPB1.ProductionOrder.prototype = new SAPB1.EntityType();
SAPB1.ProductionOrder.prototype.constructor = SAPB1.ProductionOrder;
SAPB1.ProductionOrder.prototype.keys.push('AbsoluteEntry');
SAPB1.ProductionOrder.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductionOrderStatus = { valueOf: function(){return 'ProductionOrderStatus';}, Type: 'BoProductionOrderStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductionOrderType = { valueOf: function(){return 'ProductionOrderType';}, Type: 'BoProductionOrderTypeEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.PlannedQuantity = { valueOf: function(){return 'PlannedQuantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.CompletedQuantity = { valueOf: function(){return 'CompletedQuantity';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.RejectedQuantity = { valueOf: function(){return 'RejectedQuantity';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductionOrderOriginEntry = { valueOf: function(){return 'ProductionOrderOriginEntry';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductionOrderOriginNumber = { valueOf: function(){return 'ProductionOrderOriginNumber';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductionOrderOrigin = { valueOf: function(){return 'ProductionOrderOrigin';}, Type: 'BoProductionOrderOriginEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ClosingDate = { valueOf: function(){return 'ClosingDate';}, Type: 'Edm.DateTime', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ReleaseDate = { valueOf: function(){return 'ReleaseDate';}, Type: 'Edm.DateTime', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.CustomerCode = { valueOf: function(){return 'CustomerCode';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.InventoryUOM = { valueOf: function(){return 'InventoryUOM';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.JournalRemarks = { valueOf: function(){return 'JournalRemarks';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.TransactionNumber = { valueOf: function(){return 'TransactionNumber';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.Printed = { valueOf: function(){return 'Printed';}, Type: 'BoYesNoEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductDescription = { valueOf: function(){return 'ProductDescription';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.Priority = { valueOf: function(){return 'Priority';}, Type: 'Edm.Int32', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.RoutingDateCalculation = { valueOf: function(){return 'RoutingDateCalculation';}, Type: 'ResourceAllocationEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.UpdateAllocation = { valueOf: function(){return 'UpdateAllocation';}, Type: 'BoUpdateAllocationEnum', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrder.ProductionOrderLines = { valueOf: function(){return 'ProductionOrderLines';}, Type: 'ProductionOrderLine', Index: 37, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductionOrder.ProductionOrdersSalesOrderLines = { valueOf: function(){return 'ProductionOrdersSalesOrderLines';}, Type: 'ProductionOrdersSalesOrderLine', Index: 38, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductionOrder.ProductionOrdersStages = { valueOf: function(){return 'ProductionOrdersStages';}, Type: 'ProductionOrdersStage', Index: 39, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductionOrder.prototype.AbsoluteEntry = new Number();
SAPB1.ProductionOrder.prototype.DocumentNumber = new Number();
SAPB1.ProductionOrder.prototype.Series = new Number();
SAPB1.ProductionOrder.prototype.ItemNo = new String();
SAPB1.ProductionOrder.prototype.ProductionOrderStatus = new String();
SAPB1.ProductionOrder.prototype.ProductionOrderType = new String();
SAPB1.ProductionOrder.prototype.PlannedQuantity = new Number();
SAPB1.ProductionOrder.prototype.CompletedQuantity = new Number();
SAPB1.ProductionOrder.prototype.RejectedQuantity = new Number();
SAPB1.ProductionOrder.prototype.PostingDate = new String();
SAPB1.ProductionOrder.prototype.DueDate = new String();
SAPB1.ProductionOrder.prototype.ProductionOrderOriginEntry = new Number();
SAPB1.ProductionOrder.prototype.ProductionOrderOriginNumber = new Number();
SAPB1.ProductionOrder.prototype.ProductionOrderOrigin = new String();
SAPB1.ProductionOrder.prototype.UserSignature = new Number();
SAPB1.ProductionOrder.prototype.Remarks = new String();
SAPB1.ProductionOrder.prototype.ClosingDate = new String();
SAPB1.ProductionOrder.prototype.ReleaseDate = new String();
SAPB1.ProductionOrder.prototype.CustomerCode = new String();
SAPB1.ProductionOrder.prototype.Warehouse = new String();
SAPB1.ProductionOrder.prototype.InventoryUOM = new String();
SAPB1.ProductionOrder.prototype.JournalRemarks = new String();
SAPB1.ProductionOrder.prototype.TransactionNumber = new Number();
SAPB1.ProductionOrder.prototype.CreationDate = new String();
SAPB1.ProductionOrder.prototype.Printed = new String();
SAPB1.ProductionOrder.prototype.DistributionRule = new String();
SAPB1.ProductionOrder.prototype.Project = new String();
SAPB1.ProductionOrder.prototype.DistributionRule2 = new String();
SAPB1.ProductionOrder.prototype.DistributionRule3 = new String();
SAPB1.ProductionOrder.prototype.DistributionRule4 = new String();
SAPB1.ProductionOrder.prototype.DistributionRule5 = new String();
SAPB1.ProductionOrder.prototype.UoMEntry = new Number();
SAPB1.ProductionOrder.prototype.StartDate = new String();
SAPB1.ProductionOrder.prototype.ProductDescription = new String();
SAPB1.ProductionOrder.prototype.Priority = new Number();
SAPB1.ProductionOrder.prototype.RoutingDateCalculation = new String();
SAPB1.ProductionOrder.prototype.UpdateAllocation = new String();
SAPB1.ProductionOrder.prototype.ProductionOrderLines = new ProductionOrderLineCollection();
SAPB1.ProductionOrder.prototype.ProductionOrdersSalesOrderLines = new ProductionOrdersSalesOrderLineCollection();
SAPB1.ProductionOrder.prototype.ProductionOrdersStages = new ProductionOrdersStageCollection();

SAPB1.ProductionOrder.ProductionOrderLine = ProductionOrderLine
SAPB1.ProductionOrder.ProductionOrderLineCollection = ProductionOrderLineCollection
SAPB1.ProductionOrder.ProductionOrdersSalesOrderLine = ProductionOrdersSalesOrderLine
SAPB1.ProductionOrder.ProductionOrdersSalesOrderLineCollection = ProductionOrdersSalesOrderLineCollection
SAPB1.ProductionOrder.ProductionOrdersStage = ProductionOrdersStage
SAPB1.ProductionOrder.ProductionOrdersStageCollection = ProductionOrdersStageCollection

SAPB1.ProductionOrder.BoProductionOrderStatusEnum = BoProductionOrderStatusEnum
SAPB1.ProductionOrder.BoProductionOrderTypeEnum = BoProductionOrderTypeEnum
SAPB1.ProductionOrder.BoProductionOrderOriginEnum = BoProductionOrderOriginEnum
SAPB1.ProductionOrder.BoYesNoEnum = BoYesNoEnum
SAPB1.ProductionOrder.ResourceAllocationEnum = ResourceAllocationEnum
SAPB1.ProductionOrder.BoUpdateAllocationEnum = BoUpdateAllocationEnum

SAPB1.ProductionOrder.create = function (rawObject) {
    var instance = new SAPB1.ProductionOrder();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductionOrder.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductionOrder;
