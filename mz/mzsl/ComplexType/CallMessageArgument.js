

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CallMessageArgument = function () {
}
SAPB1.CallMessageArgument.prototype = new SAPB1.ComplexType();
SAPB1.CallMessageArgument.prototype.constructor = SAPB1.CallMessageArgument;
SAPB1.CallMessageArgument.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessageArgument.Value = { valueOf: function(){return 'Value';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessageArgument.prototype.Name = new String();
SAPB1.CallMessageArgument.prototype.Value = new String();



SAPB1.CallMessageArgument.create = function (rawObject) {
    var instance = new SAPB1.CallMessageArgument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CallMessageArgument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CallMessageArgument;
