
var BoPrintReceiptEnum = require('EnumType/BoPrintReceiptEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoSuppLangs = require('EnumType/BoSuppLangs')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserDefaultGroup = function () {
}
SAPB1.UserDefaultGroup.prototype = new SAPB1.EntityType();
SAPB1.UserDefaultGroup.prototype.constructor = SAPB1.UserDefaultGroup;
SAPB1.UserDefaultGroup.prototype.keys.push('Code');
SAPB1.UserDefaultGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.SalesEmployee = { valueOf: function(){return 'SalesEmployee';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.BPforInvoicePayment = { valueOf: function(){return 'BPforInvoicePayment';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.CashAccount = { valueOf: function(){return 'CashAccount';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.CheckingAcct = { valueOf: function(){return 'CheckingAcct';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PrintReceipt = { valueOf: function(){return 'PrintReceipt';}, Type: 'BoPrintReceiptEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PrintInvoiceandPaymentinS = { valueOf: function(){return 'PrintInvoiceandPaymentinS';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.WindowsColor = { valueOf: function(){return 'WindowsColor';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PrintingHeader = { valueOf: function(){return 'PrintingHeader';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PhoneNumber1 = { valueOf: function(){return 'PhoneNumber1';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PhoneNumber2 = { valueOf: function(){return 'PhoneNumber2';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.FaxNumber = { valueOf: function(){return 'FaxNumber';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.eMail = { valueOf: function(){return 'eMail';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.AddressinForeignLanguage = { valueOf: function(){return 'AddressinForeignLanguage';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PrintingHeaderInForeignLangu = { valueOf: function(){return 'PrintingHeaderInForeignLangu';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PhoneNumber1ForeignLang = { valueOf: function(){return 'PhoneNumber1ForeignLang';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.PhoneNumber2ForeignLang = { valueOf: function(){return 'PhoneNumber2ForeignLang';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.FaxNumberForeignLang = { valueOf: function(){return 'FaxNumberForeignLang';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.DefaultTaxCode = { valueOf: function(){return 'DefaultTaxCode';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.AdditionalIdNumber = { valueOf: function(){return 'AdditionalIdNumber';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.UseTax = { valueOf: function(){return 'UseTax';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.UseWarehouseAddressinAPD = { valueOf: function(){return 'UseWarehouseAddressinAPD';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.AssetInDoc = { valueOf: function(){return 'AssetInDoc';}, Type: 'BoYesNoEnum', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.LanguageCode = { valueOf: function(){return 'LanguageCode';}, Type: 'BoSuppLangs', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserDefaultGroup.prototype.Code = new String();
SAPB1.UserDefaultGroup.prototype.Name = new String();
SAPB1.UserDefaultGroup.prototype.Warehouse = new String();
SAPB1.UserDefaultGroup.prototype.SalesEmployee = new Number();
SAPB1.UserDefaultGroup.prototype.BPforInvoicePayment = new String();
SAPB1.UserDefaultGroup.prototype.CashAccount = new String();
SAPB1.UserDefaultGroup.prototype.CheckingAcct = new String();
SAPB1.UserDefaultGroup.prototype.PrintReceipt = new String();
SAPB1.UserDefaultGroup.prototype.PrintInvoiceandPaymentinS = new String();
SAPB1.UserDefaultGroup.prototype.WindowsColor = new Number();
SAPB1.UserDefaultGroup.prototype.Address = new String();
SAPB1.UserDefaultGroup.prototype.Country = new String();
SAPB1.UserDefaultGroup.prototype.PrintingHeader = new String();
SAPB1.UserDefaultGroup.prototype.PhoneNumber1 = new String();
SAPB1.UserDefaultGroup.prototype.PhoneNumber2 = new String();
SAPB1.UserDefaultGroup.prototype.FaxNumber = new String();
SAPB1.UserDefaultGroup.prototype.eMail = new String();
SAPB1.UserDefaultGroup.prototype.AddressinForeignLanguage = new String();
SAPB1.UserDefaultGroup.prototype.PrintingHeaderInForeignLangu = new String();
SAPB1.UserDefaultGroup.prototype.PhoneNumber1ForeignLang = new String();
SAPB1.UserDefaultGroup.prototype.PhoneNumber2ForeignLang = new String();
SAPB1.UserDefaultGroup.prototype.FaxNumberForeignLang = new String();
SAPB1.UserDefaultGroup.prototype.DefaultTaxCode = new String();
SAPB1.UserDefaultGroup.prototype.AdditionalIdNumber = new String();
SAPB1.UserDefaultGroup.prototype.UserSignature = new Number();
SAPB1.UserDefaultGroup.prototype.UseTax = new String();
SAPB1.UserDefaultGroup.prototype.UseWarehouseAddressinAPD = new String();
SAPB1.UserDefaultGroup.prototype.BPLID = new Number();
SAPB1.UserDefaultGroup.prototype.AssetInDoc = new String();
SAPB1.UserDefaultGroup.prototype.LanguageCode = new String();


SAPB1.UserDefaultGroup.BoPrintReceiptEnum = BoPrintReceiptEnum
SAPB1.UserDefaultGroup.BoYesNoEnum = BoYesNoEnum
SAPB1.UserDefaultGroup.BoSuppLangs = BoSuppLangs

SAPB1.UserDefaultGroup.create = function (rawObject) {
    var instance = new SAPB1.UserDefaultGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserDefaultGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserDefaultGroup;
