

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExternalReconciliationParams = function () {
}
SAPB1.ExternalReconciliationParams.prototype = new SAPB1.ComplexType();
SAPB1.ExternalReconciliationParams.prototype.constructor = SAPB1.ExternalReconciliationParams;
SAPB1.ExternalReconciliationParams.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationParams.ReconciliationNo = { valueOf: function(){return 'ReconciliationNo';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationParams.prototype.AccountCode = new String();
SAPB1.ExternalReconciliationParams.prototype.ReconciliationNo = new Number();



SAPB1.ExternalReconciliationParams.create = function (rawObject) {
    var instance = new SAPB1.ExternalReconciliationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExternalReconciliationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExternalReconciliationParams;
