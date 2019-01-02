
var BoRoleInTeam = require('EnumType/BoRoleInTeam')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TeamMember = function () {
}
SAPB1.TeamMember.prototype = new SAPB1.ComplexType();
SAPB1.TeamMember.prototype.constructor = SAPB1.TeamMember;
SAPB1.TeamMember.TeamID = { valueOf: function(){return 'TeamID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TeamMember.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamMember.RoleInTeam = { valueOf: function(){return 'RoleInTeam';}, Type: 'BoRoleInTeam', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamMember.prototype.TeamID = new Number();
SAPB1.TeamMember.prototype.EmployeeID = new Number();
SAPB1.TeamMember.prototype.RoleInTeam = new String();


SAPB1.TeamMember.BoRoleInTeam = BoRoleInTeam

SAPB1.TeamMember.create = function (rawObject) {
    var instance = new SAPB1.TeamMember();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TeamMember.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TeamMember;
