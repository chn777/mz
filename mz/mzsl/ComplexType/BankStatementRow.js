var MultiplePayment = require('ComplexType/MultiplePayment')
var MultiplePaymentCollection = require('ComplexType/MultiplePaymentCollection')

var BoBpsDocTypes = require('EnumType/BoBpsDocTypes')
var CreateMethodEnum = require('EnumType/CreateMethodEnum')
var BankStatementDocTypeEnum = require('EnumType/BankStatementDocTypeEnum')
var PostingMethodEnum = require('EnumType/PostingMethodEnum')
var BankStatementRowSourceEnum = require('EnumType/BankStatementRowSourceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankStatementRow = function () {
}
SAPB1.BankStatementRow.prototype = new SAPB1.ComplexType();
SAPB1.BankStatementRow.prototype.constructor = SAPB1.BankStatementRow;
SAPB1.BankStatementRow.ExternalBankStatementNo = { valueOf: function(){return 'ExternalBankStatementNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.AccountNumber = { valueOf: function(){return 'AccountNumber';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.AccountName = { valueOf: function(){return 'AccountName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.DebitAmountFC = { valueOf: function(){return 'DebitAmountFC';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.CreditAmountFC = { valueOf: function(){return 'CreditAmountFC';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.CreditCurrency = { valueOf: function(){return 'CreditCurrency';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.Balance = { valueOf: function(){return 'Balance';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.ReconciliationNo = { valueOf: function(){return 'ReconciliationNo';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.ExternalCode = { valueOf: function(){return 'ExternalCode';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BPName = { valueOf: function(){return 'BPName';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.StatementNumber = { valueOf: function(){return 'StatementNumber';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.RowStatus = { valueOf: function(){return 'RowStatus';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.DocNumType = { valueOf: function(){return 'DocNumType';}, Type: 'BoBpsDocTypes', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.Details2 = { valueOf: function(){return 'Details2';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.PaymentReferenceNo = { valueOf: function(){return 'PaymentReferenceNo';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.CreateMethod = { valueOf: function(){return 'CreateMethod';}, Type: 'CreateMethodEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BankStmtLineDate = { valueOf: function(){return 'BankStmtLineDate';}, Type: 'Edm.DateTime', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BankStmtDueDate = { valueOf: function(){return 'BankStmtDueDate';}, Type: 'Edm.DateTime', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.InternalBankOpCode = { valueOf: function(){return 'InternalBankOpCode';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BPBankAccount = { valueOf: function(){return 'BPBankAccount';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.DebitAmountLC = { valueOf: function(){return 'DebitAmountLC';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.CreditAmountLC = { valueOf: function(){return 'CreditAmountLC';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.ExchangeRate = { valueOf: function(){return 'ExchangeRate';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.IBANofBPBankAccount = { valueOf: function(){return 'IBANofBPBankAccount';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeOnTheLine = { valueOf: function(){return 'FeeOnTheLine';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.VATAmountLC = { valueOf: function(){return 'VATAmountLC';}, Type: 'Edm.Double', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.VATAmountFC = { valueOf: function(){return 'VATAmountFC';}, Type: 'Edm.Double', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.JournalEntryID = { valueOf: function(){return 'JournalEntryID';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.PaymentID = { valueOf: function(){return 'PaymentID';}, Type: 'Edm.Int32', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'BankStatementDocTypeEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.PostingMethod = { valueOf: function(){return 'PostingMethod';}, Type: 'PostingMethodEnum', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.GLAccountforFee = { valueOf: function(){return 'GLAccountforFee';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeProfitCenter = { valueOf: function(){return 'FeeProfitCenter';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeProject = { valueOf: function(){return 'FeeProject';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BPBankCode = { valueOf: function(){return 'BPBankCode';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeDistributionRule = { valueOf: function(){return 'FeeDistributionRule';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeDistributionRule2 = { valueOf: function(){return 'FeeDistributionRule2';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeDistributionRule3 = { valueOf: function(){return 'FeeDistributionRule3';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeDistributionRule4 = { valueOf: function(){return 'FeeDistributionRule4';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FeeDistributionRule5 = { valueOf: function(){return 'FeeDistributionRule5';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.BPBICSwiftCode = { valueOf: function(){return 'BPBICSwiftCode';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.Source = { valueOf: function(){return 'Source';}, Type: 'BankStatementRowSourceEnum', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FolioPrefixString = { valueOf: function(){return 'FolioPrefixString';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.FolioNumber = { valueOf: function(){return 'FolioNumber';}, Type: 'Edm.Int32', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementRow.MultiplePayments = { valueOf: function(){return 'MultiplePayments';}, Type: 'MultiplePayment', Index: 50, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BankStatementRow.prototype.ExternalBankStatementNo = new Number();
SAPB1.BankStatementRow.prototype.AccountNumber = new String();
SAPB1.BankStatementRow.prototype.SequenceNo = new Number();
SAPB1.BankStatementRow.prototype.AccountName = new String();
SAPB1.BankStatementRow.prototype.Reference = new String();
SAPB1.BankStatementRow.prototype.DueDate = new String();
SAPB1.BankStatementRow.prototype.Details = new String();
SAPB1.BankStatementRow.prototype.DebitAmountFC = new Number();
SAPB1.BankStatementRow.prototype.CreditAmountFC = new Number();
SAPB1.BankStatementRow.prototype.CreditCurrency = new String();
SAPB1.BankStatementRow.prototype.Balance = new Number();
SAPB1.BankStatementRow.prototype.ReconciliationNo = new Number();
SAPB1.BankStatementRow.prototype.ExternalCode = new String();
SAPB1.BankStatementRow.prototype.BPCode = new String();
SAPB1.BankStatementRow.prototype.BPName = new String();
SAPB1.BankStatementRow.prototype.StatementNumber = new Number();
SAPB1.BankStatementRow.prototype.RowStatus = new String();
SAPB1.BankStatementRow.prototype.VisualOrder = new Number();
SAPB1.BankStatementRow.prototype.DocNumType = new String();
SAPB1.BankStatementRow.prototype.Details2 = new String();
SAPB1.BankStatementRow.prototype.PaymentReferenceNo = new String();
SAPB1.BankStatementRow.prototype.CreateMethod = new String();
SAPB1.BankStatementRow.prototype.BankStmtLineDate = new String();
SAPB1.BankStatementRow.prototype.BankStmtDueDate = new String();
SAPB1.BankStatementRow.prototype.InternalBankOpCode = new Number();
SAPB1.BankStatementRow.prototype.BPBankAccount = new String();
SAPB1.BankStatementRow.prototype.DebitAmountLC = new Number();
SAPB1.BankStatementRow.prototype.CreditAmountLC = new Number();
SAPB1.BankStatementRow.prototype.ExchangeRate = new Number();
SAPB1.BankStatementRow.prototype.IBANofBPBankAccount = new String();
SAPB1.BankStatementRow.prototype.FeeOnTheLine = new Number();
SAPB1.BankStatementRow.prototype.VATAmountLC = new Number();
SAPB1.BankStatementRow.prototype.VATAmountFC = new Number();
SAPB1.BankStatementRow.prototype.JournalEntryID = new Number();
SAPB1.BankStatementRow.prototype.PaymentID = new Number();
SAPB1.BankStatementRow.prototype.DocumentType = new String();
SAPB1.BankStatementRow.prototype.PostingMethod = new String();
SAPB1.BankStatementRow.prototype.GLAccountforFee = new String();
SAPB1.BankStatementRow.prototype.FeeProfitCenter = new String();
SAPB1.BankStatementRow.prototype.FeeProject = new String();
SAPB1.BankStatementRow.prototype.BPBankCode = new String();
SAPB1.BankStatementRow.prototype.FeeDistributionRule = new String();
SAPB1.BankStatementRow.prototype.FeeDistributionRule2 = new String();
SAPB1.BankStatementRow.prototype.FeeDistributionRule3 = new String();
SAPB1.BankStatementRow.prototype.FeeDistributionRule4 = new String();
SAPB1.BankStatementRow.prototype.FeeDistributionRule5 = new String();
SAPB1.BankStatementRow.prototype.BPBICSwiftCode = new String();
SAPB1.BankStatementRow.prototype.Source = new String();
SAPB1.BankStatementRow.prototype.FolioPrefixString = new String();
SAPB1.BankStatementRow.prototype.FolioNumber = new Number();
SAPB1.BankStatementRow.prototype.MultiplePayments = new MultiplePaymentCollection();

SAPB1.BankStatementRow.MultiplePayment = MultiplePayment
SAPB1.BankStatementRow.MultiplePaymentCollection = MultiplePaymentCollection

SAPB1.BankStatementRow.BoBpsDocTypes = BoBpsDocTypes
SAPB1.BankStatementRow.CreateMethodEnum = CreateMethodEnum
SAPB1.BankStatementRow.BankStatementDocTypeEnum = BankStatementDocTypeEnum
SAPB1.BankStatementRow.PostingMethodEnum = PostingMethodEnum
SAPB1.BankStatementRow.BankStatementRowSourceEnum = BankStatementRowSourceEnum

SAPB1.BankStatementRow.create = function (rawObject) {
    var instance = new SAPB1.BankStatementRow();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankStatementRow.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankStatementRow;
