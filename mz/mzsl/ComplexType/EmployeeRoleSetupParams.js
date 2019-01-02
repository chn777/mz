

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeRoleSetupParams = function () {
}
SAPB1.EmployeeRoleSetupParams.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeRoleSetupParams.prototype.constructor = SAPB1.EmployeeRoleSetupParams;
SAPB1.EmployeeRoleSetupParams.TypeID = { valueOf: function(){return 'TypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRoleSetupParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRoleSetupParams.prototype.TypeID = new Number();
SAPB1.EmployeeRoleSetupParams.prototype.Name = new String();



SAPB1.EmployeeRoleSetupParams.create = function (rawObject) {
    var instance = new SAPB1.EmployeeRoleSetupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeRoleSetupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeRoleSetupParams;
