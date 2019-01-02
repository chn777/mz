

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ShippingType = function () {
}
SAPB1.ShippingType.prototype = new SAPB1.EntityType();
SAPB1.ShippingType.prototype.constructor = SAPB1.ShippingType;
SAPB1.ShippingType.prototype.keys.push('Code');
SAPB1.ShippingType.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ShippingType.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ShippingType.Website = { valueOf: function(){return 'Website';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ShippingType.prototype.Code = new Number();
SAPB1.ShippingType.prototype.Name = new String();
SAPB1.ShippingType.prototype.Website = new String();



SAPB1.ShippingType.create = function (rawObject) {
    var instance = new SAPB1.ShippingType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ShippingType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ShippingType;
