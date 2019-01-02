
var LandedCostAllocationByEnum = require('EnumType/LandedCostAllocationByEnum')
var LCCostTypeEnum = require('EnumType/LCCostTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var LandedCostCostCategoryEnum = require('EnumType/LandedCostCostCategoryEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LandedCost_CostLine = function () {
}
SAPB1.LandedCost_CostLine.prototype = new SAPB1.ComplexType();
SAPB1.LandedCost_CostLine.prototype.constructor = SAPB1.LandedCost_CostLine;
SAPB1.LandedCost_CostLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.LandedCostCode = { valueOf: function(){return 'LandedCostCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.AllocationBy = { valueOf: function(){return 'AllocationBy';}, Type: 'LandedCostAllocationByEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.Amount = { valueOf: function(){return 'Amount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.AmountFC = { valueOf: function(){return 'AmountFC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.Factor = { valueOf: function(){return 'Factor';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.CostType = { valueOf: function(){return 'CostType';}, Type: 'LCCostTypeEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.IncludeForCustoms = { valueOf: function(){return 'IncludeForCustoms';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.OpenAmount = { valueOf: function(){return 'OpenAmount';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.OpenAmountFC = { valueOf: function(){return 'OpenAmountFC';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.Broker = { valueOf: function(){return 'Broker';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.BrokerName = { valueOf: function(){return 'BrokerName';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.CostCategory = { valueOf: function(){return 'CostCategory';}, Type: 'LandedCostCostCategoryEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost_CostLine.prototype.DocEntry = new Number();
SAPB1.LandedCost_CostLine.prototype.LandedCostCode = new String();
SAPB1.LandedCost_CostLine.prototype.AllocationBy = new String();
SAPB1.LandedCost_CostLine.prototype.Amount = new Number();
SAPB1.LandedCost_CostLine.prototype.AmountFC = new Number();
SAPB1.LandedCost_CostLine.prototype.Factor = new Number();
SAPB1.LandedCost_CostLine.prototype.CostType = new String();
SAPB1.LandedCost_CostLine.prototype.IncludeForCustoms = new String();
SAPB1.LandedCost_CostLine.prototype.OpenAmount = new Number();
SAPB1.LandedCost_CostLine.prototype.OpenAmountFC = new Number();
SAPB1.LandedCost_CostLine.prototype.Broker = new String();
SAPB1.LandedCost_CostLine.prototype.BrokerName = new String();
SAPB1.LandedCost_CostLine.prototype.CostCategory = new String();


SAPB1.LandedCost_CostLine.LandedCostAllocationByEnum = LandedCostAllocationByEnum
SAPB1.LandedCost_CostLine.LCCostTypeEnum = LCCostTypeEnum
SAPB1.LandedCost_CostLine.BoYesNoEnum = BoYesNoEnum
SAPB1.LandedCost_CostLine.LandedCostCostCategoryEnum = LandedCostCostCategoryEnum

SAPB1.LandedCost_CostLine.create = function (rawObject) {
    var instance = new SAPB1.LandedCost_CostLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LandedCost_CostLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LandedCost_CostLine;
