

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CallArgument = function () {
}
SAPB1.CallArgument.prototype = new SAPB1.ComplexType();
SAPB1.CallArgument.prototype.constructor = SAPB1.CallArgument;
SAPB1.CallArgument.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallArgument.Value = { valueOf: function(){return 'Value';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallArgument.prototype.Name = new String();
SAPB1.CallArgument.prototype.Value = new String();



SAPB1.CallArgument.create = function (rawObject) {
    var instance = new SAPB1.CallArgument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CallArgument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CallArgument;
