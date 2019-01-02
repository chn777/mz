

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CustomerEquipmentCardParams = function () {
}
SAPB1.CustomerEquipmentCardParams.prototype = new SAPB1.ComplexType();
SAPB1.CustomerEquipmentCardParams.prototype.constructor = SAPB1.CustomerEquipmentCardParams;
SAPB1.CustomerEquipmentCardParams.EquipmentCardNum = { valueOf: function(){return 'EquipmentCardNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCardParams.prototype.EquipmentCardNum = new Number();



SAPB1.CustomerEquipmentCardParams.create = function (rawObject) {
    var instance = new SAPB1.CustomerEquipmentCardParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CustomerEquipmentCardParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CustomerEquipmentCardParams;
