

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AdvancedGLAccountReturnParams = function () {
}
SAPB1.AdvancedGLAccountReturnParams.prototype = new SAPB1.ComplexType();
SAPB1.AdvancedGLAccountReturnParams.prototype.constructor = SAPB1.AdvancedGLAccountReturnParams;
SAPB1.AdvancedGLAccountReturnParams.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountReturnParams.prototype.AccountCode = new String();



SAPB1.AdvancedGLAccountReturnParams.create = function (rawObject) {
    var instance = new SAPB1.AdvancedGLAccountReturnParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AdvancedGLAccountReturnParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AdvancedGLAccountReturnParams;
