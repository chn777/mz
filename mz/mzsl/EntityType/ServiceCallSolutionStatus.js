

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallSolutionStatus = function () {
}
SAPB1.ServiceCallSolutionStatus.prototype = new SAPB1.EntityType();
SAPB1.ServiceCallSolutionStatus.prototype.constructor = SAPB1.ServiceCallSolutionStatus;
SAPB1.ServiceCallSolutionStatus.prototype.keys.push('StatusId');
SAPB1.ServiceCallSolutionStatus.StatusId = { valueOf: function(){return 'StatusId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolutionStatus.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolutionStatus.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolutionStatus.prototype.StatusId = new Number();
SAPB1.ServiceCallSolutionStatus.prototype.Name = new String();
SAPB1.ServiceCallSolutionStatus.prototype.Description = new String();



SAPB1.ServiceCallSolutionStatus.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallSolutionStatus();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallSolutionStatus.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallSolutionStatus;
