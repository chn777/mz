var BlanketAgreements_ItemsLine = require('ComplexType/BlanketAgreements_ItemsLine')
var BlanketAgreements_ItemsLineCollection = require('ComplexType/BlanketAgreements_ItemsLineCollection')

var BlanketAgreementTypeEnum = require('EnumType/BlanketAgreementTypeEnum')
var BlanketAgreementStatusEnum = require('EnumType/BlanketAgreementStatusEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoRemindUnits = require('EnumType/BoRemindUnits')
var BlanketAgreementMethodEnum = require('EnumType/BlanketAgreementMethodEnum')
var PriceModeEnum = require('EnumType/PriceModeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BlanketAgreement = function () {
}
SAPB1.BlanketAgreement.prototype = new SAPB1.EntityType();
SAPB1.BlanketAgreement.prototype.constructor = SAPB1.BlanketAgreement;
SAPB1.BlanketAgreement.prototype.keys.push('AgreementNo');
SAPB1.BlanketAgreement.AgreementNo = { valueOf: function(){return 'AgreementNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.BPName = { valueOf: function(){return 'BPName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.ContactPersonCode = { valueOf: function(){return 'ContactPersonCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.TerminateDate = { valueOf: function(){return 'TerminateDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.AgreementType = { valueOf: function(){return 'AgreementType';}, Type: 'BlanketAgreementTypeEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Status = { valueOf: function(){return 'Status';}, Type: 'BlanketAgreementStatusEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.IgnorePricesInAgreement = { valueOf: function(){return 'IgnorePricesInAgreement';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Renewal = { valueOf: function(){return 'Renewal';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.RemindUnit = { valueOf: function(){return 'RemindUnit';}, Type: 'BoRemindUnits', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.RemindTime = { valueOf: function(){return 'RemindTime';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.SettlementProbability = { valueOf: function(){return 'SettlementProbability';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.AgreementMethod = { valueOf: function(){return 'AgreementMethod';}, Type: 'BlanketAgreementMethodEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.PaymentTerms = { valueOf: function(){return 'PaymentTerms';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.SigningDate = { valueOf: function(){return 'SigningDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.AmendmentTo = { valueOf: function(){return 'AmendmentTo';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 24, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.HandWritten = { valueOf: function(){return 'HandWritten';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 26, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.PaymentMethod = { valueOf: function(){return 'PaymentMethod';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.ExchangeRate = { valueOf: function(){return 'ExchangeRate';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.ShippingType = { valueOf: function(){return 'ShippingType';}, Type: 'Edm.Int32', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.NumAtCard = { valueOf: function(){return 'NumAtCard';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.PriceMode = { valueOf: function(){return 'PriceMode';}, Type: 'PriceModeEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.BPCurrency = { valueOf: function(){return 'BPCurrency';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreement.BlanketAgreements_ItemsLines = { valueOf: function(){return 'BlanketAgreements_ItemsLines';}, Type: 'BlanketAgreements_ItemsLine', Index: 34, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BlanketAgreement.prototype.AgreementNo = new Number();
SAPB1.BlanketAgreement.prototype.BPCode = new String();
SAPB1.BlanketAgreement.prototype.BPName = new String();
SAPB1.BlanketAgreement.prototype.ContactPersonCode = new Number();
SAPB1.BlanketAgreement.prototype.StartDate = new String();
SAPB1.BlanketAgreement.prototype.EndDate = new String();
SAPB1.BlanketAgreement.prototype.TerminateDate = new String();
SAPB1.BlanketAgreement.prototype.Description = new String();
SAPB1.BlanketAgreement.prototype.AgreementType = new String();
SAPB1.BlanketAgreement.prototype.Status = new String();
SAPB1.BlanketAgreement.prototype.Owner = new Number();
SAPB1.BlanketAgreement.prototype.IgnorePricesInAgreement = new String();
SAPB1.BlanketAgreement.prototype.Renewal = new String();
SAPB1.BlanketAgreement.prototype.RemindUnit = new String();
SAPB1.BlanketAgreement.prototype.RemindTime = new Number();
SAPB1.BlanketAgreement.prototype.Remarks = new String();
SAPB1.BlanketAgreement.prototype.AttachmentEntry = new Number();
SAPB1.BlanketAgreement.prototype.SettlementProbability = new Number();
SAPB1.BlanketAgreement.prototype.AgreementMethod = new String();
SAPB1.BlanketAgreement.prototype.PaymentTerms = new Number();
SAPB1.BlanketAgreement.prototype.PriceList = new Number();
SAPB1.BlanketAgreement.prototype.SigningDate = new String();
SAPB1.BlanketAgreement.prototype.AmendmentTo = new Number();
SAPB1.BlanketAgreement.prototype.Series = new Number();
SAPB1.BlanketAgreement.prototype.DocNum = new Number();
SAPB1.BlanketAgreement.prototype.HandWritten = new String();
SAPB1.BlanketAgreement.prototype.PeriodIndicator = new String();
SAPB1.BlanketAgreement.prototype.PaymentMethod = new String();
SAPB1.BlanketAgreement.prototype.ExchangeRate = new Number();
SAPB1.BlanketAgreement.prototype.ShippingType = new Number();
SAPB1.BlanketAgreement.prototype.NumAtCard = new String();
SAPB1.BlanketAgreement.prototype.Project = new String();
SAPB1.BlanketAgreement.prototype.PriceMode = new String();
SAPB1.BlanketAgreement.prototype.BPCurrency = new String();
SAPB1.BlanketAgreement.prototype.BlanketAgreements_ItemsLines = new BlanketAgreements_ItemsLineCollection();

SAPB1.BlanketAgreement.BlanketAgreements_ItemsLine = BlanketAgreements_ItemsLine
SAPB1.BlanketAgreement.BlanketAgreements_ItemsLineCollection = BlanketAgreements_ItemsLineCollection

SAPB1.BlanketAgreement.BlanketAgreementTypeEnum = BlanketAgreementTypeEnum
SAPB1.BlanketAgreement.BlanketAgreementStatusEnum = BlanketAgreementStatusEnum
SAPB1.BlanketAgreement.BoYesNoEnum = BoYesNoEnum
SAPB1.BlanketAgreement.BoRemindUnits = BoRemindUnits
SAPB1.BlanketAgreement.BlanketAgreementMethodEnum = BlanketAgreementMethodEnum
SAPB1.BlanketAgreement.PriceModeEnum = PriceModeEnum

SAPB1.BlanketAgreement.create = function (rawObject) {
    var instance = new SAPB1.BlanketAgreement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BlanketAgreement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BlanketAgreement;
