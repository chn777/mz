var SalesTaxInvoiceLine = require('ComplexType/SalesTaxInvoiceLine')
var SalesTaxInvoiceLineCollection = require('ComplexType/SalesTaxInvoiceLineCollection')
var SalesTaxInvoiceOperationCode = require('ComplexType/SalesTaxInvoiceOperationCode')
var SalesTaxInvoiceOperationCodeCollection = require('ComplexType/SalesTaxInvoiceOperationCodeCollection')

var BoTaxInvoiceTypes = require('EnumType/BoTaxInvoiceTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoCurrencySources = require('EnumType/BoCurrencySources')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxInvoice = function () {
}
SAPB1.SalesTaxInvoice.prototype = new SAPB1.EntityType();
SAPB1.SalesTaxInvoice.prototype.constructor = SAPB1.SalesTaxInvoice;
SAPB1.SalesTaxInvoice.prototype.keys.push('DocEntry');
SAPB1.SalesTaxInvoice.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.DocType = { valueOf: function(){return 'DocType';}, Type: 'BoTaxInvoiceTypes', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.Printed = { valueOf: function(){return 'Printed';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.DocDueDate = { valueOf: function(){return 'DocDueDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.Segment = { valueOf: function(){return 'Segment';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.ContactPersonCode = { valueOf: function(){return 'ContactPersonCode';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.Comments = { valueOf: function(){return 'Comments';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.ShipToCode = { valueOf: function(){return 'ShipToCode';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.Address2 = { valueOf: function(){return 'Address2';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.CurrencySource = { valueOf: function(){return 'CurrencySource';}, Type: 'BoCurrencySources', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.DocCurrency = { valueOf: function(){return 'DocCurrency';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.CustomerOrVendorRefNo = { valueOf: function(){return 'CustomerOrVendorRefNo';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.CustomerOrVendorName = { valueOf: function(){return 'CustomerOrVendorName';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.CancelDate = { valueOf: function(){return 'CancelDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.DocumentTotal = { valueOf: function(){return 'DocumentTotal';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.TaxTotal = { valueOf: function(){return 'TaxTotal';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.PaymentRefNo = { valueOf: function(){return 'PaymentRefNo';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.PaymentRefDate = { valueOf: function(){return 'PaymentRefDate';}, Type: 'Edm.DateTime', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.AlterationRevision = { valueOf: function(){return 'AlterationRevision';}, Type: 'Edm.Int32', Index: 26, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoice.SalesTaxInvoiceLines = { valueOf: function(){return 'SalesTaxInvoiceLines';}, Type: 'SalesTaxInvoiceLine', Index: 27, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesTaxInvoice.SalesTaxInvoiceOperationCodes = { valueOf: function(){return 'SalesTaxInvoiceOperationCodes';}, Type: 'SalesTaxInvoiceOperationCode', Index: 28, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesTaxInvoice.prototype.DocEntry = new Number();
SAPB1.SalesTaxInvoice.prototype.DocNum = new Number();
SAPB1.SalesTaxInvoice.prototype.DocType = new String();
SAPB1.SalesTaxInvoice.prototype.Printed = new String();
SAPB1.SalesTaxInvoice.prototype.DocDate = new String();
SAPB1.SalesTaxInvoice.prototype.CardCode = new String();
SAPB1.SalesTaxInvoice.prototype.CreationDate = new String();
SAPB1.SalesTaxInvoice.prototype.UpdateDate = new String();
SAPB1.SalesTaxInvoice.prototype.DocDueDate = new String();
SAPB1.SalesTaxInvoice.prototype.Series = new Number();
SAPB1.SalesTaxInvoice.prototype.Segment = new Number();
SAPB1.SalesTaxInvoice.prototype.ContactPersonCode = new Number();
SAPB1.SalesTaxInvoice.prototype.TaxDate = new String();
SAPB1.SalesTaxInvoice.prototype.Comments = new String();
SAPB1.SalesTaxInvoice.prototype.ShipToCode = new String();
SAPB1.SalesTaxInvoice.prototype.Address = new String();
SAPB1.SalesTaxInvoice.prototype.Address2 = new String();
SAPB1.SalesTaxInvoice.prototype.CurrencySource = new String();
SAPB1.SalesTaxInvoice.prototype.DocCurrency = new String();
SAPB1.SalesTaxInvoice.prototype.CustomerOrVendorRefNo = new String();
SAPB1.SalesTaxInvoice.prototype.CustomerOrVendorName = new String();
SAPB1.SalesTaxInvoice.prototype.CancelDate = new String();
SAPB1.SalesTaxInvoice.prototype.DocumentTotal = new Number();
SAPB1.SalesTaxInvoice.prototype.TaxTotal = new Number();
SAPB1.SalesTaxInvoice.prototype.PaymentRefNo = new String();
SAPB1.SalesTaxInvoice.prototype.PaymentRefDate = new String();
SAPB1.SalesTaxInvoice.prototype.AlterationRevision = new Number();
SAPB1.SalesTaxInvoice.prototype.SalesTaxInvoiceLines = new SalesTaxInvoiceLineCollection();
SAPB1.SalesTaxInvoice.prototype.SalesTaxInvoiceOperationCodes = new SalesTaxInvoiceOperationCodeCollection();

SAPB1.SalesTaxInvoice.SalesTaxInvoiceLine = SalesTaxInvoiceLine
SAPB1.SalesTaxInvoice.SalesTaxInvoiceLineCollection = SalesTaxInvoiceLineCollection
SAPB1.SalesTaxInvoice.SalesTaxInvoiceOperationCode = SalesTaxInvoiceOperationCode
SAPB1.SalesTaxInvoice.SalesTaxInvoiceOperationCodeCollection = SalesTaxInvoiceOperationCodeCollection

SAPB1.SalesTaxInvoice.BoTaxInvoiceTypes = BoTaxInvoiceTypes
SAPB1.SalesTaxInvoice.BoYesNoEnum = BoYesNoEnum
SAPB1.SalesTaxInvoice.BoCurrencySources = BoCurrencySources

SAPB1.SalesTaxInvoice.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxInvoice();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxInvoice.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxInvoice;
