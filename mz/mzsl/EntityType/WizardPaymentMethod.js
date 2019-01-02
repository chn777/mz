var CurrencyRestriction = require('ComplexType/CurrencyRestriction')
var CurrencyRestrictionCollection = require('ComplexType/CurrencyRestrictionCollection')

var BoPaymentTypeEnum = require('EnumType/BoPaymentTypeEnum')
var BoPaymentMeansEnum = require('EnumType/BoPaymentMeansEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoDueDateEnum = require('EnumType/BoDueDateEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WizardPaymentMethod = function () {
}
SAPB1.WizardPaymentMethod.prototype = new SAPB1.EntityType();
SAPB1.WizardPaymentMethod.prototype.constructor = SAPB1.WizardPaymentMethod;
SAPB1.WizardPaymentMethod.prototype.keys.push('PaymentMethodCode');
SAPB1.WizardPaymentMethod.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Type = { valueOf: function(){return 'Type';}, Type: 'BoPaymentTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.PaymentMeans = { valueOf: function(){return 'PaymentMeans';}, Type: 'BoPaymentMeansEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CheckAddress = { valueOf: function(){return 'CheckAddress';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CheckBankDetails = { valueOf: function(){return 'CheckBankDetails';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CollectionAuthorizationCheck = { valueOf: function(){return 'CollectionAuthorizationCheck';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.BlockForeignPayment = { valueOf: function(){return 'BlockForeignPayment';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.BlockForeignBank = { valueOf: function(){return 'BlockForeignBank';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CurrencyRestriction = { valueOf: function(){return 'CurrencyRestriction';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.PostOfficeBank = { valueOf: function(){return 'PostOfficeBank';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.MinimumAmount = { valueOf: function(){return 'MinimumAmount';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.MaximumAmount = { valueOf: function(){return 'MaximumAmount';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DefaultBank = { valueOf: function(){return 'DefaultBank';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.BankCountry = { valueOf: function(){return 'BankCountry';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DefaultAccount = { valueOf: function(){return 'DefaultAccount';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.KeyCode = { valueOf: function(){return 'KeyCode';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.TransactionType = { valueOf: function(){return 'TransactionType';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Format = { valueOf: function(){return 'Format';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.AgentCollection = { valueOf: function(){return 'AgentCollection';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.SendforAcceptance = { valueOf: function(){return 'SendforAcceptance';}, Type: 'BoYesNoEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.GroupByDate = { valueOf: function(){return 'GroupByDate';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DepositNorm = { valueOf: function(){return 'DepositNorm';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DebitMemo = { valueOf: function(){return 'DebitMemo';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.GroupByPaymentReference = { valueOf: function(){return 'GroupByPaymentReference';}, Type: 'BoYesNoEnum', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.GroupInvoicesbyPay = { valueOf: function(){return 'GroupInvoicesbyPay';}, Type: 'BoYesNoEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DueDateSelection = { valueOf: function(){return 'DueDateSelection';}, Type: 'BoDueDateEnum', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.PaymentTermsCode = { valueOf: function(){return 'PaymentTermsCode';}, Type: 'Edm.Int32', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.PosttoGLInterimAccount = { valueOf: function(){return 'PosttoGLInterimAccount';}, Type: 'BoYesNoEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.BankAccountKey = { valueOf: function(){return 'BankAccountKey';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DocType = { valueOf: function(){return 'DocType';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Accepted = { valueOf: function(){return 'Accepted';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.PortfolioID = { valueOf: function(){return 'PortfolioID';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CurCode = { valueOf: function(){return 'CurCode';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Instruction1 = { valueOf: function(){return 'Instruction1';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Instruction2 = { valueOf: function(){return 'Instruction2';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.PaymentPlace = { valueOf: function(){return 'PaymentPlace';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.BarcodeDll = { valueOf: function(){return 'BarcodeDll';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.GroupInvoicesByPayToBank = { valueOf: function(){return 'GroupInvoicesByPayToBank';}, Type: 'BoYesNoEnum', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.GroupInvoicesByCurrency = { valueOf: function(){return 'GroupInvoicesByCurrency';}, Type: 'BoYesNoEnum', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.BankChargeRate = { valueOf: function(){return 'BankChargeRate';}, Type: 'Edm.Double', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.ReportCode = { valueOf: function(){return 'ReportCode';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CancelInstruction = { valueOf: function(){return 'CancelInstruction';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.OccurenceCode = { valueOf: function(){return 'OccurenceCode';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.MovementCode = { valueOf: function(){return 'MovementCode';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.DirectDebit = { valueOf: function(){return 'DirectDebit';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethod.CurrencyRestrictions = { valueOf: function(){return 'CurrencyRestrictions';}, Type: 'CurrencyRestriction', Index: 51, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WizardPaymentMethod.prototype.PaymentMethodCode = new String();
SAPB1.WizardPaymentMethod.prototype.Description = new String();
SAPB1.WizardPaymentMethod.prototype.Type = new String();
SAPB1.WizardPaymentMethod.prototype.PaymentMeans = new String();
SAPB1.WizardPaymentMethod.prototype.CheckAddress = new String();
SAPB1.WizardPaymentMethod.prototype.CheckBankDetails = new String();
SAPB1.WizardPaymentMethod.prototype.CollectionAuthorizationCheck = new String();
SAPB1.WizardPaymentMethod.prototype.BlockForeignPayment = new String();
SAPB1.WizardPaymentMethod.prototype.BlockForeignBank = new String();
SAPB1.WizardPaymentMethod.prototype.CurrencyRestriction = new String();
SAPB1.WizardPaymentMethod.prototype.PostOfficeBank = new String();
SAPB1.WizardPaymentMethod.prototype.MinimumAmount = new Number();
SAPB1.WizardPaymentMethod.prototype.MaximumAmount = new Number();
SAPB1.WizardPaymentMethod.prototype.DefaultBank = new String();
SAPB1.WizardPaymentMethod.prototype.UserSignature = new Number();
SAPB1.WizardPaymentMethod.prototype.CreationDate = new String();
SAPB1.WizardPaymentMethod.prototype.BankCountry = new String();
SAPB1.WizardPaymentMethod.prototype.DefaultAccount = new String();
SAPB1.WizardPaymentMethod.prototype.GLAccount = new String();
SAPB1.WizardPaymentMethod.prototype.Branch = new String();
SAPB1.WizardPaymentMethod.prototype.KeyCode = new String();
SAPB1.WizardPaymentMethod.prototype.TransactionType = new String();
SAPB1.WizardPaymentMethod.prototype.Format = new String();
SAPB1.WizardPaymentMethod.prototype.AgentCollection = new String();
SAPB1.WizardPaymentMethod.prototype.SendforAcceptance = new String();
SAPB1.WizardPaymentMethod.prototype.GroupByDate = new String();
SAPB1.WizardPaymentMethod.prototype.DepositNorm = new String();
SAPB1.WizardPaymentMethod.prototype.DebitMemo = new String();
SAPB1.WizardPaymentMethod.prototype.GroupByPaymentReference = new String();
SAPB1.WizardPaymentMethod.prototype.GroupInvoicesbyPay = new String();
SAPB1.WizardPaymentMethod.prototype.DueDateSelection = new String();
SAPB1.WizardPaymentMethod.prototype.PaymentTermsCode = new Number();
SAPB1.WizardPaymentMethod.prototype.PosttoGLInterimAccount = new String();
SAPB1.WizardPaymentMethod.prototype.BankAccountKey = new Number();
SAPB1.WizardPaymentMethod.prototype.DocType = new String();
SAPB1.WizardPaymentMethod.prototype.Accepted = new String();
SAPB1.WizardPaymentMethod.prototype.PortfolioID = new String();
SAPB1.WizardPaymentMethod.prototype.CurCode = new String();
SAPB1.WizardPaymentMethod.prototype.Instruction1 = new String();
SAPB1.WizardPaymentMethod.prototype.Instruction2 = new String();
SAPB1.WizardPaymentMethod.prototype.PaymentPlace = new String();
SAPB1.WizardPaymentMethod.prototype.BarcodeDll = new String();
SAPB1.WizardPaymentMethod.prototype.Active = new String();
SAPB1.WizardPaymentMethod.prototype.GroupInvoicesByPayToBank = new String();
SAPB1.WizardPaymentMethod.prototype.GroupInvoicesByCurrency = new String();
SAPB1.WizardPaymentMethod.prototype.BankChargeRate = new Number();
SAPB1.WizardPaymentMethod.prototype.ReportCode = new String();
SAPB1.WizardPaymentMethod.prototype.CancelInstruction = new String();
SAPB1.WizardPaymentMethod.prototype.OccurenceCode = new String();
SAPB1.WizardPaymentMethod.prototype.MovementCode = new String();
SAPB1.WizardPaymentMethod.prototype.DirectDebit = new String();
SAPB1.WizardPaymentMethod.prototype.CurrencyRestrictions = new CurrencyRestrictionCollection();

SAPB1.WizardPaymentMethod.CurrencyRestriction = CurrencyRestriction
SAPB1.WizardPaymentMethod.CurrencyRestrictionCollection = CurrencyRestrictionCollection

SAPB1.WizardPaymentMethod.BoPaymentTypeEnum = BoPaymentTypeEnum
SAPB1.WizardPaymentMethod.BoPaymentMeansEnum = BoPaymentMeansEnum
SAPB1.WizardPaymentMethod.BoYesNoEnum = BoYesNoEnum
SAPB1.WizardPaymentMethod.BoDueDateEnum = BoDueDateEnum

SAPB1.WizardPaymentMethod.create = function (rawObject) {
    var instance = new SAPB1.WizardPaymentMethod();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WizardPaymentMethod.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WizardPaymentMethod;
