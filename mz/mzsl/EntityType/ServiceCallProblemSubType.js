

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallProblemSubType = function () {
}
SAPB1.ServiceCallProblemSubType.prototype = new SAPB1.EntityType();
SAPB1.ServiceCallProblemSubType.prototype.constructor = SAPB1.ServiceCallProblemSubType;
SAPB1.ServiceCallProblemSubType.prototype.keys.push('ProblemSubTypeID');
SAPB1.ServiceCallProblemSubType.ProblemSubTypeID = { valueOf: function(){return 'ProblemSubTypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallProblemSubType.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallProblemSubType.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallProblemSubType.prototype.ProblemSubTypeID = new Number();
SAPB1.ServiceCallProblemSubType.prototype.Name = new String();
SAPB1.ServiceCallProblemSubType.prototype.Description = new String();



SAPB1.ServiceCallProblemSubType.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallProblemSubType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallProblemSubType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallProblemSubType;
