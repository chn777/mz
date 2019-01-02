

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallStatusParams = function () {
}
SAPB1.ServiceCallStatusParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallStatusParams.prototype.constructor = SAPB1.ServiceCallStatusParams;
SAPB1.ServiceCallStatusParams.StatusId = { valueOf: function(){return 'StatusId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallStatusParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallStatusParams.prototype.StatusId = new Number();
SAPB1.ServiceCallStatusParams.prototype.Name = new String();



SAPB1.ServiceCallStatusParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallStatusParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallStatusParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallStatusParams;
