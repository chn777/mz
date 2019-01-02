

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingParams = function () {
}
SAPB1.InventoryPostingParams.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingParams.prototype.constructor = SAPB1.InventoryPostingParams;
SAPB1.InventoryPostingParams.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingParams.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingParams.prototype.DocumentEntry = new Number();
SAPB1.InventoryPostingParams.prototype.DocumentNumber = new Number();



SAPB1.InventoryPostingParams.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingParams;
