

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeRolesInfo = function () {
}
SAPB1.EmployeeRolesInfo.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeRolesInfo.prototype.constructor = SAPB1.EmployeeRolesInfo;
SAPB1.EmployeeRolesInfo.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRolesInfo.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRolesInfo.RoleID = { valueOf: function(){return 'RoleID';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeRolesInfo.prototype.EmployeeID = new Number();
SAPB1.EmployeeRolesInfo.prototype.LineNum = new Number();
SAPB1.EmployeeRolesInfo.prototype.RoleID = new Number();



SAPB1.EmployeeRolesInfo.create = function (rawObject) {
    var instance = new SAPB1.EmployeeRolesInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeRolesInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeRolesInfo;
