

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.IndiaSacCodeParams = function () {
}
SAPB1.IndiaSacCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.IndiaSacCodeParams.prototype.constructor = SAPB1.IndiaSacCodeParams;
SAPB1.IndiaSacCodeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndiaSacCodeParams.ServiceCode = { valueOf: function(){return 'ServiceCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndiaSacCodeParams.prototype.AbsEntry = new Number();
SAPB1.IndiaSacCodeParams.prototype.ServiceCode = new String();



SAPB1.IndiaSacCodeParams.create = function (rawObject) {
    var instance = new SAPB1.IndiaSacCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.IndiaSacCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.IndiaSacCodeParams;
