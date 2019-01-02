
var BoRcptInvTypes = require('EnumType/BoRcptInvTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentInvoice = function () {
}
SAPB1.PaymentInvoice.prototype = new SAPB1.ComplexType();
SAPB1.PaymentInvoice.prototype.constructor = SAPB1.PaymentInvoice;
SAPB1.PaymentInvoice.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.SumApplied = { valueOf: function(){return 'SumApplied';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.AppliedFC = { valueOf: function(){return 'AppliedFC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.AppliedSys = { valueOf: function(){return 'AppliedSys';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DocRate = { valueOf: function(){return 'DocRate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DocLine = { valueOf: function(){return 'DocLine';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.InvoiceType = { valueOf: function(){return 'InvoiceType';}, Type: 'BoRcptInvTypes', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DiscountPercent = { valueOf: function(){return 'DiscountPercent';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.PaidSum = { valueOf: function(){return 'PaidSum';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.InstallmentId = { valueOf: function(){return 'InstallmentId';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.WitholdingTaxApplied = { valueOf: function(){return 'WitholdingTaxApplied';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.WitholdingTaxAppliedFC = { valueOf: function(){return 'WitholdingTaxAppliedFC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.WitholdingTaxAppliedSC = { valueOf: function(){return 'WitholdingTaxAppliedSC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.LinkDate = { valueOf: function(){return 'LinkDate';}, Type: 'Edm.DateTime', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.TotalDiscount = { valueOf: function(){return 'TotalDiscount';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.TotalDiscountFC = { valueOf: function(){return 'TotalDiscountFC';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.TotalDiscountSC = { valueOf: function(){return 'TotalDiscountSC';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoice.prototype.LineNum = new Number();
SAPB1.PaymentInvoice.prototype.DocEntry = new Number();
SAPB1.PaymentInvoice.prototype.SumApplied = new Number();
SAPB1.PaymentInvoice.prototype.AppliedFC = new Number();
SAPB1.PaymentInvoice.prototype.AppliedSys = new Number();
SAPB1.PaymentInvoice.prototype.DocRate = new Number();
SAPB1.PaymentInvoice.prototype.DocLine = new Number();
SAPB1.PaymentInvoice.prototype.InvoiceType = new String();
SAPB1.PaymentInvoice.prototype.DiscountPercent = new Number();
SAPB1.PaymentInvoice.prototype.PaidSum = new Number();
SAPB1.PaymentInvoice.prototype.InstallmentId = new Number();
SAPB1.PaymentInvoice.prototype.WitholdingTaxApplied = new Number();
SAPB1.PaymentInvoice.prototype.WitholdingTaxAppliedFC = new Number();
SAPB1.PaymentInvoice.prototype.WitholdingTaxAppliedSC = new Number();
SAPB1.PaymentInvoice.prototype.LinkDate = new String();
SAPB1.PaymentInvoice.prototype.DistributionRule = new String();
SAPB1.PaymentInvoice.prototype.DistributionRule2 = new String();
SAPB1.PaymentInvoice.prototype.DistributionRule3 = new String();
SAPB1.PaymentInvoice.prototype.DistributionRule4 = new String();
SAPB1.PaymentInvoice.prototype.DistributionRule5 = new String();
SAPB1.PaymentInvoice.prototype.TotalDiscount = new Number();
SAPB1.PaymentInvoice.prototype.TotalDiscountFC = new Number();
SAPB1.PaymentInvoice.prototype.TotalDiscountSC = new Number();


SAPB1.PaymentInvoice.BoRcptInvTypes = BoRcptInvTypes

SAPB1.PaymentInvoice.create = function (rawObject) {
    var instance = new SAPB1.PaymentInvoice();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentInvoice.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentInvoice;
