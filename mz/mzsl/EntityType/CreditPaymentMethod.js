
var InstallmentPaymentsPossiblityEnum = require('EnumType/InstallmentPaymentsPossiblityEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CreditPaymentMethod = function () {
}
SAPB1.CreditPaymentMethod.prototype = new SAPB1.EntityType();
SAPB1.CreditPaymentMethod.prototype.constructor = SAPB1.CreditPaymentMethod;
SAPB1.CreditPaymentMethod.prototype.keys.push('PaymentMethodCode');
SAPB1.CreditPaymentMethod.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.AssignedtoCreditCard = { valueOf: function(){return 'AssignedtoCreditCard';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.PaymentCode = { valueOf: function(){return 'PaymentCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.MinimumCreditAmount = { valueOf: function(){return 'MinimumCreditAmount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.MinimumPaymentAmount = { valueOf: function(){return 'MinimumPaymentAmount';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.MaxQtyWithoutApproval = { valueOf: function(){return 'MaxQtyWithoutApproval';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.InstallmentPaymentsPossible = { valueOf: function(){return 'InstallmentPaymentsPossible';}, Type: 'InstallmentPaymentsPossiblityEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditPaymentMethod.prototype.PaymentMethodCode = new Number();
SAPB1.CreditPaymentMethod.prototype.Name = new String();
SAPB1.CreditPaymentMethod.prototype.AssignedtoCreditCard = new Number();
SAPB1.CreditPaymentMethod.prototype.PaymentCode = new String();
SAPB1.CreditPaymentMethod.prototype.MinimumCreditAmount = new Number();
SAPB1.CreditPaymentMethod.prototype.MinimumPaymentAmount = new Number();
SAPB1.CreditPaymentMethod.prototype.MaxQtyWithoutApproval = new Number();
SAPB1.CreditPaymentMethod.prototype.InstallmentPaymentsPossible = new String();


SAPB1.CreditPaymentMethod.InstallmentPaymentsPossiblityEnum = InstallmentPaymentsPossiblityEnum

SAPB1.CreditPaymentMethod.create = function (rawObject) {
    var instance = new SAPB1.CreditPaymentMethod();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CreditPaymentMethod.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CreditPaymentMethod;
