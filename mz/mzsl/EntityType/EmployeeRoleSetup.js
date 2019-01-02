

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeRoleSetup = function () {
}
SAPB1.EmployeeRoleSetup.prototype = new SAPB1.EntityType();
SAPB1.EmployeeRoleSetup.prototype.constructor = SAPB1.EmployeeRoleSetup;
SAPB1.EmployeeRoleSetup.prototype.keys.push('TypeID');
SAPB1.EmployeeRoleSetup.TypeID = { valueOf: function(){return 'TypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeRoleSetup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRoleSetup.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRoleSetup.prototype.TypeID = new Number();
SAPB1.EmployeeRoleSetup.prototype.Name = new String();
SAPB1.EmployeeRoleSetup.prototype.Description = new String();



SAPB1.EmployeeRoleSetup.create = function (rawObject) {
    var instance = new SAPB1.EmployeeRoleSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeRoleSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeRoleSetup;
