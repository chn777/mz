

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TransactionCodeParams = function () {
}
SAPB1.TransactionCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.TransactionCodeParams.prototype.constructor = SAPB1.TransactionCodeParams;
SAPB1.TransactionCodeParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransactionCodeParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransactionCodeParams.prototype.Code = new String();
SAPB1.TransactionCodeParams.prototype.Description = new String();



SAPB1.TransactionCodeParams.create = function (rawObject) {
    var instance = new SAPB1.TransactionCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TransactionCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TransactionCodeParams;
