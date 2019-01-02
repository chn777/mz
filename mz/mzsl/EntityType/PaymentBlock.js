

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentBlock = function () {
}
SAPB1.PaymentBlock.prototype = new SAPB1.EntityType();
SAPB1.PaymentBlock.prototype.constructor = SAPB1.PaymentBlock;
SAPB1.PaymentBlock.prototype.keys.push('AbsEntry');
SAPB1.PaymentBlock.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentBlock.PaymentBlockCode = { valueOf: function(){return 'PaymentBlockCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentBlock.prototype.AbsEntry = new Number();
SAPB1.PaymentBlock.prototype.PaymentBlockCode = new String();



SAPB1.PaymentBlock.create = function (rawObject) {
    var instance = new SAPB1.PaymentBlock();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentBlock.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentBlock;
