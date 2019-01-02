var CashFlowAssignment = require('ComplexType/CashFlowAssignment')
var CashFlowAssignmentCollection = require('ComplexType/CashFlowAssignmentCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoTaxPostAccEnum = require('EnumType/BoTaxPostAccEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.JournalEntryLine = function () {
}
SAPB1.JournalEntryLine.prototype = new SAPB1.ComplexType();
SAPB1.JournalEntryLine.prototype.constructor = SAPB1.JournalEntryLine;
SAPB1.JournalEntryLine.Line_ID = { valueOf: function(){return 'Line_ID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.Debit = { valueOf: function(){return 'Debit';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.Credit = { valueOf: function(){return 'Credit';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.FCDebit = { valueOf: function(){return 'FCDebit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.FCCredit = { valueOf: function(){return 'FCCredit';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.FCCurrency = { valueOf: function(){return 'FCCurrency';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ContraAccount = { valueOf: function(){return 'ContraAccount';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.LineMemo = { valueOf: function(){return 'LineMemo';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ReferenceDate1 = { valueOf: function(){return 'ReferenceDate1';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ReferenceDate2 = { valueOf: function(){return 'ReferenceDate2';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.Reference1 = { valueOf: function(){return 'Reference1';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CostingCode = { valueOf: function(){return 'CostingCode';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.BaseSum = { valueOf: function(){return 'BaseSum';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.TaxGroup = { valueOf: function(){return 'TaxGroup';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.DebitSys = { valueOf: function(){return 'DebitSys';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CreditSys = { valueOf: function(){return 'CreditSys';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.VatDate = { valueOf: function(){return 'VatDate';}, Type: 'Edm.DateTime', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.VatLine = { valueOf: function(){return 'VatLine';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.SystemBaseAmount = { valueOf: function(){return 'SystemBaseAmount';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.VatAmount = { valueOf: function(){return 'VatAmount';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.SystemVatAmount = { valueOf: function(){return 'SystemVatAmount';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.GrossValue = { valueOf: function(){return 'GrossValue';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.AdditionalReference = { valueOf: function(){return 'AdditionalReference';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CheckAbs = { valueOf: function(){return 'CheckAbs';}, Type: 'Edm.Int32', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CostingCode2 = { valueOf: function(){return 'CostingCode2';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CostingCode3 = { valueOf: function(){return 'CostingCode3';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CostingCode4 = { valueOf: function(){return 'CostingCode4';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.TaxPostAccount = { valueOf: function(){return 'TaxPostAccount';}, Type: 'BoTaxPostAccEnum', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CostingCode5 = { valueOf: function(){return 'CostingCode5';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.LocationCode = { valueOf: function(){return 'LocationCode';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ControlAccount = { valueOf: function(){return 'ControlAccount';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.EqualizationTaxAmount = { valueOf: function(){return 'EqualizationTaxAmount';}, Type: 'Edm.Double', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.SystemEqualizationTaxAmount = { valueOf: function(){return 'SystemEqualizationTaxAmount';}, Type: 'Edm.Double', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.TotalTax = { valueOf: function(){return 'TotalTax';}, Type: 'Edm.Double', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.SystemTotalTax = { valueOf: function(){return 'SystemTotalTax';}, Type: 'Edm.Double', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.WTLiable = { valueOf: function(){return 'WTLiable';}, Type: 'BoYesNoEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.WTRow = { valueOf: function(){return 'WTRow';}, Type: 'BoYesNoEnum', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.PaymentBlock = { valueOf: function(){return 'PaymentBlock';}, Type: 'BoYesNoEnum', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.BlockReason = { valueOf: function(){return 'BlockReason';}, Type: 'Edm.Int32', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.BPLName = { valueOf: function(){return 'BPLName';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.VATRegNum = { valueOf: function(){return 'VATRegNum';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.PaymentOrdered = { valueOf: function(){return 'PaymentOrdered';}, Type: 'BoYesNoEnum', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.ExposedTransNumber = { valueOf: function(){return 'ExposedTransNumber';}, Type: 'Edm.Int32', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.DocumentArray = { valueOf: function(){return 'DocumentArray';}, Type: 'Edm.Int32', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.DocumentLine = { valueOf: function(){return 'DocumentLine';}, Type: 'Edm.Int32', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CostElementCode = { valueOf: function(){return 'CostElementCode';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.U_PrcName1 = { valueOf: function(){return 'U_PrcName1';}, Type: 'Edm.String', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.U_PrcName2 = { valueOf: function(){return 'U_PrcName2';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.JournalEntryLine.CashFlowAssignments = { valueOf: function(){return 'CashFlowAssignments';}, Type: 'CashFlowAssignment', Index: 57, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.JournalEntryLine.prototype.Line_ID = new Number();
SAPB1.JournalEntryLine.prototype.AccountCode = new String();
SAPB1.JournalEntryLine.prototype.Debit = new Number();
SAPB1.JournalEntryLine.prototype.Credit = new Number();
SAPB1.JournalEntryLine.prototype.FCDebit = new Number();
SAPB1.JournalEntryLine.prototype.FCCredit = new Number();
SAPB1.JournalEntryLine.prototype.FCCurrency = new String();
SAPB1.JournalEntryLine.prototype.DueDate = new String();
SAPB1.JournalEntryLine.prototype.ShortName = new String();
SAPB1.JournalEntryLine.prototype.ContraAccount = new String();
SAPB1.JournalEntryLine.prototype.LineMemo = new String();
SAPB1.JournalEntryLine.prototype.ReferenceDate1 = new String();
SAPB1.JournalEntryLine.prototype.ReferenceDate2 = new String();
SAPB1.JournalEntryLine.prototype.Reference1 = new String();
SAPB1.JournalEntryLine.prototype.Reference2 = new String();
SAPB1.JournalEntryLine.prototype.ProjectCode = new String();
SAPB1.JournalEntryLine.prototype.CostingCode = new String();
SAPB1.JournalEntryLine.prototype.TaxDate = new String();
SAPB1.JournalEntryLine.prototype.BaseSum = new Number();
SAPB1.JournalEntryLine.prototype.TaxGroup = new String();
SAPB1.JournalEntryLine.prototype.DebitSys = new Number();
SAPB1.JournalEntryLine.prototype.CreditSys = new Number();
SAPB1.JournalEntryLine.prototype.VatDate = new String();
SAPB1.JournalEntryLine.prototype.VatLine = new String();
SAPB1.JournalEntryLine.prototype.SystemBaseAmount = new Number();
SAPB1.JournalEntryLine.prototype.VatAmount = new Number();
SAPB1.JournalEntryLine.prototype.SystemVatAmount = new Number();
SAPB1.JournalEntryLine.prototype.GrossValue = new Number();
SAPB1.JournalEntryLine.prototype.AdditionalReference = new String();
SAPB1.JournalEntryLine.prototype.CheckAbs = new Number();
SAPB1.JournalEntryLine.prototype.CostingCode2 = new String();
SAPB1.JournalEntryLine.prototype.CostingCode3 = new String();
SAPB1.JournalEntryLine.prototype.CostingCode4 = new String();
SAPB1.JournalEntryLine.prototype.TaxCode = new String();
SAPB1.JournalEntryLine.prototype.TaxPostAccount = new String();
SAPB1.JournalEntryLine.prototype.CostingCode5 = new String();
SAPB1.JournalEntryLine.prototype.LocationCode = new Number();
SAPB1.JournalEntryLine.prototype.ControlAccount = new String();
SAPB1.JournalEntryLine.prototype.EqualizationTaxAmount = new Number();
SAPB1.JournalEntryLine.prototype.SystemEqualizationTaxAmount = new Number();
SAPB1.JournalEntryLine.prototype.TotalTax = new Number();
SAPB1.JournalEntryLine.prototype.SystemTotalTax = new Number();
SAPB1.JournalEntryLine.prototype.WTLiable = new String();
SAPB1.JournalEntryLine.prototype.WTRow = new String();
SAPB1.JournalEntryLine.prototype.PaymentBlock = new String();
SAPB1.JournalEntryLine.prototype.BlockReason = new Number();
SAPB1.JournalEntryLine.prototype.FederalTaxID = new String();
SAPB1.JournalEntryLine.prototype.BPLID = new Number();
SAPB1.JournalEntryLine.prototype.BPLName = new String();
SAPB1.JournalEntryLine.prototype.VATRegNum = new String();
SAPB1.JournalEntryLine.prototype.PaymentOrdered = new String();
SAPB1.JournalEntryLine.prototype.ExposedTransNumber = new Number();
SAPB1.JournalEntryLine.prototype.DocumentArray = new Number();
SAPB1.JournalEntryLine.prototype.DocumentLine = new Number();
SAPB1.JournalEntryLine.prototype.CostElementCode = new String();
SAPB1.JournalEntryLine.prototype.U_PrcName1 = new String();
SAPB1.JournalEntryLine.prototype.U_PrcName2 = new String();
SAPB1.JournalEntryLine.prototype.CashFlowAssignments = new CashFlowAssignmentCollection();

SAPB1.JournalEntryLine.CashFlowAssignment = CashFlowAssignment
SAPB1.JournalEntryLine.CashFlowAssignmentCollection = CashFlowAssignmentCollection

SAPB1.JournalEntryLine.BoYesNoEnum = BoYesNoEnum
SAPB1.JournalEntryLine.BoTaxPostAccEnum = BoTaxPostAccEnum

SAPB1.JournalEntryLine.create = function (rawObject) {
    var instance = new SAPB1.JournalEntryLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.JournalEntryLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.JournalEntryLine;
