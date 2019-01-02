var LineExpenseTaxJurisdiction = require('ComplexType/LineExpenseTaxJurisdiction')
var LineExpenseTaxJurisdictionCollection = require('ComplexType/LineExpenseTaxJurisdictionCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoAdEpnsTaxTypes = require('EnumType/BoAdEpnsTaxTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentLineAdditionalExpense = function () {
}
SAPB1.DocumentLineAdditionalExpense.prototype = new SAPB1.ComplexType();
SAPB1.DocumentLineAdditionalExpense.prototype.constructor = SAPB1.DocumentLineAdditionalExpense;
SAPB1.DocumentLineAdditionalExpense.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.ExpenseCode = { valueOf: function(){return 'ExpenseCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.LineTotal = { valueOf: function(){return 'LineTotal';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.LineTotalFC = { valueOf: function(){return 'LineTotalFC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.LineTotalSys = { valueOf: function(){return 'LineTotalSys';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.PaidToDate = { valueOf: function(){return 'PaidToDate';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.PaidToDateFC = { valueOf: function(){return 'PaidToDateFC';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.PaidToDateSys = { valueOf: function(){return 'PaidToDateSys';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxLiable = { valueOf: function(){return 'TaxLiable';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.VatGroup = { valueOf: function(){return 'VatGroup';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxPercent = { valueOf: function(){return 'TaxPercent';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxSum = { valueOf: function(){return 'TaxSum';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxSumFC = { valueOf: function(){return 'TaxSumFC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxSumSys = { valueOf: function(){return 'TaxSumSys';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DeductibleTaxSum = { valueOf: function(){return 'DeductibleTaxSum';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DeductibleTaxSumFC = { valueOf: function(){return 'DeductibleTaxSumFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DeductibleTaxSumSys = { valueOf: function(){return 'DeductibleTaxSumSys';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.AquisitionTax = { valueOf: function(){return 'AquisitionTax';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxType = { valueOf: function(){return 'TaxType';}, Type: 'BoAdEpnsTaxTypes', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxPaid = { valueOf: function(){return 'TaxPaid';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxPaidFC = { valueOf: function(){return 'TaxPaidFC';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxPaidSys = { valueOf: function(){return 'TaxPaidSys';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.EqualizationTaxPercent = { valueOf: function(){return 'EqualizationTaxPercent';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.EqualizationTaxSum = { valueOf: function(){return 'EqualizationTaxSum';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.EqualizationTaxFC = { valueOf: function(){return 'EqualizationTaxFC';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.EqualizationTaxSys = { valueOf: function(){return 'EqualizationTaxSys';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxTotalSum = { valueOf: function(){return 'TaxTotalSum';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxTotalSumFC = { valueOf: function(){return 'TaxTotalSumFC';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.TaxTotalSumSys = { valueOf: function(){return 'TaxTotalSumSys';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.WTLiable = { valueOf: function(){return 'WTLiable';}, Type: 'BoYesNoEnum', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.BaseGroup = { valueOf: function(){return 'BaseGroup';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLineAdditionalExpense.LineExpenseTaxJurisdictions = { valueOf: function(){return 'LineExpenseTaxJurisdictions';}, Type: 'LineExpenseTaxJurisdiction', Index: 39, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DocumentLineAdditionalExpense.prototype.LineNumber = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.GroupCode = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.ExpenseCode = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.LineTotal = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.LineTotalFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.LineTotalSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.PaidToDate = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.PaidToDateFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.PaidToDateSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxLiable = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.VatGroup = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxPercent = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxSum = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxSumFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxSumSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.DeductibleTaxSum = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.DeductibleTaxSumFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.DeductibleTaxSumSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.AquisitionTax = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxCode = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxType = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxPaid = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxPaidFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxPaidSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.EqualizationTaxPercent = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.EqualizationTaxSum = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.EqualizationTaxFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.EqualizationTaxSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxTotalSum = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxTotalSumFC = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.TaxTotalSumSys = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.WTLiable = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.BaseGroup = new Number();
SAPB1.DocumentLineAdditionalExpense.prototype.DistributionRule = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.Project = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.DistributionRule2 = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.DistributionRule3 = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.DistributionRule4 = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.DistributionRule5 = new String();
SAPB1.DocumentLineAdditionalExpense.prototype.LineExpenseTaxJurisdictions = new LineExpenseTaxJurisdictionCollection();

SAPB1.DocumentLineAdditionalExpense.LineExpenseTaxJurisdiction = LineExpenseTaxJurisdiction
SAPB1.DocumentLineAdditionalExpense.LineExpenseTaxJurisdictionCollection = LineExpenseTaxJurisdictionCollection

SAPB1.DocumentLineAdditionalExpense.BoYesNoEnum = BoYesNoEnum
SAPB1.DocumentLineAdditionalExpense.BoAdEpnsTaxTypes = BoAdEpnsTaxTypes

SAPB1.DocumentLineAdditionalExpense.create = function (rawObject) {
    var instance = new SAPB1.DocumentLineAdditionalExpense();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentLineAdditionalExpense.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentLineAdditionalExpense;
