
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var PrintOnEnum = require('EnumType/PrintOnEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.HouseBankAccount = function () {
}
SAPB1.HouseBankAccount.prototype = new SAPB1.EntityType();
SAPB1.HouseBankAccount.prototype.constructor = SAPB1.HouseBankAccount;
SAPB1.HouseBankAccount.prototype.keys.push('AbsoluteEntry');
SAPB1.HouseBankAccount.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.AccNo = { valueOf: function(){return 'AccNo';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.NextCheckNo = { valueOf: function(){return 'NextCheckNo';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 10, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.BISR = { valueOf: function(){return 'BISR';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ControlKey = { valueOf: function(){return 'ControlKey';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.UserNo1 = { valueOf: function(){return 'UserNo1';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.UserNo2 = { valueOf: function(){return 'UserNo2';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.UserNo3 = { valueOf: function(){return 'UserNo3';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.UserNo4 = { valueOf: function(){return 'UserNo4';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.IBAN = { valueOf: function(){return 'IBAN';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.DebtofDiscountedBillofExc = { valueOf: function(){return 'DebtofDiscountedBillofExc';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ToleranceDays = { valueOf: function(){return 'ToleranceDays';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.MinAmountofBillofExchang = { valueOf: function(){return 'MinAmountofBillofExchang';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.MaxAmountofBillofExchan = { valueOf: function(){return 'MaxAmountofBillofExchan';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.DiscountLimit = { valueOf: function(){return 'DiscountLimit';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.DaysInAdvance = { valueOf: function(){return 'DaysInAdvance';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.BankonCollection = { valueOf: function(){return 'BankonCollection';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.BankonDiscounted = { valueOf: function(){return 'BankonDiscounted';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.GLInterimAccount = { valueOf: function(){return 'GLInterimAccount';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 28, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.BankKey = { valueOf: function(){return 'BankKey';}, Type: 'Edm.Int32', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.LockChecksPrinting = { valueOf: function(){return 'LockChecksPrinting';}, Type: 'BoYesNoEnum', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.TemplateName = { valueOf: function(){return 'TemplateName';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.MaximumLines = { valueOf: function(){return 'MaximumLines';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.PrintOn = { valueOf: function(){return 'PrintOn';}, Type: 'PrintOnEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.CustomerIdNumber = { valueOf: function(){return 'CustomerIdNumber';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ISRBillerID = { valueOf: function(){return 'ISRBillerID';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ISRType = { valueOf: function(){return 'ISRType';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.AccountCheckDigit = { valueOf: function(){return 'AccountCheckDigit';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.OurNumber = { valueOf: function(){return 'OurNumber';}, Type: 'Edm.Int32', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.AgreementNumber = { valueOf: function(){return 'AgreementNumber';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.Building = { valueOf: function(){return 'Building';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.IncomingPaymentSeries = { valueOf: function(){return 'IncomingPaymentSeries';}, Type: 'Edm.Int32', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.OutgoingPaymentSeries = { valueOf: function(){return 'OutgoingPaymentSeries';}, Type: 'Edm.Int32', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.JournalEntrySeries = { valueOf: function(){return 'JournalEntrySeries';}, Type: 'Edm.Int32', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ImportFileName = { valueOf: function(){return 'ImportFileName';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.AccountName = { valueOf: function(){return 'AccountName';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.BICSwiftCode = { valueOf: function(){return 'BICSwiftCode';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.FineAccount = { valueOf: function(){return 'FineAccount';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.InterestAccount = { valueOf: function(){return 'InterestAccount';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.DiscountAccount = { valueOf: function(){return 'DiscountAccount';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.ServiceFeeAccount = { valueOf: function(){return 'ServiceFeeAccount';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.IOFTaxAccount = { valueOf: function(){return 'IOFTaxAccount';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.OtherExpensesAccount = { valueOf: function(){return 'OtherExpensesAccount';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.OtherIncomesAccount = { valueOf: function(){return 'OtherIncomesAccount';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.RetornoFileName = { valueOf: function(){return 'RetornoFileName';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.BranchCheckDigit = { valueOf: function(){return 'BranchCheckDigit';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.CollectionCode = { valueOf: function(){return 'CollectionCode';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.FileSeqNextNumber = { valueOf: function(){return 'FileSeqNextNumber';}, Type: 'Edm.Int32', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccount.prototype.BankCode = new String();
SAPB1.HouseBankAccount.prototype.AccNo = new String();
SAPB1.HouseBankAccount.prototype.Branch = new String();
SAPB1.HouseBankAccount.prototype.NextCheckNo = new Number();
SAPB1.HouseBankAccount.prototype.GLAccount = new String();
SAPB1.HouseBankAccount.prototype.Street = new String();
SAPB1.HouseBankAccount.prototype.Block = new String();
SAPB1.HouseBankAccount.prototype.ZipCode = new String();
SAPB1.HouseBankAccount.prototype.City = new String();
SAPB1.HouseBankAccount.prototype.County = new String();
SAPB1.HouseBankAccount.prototype.Country = new String();
SAPB1.HouseBankAccount.prototype.State = new String();
SAPB1.HouseBankAccount.prototype.BISR = new String();
SAPB1.HouseBankAccount.prototype.ControlKey = new String();
SAPB1.HouseBankAccount.prototype.UserNo1 = new String();
SAPB1.HouseBankAccount.prototype.UserNo2 = new String();
SAPB1.HouseBankAccount.prototype.UserNo3 = new String();
SAPB1.HouseBankAccount.prototype.UserNo4 = new String();
SAPB1.HouseBankAccount.prototype.IBAN = new String();
SAPB1.HouseBankAccount.prototype.DebtofDiscountedBillofExc = new String();
SAPB1.HouseBankAccount.prototype.ToleranceDays = new Number();
SAPB1.HouseBankAccount.prototype.MinAmountofBillofExchang = new Number();
SAPB1.HouseBankAccount.prototype.MaxAmountofBillofExchan = new Number();
SAPB1.HouseBankAccount.prototype.DiscountLimit = new Number();
SAPB1.HouseBankAccount.prototype.DaysInAdvance = new Number();
SAPB1.HouseBankAccount.prototype.BankonCollection = new String();
SAPB1.HouseBankAccount.prototype.BankonDiscounted = new String();
SAPB1.HouseBankAccount.prototype.GLInterimAccount = new String();
SAPB1.HouseBankAccount.prototype.AbsoluteEntry = new Number();
SAPB1.HouseBankAccount.prototype.BankKey = new Number();
SAPB1.HouseBankAccount.prototype.LockChecksPrinting = new String();
SAPB1.HouseBankAccount.prototype.TemplateName = new String();
SAPB1.HouseBankAccount.prototype.MaximumLines = new Number();
SAPB1.HouseBankAccount.prototype.PrintOn = new String();
SAPB1.HouseBankAccount.prototype.CustomerIdNumber = new String();
SAPB1.HouseBankAccount.prototype.ISRBillerID = new String();
SAPB1.HouseBankAccount.prototype.ISRType = new Number();
SAPB1.HouseBankAccount.prototype.AccountCheckDigit = new String();
SAPB1.HouseBankAccount.prototype.OurNumber = new Number();
SAPB1.HouseBankAccount.prototype.AgreementNumber = new String();
SAPB1.HouseBankAccount.prototype.AddressType = new String();
SAPB1.HouseBankAccount.prototype.StreetNo = new String();
SAPB1.HouseBankAccount.prototype.Building = new String();
SAPB1.HouseBankAccount.prototype.IncomingPaymentSeries = new Number();
SAPB1.HouseBankAccount.prototype.OutgoingPaymentSeries = new Number();
SAPB1.HouseBankAccount.prototype.JournalEntrySeries = new Number();
SAPB1.HouseBankAccount.prototype.ImportFileName = new String();
SAPB1.HouseBankAccount.prototype.AccountName = new String();
SAPB1.HouseBankAccount.prototype.BICSwiftCode = new String();
SAPB1.HouseBankAccount.prototype.FineAccount = new String();
SAPB1.HouseBankAccount.prototype.InterestAccount = new String();
SAPB1.HouseBankAccount.prototype.DiscountAccount = new String();
SAPB1.HouseBankAccount.prototype.ServiceFeeAccount = new String();
SAPB1.HouseBankAccount.prototype.IOFTaxAccount = new String();
SAPB1.HouseBankAccount.prototype.OtherExpensesAccount = new String();
SAPB1.HouseBankAccount.prototype.OtherIncomesAccount = new String();
SAPB1.HouseBankAccount.prototype.RetornoFileName = new String();
SAPB1.HouseBankAccount.prototype.BranchCheckDigit = new String();
SAPB1.HouseBankAccount.prototype.CollectionCode = new String();
SAPB1.HouseBankAccount.prototype.FileSeqNextNumber = new Number();


SAPB1.HouseBankAccount.BoYesNoEnum = BoYesNoEnum
SAPB1.HouseBankAccount.PrintOnEnum = PrintOnEnum

SAPB1.HouseBankAccount.create = function (rawObject) {
    var instance = new SAPB1.HouseBankAccount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.HouseBankAccount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.HouseBankAccount;
