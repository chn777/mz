
var DueDateTypesEnum = require('EnumType/DueDateTypesEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CreditCardPayment = function () {
}
SAPB1.CreditCardPayment.prototype = new SAPB1.EntityType();
SAPB1.CreditCardPayment.prototype.constructor = SAPB1.CreditCardPayment;
SAPB1.CreditCardPayment.prototype.keys.push('DueDateCode');
SAPB1.CreditCardPayment.DueDateCode = { valueOf: function(){return 'DueDateCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.DueDateName = { valueOf: function(){return 'DueDateName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.DueDatesType = { valueOf: function(){return 'DueDatesType';}, Type: 'DueDateTypesEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.PaymentAfterDays = { valueOf: function(){return 'PaymentAfterDays';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.PaymentAfterMonths = { valueOf: function(){return 'PaymentAfterMonths';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.FromDay1 = { valueOf: function(){return 'FromDay1';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.ToDay1 = { valueOf: function(){return 'ToDay1';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.PaymentDay1 = { valueOf: function(){return 'PaymentDay1';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.NoOfMonths1 = { valueOf: function(){return 'NoOfMonths1';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.FromDay2 = { valueOf: function(){return 'FromDay2';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.ToDay2 = { valueOf: function(){return 'ToDay2';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.PaymentDay2 = { valueOf: function(){return 'PaymentDay2';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.NoOfMonths2 = { valueOf: function(){return 'NoOfMonths2';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.FromDay3 = { valueOf: function(){return 'FromDay3';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.ToDay3 = { valueOf: function(){return 'ToDay3';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.PaymentDay3 = { valueOf: function(){return 'PaymentDay3';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.NoOfMonths3 = { valueOf: function(){return 'NoOfMonths3';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.FromDay4 = { valueOf: function(){return 'FromDay4';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.ToDay4 = { valueOf: function(){return 'ToDay4';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.PaymentDay4 = { valueOf: function(){return 'PaymentDay4';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.NoOfMonths4 = { valueOf: function(){return 'NoOfMonths4';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPayment.prototype.DueDateCode = new String();
SAPB1.CreditCardPayment.prototype.DueDateName = new String();
SAPB1.CreditCardPayment.prototype.DueDatesType = new String();
SAPB1.CreditCardPayment.prototype.PaymentAfterDays = new Number();
SAPB1.CreditCardPayment.prototype.PaymentAfterMonths = new Number();
SAPB1.CreditCardPayment.prototype.FromDay1 = new Number();
SAPB1.CreditCardPayment.prototype.ToDay1 = new Number();
SAPB1.CreditCardPayment.prototype.PaymentDay1 = new Number();
SAPB1.CreditCardPayment.prototype.NoOfMonths1 = new Number();
SAPB1.CreditCardPayment.prototype.FromDay2 = new Number();
SAPB1.CreditCardPayment.prototype.ToDay2 = new Number();
SAPB1.CreditCardPayment.prototype.PaymentDay2 = new Number();
SAPB1.CreditCardPayment.prototype.NoOfMonths2 = new Number();
SAPB1.CreditCardPayment.prototype.FromDay3 = new Number();
SAPB1.CreditCardPayment.prototype.ToDay3 = new Number();
SAPB1.CreditCardPayment.prototype.PaymentDay3 = new Number();
SAPB1.CreditCardPayment.prototype.NoOfMonths3 = new Number();
SAPB1.CreditCardPayment.prototype.FromDay4 = new Number();
SAPB1.CreditCardPayment.prototype.ToDay4 = new Number();
SAPB1.CreditCardPayment.prototype.PaymentDay4 = new Number();
SAPB1.CreditCardPayment.prototype.NoOfMonths4 = new Number();


SAPB1.CreditCardPayment.DueDateTypesEnum = DueDateTypesEnum

SAPB1.CreditCardPayment.create = function (rawObject) {
    var instance = new SAPB1.CreditCardPayment();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CreditCardPayment.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CreditCardPayment;
