
var BoIssueMethod = require('EnumType/BoIssueMethod')
var ProductionItemType = require('EnumType/ProductionItemType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductTreeLine = function () {
}
SAPB1.ProductTreeLine.prototype = new SAPB1.ComplexType();
SAPB1.ProductTreeLine.prototype.constructor = SAPB1.ProductTreeLine;
SAPB1.ProductTreeLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.IssueMethod = { valueOf: function(){return 'IssueMethod';}, Type: 'BoIssueMethod', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.InventoryUOM = { valueOf: function(){return 'InventoryUOM';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.Comment = { valueOf: function(){return 'Comment';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.ParentItem = { valueOf: function(){return 'ParentItem';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.WipAccount = { valueOf: function(){return 'WipAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.ItemType = { valueOf: function(){return 'ItemType';}, Type: 'ProductionItemType', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.LineText = { valueOf: function(){return 'LineText';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.AdditionalQuantity = { valueOf: function(){return 'AdditionalQuantity';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.ChildNum = { valueOf: function(){return 'ChildNum';}, Type: 'Edm.Int32', Index: 21, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 22, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductTreeLine.prototype.ItemCode = new String();
SAPB1.ProductTreeLine.prototype.Quantity = new Number();
SAPB1.ProductTreeLine.prototype.Warehouse = new String();
SAPB1.ProductTreeLine.prototype.Price = new Number();
SAPB1.ProductTreeLine.prototype.Currency = new String();
SAPB1.ProductTreeLine.prototype.IssueMethod = new String();
SAPB1.ProductTreeLine.prototype.InventoryUOM = new String();
SAPB1.ProductTreeLine.prototype.Comment = new String();
SAPB1.ProductTreeLine.prototype.ParentItem = new String();
SAPB1.ProductTreeLine.prototype.PriceList = new Number();
SAPB1.ProductTreeLine.prototype.DistributionRule = new String();
SAPB1.ProductTreeLine.prototype.Project = new String();
SAPB1.ProductTreeLine.prototype.DistributionRule2 = new String();
SAPB1.ProductTreeLine.prototype.DistributionRule3 = new String();
SAPB1.ProductTreeLine.prototype.DistributionRule4 = new String();
SAPB1.ProductTreeLine.prototype.DistributionRule5 = new String();
SAPB1.ProductTreeLine.prototype.WipAccount = new String();
SAPB1.ProductTreeLine.prototype.ItemType = new String();
SAPB1.ProductTreeLine.prototype.LineText = new String();
SAPB1.ProductTreeLine.prototype.AdditionalQuantity = new Number();
SAPB1.ProductTreeLine.prototype.StageID = new Number();
SAPB1.ProductTreeLine.prototype.ChildNum = new Number();
SAPB1.ProductTreeLine.prototype.VisualOrder = new Number();


SAPB1.ProductTreeLine.BoIssueMethod = BoIssueMethod
SAPB1.ProductTreeLine.ProductionItemType = ProductionItemType

SAPB1.ProductTreeLine.create = function (rawObject) {
    var instance = new SAPB1.ProductTreeLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductTreeLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductTreeLine;
