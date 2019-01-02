

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CreditCardPaymentParams = function () {
}
SAPB1.CreditCardPaymentParams.prototype = new SAPB1.ComplexType();
SAPB1.CreditCardPaymentParams.prototype.constructor = SAPB1.CreditCardPaymentParams;
SAPB1.CreditCardPaymentParams.DueDateCode = { valueOf: function(){return 'DueDateCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCardPaymentParams.prototype.DueDateCode = new String();



SAPB1.CreditCardPaymentParams.create = function (rawObject) {
    var instance = new SAPB1.CreditCardPaymentParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CreditCardPaymentParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CreditCardPaymentParams;
