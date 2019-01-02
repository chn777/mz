var PaymentRunExport_Line = require('ComplexType/PaymentRunExport_Line')
var PaymentRunExport_LineCollection = require('ComplexType/PaymentRunExport_LineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoOpexStatus = require('EnumType/BoOpexStatus')
var PaymentRunExportRowTypeEnum = require('EnumType/PaymentRunExportRowTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentRunExport = function () {
}
SAPB1.PaymentRunExport.prototype = new SAPB1.EntityType();
SAPB1.PaymentRunExport.prototype.constructor = SAPB1.PaymentRunExport;
SAPB1.PaymentRunExport.prototype.keys.push('AbsoluteEntry');
SAPB1.PaymentRunExport.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.RunDate = { valueOf: function(){return 'RunDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.VendorNum = { valueOf: function(){return 'VendorNum';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CustomerNum = { valueOf: function(){return 'CustomerNum';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentMethod = { valueOf: function(){return 'PaymentMethod';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.Countery = { valueOf: function(){return 'Countery';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyTaxNum = { valueOf: function(){return 'CompanyTaxNum';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeName = { valueOf: function(){return 'PayeeName';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeePostalCode = { valueOf: function(){return 'PayeePostalCode';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeCity = { valueOf: function(){return 'PayeeCity';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeStreet = { valueOf: function(){return 'PayeeStreet';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeCountry = { valueOf: function(){return 'PayeeCountry';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeState = { valueOf: function(){return 'PayeeState';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankName = { valueOf: function(){return 'PayeeBankName';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankZip = { valueOf: function(){return 'PayeeBankZip';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankCity = { valueOf: function(){return 'PayeeBankCity';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankStreet = { valueOf: function(){return 'PayeeBankStreet';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankCountry = { valueOf: function(){return 'PayeeBankCountry';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankAccount = { valueOf: function(){return 'PayeeBankAccount';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankCode = { valueOf: function(){return 'PayeeBankCode';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankCtrlKey = { valueOf: function(){return 'PayeeBankCtrlKey';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankSwiftNum = { valueOf: function(){return 'PayeeBankSwiftNum';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankIBAN = { valueOf: function(){return 'PayeeBankIBAN';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.BankAccount = { valueOf: function(){return 'BankAccount';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.BankCountry = { valueOf: function(){return 'BankCountry';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.BankIBAN = { valueOf: function(){return 'BankIBAN';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocAmountLocal = { valueOf: function(){return 'DocAmountLocal';}, Type: 'Edm.Double', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocCurrnecy = { valueOf: function(){return 'DocCurrnecy';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocAmountForign = { valueOf: function(){return 'DocAmountForign';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocCashDiscount = { valueOf: function(){return 'DocCashDiscount';}, Type: 'Edm.Double', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocCashDiscountForign = { valueOf: function(){return 'DocCashDiscountForign';}, Type: 'Edm.Double', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocNumOffieldPaid = { valueOf: function(){return 'DocNumOffieldPaid';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DocRate = { valueOf: function(){return 'DocRate';}, Type: 'Edm.Double', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.WizCode = { valueOf: function(){return 'WizCode';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CollectionAuthorization = { valueOf: function(){return 'CollectionAuthorization';}, Type: 'BoYesNoEnum', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankPostOffice = { valueOf: function(){return 'PayeeBankPostOffice';}, Type: 'BoYesNoEnum', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankNextCheckNumber = { valueOf: function(){return 'PayeeBankNextCheckNumber';}, Type: 'Edm.Int32', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankHouseBank = { valueOf: function(){return 'PayeeBankHouseBank';}, Type: 'BoYesNoEnum', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankBlock = { valueOf: function(){return 'PayeeBankBlock';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankCounty = { valueOf: function(){return 'PayeeBankCounty';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankState = { valueOf: function(){return 'PayeeBankState';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankBISR = { valueOf: function(){return 'PayeeBankBISR';}, Type: 'BoYesNoEnum', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankUserNum1 = { valueOf: function(){return 'PayeeBankUserNum1';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankUserNum2 = { valueOf: function(){return 'PayeeBankUserNum2';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankUserNum3 = { valueOf: function(){return 'PayeeBankUserNum3';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankUserNum4 = { valueOf: function(){return 'PayeeBankUserNum4';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.InstructionKey = { valueOf: function(){return 'InstructionKey';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentFormat = { valueOf: function(){return 'PaymentFormat';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyName = { valueOf: function(){return 'CompanyName';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyAddress = { valueOf: function(){return 'CompanyAddress';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.Status = { valueOf: function(){return 'Status';}, Type: 'BoOpexStatus', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompIsrBillerID = { valueOf: function(){return 'CompIsrBillerID';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.VendorIsrBillerID = { valueOf: function(){return 'VendorIsrBillerID';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.AdditionalIdNumber = { valueOf: function(){return 'AdditionalIdNumber';}, Type: 'Edm.String', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.OrganizationNumber = { valueOf: function(){return 'OrganizationNumber';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeBankBranch = { valueOf: function(){return 'PayeeBankBranch';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankBranch = { valueOf: function(){return 'PaymentBankBranch';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.UserEMail = { valueOf: function(){return 'UserEMail';}, Type: 'Edm.String', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.UserMobilePhoneNumber = { valueOf: function(){return 'UserMobilePhoneNumber';}, Type: 'Edm.String', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.UserFaxNumber = { valueOf: function(){return 'UserFaxNumber';}, Type: 'Edm.String', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.UserDepartment = { valueOf: function(){return 'UserDepartment';}, Type: 'Edm.Int32', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.DebitMemo = { valueOf: function(){return 'DebitMemo';}, Type: 'BoYesNoEnum', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.EUInternalTransfer = { valueOf: function(){return 'EUInternalTransfer';}, Type: 'BoYesNoEnum', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.FilePath = { valueOf: function(){return 'FilePath';}, Type: 'Edm.String', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.OrderingParty = { valueOf: function(){return 'OrderingParty';}, Type: 'Edm.String', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankControlKey = { valueOf: function(){return 'PaymentBankControlKey';}, Type: 'Edm.String', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeTaxNumber = { valueOf: function(){return 'PayeeTaxNumber';}, Type: 'Edm.String', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentKeyCode = { valueOf: function(){return 'PaymentKeyCode';}, Type: 'Edm.String', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PayeeReferenceDetails = { valueOf: function(){return 'PayeeReferenceDetails';}, Type: 'Edm.String', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.FormatName = { valueOf: function(){return 'FormatName';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentDonewithCheck = { valueOf: function(){return 'PaymentDonewithCheck';}, Type: 'BoYesNoEnum', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyBlock = { valueOf: function(){return 'CompanyBlock';}, Type: 'Edm.String', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyCity = { valueOf: function(){return 'CompanyCity';}, Type: 'Edm.String', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyCounty = { valueOf: function(){return 'CompanyCounty';}, Type: 'Edm.String', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyState = { valueOf: function(){return 'CompanyState';}, Type: 'Edm.String', Index: 81, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyStreet = { valueOf: function(){return 'CompanyStreet';}, Type: 'Edm.String', Index: 82, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.CompanyZipCode = { valueOf: function(){return 'CompanyZipCode';}, Type: 'Edm.String', Index: 83, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankCharges = { valueOf: function(){return 'PaymentBankCharges';}, Type: 'Edm.String', Index: 84, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankUserNo1 = { valueOf: function(){return 'PaymentBankUserNo1';}, Type: 'Edm.String', Index: 85, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankUserNo2 = { valueOf: function(){return 'PaymentBankUserNo2';}, Type: 'Edm.String', Index: 86, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankUserNo3 = { valueOf: function(){return 'PaymentBankUserNo3';}, Type: 'Edm.String', Index: 87, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankUserNo4 = { valueOf: function(){return 'PaymentBankUserNo4';}, Type: 'Edm.String', Index: 88, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentBankChargesAllocationCode = { valueOf: function(){return 'PaymentBankChargesAllocationCode';}, Type: 'Edm.String', Index: 89, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentOrderNum = { valueOf: function(){return 'PaymentOrderNum';}, Type: 'Edm.Int32', Index: 90, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.FreeText1 = { valueOf: function(){return 'FreeText1';}, Type: 'Edm.String', Index: 91, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.FreeText2 = { valueOf: function(){return 'FreeText2';}, Type: 'Edm.String', Index: 92, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.FreeText3 = { valueOf: function(){return 'FreeText3';}, Type: 'Edm.String', Index: 93, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.RowType = { valueOf: function(){return 'RowType';}, Type: 'PaymentRunExportRowTypeEnum', Index: 94, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport.PaymentRunExport_Lines = { valueOf: function(){return 'PaymentRunExport_Lines';}, Type: 'PaymentRunExport_Line', Index: 95, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PaymentRunExport.prototype.AbsoluteEntry = new Number();
SAPB1.PaymentRunExport.prototype.RunDate = new String();
SAPB1.PaymentRunExport.prototype.VendorNum = new String();
SAPB1.PaymentRunExport.prototype.CustomerNum = new String();
SAPB1.PaymentRunExport.prototype.PaymentMethod = new String();
SAPB1.PaymentRunExport.prototype.DocNum = new Number();
SAPB1.PaymentRunExport.prototype.FiscalYear = new String();
SAPB1.PaymentRunExport.prototype.Countery = new String();
SAPB1.PaymentRunExport.prototype.CompanyTaxNum = new String();
SAPB1.PaymentRunExport.prototype.PayeeName = new String();
SAPB1.PaymentRunExport.prototype.PayeePostalCode = new String();
SAPB1.PaymentRunExport.prototype.PayeeCity = new String();
SAPB1.PaymentRunExport.prototype.PayeeStreet = new String();
SAPB1.PaymentRunExport.prototype.PayeeCountry = new String();
SAPB1.PaymentRunExport.prototype.PayeeState = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankName = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankZip = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankCity = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankStreet = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankCountry = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankAccount = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankCode = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankCtrlKey = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankSwiftNum = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankIBAN = new String();
SAPB1.PaymentRunExport.prototype.PostingDate = new String();
SAPB1.PaymentRunExport.prototype.BankAccount = new String();
SAPB1.PaymentRunExport.prototype.BankCountry = new String();
SAPB1.PaymentRunExport.prototype.BankCode = new String();
SAPB1.PaymentRunExport.prototype.BankIBAN = new String();
SAPB1.PaymentRunExport.prototype.GLAccount = new String();
SAPB1.PaymentRunExport.prototype.Currency = new String();
SAPB1.PaymentRunExport.prototype.DocAmountLocal = new Number();
SAPB1.PaymentRunExport.prototype.DocCurrnecy = new String();
SAPB1.PaymentRunExport.prototype.DocAmountForign = new Number();
SAPB1.PaymentRunExport.prototype.DocCashDiscount = new Number();
SAPB1.PaymentRunExport.prototype.DocCashDiscountForign = new Number();
SAPB1.PaymentRunExport.prototype.DocNumOffieldPaid = new Number();
SAPB1.PaymentRunExport.prototype.DocRate = new Number();
SAPB1.PaymentRunExport.prototype.WizCode = new Number();
SAPB1.PaymentRunExport.prototype.CollectionAuthorization = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankPostOffice = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankNextCheckNumber = new Number();
SAPB1.PaymentRunExport.prototype.PayeeBankHouseBank = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankBlock = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankCounty = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankState = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankBISR = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankUserNum1 = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankUserNum2 = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankUserNum3 = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankUserNum4 = new String();
SAPB1.PaymentRunExport.prototype.InstructionKey = new String();
SAPB1.PaymentRunExport.prototype.PaymentFormat = new String();
SAPB1.PaymentRunExport.prototype.CompanyName = new String();
SAPB1.PaymentRunExport.prototype.CompanyAddress = new String();
SAPB1.PaymentRunExport.prototype.Status = new String();
SAPB1.PaymentRunExport.prototype.CompIsrBillerID = new String();
SAPB1.PaymentRunExport.prototype.VendorIsrBillerID = new String();
SAPB1.PaymentRunExport.prototype.AdditionalIdNumber = new String();
SAPB1.PaymentRunExport.prototype.OrganizationNumber = new String();
SAPB1.PaymentRunExport.prototype.PayeeBankBranch = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankBranch = new String();
SAPB1.PaymentRunExport.prototype.UserName = new String();
SAPB1.PaymentRunExport.prototype.UserEMail = new String();
SAPB1.PaymentRunExport.prototype.UserMobilePhoneNumber = new String();
SAPB1.PaymentRunExport.prototype.UserFaxNumber = new String();
SAPB1.PaymentRunExport.prototype.UserDepartment = new Number();
SAPB1.PaymentRunExport.prototype.DebitMemo = new String();
SAPB1.PaymentRunExport.prototype.EUInternalTransfer = new String();
SAPB1.PaymentRunExport.prototype.FilePath = new String();
SAPB1.PaymentRunExport.prototype.OrderingParty = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankControlKey = new String();
SAPB1.PaymentRunExport.prototype.PayeeTaxNumber = new String();
SAPB1.PaymentRunExport.prototype.PaymentKeyCode = new String();
SAPB1.PaymentRunExport.prototype.PayeeReferenceDetails = new String();
SAPB1.PaymentRunExport.prototype.FormatName = new String();
SAPB1.PaymentRunExport.prototype.PaymentDonewithCheck = new String();
SAPB1.PaymentRunExport.prototype.CompanyBlock = new String();
SAPB1.PaymentRunExport.prototype.CompanyCity = new String();
SAPB1.PaymentRunExport.prototype.CompanyCounty = new String();
SAPB1.PaymentRunExport.prototype.CompanyState = new String();
SAPB1.PaymentRunExport.prototype.CompanyStreet = new String();
SAPB1.PaymentRunExport.prototype.CompanyZipCode = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankCharges = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankUserNo1 = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankUserNo2 = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankUserNo3 = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankUserNo4 = new String();
SAPB1.PaymentRunExport.prototype.PaymentBankChargesAllocationCode = new String();
SAPB1.PaymentRunExport.prototype.PaymentOrderNum = new Number();
SAPB1.PaymentRunExport.prototype.FreeText1 = new String();
SAPB1.PaymentRunExport.prototype.FreeText2 = new String();
SAPB1.PaymentRunExport.prototype.FreeText3 = new String();
SAPB1.PaymentRunExport.prototype.RowType = new String();
SAPB1.PaymentRunExport.prototype.PaymentRunExport_Lines = new PaymentRunExport_LineCollection();

SAPB1.PaymentRunExport.PaymentRunExport_Line = PaymentRunExport_Line
SAPB1.PaymentRunExport.PaymentRunExport_LineCollection = PaymentRunExport_LineCollection

SAPB1.PaymentRunExport.BoYesNoEnum = BoYesNoEnum
SAPB1.PaymentRunExport.BoOpexStatus = BoOpexStatus
SAPB1.PaymentRunExport.PaymentRunExportRowTypeEnum = PaymentRunExportRowTypeEnum

SAPB1.PaymentRunExport.create = function (rawObject) {
    var instance = new SAPB1.PaymentRunExport();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentRunExport.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentRunExport;
