
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoBpsDocTypes = require('EnumType/BoBpsDocTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankPage = function () {
}
SAPB1.BankPage.prototype = new SAPB1.EntityType();
SAPB1.BankPage.prototype.constructor = SAPB1.BankPage;
SAPB1.BankPage.prototype.keys.push('AccountCode','Sequence');
SAPB1.BankPage.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankPage.Sequence = { valueOf: function(){return 'Sequence';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankPage.AccountName = { valueOf: function(){return 'AccountName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.Memo = { valueOf: function(){return 'Memo';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.DebitAmount = { valueOf: function(){return 'DebitAmount';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.CreditAmount = { valueOf: function(){return 'CreditAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.BankMatch = { valueOf: function(){return 'BankMatch';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.DataSource = { valueOf: function(){return 'DataSource';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.ExternalCode = { valueOf: function(){return 'ExternalCode';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.CardName = { valueOf: function(){return 'CardName';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.StatementNumber = { valueOf: function(){return 'StatementNumber';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.InvoiceNumber = { valueOf: function(){return 'InvoiceNumber';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.PaymentCreated = { valueOf: function(){return 'PaymentCreated';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.DocNumberType = { valueOf: function(){return 'DocNumberType';}, Type: 'BoBpsDocTypes', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.PaymentReference = { valueOf: function(){return 'PaymentReference';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.InvoiceNumberEx = { valueOf: function(){return 'InvoiceNumberEx';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.BICSwiftCode = { valueOf: function(){return 'BICSwiftCode';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPage.prototype.AccountCode = new String();
SAPB1.BankPage.prototype.Sequence = new Number();
SAPB1.BankPage.prototype.AccountName = new String();
SAPB1.BankPage.prototype.Reference = new String();
SAPB1.BankPage.prototype.DueDate = new String();
SAPB1.BankPage.prototype.Memo = new String();
SAPB1.BankPage.prototype.DebitAmount = new Number();
SAPB1.BankPage.prototype.CreditAmount = new Number();
SAPB1.BankPage.prototype.BankMatch = new Number();
SAPB1.BankPage.prototype.DataSource = new String();
SAPB1.BankPage.prototype.UserSignature = new Number();
SAPB1.BankPage.prototype.ExternalCode = new String();
SAPB1.BankPage.prototype.CardCode = new String();
SAPB1.BankPage.prototype.CardName = new String();
SAPB1.BankPage.prototype.StatementNumber = new Number();
SAPB1.BankPage.prototype.InvoiceNumber = new String();
SAPB1.BankPage.prototype.PaymentCreated = new String();
SAPB1.BankPage.prototype.VisualOrder = new Number();
SAPB1.BankPage.prototype.DocNumberType = new String();
SAPB1.BankPage.prototype.PaymentReference = new String();
SAPB1.BankPage.prototype.InvoiceNumberEx = new String();
SAPB1.BankPage.prototype.BICSwiftCode = new String();


SAPB1.BankPage.BoYesNoEnum = BoYesNoEnum
SAPB1.BankPage.BoBpsDocTypes = BoBpsDocTypes

SAPB1.BankPage.create = function (rawObject) {
    var instance = new SAPB1.BankPage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankPage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankPage;
