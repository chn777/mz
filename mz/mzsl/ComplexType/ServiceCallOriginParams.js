

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallOriginParams = function () {
}
SAPB1.ServiceCallOriginParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallOriginParams.prototype.constructor = SAPB1.ServiceCallOriginParams;
SAPB1.ServiceCallOriginParams.OriginID = { valueOf: function(){return 'OriginID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallOriginParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallOriginParams.prototype.OriginID = new Number();
SAPB1.ServiceCallOriginParams.prototype.Name = new String();



SAPB1.ServiceCallOriginParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallOriginParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallOriginParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallOriginParams;
