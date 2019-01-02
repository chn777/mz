

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentBPCode = function () {
}
SAPB1.PaymentBPCode.prototype = new SAPB1.ComplexType();
SAPB1.PaymentBPCode.prototype.constructor = SAPB1.PaymentBPCode;
SAPB1.PaymentBPCode.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentBPCode.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentBPCode.prototype.BPCode = new String();
SAPB1.PaymentBPCode.prototype.Date = new String();



SAPB1.PaymentBPCode.create = function (rawObject) {
    var instance = new SAPB1.PaymentBPCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentBPCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentBPCode;
