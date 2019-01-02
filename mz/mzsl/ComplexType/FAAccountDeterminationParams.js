

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FAAccountDeterminationParams = function () {
}
SAPB1.FAAccountDeterminationParams.prototype = new SAPB1.ComplexType();
SAPB1.FAAccountDeterminationParams.prototype.constructor = SAPB1.FAAccountDeterminationParams;
SAPB1.FAAccountDeterminationParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDeterminationParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDeterminationParams.prototype.Code = new String();
SAPB1.FAAccountDeterminationParams.prototype.Description = new String();



SAPB1.FAAccountDeterminationParams.create = function (rawObject) {
    var instance = new SAPB1.FAAccountDeterminationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FAAccountDeterminationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FAAccountDeterminationParams;
