var DocExpenseTaxJurisdiction = require('ComplexType/DocExpenseTaxJurisdiction')
var DocExpenseTaxJurisdictionCollection = require('ComplexType/DocExpenseTaxJurisdictionCollection')

var BoAdEpnsDistribMethods = require('EnumType/BoAdEpnsDistribMethods')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoAdEpnsTaxTypes = require('EnumType/BoAdEpnsTaxTypes')
var BoStatus = require('EnumType/BoStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentAdditionalExpense = function () {
}
SAPB1.DocumentAdditionalExpense.prototype = new SAPB1.ComplexType();
SAPB1.DocumentAdditionalExpense.prototype.constructor = SAPB1.DocumentAdditionalExpense;
SAPB1.DocumentAdditionalExpense.ExpenseCode = { valueOf: function(){return 'ExpenseCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineTotal = { valueOf: function(){return 'LineTotal';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineTotalFC = { valueOf: function(){return 'LineTotalFC';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineTotalSys = { valueOf: function(){return 'LineTotalSys';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.PaidToDate = { valueOf: function(){return 'PaidToDate';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.PaidToDateFC = { valueOf: function(){return 'PaidToDateFC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.PaidToDateSys = { valueOf: function(){return 'PaidToDateSys';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DistributionMethod = { valueOf: function(){return 'DistributionMethod';}, Type: 'BoAdEpnsDistribMethods', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxLiable = { valueOf: function(){return 'TaxLiable';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.VatGroup = { valueOf: function(){return 'VatGroup';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxPercent = { valueOf: function(){return 'TaxPercent';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxSum = { valueOf: function(){return 'TaxSum';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxSumFC = { valueOf: function(){return 'TaxSumFC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxSumSys = { valueOf: function(){return 'TaxSumSys';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DeductibleTaxSum = { valueOf: function(){return 'DeductibleTaxSum';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DeductibleTaxSumFC = { valueOf: function(){return 'DeductibleTaxSumFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DeductibleTaxSumSys = { valueOf: function(){return 'DeductibleTaxSumSys';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.AquisitionTax = { valueOf: function(){return 'AquisitionTax';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxType = { valueOf: function(){return 'TaxType';}, Type: 'BoAdEpnsTaxTypes', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxPaid = { valueOf: function(){return 'TaxPaid';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxPaidFC = { valueOf: function(){return 'TaxPaidFC';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxPaidSys = { valueOf: function(){return 'TaxPaidSys';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.EqualizationTaxPercent = { valueOf: function(){return 'EqualizationTaxPercent';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.EqualizationTaxSum = { valueOf: function(){return 'EqualizationTaxSum';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.EqualizationTaxFC = { valueOf: function(){return 'EqualizationTaxFC';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.EqualizationTaxSys = { valueOf: function(){return 'EqualizationTaxSys';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxTotalSum = { valueOf: function(){return 'TaxTotalSum';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxTotalSumFC = { valueOf: function(){return 'TaxTotalSumFC';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TaxTotalSumSys = { valueOf: function(){return 'TaxTotalSumSys';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.BaseDocEntry = { valueOf: function(){return 'BaseDocEntry';}, Type: 'Edm.Int32', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.BaseDocLine = { valueOf: function(){return 'BaseDocLine';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.BaseDocType = { valueOf: function(){return 'BaseDocType';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.BaseDocumentReference = { valueOf: function(){return 'BaseDocumentReference';}, Type: 'Edm.Int32', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 35, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LastPurchasePrice = { valueOf: function(){return 'LastPurchasePrice';}, Type: 'BoYesNoEnum', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.Status = { valueOf: function(){return 'Status';}, Type: 'BoStatus', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.Stock = { valueOf: function(){return 'Stock';}, Type: 'BoYesNoEnum', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TargetAbsEntry = { valueOf: function(){return 'TargetAbsEntry';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.TargetType = { valueOf: function(){return 'TargetType';}, Type: 'Edm.Int32', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.WTLiable = { valueOf: function(){return 'WTLiable';}, Type: 'BoYesNoEnum', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineGross = { valueOf: function(){return 'LineGross';}, Type: 'Edm.Double', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineGrossSys = { valueOf: function(){return 'LineGrossSys';}, Type: 'Edm.Double', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.LineGrossFC = { valueOf: function(){return 'LineGrossFC';}, Type: 'Edm.Double', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentAdditionalExpense.DocExpenseTaxJurisdictions = { valueOf: function(){return 'DocExpenseTaxJurisdictions';}, Type: 'DocExpenseTaxJurisdiction', Index: 51, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DocumentAdditionalExpense.prototype.ExpenseCode = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LineTotal = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LineTotalFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LineTotalSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.PaidToDate = new Number();
SAPB1.DocumentAdditionalExpense.prototype.PaidToDateFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.PaidToDateSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.Remarks = new String();
SAPB1.DocumentAdditionalExpense.prototype.DistributionMethod = new String();
SAPB1.DocumentAdditionalExpense.prototype.TaxLiable = new String();
SAPB1.DocumentAdditionalExpense.prototype.VatGroup = new String();
SAPB1.DocumentAdditionalExpense.prototype.TaxPercent = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxSum = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxSumFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxSumSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.DeductibleTaxSum = new Number();
SAPB1.DocumentAdditionalExpense.prototype.DeductibleTaxSumFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.DeductibleTaxSumSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.AquisitionTax = new String();
SAPB1.DocumentAdditionalExpense.prototype.TaxCode = new String();
SAPB1.DocumentAdditionalExpense.prototype.TaxType = new String();
SAPB1.DocumentAdditionalExpense.prototype.TaxPaid = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxPaidFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxPaidSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.EqualizationTaxPercent = new Number();
SAPB1.DocumentAdditionalExpense.prototype.EqualizationTaxSum = new Number();
SAPB1.DocumentAdditionalExpense.prototype.EqualizationTaxFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.EqualizationTaxSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxTotalSum = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxTotalSumFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TaxTotalSumSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.BaseDocEntry = new Number();
SAPB1.DocumentAdditionalExpense.prototype.BaseDocLine = new Number();
SAPB1.DocumentAdditionalExpense.prototype.BaseDocType = new Number();
SAPB1.DocumentAdditionalExpense.prototype.BaseDocumentReference = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LineNum = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LastPurchasePrice = new String();
SAPB1.DocumentAdditionalExpense.prototype.Status = new String();
SAPB1.DocumentAdditionalExpense.prototype.Stock = new String();
SAPB1.DocumentAdditionalExpense.prototype.TargetAbsEntry = new Number();
SAPB1.DocumentAdditionalExpense.prototype.TargetType = new Number();
SAPB1.DocumentAdditionalExpense.prototype.WTLiable = new String();
SAPB1.DocumentAdditionalExpense.prototype.DistributionRule = new String();
SAPB1.DocumentAdditionalExpense.prototype.Project = new String();
SAPB1.DocumentAdditionalExpense.prototype.DistributionRule2 = new String();
SAPB1.DocumentAdditionalExpense.prototype.DistributionRule3 = new String();
SAPB1.DocumentAdditionalExpense.prototype.DistributionRule4 = new String();
SAPB1.DocumentAdditionalExpense.prototype.DistributionRule5 = new String();
SAPB1.DocumentAdditionalExpense.prototype.LineGross = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LineGrossSys = new Number();
SAPB1.DocumentAdditionalExpense.prototype.LineGrossFC = new Number();
SAPB1.DocumentAdditionalExpense.prototype.DocExpenseTaxJurisdictions = new DocExpenseTaxJurisdictionCollection();

SAPB1.DocumentAdditionalExpense.DocExpenseTaxJurisdiction = DocExpenseTaxJurisdiction
SAPB1.DocumentAdditionalExpense.DocExpenseTaxJurisdictionCollection = DocExpenseTaxJurisdictionCollection

SAPB1.DocumentAdditionalExpense.BoAdEpnsDistribMethods = BoAdEpnsDistribMethods
SAPB1.DocumentAdditionalExpense.BoYesNoEnum = BoYesNoEnum
SAPB1.DocumentAdditionalExpense.BoAdEpnsTaxTypes = BoAdEpnsTaxTypes
SAPB1.DocumentAdditionalExpense.BoStatus = BoStatus

SAPB1.DocumentAdditionalExpense.create = function (rawObject) {
    var instance = new SAPB1.DocumentAdditionalExpense();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentAdditionalExpense.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentAdditionalExpense;
