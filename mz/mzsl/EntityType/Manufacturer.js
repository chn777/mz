

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Manufacturer = function () {
}
SAPB1.Manufacturer.prototype = new SAPB1.EntityType();
SAPB1.Manufacturer.prototype.constructor = SAPB1.Manufacturer;
SAPB1.Manufacturer.prototype.keys.push('Code');
SAPB1.Manufacturer.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Manufacturer.ManufacturerName = { valueOf: function(){return 'ManufacturerName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Manufacturer.prototype.Code = new Number();
SAPB1.Manufacturer.prototype.ManufacturerName = new String();



SAPB1.Manufacturer.create = function (rawObject) {
    var instance = new SAPB1.Manufacturer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Manufacturer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Manufacturer;
