

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WizardPaymentMethodParams = function () {
}
SAPB1.WizardPaymentMethodParams.prototype = new SAPB1.ComplexType();
SAPB1.WizardPaymentMethodParams.prototype.constructor = SAPB1.WizardPaymentMethodParams;
SAPB1.WizardPaymentMethodParams.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WizardPaymentMethodParams.prototype.PaymentMethodCode = new String();



SAPB1.WizardPaymentMethodParams.create = function (rawObject) {
    var instance = new SAPB1.WizardPaymentMethodParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WizardPaymentMethodParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WizardPaymentMethodParams;
