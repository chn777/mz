var CheckLine = require('ComplexType/CheckLine')
var CheckLineCollection = require('ComplexType/CheckLineCollection')
var CreditLine = require('ComplexType/CreditLine')
var CreditLineCollection = require('ComplexType/CreditLineCollection')
var BOELine = require('ComplexType/BOELine')
var BOELineCollection = require('ComplexType/BOELineCollection')

var BoDepositTypeEnum = require('EnumType/BoDepositTypeEnum')
var BoDepositAccountTypeEnum = require('EnumType/BoDepositAccountTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoCheckDepositTypeEnum = require('EnumType/BoCheckDepositTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Deposit = function () {
}
SAPB1.Deposit.prototype = new SAPB1.EntityType();
SAPB1.Deposit.prototype.constructor = SAPB1.Deposit;
SAPB1.Deposit.prototype.keys.push('AbsEntry');
SAPB1.Deposit.DepositNumber = { valueOf: function(){return 'DepositNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Deposit.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Deposit.DepositType = { valueOf: function(){return 'DepositType';}, Type: 'BoDepositTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DepositDate = { valueOf: function(){return 'DepositDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DepositCurrency = { valueOf: function(){return 'DepositCurrency';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DepositAccount = { valueOf: function(){return 'DepositAccount';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DepositorName = { valueOf: function(){return 'DepositorName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.Bank = { valueOf: function(){return 'Bank';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.BankAccountNum = { valueOf: function(){return 'BankAccountNum';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.BankBranch = { valueOf: function(){return 'BankBranch';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.BankReference = { valueOf: function(){return 'BankReference';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.JournalRemarks = { valueOf: function(){return 'JournalRemarks';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TotalLC = { valueOf: function(){return 'TotalLC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TotalFC = { valueOf: function(){return 'TotalFC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TotalSC = { valueOf: function(){return 'TotalSC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.AllocationAccount = { valueOf: function(){return 'AllocationAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DocRate = { valueOf: function(){return 'DocRate';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TaxAccount = { valueOf: function(){return 'TaxAccount';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CommissionAccount = { valueOf: function(){return 'CommissionAccount';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.Commission = { valueOf: function(){return 'Commission';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CommissionDate = { valueOf: function(){return 'CommissionDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DepositAccountType = { valueOf: function(){return 'DepositAccountType';}, Type: 'BoDepositAccountTypeEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.ReconcileAfterDeposit = { valueOf: function(){return 'ReconcileAfterDeposit';}, Type: 'BoYesNoEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.VoucherAccount = { valueOf: function(){return 'VoucherAccount';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 26, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Deposit.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CommissionCurrency = { valueOf: function(){return 'CommissionCurrency';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CommissionSC = { valueOf: function(){return 'CommissionSC';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CommissionFC = { valueOf: function(){return 'CommissionFC';}, Type: 'Edm.Double', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TaxAmountSC = { valueOf: function(){return 'TaxAmountSC';}, Type: 'Edm.Double', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.TaxAmountFC = { valueOf: function(){return 'TaxAmountFC';}, Type: 'Edm.Double', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CheckDepositType = { valueOf: function(){return 'CheckDepositType';}, Type: 'BoCheckDepositTypeEnum', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Deposit.CheckLines = { valueOf: function(){return 'CheckLines';}, Type: 'CheckLine', Index: 40, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Deposit.CreditLines = { valueOf: function(){return 'CreditLines';}, Type: 'CreditLine', Index: 41, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Deposit.BOELines = { valueOf: function(){return 'BOELines';}, Type: 'BOELine', Index: 42, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Deposit.prototype.DepositNumber = new Number();
SAPB1.Deposit.prototype.AbsEntry = new Number();
SAPB1.Deposit.prototype.DepositType = new String();
SAPB1.Deposit.prototype.DepositDate = new String();
SAPB1.Deposit.prototype.DepositCurrency = new String();
SAPB1.Deposit.prototype.DepositAccount = new String();
SAPB1.Deposit.prototype.DepositorName = new String();
SAPB1.Deposit.prototype.Bank = new String();
SAPB1.Deposit.prototype.BankAccountNum = new String();
SAPB1.Deposit.prototype.BankBranch = new String();
SAPB1.Deposit.prototype.BankReference = new String();
SAPB1.Deposit.prototype.JournalRemarks = new String();
SAPB1.Deposit.prototype.TotalLC = new Number();
SAPB1.Deposit.prototype.TotalFC = new Number();
SAPB1.Deposit.prototype.TotalSC = new Number();
SAPB1.Deposit.prototype.AllocationAccount = new String();
SAPB1.Deposit.prototype.DocRate = new Number();
SAPB1.Deposit.prototype.TaxAccount = new String();
SAPB1.Deposit.prototype.TaxAmount = new Number();
SAPB1.Deposit.prototype.CommissionAccount = new String();
SAPB1.Deposit.prototype.Commission = new Number();
SAPB1.Deposit.prototype.CommissionDate = new String();
SAPB1.Deposit.prototype.TaxCode = new String();
SAPB1.Deposit.prototype.DepositAccountType = new String();
SAPB1.Deposit.prototype.ReconcileAfterDeposit = new String();
SAPB1.Deposit.prototype.VoucherAccount = new String();
SAPB1.Deposit.prototype.Series = new Number();
SAPB1.Deposit.prototype.Project = new String();
SAPB1.Deposit.prototype.DistributionRule = new String();
SAPB1.Deposit.prototype.DistributionRule2 = new String();
SAPB1.Deposit.prototype.DistributionRule3 = new String();
SAPB1.Deposit.prototype.DistributionRule4 = new String();
SAPB1.Deposit.prototype.DistributionRule5 = new String();
SAPB1.Deposit.prototype.CommissionCurrency = new String();
SAPB1.Deposit.prototype.CommissionSC = new Number();
SAPB1.Deposit.prototype.CommissionFC = new Number();
SAPB1.Deposit.prototype.TaxAmountSC = new Number();
SAPB1.Deposit.prototype.TaxAmountFC = new Number();
SAPB1.Deposit.prototype.BPLID = new Number();
SAPB1.Deposit.prototype.CheckDepositType = new String();
SAPB1.Deposit.prototype.CheckLines = new CheckLineCollection();
SAPB1.Deposit.prototype.CreditLines = new CreditLineCollection();
SAPB1.Deposit.prototype.BOELines = new BOELineCollection();

SAPB1.Deposit.CheckLine = CheckLine
SAPB1.Deposit.CheckLineCollection = CheckLineCollection
SAPB1.Deposit.CreditLine = CreditLine
SAPB1.Deposit.CreditLineCollection = CreditLineCollection
SAPB1.Deposit.BOELine = BOELine
SAPB1.Deposit.BOELineCollection = BOELineCollection

SAPB1.Deposit.BoDepositTypeEnum = BoDepositTypeEnum
SAPB1.Deposit.BoDepositAccountTypeEnum = BoDepositAccountTypeEnum
SAPB1.Deposit.BoYesNoEnum = BoYesNoEnum
SAPB1.Deposit.BoCheckDepositTypeEnum = BoCheckDepositTypeEnum

SAPB1.Deposit.create = function (rawObject) {
    var instance = new SAPB1.Deposit();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Deposit.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Deposit;
