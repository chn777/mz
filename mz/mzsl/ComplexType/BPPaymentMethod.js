

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPPaymentMethod = function () {
}
SAPB1.BPPaymentMethod.prototype = new SAPB1.ComplexType();
SAPB1.BPPaymentMethod.prototype.constructor = SAPB1.BPPaymentMethod;
SAPB1.BPPaymentMethod.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPPaymentMethod.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPPaymentMethod.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPPaymentMethod.prototype.PaymentMethodCode = new String();
SAPB1.BPPaymentMethod.prototype.RowNumber = new Number();
SAPB1.BPPaymentMethod.prototype.BPCode = new String();



SAPB1.BPPaymentMethod.create = function (rawObject) {
    var instance = new SAPB1.BPPaymentMethod();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPPaymentMethod.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPPaymentMethod;
