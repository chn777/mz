

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InternalReconciliationBP = function () {
}
SAPB1.InternalReconciliationBP.prototype = new SAPB1.ComplexType();
SAPB1.InternalReconciliationBP.prototype.constructor = SAPB1.InternalReconciliationBP;
SAPB1.InternalReconciliationBP.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationBP.prototype.BPCode = new String();



SAPB1.InternalReconciliationBP.create = function (rawObject) {
    var instance = new SAPB1.InternalReconciliationBP();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InternalReconciliationBP.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InternalReconciliationBP;
