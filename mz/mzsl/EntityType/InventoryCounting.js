var TeamCounter = require('ComplexType/TeamCounter')
var TeamCounterCollection = require('ComplexType/TeamCounterCollection')
var IndividualCounter = require('ComplexType/IndividualCounter')
var IndividualCounterCollection = require('ComplexType/IndividualCounterCollection')
var InventoryCountingLine = require('ComplexType/InventoryCountingLine')
var InventoryCountingLineCollection = require('ComplexType/InventoryCountingLineCollection')

var CounterTypeEnum = require('EnumType/CounterTypeEnum')
var CountingDocumentStatusEnum = require('EnumType/CountingDocumentStatusEnum')
var CountingTypeEnum = require('EnumType/CountingTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryCounting = function () {
}
SAPB1.InventoryCounting.prototype = new SAPB1.EntityType();
SAPB1.InventoryCounting.prototype.constructor = SAPB1.InventoryCounting;
SAPB1.InventoryCounting.prototype.keys.push('DocumentEntry');
SAPB1.InventoryCounting.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.CountDate = { valueOf: function(){return 'CountDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.CountTime = { valueOf: function(){return 'CountTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.SingleCounterType = { valueOf: function(){return 'SingleCounterType';}, Type: 'CounterTypeEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.SingleCounterID = { valueOf: function(){return 'SingleCounterID';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.DocumentStatus = { valueOf: function(){return 'DocumentStatus';}, Type: 'CountingDocumentStatusEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.BranchID = { valueOf: function(){return 'BranchID';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.DocObjectCodeEx = { valueOf: function(){return 'DocObjectCodeEx';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.FinancialPeriod = { valueOf: function(){return 'FinancialPeriod';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.CountingType = { valueOf: function(){return 'CountingType';}, Type: 'CountingTypeEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryCounting.TeamCounters = { valueOf: function(){return 'TeamCounters';}, Type: 'TeamCounter', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryCounting.IndividualCounters = { valueOf: function(){return 'IndividualCounters';}, Type: 'IndividualCounter', Index: 16, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryCounting.InventoryCountingLines = { valueOf: function(){return 'InventoryCountingLines';}, Type: 'InventoryCountingLine', Index: 17, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryCounting.prototype.DocumentEntry = new Number();
SAPB1.InventoryCounting.prototype.DocumentNumber = new Number();
SAPB1.InventoryCounting.prototype.Series = new Number();
SAPB1.InventoryCounting.prototype.CountDate = new String();
SAPB1.InventoryCounting.prototype.CountTime = new String();
SAPB1.InventoryCounting.prototype.SingleCounterType = new String();
SAPB1.InventoryCounting.prototype.SingleCounterID = new Number();
SAPB1.InventoryCounting.prototype.DocumentStatus = new String();
SAPB1.InventoryCounting.prototype.Remarks = new String();
SAPB1.InventoryCounting.prototype.Reference2 = new String();
SAPB1.InventoryCounting.prototype.BranchID = new Number();
SAPB1.InventoryCounting.prototype.DocObjectCodeEx = new String();
SAPB1.InventoryCounting.prototype.FinancialPeriod = new Number();
SAPB1.InventoryCounting.prototype.PeriodIndicator = new String();
SAPB1.InventoryCounting.prototype.CountingType = new String();
SAPB1.InventoryCounting.prototype.TeamCounters = new TeamCounterCollection();
SAPB1.InventoryCounting.prototype.IndividualCounters = new IndividualCounterCollection();
SAPB1.InventoryCounting.prototype.InventoryCountingLines = new InventoryCountingLineCollection();

SAPB1.InventoryCounting.TeamCounter = TeamCounter
SAPB1.InventoryCounting.TeamCounterCollection = TeamCounterCollection
SAPB1.InventoryCounting.IndividualCounter = IndividualCounter
SAPB1.InventoryCounting.IndividualCounterCollection = IndividualCounterCollection
SAPB1.InventoryCounting.InventoryCountingLine = InventoryCountingLine
SAPB1.InventoryCounting.InventoryCountingLineCollection = InventoryCountingLineCollection

SAPB1.InventoryCounting.CounterTypeEnum = CounterTypeEnum
SAPB1.InventoryCounting.CountingDocumentStatusEnum = CountingDocumentStatusEnum
SAPB1.InventoryCounting.CountingTypeEnum = CountingTypeEnum

SAPB1.InventoryCounting.create = function (rawObject) {
    var instance = new SAPB1.InventoryCounting();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryCounting.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryCounting;
