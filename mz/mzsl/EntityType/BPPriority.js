

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPPriority = function () {
}
SAPB1.BPPriority.prototype = new SAPB1.EntityType();
SAPB1.BPPriority.prototype.constructor = SAPB1.BPPriority;
SAPB1.BPPriority.prototype.keys.push('Priority');
SAPB1.BPPriority.Priority = { valueOf: function(){return 'Priority';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPPriority.PriorityDescription = { valueOf: function(){return 'PriorityDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPPriority.prototype.Priority = new Number();
SAPB1.BPPriority.prototype.PriorityDescription = new String();



SAPB1.BPPriority.create = function (rawObject) {
    var instance = new SAPB1.BPPriority();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPPriority.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPPriority;
