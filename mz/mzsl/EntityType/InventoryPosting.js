var InventoryPostingLine = require('ComplexType/InventoryPostingLine')
var InventoryPostingLineCollection = require('ComplexType/InventoryPostingLineCollection')

var InventoryPostingPriceSourceEnum = require('EnumType/InventoryPostingPriceSourceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPosting = function () {
}
SAPB1.InventoryPosting.prototype = new SAPB1.EntityType();
SAPB1.InventoryPosting.prototype.constructor = SAPB1.InventoryPosting;
SAPB1.InventoryPosting.prototype.keys.push('DocumentEntry');
SAPB1.InventoryPosting.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.CountDate = { valueOf: function(){return 'CountDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.CountTime = { valueOf: function(){return 'CountTime';}, Type: 'Edm.Time', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.BranchID = { valueOf: function(){return 'BranchID';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.PriceSource = { valueOf: function(){return 'PriceSource';}, Type: 'InventoryPostingPriceSourceEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.JournalRemark = { valueOf: function(){return 'JournalRemark';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.DocObjectCodeEx = { valueOf: function(){return 'DocObjectCodeEx';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.FinancialPeriod = { valueOf: function(){return 'FinancialPeriod';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPosting.InventoryPostingLines = { valueOf: function(){return 'InventoryPostingLines';}, Type: 'InventoryPostingLine', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryPosting.prototype.DocumentEntry = new Number();
SAPB1.InventoryPosting.prototype.DocumentNumber = new Number();
SAPB1.InventoryPosting.prototype.Series = new Number();
SAPB1.InventoryPosting.prototype.PostingDate = new String();
SAPB1.InventoryPosting.prototype.CountDate = new String();
SAPB1.InventoryPosting.prototype.CountTime = new String();
SAPB1.InventoryPosting.prototype.Remarks = new String();
SAPB1.InventoryPosting.prototype.Reference2 = new String();
SAPB1.InventoryPosting.prototype.BranchID = new Number();
SAPB1.InventoryPosting.prototype.PriceSource = new String();
SAPB1.InventoryPosting.prototype.PriceList = new Number();
SAPB1.InventoryPosting.prototype.JournalRemark = new String();
SAPB1.InventoryPosting.prototype.DocObjectCodeEx = new String();
SAPB1.InventoryPosting.prototype.FinancialPeriod = new Number();
SAPB1.InventoryPosting.prototype.PeriodIndicator = new String();
SAPB1.InventoryPosting.prototype.InventoryPostingLines = new InventoryPostingLineCollection();

SAPB1.InventoryPosting.InventoryPostingLine = InventoryPostingLine
SAPB1.InventoryPosting.InventoryPostingLineCollection = InventoryPostingLineCollection

SAPB1.InventoryPosting.InventoryPostingPriceSourceEnum = InventoryPostingPriceSourceEnum

SAPB1.InventoryPosting.create = function (rawObject) {
    var instance = new SAPB1.InventoryPosting();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPosting.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPosting;
