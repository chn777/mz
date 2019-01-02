var TaxDefinition = require('ComplexType/TaxDefinition')
var TaxDefinitionCollection = require('ComplexType/TaxDefinitionCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxAuthority = function () {
}
SAPB1.SalesTaxAuthority.prototype = new SAPB1.EntityType();
SAPB1.SalesTaxAuthority.prototype.constructor = SAPB1.SalesTaxAuthority;
SAPB1.SalesTaxAuthority.prototype.keys.push('Code','Type');
SAPB1.SalesTaxAuthority.UseTaxAccount = { valueOf: function(){return 'UseTaxAccount';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.AOrRTaxAccount = { valueOf: function(){return 'AOrRTaxAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.AOrPTaxAccount = { valueOf: function(){return 'AOrPTaxAccount';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.NonDeductiblePrecent = { valueOf: function(){return 'NonDeductiblePrecent';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.NonDeductibleAccount = { valueOf: function(){return 'NonDeductibleAccount';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.DeferredTaxAccount = { valueOf: function(){return 'DeferredTaxAccount';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 10, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.MinTaxableAmount = { valueOf: function(){return 'MinTaxableAmount';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.MaxTaxableAmount = { valueOf: function(){return 'MaxTaxableAmount';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.FlatTaxAmount = { valueOf: function(){return 'FlatTaxAmount';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.InclInPrice = { valueOf: function(){return 'InclInPrice';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.Exempt = { valueOf: function(){return 'Exempt';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.APExpAccount = { valueOf: function(){return 'APExpAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.ARExpAccount = { valueOf: function(){return 'ARExpAccount';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.InclInGrossRevenue = { valueOf: function(){return 'InclInGrossRevenue';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.TextCode = { valueOf: function(){return 'TextCode';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.InclInFirstInstallment = { valueOf: function(){return 'InclInFirstInstallment';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.ReverseChargePercent = { valueOf: function(){return 'ReverseChargePercent';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.SalesTaxRCMAccount = { valueOf: function(){return 'SalesTaxRCMAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.SalesTaxRCMClrAccount = { valueOf: function(){return 'SalesTaxRCMClrAccount';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthority.TaxDefinitions = { valueOf: function(){return 'TaxDefinitions';}, Type: 'TaxDefinition', Index: 24, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesTaxAuthority.prototype.UseTaxAccount = new String();
SAPB1.SalesTaxAuthority.prototype.UserSignature = new Number();
SAPB1.SalesTaxAuthority.prototype.Type = new Number();
SAPB1.SalesTaxAuthority.prototype.AOrRTaxAccount = new String();
SAPB1.SalesTaxAuthority.prototype.Rate = new Number();
SAPB1.SalesTaxAuthority.prototype.AOrPTaxAccount = new String();
SAPB1.SalesTaxAuthority.prototype.NonDeductiblePrecent = new Number();
SAPB1.SalesTaxAuthority.prototype.NonDeductibleAccount = new String();
SAPB1.SalesTaxAuthority.prototype.Name = new String();
SAPB1.SalesTaxAuthority.prototype.DeferredTaxAccount = new String();
SAPB1.SalesTaxAuthority.prototype.Code = new String();
SAPB1.SalesTaxAuthority.prototype.MinTaxableAmount = new Number();
SAPB1.SalesTaxAuthority.prototype.MaxTaxableAmount = new Number();
SAPB1.SalesTaxAuthority.prototype.FlatTaxAmount = new Number();
SAPB1.SalesTaxAuthority.prototype.InclInPrice = new String();
SAPB1.SalesTaxAuthority.prototype.Exempt = new String();
SAPB1.SalesTaxAuthority.prototype.APExpAccount = new String();
SAPB1.SalesTaxAuthority.prototype.ARExpAccount = new String();
SAPB1.SalesTaxAuthority.prototype.InclInGrossRevenue = new String();
SAPB1.SalesTaxAuthority.prototype.TextCode = new Number();
SAPB1.SalesTaxAuthority.prototype.InclInFirstInstallment = new String();
SAPB1.SalesTaxAuthority.prototype.ReverseChargePercent = new Number();
SAPB1.SalesTaxAuthority.prototype.SalesTaxRCMAccount = new String();
SAPB1.SalesTaxAuthority.prototype.SalesTaxRCMClrAccount = new String();
SAPB1.SalesTaxAuthority.prototype.TaxDefinitions = new TaxDefinitionCollection();

SAPB1.SalesTaxAuthority.TaxDefinition = TaxDefinition
SAPB1.SalesTaxAuthority.TaxDefinitionCollection = TaxDefinitionCollection

SAPB1.SalesTaxAuthority.BoYesNoEnum = BoYesNoEnum

SAPB1.SalesTaxAuthority.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxAuthority();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxAuthority.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxAuthority;
