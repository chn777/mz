
var RclRecurringExecutionHandlingEnum = require('EnumType/RclRecurringExecutionHandlingEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RclRecurringExecutionParams = function () {
}
SAPB1.RclRecurringExecutionParams.prototype = new SAPB1.ComplexType();
SAPB1.RclRecurringExecutionParams.prototype.constructor = SAPB1.RclRecurringExecutionParams;
SAPB1.RclRecurringExecutionParams.OnError = { valueOf: function(){return 'OnError';}, Type: 'RclRecurringExecutionHandlingEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringExecutionParams.prototype.OnError = new String();


SAPB1.RclRecurringExecutionParams.RclRecurringExecutionHandlingEnum = RclRecurringExecutionHandlingEnum

SAPB1.RclRecurringExecutionParams.create = function (rawObject) {
    var instance = new SAPB1.RclRecurringExecutionParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RclRecurringExecutionParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RclRecurringExecutionParams;
