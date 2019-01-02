var FIFOLayer = require('ComplexType/FIFOLayer')
var FIFOLayerCollection = require('ComplexType/FIFOLayerCollection')
var SNBLines = require('ComplexType/SNBLines')
var SNBLinesCollection = require('ComplexType/SNBLinesCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MaterialRevaluationLine = function () {
}
SAPB1.MaterialRevaluationLine.prototype = new SAPB1.ComplexType();
SAPB1.MaterialRevaluationLine.prototype.constructor = SAPB1.MaterialRevaluationLine;
SAPB1.MaterialRevaluationLine.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.ActualPrice = { valueOf: function(){return 'ActualPrice';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.OnHand = { valueOf: function(){return 'OnHand';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DebitCredit = { valueOf: function(){return 'DebitCredit';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.RevaluationDecrementAccount = { valueOf: function(){return 'RevaluationDecrementAccount';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.RevaluationIncrementAccount = { valueOf: function(){return 'RevaluationIncrementAccount';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.RevalAmountToStock = { valueOf: function(){return 'RevalAmountToStock';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationLine.FIFOLayers = { valueOf: function(){return 'FIFOLayers';}, Type: 'FIFOLayer', Index: 19, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MaterialRevaluationLine.SNBLinesCollection = { valueOf: function(){return 'SNBLinesCollection';}, Type: 'SNBLines', Index: 20, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MaterialRevaluationLine.prototype.LineNum = new Number();
SAPB1.MaterialRevaluationLine.prototype.ItemCode = new String();
SAPB1.MaterialRevaluationLine.prototype.ItemDescription = new String();
SAPB1.MaterialRevaluationLine.prototype.Quantity = new Number();
SAPB1.MaterialRevaluationLine.prototype.Price = new Number();
SAPB1.MaterialRevaluationLine.prototype.WarehouseCode = new String();
SAPB1.MaterialRevaluationLine.prototype.ActualPrice = new Number();
SAPB1.MaterialRevaluationLine.prototype.OnHand = new Number();
SAPB1.MaterialRevaluationLine.prototype.DebitCredit = new Number();
SAPB1.MaterialRevaluationLine.prototype.DocEntry = new Number();
SAPB1.MaterialRevaluationLine.prototype.RevaluationDecrementAccount = new String();
SAPB1.MaterialRevaluationLine.prototype.RevaluationIncrementAccount = new String();
SAPB1.MaterialRevaluationLine.prototype.RevalAmountToStock = new Number();
SAPB1.MaterialRevaluationLine.prototype.Project = new String();
SAPB1.MaterialRevaluationLine.prototype.DistributionRule = new String();
SAPB1.MaterialRevaluationLine.prototype.DistributionRule2 = new String();
SAPB1.MaterialRevaluationLine.prototype.DistributionRule3 = new String();
SAPB1.MaterialRevaluationLine.prototype.DistributionRule4 = new String();
SAPB1.MaterialRevaluationLine.prototype.DistributionRule5 = new String();
SAPB1.MaterialRevaluationLine.prototype.FIFOLayers = new FIFOLayerCollection();
SAPB1.MaterialRevaluationLine.prototype.SNBLinesCollection = new SNBLinesCollection();

SAPB1.MaterialRevaluationLine.FIFOLayer = FIFOLayer
SAPB1.MaterialRevaluationLine.FIFOLayerCollection = FIFOLayerCollection
SAPB1.MaterialRevaluationLine.SNBLines = SNBLines
SAPB1.MaterialRevaluationLine.SNBLinesCollection = SNBLinesCollection


SAPB1.MaterialRevaluationLine.create = function (rawObject) {
    var instance = new SAPB1.MaterialRevaluationLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MaterialRevaluationLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MaterialRevaluationLine;
