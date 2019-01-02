var TaxReportGroup = require('ComplexType/TaxReportGroup')
var TaxReportGroupCollection = require('ComplexType/TaxReportGroupCollection')
var TaxReportBusinessPartner = require('ComplexType/TaxReportBusinessPartner')
var TaxReportBusinessPartnerCollection = require('ComplexType/TaxReportBusinessPartnerCollection')
var TaxReportDocument = require('ComplexType/TaxReportDocument')
var TaxReportDocumentCollection = require('ComplexType/TaxReportDocumentCollection')
var TaxReportSeries = require('ComplexType/TaxReportSeries')
var TaxReportSeriesCollection = require('ComplexType/TaxReportSeriesCollection')
var TaxReportAccount = require('ComplexType/TaxReportAccount')
var TaxReportAccountCollection = require('ComplexType/TaxReportAccountCollection')

var TaxReportFilterReportLayoutType = require('EnumType/TaxReportFilterReportLayoutType')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var TaxReportFilterDeclarationType = require('EnumType/TaxReportFilterDeclarationType')
var TaxReportFilterType = require('EnumType/TaxReportFilterType')
var TaxReportFilterPeriod = require('EnumType/TaxReportFilterPeriod')
var TaxReportFilterApArDocumentType = require('EnumType/TaxReportFilterApArDocumentType')
var TaxReportFilterQuarterOrDates = require('EnumType/TaxReportFilterQuarterOrDates')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxReportFilter = function () {
}
SAPB1.TaxReportFilter.prototype = new SAPB1.EntityType();
SAPB1.TaxReportFilter.prototype.constructor = SAPB1.TaxReportFilter;
SAPB1.TaxReportFilter.prototype.keys.push('Code');
SAPB1.TaxReportFilter.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.ReportLayout = { valueOf: function(){return 'ReportLayout';}, Type: 'TaxReportFilterReportLayoutType', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.FirstPrintedNumber = { valueOf: function(){return 'FirstPrintedNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.FromDate = { valueOf: function(){return 'FromDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.ToDate = { valueOf: function(){return 'ToDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.RoundAmount = { valueOf: function(){return 'RoundAmount';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.DeclarationType = { valueOf: function(){return 'DeclarationType';}, Type: 'TaxReportFilterDeclarationType', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.FilterType = { valueOf: function(){return 'FilterType';}, Type: 'TaxReportFilterType', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.ExcludeWT = { valueOf: function(){return 'ExcludeWT';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.IncludeCustomers = { valueOf: function(){return 'IncludeCustomers';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.IncludeVendors = { valueOf: function(){return 'IncludeVendors';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.Period = { valueOf: function(){return 'Period';}, Type: 'TaxReportFilterPeriod', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.Quarter = { valueOf: function(){return 'Quarter';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.Year = { valueOf: function(){return 'Year';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'TaxReportFilterApArDocumentType', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.FirstRegisterNumber = { valueOf: function(){return 'FirstRegisterNumber';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.IncludeGLAccounts = { valueOf: function(){return 'IncludeGLAccounts';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.AppendixOorPSelection = { valueOf: function(){return 'AppendixOorPSelection';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.OpeningAndClosingBalance = { valueOf: function(){return 'OpeningAndClosingBalance';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.FromSeries = { valueOf: function(){return 'FromSeries';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.ToSeries = { valueOf: function(){return 'ToSeries';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.Cancellation = { valueOf: function(){return 'Cancellation';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.HideTaxWithoutTransaction = { valueOf: function(){return 'HideTaxWithoutTransaction';}, Type: 'BoYesNoEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.IncludeSeriesFilter = { valueOf: function(){return 'IncludeSeriesFilter';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.IncludeDocumentType = { valueOf: function(){return 'IncludeDocumentType';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.DiplayCreditMemosInSeparateColumn = { valueOf: function(){return 'DiplayCreditMemosInSeparateColumn';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.ShowPaymentsWithDeferredTax = { valueOf: function(){return 'ShowPaymentsWithDeferredTax';}, Type: 'BoYesNoEnum', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.QuarterOrDates = { valueOf: function(){return 'QuarterOrDates';}, Type: 'TaxReportFilterQuarterOrDates', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilter.TaxReportGroups = { valueOf: function(){return 'TaxReportGroups';}, Type: 'TaxReportGroup', Index: 30, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxReportFilter.TaxReportBusinessPartners = { valueOf: function(){return 'TaxReportBusinessPartners';}, Type: 'TaxReportBusinessPartner', Index: 31, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxReportFilter.TaxReportDocuments = { valueOf: function(){return 'TaxReportDocuments';}, Type: 'TaxReportDocument', Index: 32, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxReportFilter.TaxReportSeriesCollection = { valueOf: function(){return 'TaxReportSeriesCollection';}, Type: 'TaxReportSeries', Index: 33, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxReportFilter.TaxReportAccounts = { valueOf: function(){return 'TaxReportAccounts';}, Type: 'TaxReportAccount', Index: 34, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxReportFilter.prototype.Code = new Number();
SAPB1.TaxReportFilter.prototype.Name = new String();
SAPB1.TaxReportFilter.prototype.ReportLayout = new String();
SAPB1.TaxReportFilter.prototype.FirstPrintedNumber = new Number();
SAPB1.TaxReportFilter.prototype.FromDate = new String();
SAPB1.TaxReportFilter.prototype.ToDate = new String();
SAPB1.TaxReportFilter.prototype.TaxDate = new String();
SAPB1.TaxReportFilter.prototype.RoundAmount = new String();
SAPB1.TaxReportFilter.prototype.DeclarationType = new String();
SAPB1.TaxReportFilter.prototype.FilterType = new String();
SAPB1.TaxReportFilter.prototype.ExcludeWT = new String();
SAPB1.TaxReportFilter.prototype.IncludeCustomers = new String();
SAPB1.TaxReportFilter.prototype.IncludeVendors = new String();
SAPB1.TaxReportFilter.prototype.Period = new String();
SAPB1.TaxReportFilter.prototype.Quarter = new Number();
SAPB1.TaxReportFilter.prototype.Year = new Number();
SAPB1.TaxReportFilter.prototype.DocumentType = new String();
SAPB1.TaxReportFilter.prototype.FirstRegisterNumber = new Number();
SAPB1.TaxReportFilter.prototype.IncludeGLAccounts = new String();
SAPB1.TaxReportFilter.prototype.AppendixOorPSelection = new String();
SAPB1.TaxReportFilter.prototype.OpeningAndClosingBalance = new String();
SAPB1.TaxReportFilter.prototype.FromSeries = new Number();
SAPB1.TaxReportFilter.prototype.ToSeries = new Number();
SAPB1.TaxReportFilter.prototype.Cancellation = new String();
SAPB1.TaxReportFilter.prototype.HideTaxWithoutTransaction = new String();
SAPB1.TaxReportFilter.prototype.IncludeSeriesFilter = new String();
SAPB1.TaxReportFilter.prototype.IncludeDocumentType = new String();
SAPB1.TaxReportFilter.prototype.DiplayCreditMemosInSeparateColumn = new String();
SAPB1.TaxReportFilter.prototype.ShowPaymentsWithDeferredTax = new String();
SAPB1.TaxReportFilter.prototype.QuarterOrDates = new String();
SAPB1.TaxReportFilter.prototype.TaxReportGroups = new TaxReportGroupCollection();
SAPB1.TaxReportFilter.prototype.TaxReportBusinessPartners = new TaxReportBusinessPartnerCollection();
SAPB1.TaxReportFilter.prototype.TaxReportDocuments = new TaxReportDocumentCollection();
SAPB1.TaxReportFilter.prototype.TaxReportSeriesCollection = new TaxReportSeriesCollection();
SAPB1.TaxReportFilter.prototype.TaxReportAccounts = new TaxReportAccountCollection();

SAPB1.TaxReportFilter.TaxReportGroup = TaxReportGroup
SAPB1.TaxReportFilter.TaxReportGroupCollection = TaxReportGroupCollection
SAPB1.TaxReportFilter.TaxReportBusinessPartner = TaxReportBusinessPartner
SAPB1.TaxReportFilter.TaxReportBusinessPartnerCollection = TaxReportBusinessPartnerCollection
SAPB1.TaxReportFilter.TaxReportDocument = TaxReportDocument
SAPB1.TaxReportFilter.TaxReportDocumentCollection = TaxReportDocumentCollection
SAPB1.TaxReportFilter.TaxReportSeries = TaxReportSeries
SAPB1.TaxReportFilter.TaxReportSeriesCollection = TaxReportSeriesCollection
SAPB1.TaxReportFilter.TaxReportAccount = TaxReportAccount
SAPB1.TaxReportFilter.TaxReportAccountCollection = TaxReportAccountCollection

SAPB1.TaxReportFilter.TaxReportFilterReportLayoutType = TaxReportFilterReportLayoutType
SAPB1.TaxReportFilter.BoYesNoEnum = BoYesNoEnum
SAPB1.TaxReportFilter.TaxReportFilterDeclarationType = TaxReportFilterDeclarationType
SAPB1.TaxReportFilter.TaxReportFilterType = TaxReportFilterType
SAPB1.TaxReportFilter.TaxReportFilterPeriod = TaxReportFilterPeriod
SAPB1.TaxReportFilter.TaxReportFilterApArDocumentType = TaxReportFilterApArDocumentType
SAPB1.TaxReportFilter.TaxReportFilterQuarterOrDates = TaxReportFilterQuarterOrDates

SAPB1.TaxReportFilter.create = function (rawObject) {
    var instance = new SAPB1.TaxReportFilter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxReportFilter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxReportFilter;
