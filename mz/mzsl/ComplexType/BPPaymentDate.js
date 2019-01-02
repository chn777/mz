

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPPaymentDate = function () {
}
SAPB1.BPPaymentDate.prototype = new SAPB1.ComplexType();
SAPB1.BPPaymentDate.prototype.constructor = SAPB1.BPPaymentDate;
SAPB1.BPPaymentDate.PaymentDate = { valueOf: function(){return 'PaymentDate';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPPaymentDate.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPPaymentDate.prototype.PaymentDate = new String();
SAPB1.BPPaymentDate.prototype.BPCode = new String();



SAPB1.BPPaymentDate.create = function (rawObject) {
    var instance = new SAPB1.BPPaymentDate();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPPaymentDate.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPPaymentDate;
