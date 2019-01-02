
var BoRcptCredTypes = require('EnumType/BoRcptCredTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentCreditCard = function () {
}
SAPB1.PaymentCreditCard.prototype = new SAPB1.ComplexType();
SAPB1.PaymentCreditCard.prototype.constructor = SAPB1.PaymentCreditCard;
SAPB1.PaymentCreditCard.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditCard = { valueOf: function(){return 'CreditCard';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditAcct = { valueOf: function(){return 'CreditAcct';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditCardNumber = { valueOf: function(){return 'CreditCardNumber';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CardValidUntil = { valueOf: function(){return 'CardValidUntil';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.VoucherNum = { valueOf: function(){return 'VoucherNum';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.OwnerIdNum = { valueOf: function(){return 'OwnerIdNum';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.OwnerPhone = { valueOf: function(){return 'OwnerPhone';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.NumOfPayments = { valueOf: function(){return 'NumOfPayments';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.FirstPaymentDue = { valueOf: function(){return 'FirstPaymentDue';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.FirstPaymentSum = { valueOf: function(){return 'FirstPaymentSum';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.AdditionalPaymentSum = { valueOf: function(){return 'AdditionalPaymentSum';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditSum = { valueOf: function(){return 'CreditSum';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditCur = { valueOf: function(){return 'CreditCur';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditRate = { valueOf: function(){return 'CreditRate';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.ConfirmationNum = { valueOf: function(){return 'ConfirmationNum';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.NumOfCreditPayments = { valueOf: function(){return 'NumOfCreditPayments';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.CreditType = { valueOf: function(){return 'CreditType';}, Type: 'BoRcptCredTypes', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.SplitPayments = { valueOf: function(){return 'SplitPayments';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentCreditCard.prototype.LineNum = new Number();
SAPB1.PaymentCreditCard.prototype.CreditCard = new Number();
SAPB1.PaymentCreditCard.prototype.CreditAcct = new String();
SAPB1.PaymentCreditCard.prototype.CreditCardNumber = new String();
SAPB1.PaymentCreditCard.prototype.CardValidUntil = new String();
SAPB1.PaymentCreditCard.prototype.VoucherNum = new String();
SAPB1.PaymentCreditCard.prototype.OwnerIdNum = new String();
SAPB1.PaymentCreditCard.prototype.OwnerPhone = new String();
SAPB1.PaymentCreditCard.prototype.PaymentMethodCode = new Number();
SAPB1.PaymentCreditCard.prototype.NumOfPayments = new Number();
SAPB1.PaymentCreditCard.prototype.FirstPaymentDue = new String();
SAPB1.PaymentCreditCard.prototype.FirstPaymentSum = new Number();
SAPB1.PaymentCreditCard.prototype.AdditionalPaymentSum = new Number();
SAPB1.PaymentCreditCard.prototype.CreditSum = new Number();
SAPB1.PaymentCreditCard.prototype.CreditCur = new String();
SAPB1.PaymentCreditCard.prototype.CreditRate = new Number();
SAPB1.PaymentCreditCard.prototype.ConfirmationNum = new String();
SAPB1.PaymentCreditCard.prototype.NumOfCreditPayments = new Number();
SAPB1.PaymentCreditCard.prototype.CreditType = new String();
SAPB1.PaymentCreditCard.prototype.SplitPayments = new String();


SAPB1.PaymentCreditCard.BoRcptCredTypes = BoRcptCredTypes
SAPB1.PaymentCreditCard.BoYesNoEnum = BoYesNoEnum

SAPB1.PaymentCreditCard.create = function (rawObject) {
    var instance = new SAPB1.PaymentCreditCard();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentCreditCard.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentCreditCard;
