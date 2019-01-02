
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoAccountTypes = require('EnumType/BoAccountTypes')
var SPEDContabilAccountPurposeCode = require('EnumType/SPEDContabilAccountPurposeCode')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChartOfAccount = function () {
}
SAPB1.ChartOfAccount.prototype = new SAPB1.EntityType();
SAPB1.ChartOfAccount.prototype.constructor = SAPB1.ChartOfAccount;
SAPB1.ChartOfAccount.prototype.keys.push('Code');
SAPB1.ChartOfAccount.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Balance = { valueOf: function(){return 'Balance';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.CashAccount = { valueOf: function(){return 'CashAccount';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.BudgetAccount = { valueOf: function(){return 'BudgetAccount';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ActiveAccount = { valueOf: function(){return 'ActiveAccount';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.PrimaryAccount = { valueOf: function(){return 'PrimaryAccount';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.AccountLevel = { valueOf: function(){return 'AccountLevel';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DataExportCode = { valueOf: function(){return 'DataExportCode';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.FatherAccountKey = { valueOf: function(){return 'FatherAccountKey';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ExternalCode = { valueOf: function(){return 'ExternalCode';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.RateConversion = { valueOf: function(){return 'RateConversion';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.TaxLiableAccount = { valueOf: function(){return 'TaxLiableAccount';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.TaxExemptAccount = { valueOf: function(){return 'TaxExemptAccount';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ExternalReconNo = { valueOf: function(){return 'ExternalReconNo';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.InternalReconNo = { valueOf: function(){return 'InternalReconNo';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.AccountType = { valueOf: function(){return 'AccountType';}, Type: 'BoAccountTypes', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.AcctCurrency = { valueOf: function(){return 'AcctCurrency';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Balance_syscurr = { valueOf: function(){return 'Balance_syscurr';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Balance_FrgnCurr = { valueOf: function(){return 'Balance_FrgnCurr';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Protected = { valueOf: function(){return 'Protected';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ReconciledAccount = { valueOf: function(){return 'ReconciledAccount';}, Type: 'BoYesNoEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LiableForAdvances = { valueOf: function(){return 'LiableForAdvances';}, Type: 'BoYesNoEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ForeignName = { valueOf: function(){return 'ForeignName';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.RevaluationCoordinated = { valueOf: function(){return 'RevaluationCoordinated';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LockManualTransaction = { valueOf: function(){return 'LockManualTransaction';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.FormatCode = { valueOf: function(){return 'FormatCode';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.AllowChangeVatGroup = { valueOf: function(){return 'AllowChangeVatGroup';}, Type: 'BoYesNoEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DefaultVatGroup = { valueOf: function(){return 'DefaultVatGroup';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.Category = { valueOf: function(){return 'Category';}, Type: 'Edm.Int32', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.TransactionCode = { valueOf: function(){return 'TransactionCode';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LoadingType = { valueOf: function(){return 'LoadingType';}, Type: 'BoYesNoEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LoadingFactorCode = { valueOf: function(){return 'LoadingFactorCode';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LoadingFactorCode2 = { valueOf: function(){return 'LoadingFactorCode2';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LoadingFactorCode3 = { valueOf: function(){return 'LoadingFactorCode3';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LoadingFactorCode4 = { valueOf: function(){return 'LoadingFactorCode4';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.LoadingFactorCode5 = { valueOf: function(){return 'LoadingFactorCode5';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.PlanningLevel = { valueOf: function(){return 'PlanningLevel';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DatevAccount = { valueOf: function(){return 'DatevAccount';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DatevAutoAccount = { valueOf: function(){return 'DatevAutoAccount';}, Type: 'BoYesNoEnum', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DatevFirstDataEntry = { valueOf: function(){return 'DatevFirstDataEntry';}, Type: 'BoYesNoEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.AllowMultipleLinking = { valueOf: function(){return 'AllowMultipleLinking';}, Type: 'BoYesNoEnum', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ProjectRelevant = { valueOf: function(){return 'ProjectRelevant';}, Type: 'BoYesNoEnum', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DistributionRuleRelevant = { valueOf: function(){return 'DistributionRuleRelevant';}, Type: 'BoYesNoEnum', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DistributionRule2Relevant = { valueOf: function(){return 'DistributionRule2Relevant';}, Type: 'BoYesNoEnum', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DistributionRule3Relevant = { valueOf: function(){return 'DistributionRule3Relevant';}, Type: 'BoYesNoEnum', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DistributionRule4Relevant = { valueOf: function(){return 'DistributionRule4Relevant';}, Type: 'BoYesNoEnum', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.DistributionRule5Relevant = { valueOf: function(){return 'DistributionRule5Relevant';}, Type: 'BoYesNoEnum', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.BPLName = { valueOf: function(){return 'BPLName';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.VATRegNum = { valueOf: function(){return 'VATRegNum';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.AccountPurposeCode = { valueOf: function(){return 'AccountPurposeCode';}, Type: 'SPEDContabilAccountPurposeCode', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ReferentialAccountCode = { valueOf: function(){return 'ReferentialAccountCode';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ValidFor = { valueOf: function(){return 'ValidFor';}, Type: 'BoYesNoEnum', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.ValidRemarks = { valueOf: function(){return 'ValidRemarks';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.FrozenFor = { valueOf: function(){return 'FrozenFor';}, Type: 'BoYesNoEnum', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.FrozenFrom = { valueOf: function(){return 'FrozenFrom';}, Type: 'Edm.DateTime', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.FrozenTo = { valueOf: function(){return 'FrozenTo';}, Type: 'Edm.DateTime', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.FrozenRemarks = { valueOf: function(){return 'FrozenRemarks';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.BlockManualPosting = { valueOf: function(){return 'BlockManualPosting';}, Type: 'BoYesNoEnum', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.CashFlowRelevant = { valueOf: function(){return 'CashFlowRelevant';}, Type: 'BoYesNoEnum', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.PCN874ReportRelevant = { valueOf: function(){return 'PCN874ReportRelevant';}, Type: 'BoYesNoEnum', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.PrimaryClosingAccount = { valueOf: function(){return 'PrimaryClosingAccount';}, Type: 'Edm.String', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.CostAccountingOnly = { valueOf: function(){return 'CostAccountingOnly';}, Type: 'BoYesNoEnum', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.CostElementRelevant = { valueOf: function(){return 'CostElementRelevant';}, Type: 'BoYesNoEnum', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.CostElementCode = { valueOf: function(){return 'CostElementCode';}, Type: 'Edm.String', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccount.prototype.Code = new String();
SAPB1.ChartOfAccount.prototype.Name = new String();
SAPB1.ChartOfAccount.prototype.Balance = new Number();
SAPB1.ChartOfAccount.prototype.CashAccount = new String();
SAPB1.ChartOfAccount.prototype.BudgetAccount = new String();
SAPB1.ChartOfAccount.prototype.ActiveAccount = new String();
SAPB1.ChartOfAccount.prototype.PrimaryAccount = new String();
SAPB1.ChartOfAccount.prototype.AccountLevel = new Number();
SAPB1.ChartOfAccount.prototype.DataExportCode = new String();
SAPB1.ChartOfAccount.prototype.FatherAccountKey = new String();
SAPB1.ChartOfAccount.prototype.ExternalCode = new String();
SAPB1.ChartOfAccount.prototype.RateConversion = new String();
SAPB1.ChartOfAccount.prototype.TaxLiableAccount = new String();
SAPB1.ChartOfAccount.prototype.TaxExemptAccount = new String();
SAPB1.ChartOfAccount.prototype.ExternalReconNo = new Number();
SAPB1.ChartOfAccount.prototype.InternalReconNo = new Number();
SAPB1.ChartOfAccount.prototype.AccountType = new String();
SAPB1.ChartOfAccount.prototype.AcctCurrency = new String();
SAPB1.ChartOfAccount.prototype.Balance_syscurr = new Number();
SAPB1.ChartOfAccount.prototype.Balance_FrgnCurr = new Number();
SAPB1.ChartOfAccount.prototype.Protected = new String();
SAPB1.ChartOfAccount.prototype.ReconciledAccount = new String();
SAPB1.ChartOfAccount.prototype.LiableForAdvances = new String();
SAPB1.ChartOfAccount.prototype.ForeignName = new String();
SAPB1.ChartOfAccount.prototype.Details = new String();
SAPB1.ChartOfAccount.prototype.ProjectCode = new String();
SAPB1.ChartOfAccount.prototype.RevaluationCoordinated = new String();
SAPB1.ChartOfAccount.prototype.LockManualTransaction = new String();
SAPB1.ChartOfAccount.prototype.FormatCode = new String();
SAPB1.ChartOfAccount.prototype.AllowChangeVatGroup = new String();
SAPB1.ChartOfAccount.prototype.DefaultVatGroup = new String();
SAPB1.ChartOfAccount.prototype.Category = new Number();
SAPB1.ChartOfAccount.prototype.TransactionCode = new String();
SAPB1.ChartOfAccount.prototype.LoadingType = new String();
SAPB1.ChartOfAccount.prototype.LoadingFactorCode = new String();
SAPB1.ChartOfAccount.prototype.LoadingFactorCode2 = new String();
SAPB1.ChartOfAccount.prototype.LoadingFactorCode3 = new String();
SAPB1.ChartOfAccount.prototype.LoadingFactorCode4 = new String();
SAPB1.ChartOfAccount.prototype.LoadingFactorCode5 = new String();
SAPB1.ChartOfAccount.prototype.PlanningLevel = new String();
SAPB1.ChartOfAccount.prototype.DatevAccount = new String();
SAPB1.ChartOfAccount.prototype.DatevAutoAccount = new String();
SAPB1.ChartOfAccount.prototype.DatevFirstDataEntry = new String();
SAPB1.ChartOfAccount.prototype.AllowMultipleLinking = new String();
SAPB1.ChartOfAccount.prototype.ProjectRelevant = new String();
SAPB1.ChartOfAccount.prototype.DistributionRuleRelevant = new String();
SAPB1.ChartOfAccount.prototype.DistributionRule2Relevant = new String();
SAPB1.ChartOfAccount.prototype.DistributionRule3Relevant = new String();
SAPB1.ChartOfAccount.prototype.DistributionRule4Relevant = new String();
SAPB1.ChartOfAccount.prototype.DistributionRule5Relevant = new String();
SAPB1.ChartOfAccount.prototype.BPLID = new Number();
SAPB1.ChartOfAccount.prototype.BPLName = new String();
SAPB1.ChartOfAccount.prototype.VATRegNum = new String();
SAPB1.ChartOfAccount.prototype.AccountPurposeCode = new String();
SAPB1.ChartOfAccount.prototype.ReferentialAccountCode = new String();
SAPB1.ChartOfAccount.prototype.ValidFor = new String();
SAPB1.ChartOfAccount.prototype.ValidFrom = new String();
SAPB1.ChartOfAccount.prototype.ValidTo = new String();
SAPB1.ChartOfAccount.prototype.ValidRemarks = new String();
SAPB1.ChartOfAccount.prototype.FrozenFor = new String();
SAPB1.ChartOfAccount.prototype.FrozenFrom = new String();
SAPB1.ChartOfAccount.prototype.FrozenTo = new String();
SAPB1.ChartOfAccount.prototype.FrozenRemarks = new String();
SAPB1.ChartOfAccount.prototype.BlockManualPosting = new String();
SAPB1.ChartOfAccount.prototype.CashFlowRelevant = new String();
SAPB1.ChartOfAccount.prototype.PCN874ReportRelevant = new String();
SAPB1.ChartOfAccount.prototype.PrimaryClosingAccount = new String();
SAPB1.ChartOfAccount.prototype.CostAccountingOnly = new String();
SAPB1.ChartOfAccount.prototype.CostElementRelevant = new String();
SAPB1.ChartOfAccount.prototype.CostElementCode = new String();


SAPB1.ChartOfAccount.BoYesNoEnum = BoYesNoEnum
SAPB1.ChartOfAccount.BoAccountTypes = BoAccountTypes
SAPB1.ChartOfAccount.SPEDContabilAccountPurposeCode = SPEDContabilAccountPurposeCode

SAPB1.ChartOfAccount.create = function (rawObject) {
    var instance = new SAPB1.ChartOfAccount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChartOfAccount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChartOfAccount;
