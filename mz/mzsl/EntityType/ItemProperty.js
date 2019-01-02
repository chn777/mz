

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemProperty = function () {
}
SAPB1.ItemProperty.prototype = new SAPB1.EntityType();
SAPB1.ItemProperty.prototype.constructor = SAPB1.ItemProperty;
SAPB1.ItemProperty.prototype.keys.push('Number');
SAPB1.ItemProperty.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemProperty.PropertyName = { valueOf: function(){return 'PropertyName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemProperty.prototype.Number = new Number();
SAPB1.ItemProperty.prototype.PropertyName = new String();



SAPB1.ItemProperty.create = function (rawObject) {
    var instance = new SAPB1.ItemProperty();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemProperty.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemProperty;
