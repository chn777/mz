

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankPageParams = function () {
}
SAPB1.BankPageParams.prototype = new SAPB1.ComplexType();
SAPB1.BankPageParams.prototype.constructor = SAPB1.BankPageParams;
SAPB1.BankPageParams.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPageParams.Sequence = { valueOf: function(){return 'Sequence';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankPageParams.prototype.AccountCode = new String();
SAPB1.BankPageParams.prototype.Sequence = new Number();



SAPB1.BankPageParams.create = function (rawObject) {
    var instance = new SAPB1.BankPageParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankPageParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankPageParams;
