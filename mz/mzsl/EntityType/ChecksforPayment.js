var ChecksforPaymentLine = require('ComplexType/ChecksforPaymentLine')
var ChecksforPaymentLineCollection = require('ComplexType/ChecksforPaymentLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoCpCardAcct = require('EnumType/BoCpCardAcct')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChecksforPayment = function () {
}
SAPB1.ChecksforPayment.prototype = new SAPB1.EntityType();
SAPB1.ChecksforPayment.prototype.constructor = SAPB1.ChecksforPayment;
SAPB1.ChecksforPayment.prototype.keys.push('CheckKey');
SAPB1.ChecksforPayment.CheckKey = { valueOf: function(){return 'CheckKey';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CheckNumber = { valueOf: function(){return 'CheckNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.BankName = { valueOf: function(){return 'BankName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CheckDate = { valueOf: function(){return 'CheckDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.AccountNumber = { valueOf: function(){return 'AccountNumber';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.JournalEntryReference = { valueOf: function(){return 'JournalEntryReference';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.PaymentDate = { valueOf: function(){return 'PaymentDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.PaymentNo = { valueOf: function(){return 'PaymentNo';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CheckAmount = { valueOf: function(){return 'CheckAmount';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Transferable = { valueOf: function(){return 'Transferable';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.VendorCode = { valueOf: function(){return 'VendorCode';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CheckCurrency = { valueOf: function(){return 'CheckCurrency';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CardOrAccount = { valueOf: function(){return 'CardOrAccount';}, Type: 'BoCpCardAcct', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Printed = { valueOf: function(){return 'Printed';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.VendorName = { valueOf: function(){return 'VendorName';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Signature = { valueOf: function(){return 'Signature';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CustomerAccountCode = { valueOf: function(){return 'CustomerAccountCode';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.TransactionNumber = { valueOf: function(){return 'TransactionNumber';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CreateJournalEntry = { valueOf: function(){return 'CreateJournalEntry';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.TaxTotal = { valueOf: function(){return 'TaxTotal';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.DeductionRefundAmount = { valueOf: function(){return 'DeductionRefundAmount';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.PrintedBy = { valueOf: function(){return 'PrintedBy';}, Type: 'Edm.Int32', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.CountryCode = { valueOf: function(){return 'CountryCode';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.TotalinWords = { valueOf: function(){return 'TotalinWords';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.AddressName = { valueOf: function(){return 'AddressName';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.ManualCheck = { valueOf: function(){return 'ManualCheck';}, Type: 'BoYesNoEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPayment.ChecksforPaymentLines = { valueOf: function(){return 'ChecksforPaymentLines';}, Type: 'ChecksforPaymentLine', Index: 34, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ChecksforPayment.prototype.CheckKey = new Number();
SAPB1.ChecksforPayment.prototype.CheckNumber = new Number();
SAPB1.ChecksforPayment.prototype.BankCode = new String();
SAPB1.ChecksforPayment.prototype.Branch = new String();
SAPB1.ChecksforPayment.prototype.BankName = new String();
SAPB1.ChecksforPayment.prototype.CheckDate = new String();
SAPB1.ChecksforPayment.prototype.AccountNumber = new String();
SAPB1.ChecksforPayment.prototype.Details = new String();
SAPB1.ChecksforPayment.prototype.JournalEntryReference = new String();
SAPB1.ChecksforPayment.prototype.PaymentDate = new String();
SAPB1.ChecksforPayment.prototype.PaymentNo = new Number();
SAPB1.ChecksforPayment.prototype.CheckAmount = new Number();
SAPB1.ChecksforPayment.prototype.Transferable = new String();
SAPB1.ChecksforPayment.prototype.VendorCode = new String();
SAPB1.ChecksforPayment.prototype.CheckCurrency = new String();
SAPB1.ChecksforPayment.prototype.Canceled = new String();
SAPB1.ChecksforPayment.prototype.CardOrAccount = new String();
SAPB1.ChecksforPayment.prototype.Printed = new String();
SAPB1.ChecksforPayment.prototype.VendorName = new String();
SAPB1.ChecksforPayment.prototype.Signature = new String();
SAPB1.ChecksforPayment.prototype.CustomerAccountCode = new String();
SAPB1.ChecksforPayment.prototype.TransactionNumber = new Number();
SAPB1.ChecksforPayment.prototype.Address = new String();
SAPB1.ChecksforPayment.prototype.CreateJournalEntry = new String();
SAPB1.ChecksforPayment.prototype.UpdateDate = new String();
SAPB1.ChecksforPayment.prototype.CreationDate = new String();
SAPB1.ChecksforPayment.prototype.TaxTotal = new Number();
SAPB1.ChecksforPayment.prototype.TaxDate = new String();
SAPB1.ChecksforPayment.prototype.DeductionRefundAmount = new Number();
SAPB1.ChecksforPayment.prototype.PrintedBy = new Number();
SAPB1.ChecksforPayment.prototype.CountryCode = new String();
SAPB1.ChecksforPayment.prototype.TotalinWords = new String();
SAPB1.ChecksforPayment.prototype.AddressName = new String();
SAPB1.ChecksforPayment.prototype.ManualCheck = new String();
SAPB1.ChecksforPayment.prototype.ChecksforPaymentLines = new ChecksforPaymentLineCollection();

SAPB1.ChecksforPayment.ChecksforPaymentLine = ChecksforPaymentLine
SAPB1.ChecksforPayment.ChecksforPaymentLineCollection = ChecksforPaymentLineCollection

SAPB1.ChecksforPayment.BoYesNoEnum = BoYesNoEnum
SAPB1.ChecksforPayment.BoCpCardAcct = BoCpCardAcct

SAPB1.ChecksforPayment.create = function (rawObject) {
    var instance = new SAPB1.ChecksforPayment();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChecksforPayment.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChecksforPayment;
