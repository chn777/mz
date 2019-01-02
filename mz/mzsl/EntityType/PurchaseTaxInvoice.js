var PurchaseTaxInvoiceLine = require('ComplexType/PurchaseTaxInvoiceLine')
var PurchaseTaxInvoiceLineCollection = require('ComplexType/PurchaseTaxInvoiceLineCollection')
var PurchaseTaxInvoiceOperationCode = require('ComplexType/PurchaseTaxInvoiceOperationCode')
var PurchaseTaxInvoiceOperationCodeCollection = require('ComplexType/PurchaseTaxInvoiceOperationCodeCollection')

var BoTaxInvoiceTypes = require('EnumType/BoTaxInvoiceTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoCurrencySources = require('EnumType/BoCurrencySources')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PurchaseTaxInvoice = function () {
}
SAPB1.PurchaseTaxInvoice.prototype = new SAPB1.EntityType();
SAPB1.PurchaseTaxInvoice.prototype.constructor = SAPB1.PurchaseTaxInvoice;
SAPB1.PurchaseTaxInvoice.prototype.keys.push('DocEntry');
SAPB1.PurchaseTaxInvoice.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.DocType = { valueOf: function(){return 'DocType';}, Type: 'BoTaxInvoiceTypes', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.Printed = { valueOf: function(){return 'Printed';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.DocDueDate = { valueOf: function(){return 'DocDueDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.Segment = { valueOf: function(){return 'Segment';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.ContactPersonCode = { valueOf: function(){return 'ContactPersonCode';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.Comments = { valueOf: function(){return 'Comments';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.ShipToCode = { valueOf: function(){return 'ShipToCode';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.Address2 = { valueOf: function(){return 'Address2';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.CurrencySource = { valueOf: function(){return 'CurrencySource';}, Type: 'BoCurrencySources', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.DocCurrency = { valueOf: function(){return 'DocCurrency';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.CustomerOrVendorRefNo = { valueOf: function(){return 'CustomerOrVendorRefNo';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.CustomerOrVendorName = { valueOf: function(){return 'CustomerOrVendorName';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.CancelDate = { valueOf: function(){return 'CancelDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.DocumentTotal = { valueOf: function(){return 'DocumentTotal';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.TaxTotal = { valueOf: function(){return 'TaxTotal';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.PaymentRefNo = { valueOf: function(){return 'PaymentRefNo';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.PaymentRefDate = { valueOf: function(){return 'PaymentRefDate';}, Type: 'Edm.DateTime', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.AlterationRevision = { valueOf: function(){return 'AlterationRevision';}, Type: 'Edm.Int32', Index: 26, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoice.PurchaseTaxInvoiceLines = { valueOf: function(){return 'PurchaseTaxInvoiceLines';}, Type: 'PurchaseTaxInvoiceLine', Index: 27, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PurchaseTaxInvoice.PurchaseTaxInvoiceOperationCodes = { valueOf: function(){return 'PurchaseTaxInvoiceOperationCodes';}, Type: 'PurchaseTaxInvoiceOperationCode', Index: 28, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PurchaseTaxInvoice.prototype.DocEntry = new Number();
SAPB1.PurchaseTaxInvoice.prototype.DocNum = new Number();
SAPB1.PurchaseTaxInvoice.prototype.DocType = new String();
SAPB1.PurchaseTaxInvoice.prototype.Printed = new String();
SAPB1.PurchaseTaxInvoice.prototype.DocDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.CardCode = new String();
SAPB1.PurchaseTaxInvoice.prototype.CreationDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.UpdateDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.DocDueDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.Series = new Number();
SAPB1.PurchaseTaxInvoice.prototype.Segment = new Number();
SAPB1.PurchaseTaxInvoice.prototype.ContactPersonCode = new Number();
SAPB1.PurchaseTaxInvoice.prototype.TaxDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.Comments = new String();
SAPB1.PurchaseTaxInvoice.prototype.ShipToCode = new String();
SAPB1.PurchaseTaxInvoice.prototype.Address = new String();
SAPB1.PurchaseTaxInvoice.prototype.Address2 = new String();
SAPB1.PurchaseTaxInvoice.prototype.CurrencySource = new String();
SAPB1.PurchaseTaxInvoice.prototype.DocCurrency = new String();
SAPB1.PurchaseTaxInvoice.prototype.CustomerOrVendorRefNo = new String();
SAPB1.PurchaseTaxInvoice.prototype.CustomerOrVendorName = new String();
SAPB1.PurchaseTaxInvoice.prototype.CancelDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.DocumentTotal = new Number();
SAPB1.PurchaseTaxInvoice.prototype.TaxTotal = new Number();
SAPB1.PurchaseTaxInvoice.prototype.PaymentRefNo = new String();
SAPB1.PurchaseTaxInvoice.prototype.PaymentRefDate = new String();
SAPB1.PurchaseTaxInvoice.prototype.AlterationRevision = new Number();
SAPB1.PurchaseTaxInvoice.prototype.PurchaseTaxInvoiceLines = new PurchaseTaxInvoiceLineCollection();
SAPB1.PurchaseTaxInvoice.prototype.PurchaseTaxInvoiceOperationCodes = new PurchaseTaxInvoiceOperationCodeCollection();

SAPB1.PurchaseTaxInvoice.PurchaseTaxInvoiceLine = PurchaseTaxInvoiceLine
SAPB1.PurchaseTaxInvoice.PurchaseTaxInvoiceLineCollection = PurchaseTaxInvoiceLineCollection
SAPB1.PurchaseTaxInvoice.PurchaseTaxInvoiceOperationCode = PurchaseTaxInvoiceOperationCode
SAPB1.PurchaseTaxInvoice.PurchaseTaxInvoiceOperationCodeCollection = PurchaseTaxInvoiceOperationCodeCollection

SAPB1.PurchaseTaxInvoice.BoTaxInvoiceTypes = BoTaxInvoiceTypes
SAPB1.PurchaseTaxInvoice.BoYesNoEnum = BoYesNoEnum
SAPB1.PurchaseTaxInvoice.BoCurrencySources = BoCurrencySources

SAPB1.PurchaseTaxInvoice.create = function (rawObject) {
    var instance = new SAPB1.PurchaseTaxInvoice();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PurchaseTaxInvoice.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PurchaseTaxInvoice;
