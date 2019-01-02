

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CycleCountDeterminationParams = function () {
}
SAPB1.CycleCountDeterminationParams.prototype = new SAPB1.ComplexType();
SAPB1.CycleCountDeterminationParams.prototype.constructor = SAPB1.CycleCountDeterminationParams;
SAPB1.CycleCountDeterminationParams.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationParams.CycleBy = { valueOf: function(){return 'CycleBy';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationParams.prototype.WarehouseCode = new String();
SAPB1.CycleCountDeterminationParams.prototype.CycleBy = new Number();



SAPB1.CycleCountDeterminationParams.create = function (rawObject) {
    var instance = new SAPB1.CycleCountDeterminationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CycleCountDeterminationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CycleCountDeterminationParams;
