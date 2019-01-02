

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryOpeningBalanceParams = function () {
}
SAPB1.InventoryOpeningBalanceParams.prototype = new SAPB1.ComplexType();
SAPB1.InventoryOpeningBalanceParams.prototype.constructor = SAPB1.InventoryOpeningBalanceParams;
SAPB1.InventoryOpeningBalanceParams.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceParams.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceParams.prototype.DocumentEntry = new Number();
SAPB1.InventoryOpeningBalanceParams.prototype.DocumentNumber = new Number();



SAPB1.InventoryOpeningBalanceParams.create = function (rawObject) {
    var instance = new SAPB1.InventoryOpeningBalanceParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryOpeningBalanceParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryOpeningBalanceParams;
