var VatGroups_Line = require('ComplexType/VatGroups_Line')
var VatGroups_LineCollection = require('ComplexType/VatGroups_LineCollection')

var BoVatCategoryEnum = require('EnumType/BoVatCategoryEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var TaxTypeBlackListEnum = require('EnumType/TaxTypeBlackListEnum')
var Report349CodeListEnum = require('EnumType/Report349CodeListEnum')
var VatGroupsTaxRegionEnum = require('EnumType/VatGroupsTaxRegionEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.VatGroup = function () {
}
SAPB1.VatGroup.prototype = new SAPB1.EntityType();
SAPB1.VatGroup.prototype.constructor = SAPB1.VatGroup;
SAPB1.VatGroup.prototype.keys.push('Code');
SAPB1.VatGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VatGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.Category = { valueOf: function(){return 'Category';}, Type: 'BoVatCategoryEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.TaxAccount = { valueOf: function(){return 'TaxAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.EU = { valueOf: function(){return 'EU';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.TriangularDeal = { valueOf: function(){return 'TriangularDeal';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.AcquisitionReverse = { valueOf: function(){return 'AcquisitionReverse';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.NonDeduct = { valueOf: function(){return 'NonDeduct';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.AcquisitionTax = { valueOf: function(){return 'AcquisitionTax';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.GoodsShipment = { valueOf: function(){return 'GoodsShipment';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.NonDeductAcc = { valueOf: function(){return 'NonDeductAcc';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.DeferredTaxAcc = { valueOf: function(){return 'DeferredTaxAcc';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.Correction = { valueOf: function(){return 'Correction';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.VatCorrection = { valueOf: function(){return 'VatCorrection';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.EqualizationTaxAccount = { valueOf: function(){return 'EqualizationTaxAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.ServiceSupply = { valueOf: function(){return 'ServiceSupply';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.TaxTypeBlackList = { valueOf: function(){return 'TaxTypeBlackList';}, Type: 'TaxTypeBlackListEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.Report349Code = { valueOf: function(){return 'Report349Code';}, Type: 'Report349CodeListEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.VATInRevenueAccount = { valueOf: function(){return 'VATInRevenueAccount';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.DownPaymentTaxOffsetAccount = { valueOf: function(){return 'DownPaymentTaxOffsetAccount';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.CashDiscountAccount = { valueOf: function(){return 'CashDiscountAccount';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.VATDeductibleAccount = { valueOf: function(){return 'VATDeductibleAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.TaxRegion = { valueOf: function(){return 'TaxRegion';}, Type: 'VatGroupsTaxRegionEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroup.VatGroups_Lines = { valueOf: function(){return 'VatGroups_Lines';}, Type: 'VatGroups_Line', Index: 24, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.VatGroup.prototype.Code = new String();
SAPB1.VatGroup.prototype.Name = new String();
SAPB1.VatGroup.prototype.Category = new String();
SAPB1.VatGroup.prototype.TaxAccount = new String();
SAPB1.VatGroup.prototype.EU = new String();
SAPB1.VatGroup.prototype.TriangularDeal = new String();
SAPB1.VatGroup.prototype.AcquisitionReverse = new String();
SAPB1.VatGroup.prototype.NonDeduct = new Number();
SAPB1.VatGroup.prototype.AcquisitionTax = new String();
SAPB1.VatGroup.prototype.GoodsShipment = new String();
SAPB1.VatGroup.prototype.NonDeductAcc = new String();
SAPB1.VatGroup.prototype.DeferredTaxAcc = new String();
SAPB1.VatGroup.prototype.Correction = new String();
SAPB1.VatGroup.prototype.VatCorrection = new String();
SAPB1.VatGroup.prototype.EqualizationTaxAccount = new String();
SAPB1.VatGroup.prototype.ServiceSupply = new String();
SAPB1.VatGroup.prototype.Inactive = new String();
SAPB1.VatGroup.prototype.TaxTypeBlackList = new String();
SAPB1.VatGroup.prototype.Report349Code = new String();
SAPB1.VatGroup.prototype.VATInRevenueAccount = new String();
SAPB1.VatGroup.prototype.DownPaymentTaxOffsetAccount = new String();
SAPB1.VatGroup.prototype.CashDiscountAccount = new String();
SAPB1.VatGroup.prototype.VATDeductibleAccount = new String();
SAPB1.VatGroup.prototype.TaxRegion = new String();
SAPB1.VatGroup.prototype.VatGroups_Lines = new VatGroups_LineCollection();

SAPB1.VatGroup.VatGroups_Line = VatGroups_Line
SAPB1.VatGroup.VatGroups_LineCollection = VatGroups_LineCollection

SAPB1.VatGroup.BoVatCategoryEnum = BoVatCategoryEnum
SAPB1.VatGroup.BoYesNoEnum = BoYesNoEnum
SAPB1.VatGroup.TaxTypeBlackListEnum = TaxTypeBlackListEnum
SAPB1.VatGroup.Report349CodeListEnum = Report349CodeListEnum
SAPB1.VatGroup.VatGroupsTaxRegionEnum = VatGroupsTaxRegionEnum

SAPB1.VatGroup.create = function (rawObject) {
    var instance = new SAPB1.VatGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.VatGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.VatGroup;
