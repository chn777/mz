

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallProblemType = function () {
}
SAPB1.ServiceCallProblemType.prototype = new SAPB1.EntityType();
SAPB1.ServiceCallProblemType.prototype.constructor = SAPB1.ServiceCallProblemType;
SAPB1.ServiceCallProblemType.prototype.keys.push('ProblemTypeID');
SAPB1.ServiceCallProblemType.ProblemTypeID = { valueOf: function(){return 'ProblemTypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallProblemType.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallProblemType.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallProblemType.prototype.ProblemTypeID = new Number();
SAPB1.ServiceCallProblemType.prototype.Name = new String();
SAPB1.ServiceCallProblemType.prototype.Description = new String();



SAPB1.ServiceCallProblemType.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallProblemType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallProblemType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallProblemType;
