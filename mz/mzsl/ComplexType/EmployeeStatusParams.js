

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeStatusParams = function () {
}
SAPB1.EmployeeStatusParams.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeStatusParams.prototype.constructor = SAPB1.EmployeeStatusParams;
SAPB1.EmployeeStatusParams.StatusId = { valueOf: function(){return 'StatusId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeStatusParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeStatusParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeStatusParams.prototype.StatusId = new Number();
SAPB1.EmployeeStatusParams.prototype.Name = new String();
SAPB1.EmployeeStatusParams.prototype.Description = new String();



SAPB1.EmployeeStatusParams.create = function (rawObject) {
    var instance = new SAPB1.EmployeeStatusParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeStatusParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeStatusParams;
