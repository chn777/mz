var BillOfExchangeTransactionLine = require('ComplexType/BillOfExchangeTransactionLine')
var BillOfExchangeTransactionLineCollection = require('ComplexType/BillOfExchangeTransactionLineCollection')
var BillOfExchangeTransDeposit = require('ComplexType/BillOfExchangeTransDeposit')
var BillOfExchangeTransDepositCollection = require('ComplexType/BillOfExchangeTransDepositCollection')
var BillOfExchangeTransBankPage = require('ComplexType/BillOfExchangeTransBankPage')
var BillOfExchangeTransBankPageCollection = require('ComplexType/BillOfExchangeTransBankPageCollection')

var BoBOTFromStatus = require('EnumType/BoBOTFromStatus')
var BoBOTToStatus = require('EnumType/BoBOTToStatus')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BillOfExchangeTransaction = function () {
}
SAPB1.BillOfExchangeTransaction.prototype = new SAPB1.EntityType();
SAPB1.BillOfExchangeTransaction.prototype.constructor = SAPB1.BillOfExchangeTransaction;
SAPB1.BillOfExchangeTransaction.prototype.keys.push('BOETransactionkey');
SAPB1.BillOfExchangeTransaction.StatusFrom = { valueOf: function(){return 'StatusFrom';}, Type: 'BoBOTFromStatus', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.StatusTo = { valueOf: function(){return 'StatusTo';}, Type: 'BoBOTToStatus', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.TransactionDate = { valueOf: function(){return 'TransactionDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.TransactionTime = { valueOf: function(){return 'TransactionTime';}, Type: 'Edm.Time', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.IsBoeReconciled = { valueOf: function(){return 'IsBoeReconciled';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.TransactionNumber = { valueOf: function(){return 'TransactionNumber';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.BOETransactionkey = { valueOf: function(){return 'BOETransactionkey';}, Type: 'Edm.Int32', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransactionLines = { valueOf: function(){return 'BillOfExchangeTransactionLines';}, Type: 'BillOfExchangeTransactionLine', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransDeposits = { valueOf: function(){return 'BillOfExchangeTransDeposits';}, Type: 'BillOfExchangeTransDeposit', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransBankPages = { valueOf: function(){return 'BillOfExchangeTransBankPages';}, Type: 'BillOfExchangeTransBankPage', Index: 11, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BillOfExchangeTransaction.prototype.StatusFrom = new String();
SAPB1.BillOfExchangeTransaction.prototype.StatusTo = new String();
SAPB1.BillOfExchangeTransaction.prototype.TransactionDate = new String();
SAPB1.BillOfExchangeTransaction.prototype.TransactionTime = new String();
SAPB1.BillOfExchangeTransaction.prototype.IsBoeReconciled = new String();
SAPB1.BillOfExchangeTransaction.prototype.TransactionNumber = new Number();
SAPB1.BillOfExchangeTransaction.prototype.PostingDate = new String();
SAPB1.BillOfExchangeTransaction.prototype.TaxDate = new String();
SAPB1.BillOfExchangeTransaction.prototype.BOETransactionkey = new Number();
SAPB1.BillOfExchangeTransaction.prototype.BillOfExchangeTransactionLines = new BillOfExchangeTransactionLineCollection();
SAPB1.BillOfExchangeTransaction.prototype.BillOfExchangeTransDeposits = new BillOfExchangeTransDepositCollection();
SAPB1.BillOfExchangeTransaction.prototype.BillOfExchangeTransBankPages = new BillOfExchangeTransBankPageCollection();

SAPB1.BillOfExchangeTransaction.BillOfExchangeTransactionLine = BillOfExchangeTransactionLine
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransactionLineCollection = BillOfExchangeTransactionLineCollection
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransDeposit = BillOfExchangeTransDeposit
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransDepositCollection = BillOfExchangeTransDepositCollection
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransBankPage = BillOfExchangeTransBankPage
SAPB1.BillOfExchangeTransaction.BillOfExchangeTransBankPageCollection = BillOfExchangeTransBankPageCollection

SAPB1.BillOfExchangeTransaction.BoBOTFromStatus = BoBOTFromStatus
SAPB1.BillOfExchangeTransaction.BoBOTToStatus = BoBOTToStatus
SAPB1.BillOfExchangeTransaction.BoYesNoEnum = BoYesNoEnum

SAPB1.BillOfExchangeTransaction.create = function (rawObject) {
    var instance = new SAPB1.BillOfExchangeTransaction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BillOfExchangeTransaction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BillOfExchangeTransaction;
