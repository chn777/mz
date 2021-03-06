

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeStatus = function () {
}
SAPB1.EmployeeStatus.prototype = new SAPB1.EntityType();
SAPB1.EmployeeStatus.prototype.constructor = SAPB1.EmployeeStatus;
SAPB1.EmployeeStatus.prototype.keys.push('StatusId');
SAPB1.EmployeeStatus.StatusId = { valueOf: function(){return 'StatusId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeStatus.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeStatus.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeStatus.prototype.StatusId = new Number();
SAPB1.EmployeeStatus.prototype.Name = new String();
SAPB1.EmployeeStatus.prototype.Description = new String();



SAPB1.EmployeeStatus.create = function (rawObject) {
    var instance = new SAPB1.EmployeeStatus();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeStatus.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeStatus;
