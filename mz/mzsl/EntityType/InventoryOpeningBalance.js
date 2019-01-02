var InventoryOpeningBalanceLine = require('ComplexType/InventoryOpeningBalanceLine')
var InventoryOpeningBalanceLineCollection = require('ComplexType/InventoryOpeningBalanceLineCollection')

var InventoryOpeningBalancePriceSourceEnum = require('EnumType/InventoryOpeningBalancePriceSourceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryOpeningBalance = function () {
}
SAPB1.InventoryOpeningBalance.prototype = new SAPB1.EntityType();
SAPB1.InventoryOpeningBalance.prototype.constructor = SAPB1.InventoryOpeningBalance;
SAPB1.InventoryOpeningBalance.prototype.keys.push('DocumentEntry');
SAPB1.InventoryOpeningBalance.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.DocumentDate = { valueOf: function(){return 'DocumentDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.BranchID = { valueOf: function(){return 'BranchID';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.PriceSource = { valueOf: function(){return 'PriceSource';}, Type: 'InventoryOpeningBalancePriceSourceEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.JournalRemark = { valueOf: function(){return 'JournalRemark';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.DocObjectCodeEx = { valueOf: function(){return 'DocObjectCodeEx';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.FinancialPeriod = { valueOf: function(){return 'FinancialPeriod';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalance.InventoryOpeningBalanceLines = { valueOf: function(){return 'InventoryOpeningBalanceLines';}, Type: 'InventoryOpeningBalanceLine', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InventoryOpeningBalance.prototype.DocumentEntry = new Number();
SAPB1.InventoryOpeningBalance.prototype.PostingDate = new String();
SAPB1.InventoryOpeningBalance.prototype.DocumentDate = new String();
SAPB1.InventoryOpeningBalance.prototype.DocumentNumber = new Number();
SAPB1.InventoryOpeningBalance.prototype.Series = new Number();
SAPB1.InventoryOpeningBalance.prototype.Reference2 = new String();
SAPB1.InventoryOpeningBalance.prototype.Remarks = new String();
SAPB1.InventoryOpeningBalance.prototype.BranchID = new Number();
SAPB1.InventoryOpeningBalance.prototype.PriceSource = new String();
SAPB1.InventoryOpeningBalance.prototype.PriceList = new Number();
SAPB1.InventoryOpeningBalance.prototype.JournalRemark = new String();
SAPB1.InventoryOpeningBalance.prototype.DocObjectCodeEx = new String();
SAPB1.InventoryOpeningBalance.prototype.PeriodIndicator = new String();
SAPB1.InventoryOpeningBalance.prototype.FinancialPeriod = new Number();
SAPB1.InventoryOpeningBalance.prototype.InventoryOpeningBalanceLines = new InventoryOpeningBalanceLineCollection();

SAPB1.InventoryOpeningBalance.InventoryOpeningBalanceLine = InventoryOpeningBalanceLine
SAPB1.InventoryOpeningBalance.InventoryOpeningBalanceLineCollection = InventoryOpeningBalanceLineCollection

SAPB1.InventoryOpeningBalance.InventoryOpeningBalancePriceSourceEnum = InventoryOpeningBalancePriceSourceEnum

SAPB1.InventoryOpeningBalance.create = function (rawObject) {
    var instance = new SAPB1.InventoryOpeningBalance();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryOpeningBalance.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryOpeningBalance;
