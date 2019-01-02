

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RclRecurringTransactionParams = function () {
}
SAPB1.RclRecurringTransactionParams.prototype = new SAPB1.EntityType();
SAPB1.RclRecurringTransactionParams.prototype.constructor = SAPB1.RclRecurringTransactionParams;
SAPB1.RclRecurringTransactionParams.prototype.keys.push('TransactionID');
SAPB1.RclRecurringTransactionParams.TransactionID = { valueOf: function(){return 'TransactionID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransactionParams.PlannedDate = { valueOf: function(){return 'PlannedDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransactionParams.prototype.TransactionID = new Number();
SAPB1.RclRecurringTransactionParams.prototype.PlannedDate = new String();



SAPB1.RclRecurringTransactionParams.create = function (rawObject) {
    var instance = new SAPB1.RclRecurringTransactionParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RclRecurringTransactionParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RclRecurringTransactionParams;
