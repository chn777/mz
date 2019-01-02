

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.HouseBankAccountParams = function () {
}
SAPB1.HouseBankAccountParams.prototype = new SAPB1.ComplexType();
SAPB1.HouseBankAccountParams.prototype.constructor = SAPB1.HouseBankAccountParams;
SAPB1.HouseBankAccountParams.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.HouseBankAccountParams.prototype.AbsoluteEntry = new Number();



SAPB1.HouseBankAccountParams.create = function (rawObject) {
    var instance = new SAPB1.HouseBankAccountParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.HouseBankAccountParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.HouseBankAccountParams;
