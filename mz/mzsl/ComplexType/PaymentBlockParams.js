

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentBlockParams = function () {
}
SAPB1.PaymentBlockParams.prototype = new SAPB1.ComplexType();
SAPB1.PaymentBlockParams.prototype.constructor = SAPB1.PaymentBlockParams;
SAPB1.PaymentBlockParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentBlockParams.PaymentBlockCode = { valueOf: function(){return 'PaymentBlockCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentBlockParams.prototype.AbsEntry = new Number();
SAPB1.PaymentBlockParams.prototype.PaymentBlockCode = new String();



SAPB1.PaymentBlockParams.create = function (rawObject) {
    var instance = new SAPB1.PaymentBlockParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentBlockParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentBlockParams;
