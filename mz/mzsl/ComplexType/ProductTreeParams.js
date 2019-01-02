

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductTreeParams = function () {
}
SAPB1.ProductTreeParams.prototype = new SAPB1.ComplexType();
SAPB1.ProductTreeParams.prototype.constructor = SAPB1.ProductTreeParams;
SAPB1.ProductTreeParams.TreeCode = { valueOf: function(){return 'TreeCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeParams.prototype.TreeCode = new String();



SAPB1.ProductTreeParams.create = function (rawObject) {
    var instance = new SAPB1.ProductTreeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductTreeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductTreeParams;
