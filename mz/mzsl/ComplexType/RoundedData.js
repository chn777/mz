

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RoundedData = function () {
}
SAPB1.RoundedData.prototype = new SAPB1.ComplexType();
SAPB1.RoundedData.prototype.constructor = SAPB1.RoundedData;
SAPB1.RoundedData.Value = { valueOf: function(){return 'Value';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoundedData.prototype.Value = new Number();



SAPB1.RoundedData.create = function (rawObject) {
    var instance = new SAPB1.RoundedData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RoundedData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RoundedData;
