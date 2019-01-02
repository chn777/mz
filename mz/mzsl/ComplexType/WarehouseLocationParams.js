

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WarehouseLocationParams = function () {
}
SAPB1.WarehouseLocationParams.prototype = new SAPB1.ComplexType();
SAPB1.WarehouseLocationParams.prototype.constructor = SAPB1.WarehouseLocationParams;
SAPB1.WarehouseLocationParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocationParams.prototype.Code = new Number();



SAPB1.WarehouseLocationParams.create = function (rawObject) {
    var instance = new SAPB1.WarehouseLocationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WarehouseLocationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WarehouseLocationParams;
