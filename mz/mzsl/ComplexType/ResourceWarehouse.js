
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceWarehouse = function () {
}
SAPB1.ResourceWarehouse.prototype = new SAPB1.ComplexType();
SAPB1.ResourceWarehouse.prototype.constructor = SAPB1.ResourceWarehouse;
SAPB1.ResourceWarehouse.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ResourceWarehouse.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceWarehouse.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceWarehouse.prototype.Code = new String();
SAPB1.ResourceWarehouse.prototype.Warehouse = new String();
SAPB1.ResourceWarehouse.prototype.Locked = new String();


SAPB1.ResourceWarehouse.BoYesNoEnum = BoYesNoEnum

SAPB1.ResourceWarehouse.create = function (rawObject) {
    var instance = new SAPB1.ResourceWarehouse();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceWarehouse.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceWarehouse;
