var ProductTreeLine = require('ComplexType/ProductTreeLine')
var ProductTreeLineCollection = require('ComplexType/ProductTreeLineCollection')
var ProductTreeStage = require('ComplexType/ProductTreeStage')
var ProductTreeStageCollection = require('ComplexType/ProductTreeStageCollection')

var BoItemTreeTypes = require('EnumType/BoItemTreeTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductTree = function () {
}
SAPB1.ProductTree.prototype = new SAPB1.EntityType();
SAPB1.ProductTree.prototype.constructor = SAPB1.ProductTree;
SAPB1.ProductTree.prototype.keys.push('TreeCode');
SAPB1.ProductTree.TreeCode = { valueOf: function(){return 'TreeCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductTree.TreeType = { valueOf: function(){return 'TreeType';}, Type: 'BoItemTreeTypes', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.PlanAvgProdSize = { valueOf: function(){return 'PlanAvgProdSize';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.HideBOMComponentsInPrintout = { valueOf: function(){return 'HideBOMComponentsInPrintout';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.ProductDescription = { valueOf: function(){return 'ProductDescription';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTree.ProductTreeLines = { valueOf: function(){return 'ProductTreeLines';}, Type: 'ProductTreeLine', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductTree.ProductTreeStages = { valueOf: function(){return 'ProductTreeStages';}, Type: 'ProductTreeStage', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ProductTree.prototype.TreeCode = new String();
SAPB1.ProductTree.prototype.TreeType = new String();
SAPB1.ProductTree.prototype.Quantity = new Number();
SAPB1.ProductTree.prototype.DistributionRule = new String();
SAPB1.ProductTree.prototype.Project = new String();
SAPB1.ProductTree.prototype.DistributionRule2 = new String();
SAPB1.ProductTree.prototype.DistributionRule3 = new String();
SAPB1.ProductTree.prototype.DistributionRule4 = new String();
SAPB1.ProductTree.prototype.DistributionRule5 = new String();
SAPB1.ProductTree.prototype.PriceList = new Number();
SAPB1.ProductTree.prototype.Warehouse = new String();
SAPB1.ProductTree.prototype.PlanAvgProdSize = new Number();
SAPB1.ProductTree.prototype.HideBOMComponentsInPrintout = new String();
SAPB1.ProductTree.prototype.ProductDescription = new String();
SAPB1.ProductTree.prototype.ProductTreeLines = new ProductTreeLineCollection();
SAPB1.ProductTree.prototype.ProductTreeStages = new ProductTreeStageCollection();

SAPB1.ProductTree.ProductTreeLine = ProductTreeLine
SAPB1.ProductTree.ProductTreeLineCollection = ProductTreeLineCollection
SAPB1.ProductTree.ProductTreeStage = ProductTreeStage
SAPB1.ProductTree.ProductTreeStageCollection = ProductTreeStageCollection

SAPB1.ProductTree.BoItemTreeTypes = BoItemTreeTypes
SAPB1.ProductTree.BoYesNoEnum = BoYesNoEnum

SAPB1.ProductTree.create = function (rawObject) {
    var instance = new SAPB1.ProductTree();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductTree.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductTree;
