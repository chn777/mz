

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOELineParams = function () {
}
SAPB1.BOELineParams.prototype = new SAPB1.ComplexType();
SAPB1.BOELineParams.prototype.constructor = SAPB1.BOELineParams;
SAPB1.BOELineParams.BOEKey = { valueOf: function(){return 'BOEKey';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELineParams.prototype.BOEKey = new Number();



SAPB1.BOELineParams.create = function (rawObject) {
    var instance = new SAPB1.BOELineParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOELineParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOELineParams;
