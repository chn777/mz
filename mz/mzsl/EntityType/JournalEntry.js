var JournalEntryLine = require('ComplexType/JournalEntryLine')
var JournalEntryLineCollection = require('ComplexType/JournalEntryLineCollection')
var WithholdingTaxData = require('ComplexType/WithholdingTaxData')
var WithholdingTaxDataCollection = require('ComplexType/WithholdingTaxDataCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var PrintStatusEnum = require('EnumType/PrintStatusEnum')
var TransTypesEnum = require('EnumType/TransTypesEnum')
var OperationCodeTypeEnum = require('EnumType/OperationCodeTypeEnum')
var ResidenceNumberTypeEnum = require('EnumType/ResidenceNumberTypeEnum')
var ECDPostingTypeEnum = require('EnumType/ECDPostingTypeEnum')
var FolioLetterEnum = require('EnumType/FolioLetterEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.JournalEntry = function () {
}
SAPB1.JournalEntry.prototype = new SAPB1.EntityType();
SAPB1.JournalEntry.prototype.constructor = SAPB1.JournalEntry;
SAPB1.JournalEntry.prototype.keys.push('JdtNum');
SAPB1.JournalEntry.ReferenceDate = { valueOf: function(){return 'ReferenceDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Memo = { valueOf: function(){return 'Memo';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.TransactionCode = { valueOf: function(){return 'TransactionCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.JdtNum = { valueOf: function(){return 'JdtNum';}, Type: 'Edm.Int32', Index: 7, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Indicator = { valueOf: function(){return 'Indicator';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.UseAutoStorno = { valueOf: function(){return 'UseAutoStorno';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.StornoDate = { valueOf: function(){return 'StornoDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.VatDate = { valueOf: function(){return 'VatDate';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 12, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.StampTax = { valueOf: function(){return 'StampTax';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.AutoVAT = { valueOf: function(){return 'AutoVAT';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.Int32', Index: 16, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.FolioNumber = { valueOf: function(){return 'FolioNumber';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.FolioPrefixString = { valueOf: function(){return 'FolioPrefixString';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ReportEU = { valueOf: function(){return 'ReportEU';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Report347 = { valueOf: function(){return 'Report347';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Printed = { valueOf: function(){return 'Printed';}, Type: 'PrintStatusEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.LocationCode = { valueOf: function(){return 'LocationCode';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.OriginalJournal = { valueOf: function(){return 'OriginalJournal';}, Type: 'TransTypesEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Original = { valueOf: function(){return 'Original';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.BaseReference = { valueOf: function(){return 'BaseReference';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.BlockDunningLetter = { valueOf: function(){return 'BlockDunningLetter';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.AutomaticWT = { valueOf: function(){return 'AutomaticWT';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.WTSum = { valueOf: function(){return 'WTSum';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.WTSumSC = { valueOf: function(){return 'WTSumSC';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.WTSumFC = { valueOf: function(){return 'WTSumFC';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.SignatureInputMessage = { valueOf: function(){return 'SignatureInputMessage';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.SignatureDigest = { valueOf: function(){return 'SignatureDigest';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.CertificationNumber = { valueOf: function(){return 'CertificationNumber';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.PrivateKeyVersion = { valueOf: function(){return 'PrivateKeyVersion';}, Type: 'Edm.Int32', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Corisptivi = { valueOf: function(){return 'Corisptivi';}, Type: 'BoYesNoEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Reference3 = { valueOf: function(){return 'Reference3';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.DeferredTax = { valueOf: function(){return 'DeferredTax';}, Type: 'BoYesNoEnum', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.BlanketAgreementNumber = { valueOf: function(){return 'BlanketAgreementNumber';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.OperationCode = { valueOf: function(){return 'OperationCode';}, Type: 'OperationCodeTypeEnum', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ResidenceNumberType = { valueOf: function(){return 'ResidenceNumberType';}, Type: 'ResidenceNumberTypeEnum', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ECDPostingType = { valueOf: function(){return 'ECDPostingType';}, Type: 'ECDPostingTypeEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ExposedTransNumber = { valueOf: function(){return 'ExposedTransNumber';}, Type: 'Edm.Int32', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.PointOfIssueCode = { valueOf: function(){return 'PointOfIssueCode';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.Letter = { valueOf: function(){return 'Letter';}, Type: 'FolioLetterEnum', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.FolioNumberFrom = { valueOf: function(){return 'FolioNumberFrom';}, Type: 'Edm.Int32', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.FolioNumberTo = { valueOf: function(){return 'FolioNumberTo';}, Type: 'Edm.Int32', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.IsCostCenterTransfer = { valueOf: function(){return 'IsCostCenterTransfer';}, Type: 'BoYesNoEnum', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ReportingSectionControlStatementVAT = { valueOf: function(){return 'ReportingSectionControlStatementVAT';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.ExcludeFromTaxReportControlStatementVAT = { valueOf: function(){return 'ExcludeFromTaxReportControlStatementVAT';}, Type: 'BoYesNoEnum', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.U_BPLId = { valueOf: function(){return 'U_BPLId';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.U_BPLName = { valueOf: function(){return 'U_BPLName';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntry.JournalEntryLines = { valueOf: function(){return 'JournalEntryLines';}, Type: 'JournalEntryLine', Index: 53, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.JournalEntry.WithholdingTaxDataCollection = { valueOf: function(){return 'WithholdingTaxDataCollection';}, Type: 'WithholdingTaxData', Index: 54, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.JournalEntry.prototype.ReferenceDate = new String();
SAPB1.JournalEntry.prototype.Memo = new String();
SAPB1.JournalEntry.prototype.Reference = new String();
SAPB1.JournalEntry.prototype.Reference2 = new String();
SAPB1.JournalEntry.prototype.TransactionCode = new String();
SAPB1.JournalEntry.prototype.ProjectCode = new String();
SAPB1.JournalEntry.prototype.TaxDate = new String();
SAPB1.JournalEntry.prototype.JdtNum = new Number();
SAPB1.JournalEntry.prototype.Indicator = new String();
SAPB1.JournalEntry.prototype.UseAutoStorno = new String();
SAPB1.JournalEntry.prototype.StornoDate = new String();
SAPB1.JournalEntry.prototype.VatDate = new String();
SAPB1.JournalEntry.prototype.Series = new Number();
SAPB1.JournalEntry.prototype.StampTax = new String();
SAPB1.JournalEntry.prototype.DueDate = new String();
SAPB1.JournalEntry.prototype.AutoVAT = new String();
SAPB1.JournalEntry.prototype.Number = new Number();
SAPB1.JournalEntry.prototype.FolioNumber = new Number();
SAPB1.JournalEntry.prototype.FolioPrefixString = new String();
SAPB1.JournalEntry.prototype.ReportEU = new String();
SAPB1.JournalEntry.prototype.Report347 = new String();
SAPB1.JournalEntry.prototype.Printed = new String();
SAPB1.JournalEntry.prototype.LocationCode = new Number();
SAPB1.JournalEntry.prototype.OriginalJournal = new String();
SAPB1.JournalEntry.prototype.Original = new Number();
SAPB1.JournalEntry.prototype.BaseReference = new String();
SAPB1.JournalEntry.prototype.BlockDunningLetter = new String();
SAPB1.JournalEntry.prototype.AutomaticWT = new String();
SAPB1.JournalEntry.prototype.WTSum = new Number();
SAPB1.JournalEntry.prototype.WTSumSC = new Number();
SAPB1.JournalEntry.prototype.WTSumFC = new Number();
SAPB1.JournalEntry.prototype.SignatureInputMessage = new String();
SAPB1.JournalEntry.prototype.SignatureDigest = new String();
SAPB1.JournalEntry.prototype.CertificationNumber = new String();
SAPB1.JournalEntry.prototype.PrivateKeyVersion = new Number();
SAPB1.JournalEntry.prototype.Corisptivi = new String();
SAPB1.JournalEntry.prototype.Reference3 = new String();
SAPB1.JournalEntry.prototype.DocumentType = new String();
SAPB1.JournalEntry.prototype.DeferredTax = new String();
SAPB1.JournalEntry.prototype.BlanketAgreementNumber = new Number();
SAPB1.JournalEntry.prototype.OperationCode = new String();
SAPB1.JournalEntry.prototype.ResidenceNumberType = new String();
SAPB1.JournalEntry.prototype.ECDPostingType = new String();
SAPB1.JournalEntry.prototype.ExposedTransNumber = new Number();
SAPB1.JournalEntry.prototype.PointOfIssueCode = new String();
SAPB1.JournalEntry.prototype.Letter = new String();
SAPB1.JournalEntry.prototype.FolioNumberFrom = new Number();
SAPB1.JournalEntry.prototype.FolioNumberTo = new Number();
SAPB1.JournalEntry.prototype.IsCostCenterTransfer = new String();
SAPB1.JournalEntry.prototype.ReportingSectionControlStatementVAT = new String();
SAPB1.JournalEntry.prototype.ExcludeFromTaxReportControlStatementVAT = new String();
SAPB1.JournalEntry.prototype.U_BPLId = new String();
SAPB1.JournalEntry.prototype.U_BPLName = new String();
SAPB1.JournalEntry.prototype.JournalEntryLines = new JournalEntryLineCollection();
SAPB1.JournalEntry.prototype.WithholdingTaxDataCollection = new WithholdingTaxDataCollection();

SAPB1.JournalEntry.JournalEntryLine = JournalEntryLine
SAPB1.JournalEntry.JournalEntryLineCollection = JournalEntryLineCollection
SAPB1.JournalEntry.WithholdingTaxData = WithholdingTaxData
SAPB1.JournalEntry.WithholdingTaxDataCollection = WithholdingTaxDataCollection

SAPB1.JournalEntry.BoYesNoEnum = BoYesNoEnum
SAPB1.JournalEntry.PrintStatusEnum = PrintStatusEnum
SAPB1.JournalEntry.TransTypesEnum = TransTypesEnum
SAPB1.JournalEntry.OperationCodeTypeEnum = OperationCodeTypeEnum
SAPB1.JournalEntry.ResidenceNumberTypeEnum = ResidenceNumberTypeEnum
SAPB1.JournalEntry.ECDPostingTypeEnum = ECDPostingTypeEnum
SAPB1.JournalEntry.FolioLetterEnum = FolioLetterEnum

SAPB1.JournalEntry.create = function (rawObject) {
    var instance = new SAPB1.JournalEntry();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.JournalEntry.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.JournalEntry;
