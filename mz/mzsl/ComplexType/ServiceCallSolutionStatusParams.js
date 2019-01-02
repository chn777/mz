

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallSolutionStatusParams = function () {
}
SAPB1.ServiceCallSolutionStatusParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallSolutionStatusParams.prototype.constructor = SAPB1.ServiceCallSolutionStatusParams;
SAPB1.ServiceCallSolutionStatusParams.StatusId = { valueOf: function(){return 'StatusId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolutionStatusParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolutionStatusParams.prototype.StatusId = new Number();
SAPB1.ServiceCallSolutionStatusParams.prototype.Name = new String();



SAPB1.ServiceCallSolutionStatusParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallSolutionStatusParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallSolutionStatusParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallSolutionStatusParams;
