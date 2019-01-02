

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LocalEra = function () {
}
SAPB1.LocalEra.prototype = new SAPB1.EntityType();
SAPB1.LocalEra.prototype.constructor = SAPB1.LocalEra;
SAPB1.LocalEra.prototype.keys.push('Code');
SAPB1.LocalEra.EraName = { valueOf: function(){return 'EraName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LocalEra.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LocalEra.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LocalEra.prototype.EraName = new String();
SAPB1.LocalEra.prototype.StartDate = new String();
SAPB1.LocalEra.prototype.Code = new String();



SAPB1.LocalEra.create = function (rawObject) {
    var instance = new SAPB1.LocalEra();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LocalEra.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LocalEra;
