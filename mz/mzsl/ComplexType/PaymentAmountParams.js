
var PaymentInvoiceTypeEnum = require('EnumType/PaymentInvoiceTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentAmountParams = function () {
}
SAPB1.PaymentAmountParams.prototype = new SAPB1.ComplexType();
SAPB1.PaymentAmountParams.prototype.constructor = SAPB1.PaymentAmountParams;
SAPB1.PaymentAmountParams.DocType = { valueOf: function(){return 'DocType';}, Type: 'PaymentInvoiceTypeEnum', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.InstallmentId = { valueOf: function(){return 'InstallmentId';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.CashDiscountPercentage = { valueOf: function(){return 'CashDiscountPercentage';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.CashDiscountAmount = { valueOf: function(){return 'CashDiscountAmount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.CashDiscountAmountFC = { valueOf: function(){return 'CashDiscountAmountFC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.CashDiscountAmountSC = { valueOf: function(){return 'CashDiscountAmountSC';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.TotalPaymentAmount = { valueOf: function(){return 'TotalPaymentAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.TotalPaymentAmountFC = { valueOf: function(){return 'TotalPaymentAmountFC';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.TotalPaymentAmountSC = { valueOf: function(){return 'TotalPaymentAmountSC';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAmountParams.prototype.DocType = new String();
SAPB1.PaymentAmountParams.prototype.DocEntry = new Number();
SAPB1.PaymentAmountParams.prototype.InstallmentId = new Number();
SAPB1.PaymentAmountParams.prototype.CashDiscountPercentage = new Number();
SAPB1.PaymentAmountParams.prototype.CashDiscountAmount = new Number();
SAPB1.PaymentAmountParams.prototype.CashDiscountAmountFC = new Number();
SAPB1.PaymentAmountParams.prototype.CashDiscountAmountSC = new Number();
SAPB1.PaymentAmountParams.prototype.TotalPaymentAmount = new Number();
SAPB1.PaymentAmountParams.prototype.TotalPaymentAmountFC = new Number();
SAPB1.PaymentAmountParams.prototype.TotalPaymentAmountSC = new Number();


SAPB1.PaymentAmountParams.PaymentInvoiceTypeEnum = PaymentInvoiceTypeEnum

SAPB1.PaymentAmountParams.create = function (rawObject) {
    var instance = new SAPB1.PaymentAmountParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentAmountParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentAmountParams;
