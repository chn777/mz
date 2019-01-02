
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoBaseDateRateEnum = require('EnumType/BoBaseDateRateEnum')
var BoManageMethod = require('EnumType/BoManageMethod')
var TaxCalcSysEnum = require('EnumType/TaxCalcSysEnum')
var BoSuppLangs = require('EnumType/BoSuppLangs')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CompanyInfo = function () {
}
SAPB1.CompanyInfo.prototype = new SAPB1.ComplexType();
SAPB1.CompanyInfo.prototype.constructor = SAPB1.CompanyInfo;
SAPB1.CompanyInfo.Version = { valueOf: function(){return 'Version';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableExpensesManagement = { valueOf: function(){return 'EnableExpensesManagement';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableAccountSegmentation = { valueOf: function(){return 'EnableAccountSegmentation';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableBillOfExchange = { valueOf: function(){return 'EnableBillOfExchange';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BaseDateForExchangeRate = { valueOf: function(){return 'BaseDateForExchangeRate';}, Type: 'BoBaseDateRateEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BISRBankActKey = { valueOf: function(){return 'BISRBankActKey';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BISRBankCountry = { valueOf: function(){return 'BISRBankCountry';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BISRBankNo = { valueOf: function(){return 'BISRBankNo';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BISRBankAccount = { valueOf: function(){return 'BISRBankAccount';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BISRBranch = { valueOf: function(){return 'BISRBranch';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.MaxRecordsInChooseFromList = { valueOf: function(){return 'MaxRecordsInChooseFromList';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableCheckQuantityInRDR = { valueOf: function(){return 'EnableCheckQuantityInRDR';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.SRIManagementSystem = { valueOf: function(){return 'SRIManagementSystem';}, Type: 'BoManageMethod', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.AutoSRICreationOnReceipt = { valueOf: function(){return 'AutoSRICreationOnReceipt';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.IEPSPayer = { valueOf: function(){return 'IEPSPayer';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.DefaultDaysForOrdCanc = { valueOf: function(){return 'DefaultDaysForOrdCanc';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.PercentOfTotalAcquisition = { valueOf: function(){return 'PercentOfTotalAcquisition';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.MinimumBaseAmountPerDoc = { valueOf: function(){return 'MinimumBaseAmountPerDoc';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableSharingSeries = { valueOf: function(){return 'EnableSharingSeries';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.DataOwnershipIndication = { valueOf: function(){return 'DataOwnershipIndication';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.MinimumAmountForAppndixOP = { valueOf: function(){return 'MinimumAmountForAppndixOP';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.DisplayTransactionsByDflt = { valueOf: function(){return 'DisplayTransactionsByDflt';}, Type: 'BoYesNoEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.DefaultStampTax = { valueOf: function(){return 'DefaultStampTax';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.MinimumAmountForAnnualList = { valueOf: function(){return 'MinimumAmountForAnnualList';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.BlockStockNegativeQuantity = { valueOf: function(){return 'BlockStockNegativeQuantity';}, Type: 'BoYesNoEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.AutoCreateCustomerEqCard = { valueOf: function(){return 'AutoCreateCustomerEqCard';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.MaxNumberOfDocumentsInPmt = { valueOf: function(){return 'MaxNumberOfDocumentsInPmt';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableStockRelNoCostPrice = { valueOf: function(){return 'EnableStockRelNoCostPrice';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.CompanyName = { valueOf: function(){return 'CompanyName';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.GroupLinesInVATCalculation = { valueOf: function(){return 'GroupLinesInVATCalculation';}, Type: 'BoYesNoEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.TaxCalculationSystem = { valueOf: function(){return 'TaxCalculationSystem';}, Type: 'TaxCalcSysEnum', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableTransactionNotification = { valueOf: function(){return 'EnableTransactionNotification';}, Type: 'BoYesNoEnum', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.EnableConversionDifferentAcct = { valueOf: function(){return 'EnableConversionDifferentAcct';}, Type: 'BoYesNoEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.B1iTimeOut = { valueOf: function(){return 'B1iTimeOut';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.LanguageCode = { valueOf: function(){return 'LanguageCode';}, Type: 'BoSuppLangs', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CompanyInfo.prototype.Version = new Number();
SAPB1.CompanyInfo.prototype.EnableExpensesManagement = new String();
SAPB1.CompanyInfo.prototype.EnableAccountSegmentation = new String();
SAPB1.CompanyInfo.prototype.EnableBillOfExchange = new String();
SAPB1.CompanyInfo.prototype.BaseDateForExchangeRate = new String();
SAPB1.CompanyInfo.prototype.BISRBankActKey = new Number();
SAPB1.CompanyInfo.prototype.BISRBankCountry = new String();
SAPB1.CompanyInfo.prototype.BISRBankNo = new String();
SAPB1.CompanyInfo.prototype.BISRBankAccount = new String();
SAPB1.CompanyInfo.prototype.BISRBranch = new String();
SAPB1.CompanyInfo.prototype.MaxRecordsInChooseFromList = new Number();
SAPB1.CompanyInfo.prototype.EnableCheckQuantityInRDR = new String();
SAPB1.CompanyInfo.prototype.SRIManagementSystem = new String();
SAPB1.CompanyInfo.prototype.AutoSRICreationOnReceipt = new String();
SAPB1.CompanyInfo.prototype.IEPSPayer = new String();
SAPB1.CompanyInfo.prototype.DefaultDaysForOrdCanc = new Number();
SAPB1.CompanyInfo.prototype.PercentOfTotalAcquisition = new Number();
SAPB1.CompanyInfo.prototype.MinimumBaseAmountPerDoc = new Number();
SAPB1.CompanyInfo.prototype.EnableSharingSeries = new String();
SAPB1.CompanyInfo.prototype.DataOwnershipIndication = new String();
SAPB1.CompanyInfo.prototype.MinimumAmountForAppndixOP = new Number();
SAPB1.CompanyInfo.prototype.DisplayTransactionsByDflt = new String();
SAPB1.CompanyInfo.prototype.DefaultStampTax = new String();
SAPB1.CompanyInfo.prototype.MinimumAmountForAnnualList = new Number();
SAPB1.CompanyInfo.prototype.BlockStockNegativeQuantity = new String();
SAPB1.CompanyInfo.prototype.AutoCreateCustomerEqCard = new String();
SAPB1.CompanyInfo.prototype.MaxNumberOfDocumentsInPmt = new Number();
SAPB1.CompanyInfo.prototype.EnableStockRelNoCostPrice = new String();
SAPB1.CompanyInfo.prototype.CompanyName = new String();
SAPB1.CompanyInfo.prototype.GroupLinesInVATCalculation = new String();
SAPB1.CompanyInfo.prototype.TaxCalculationSystem = new String();
SAPB1.CompanyInfo.prototype.EnableTransactionNotification = new String();
SAPB1.CompanyInfo.prototype.EnableConversionDifferentAcct = new String();
SAPB1.CompanyInfo.prototype.B1iTimeOut = new Number();
SAPB1.CompanyInfo.prototype.LanguageCode = new String();


SAPB1.CompanyInfo.BoYesNoEnum = BoYesNoEnum
SAPB1.CompanyInfo.BoBaseDateRateEnum = BoBaseDateRateEnum
SAPB1.CompanyInfo.BoManageMethod = BoManageMethod
SAPB1.CompanyInfo.TaxCalcSysEnum = TaxCalcSysEnum
SAPB1.CompanyInfo.BoSuppLangs = BoSuppLangs

SAPB1.CompanyInfo.create = function (rawObject) {
    var instance = new SAPB1.CompanyInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CompanyInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CompanyInfo;
