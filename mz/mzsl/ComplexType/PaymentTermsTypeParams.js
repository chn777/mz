

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentTermsTypeParams = function () {
}
SAPB1.PaymentTermsTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.PaymentTermsTypeParams.prototype.constructor = SAPB1.PaymentTermsTypeParams;
SAPB1.PaymentTermsTypeParams.GroupNumber = { valueOf: function(){return 'GroupNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsTypeParams.prototype.GroupNumber = new Number();



SAPB1.PaymentTermsTypeParams.create = function (rawObject) {
    var instance = new SAPB1.PaymentTermsTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentTermsTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentTermsTypeParams;
