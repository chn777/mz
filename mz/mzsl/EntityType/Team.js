var TeamMember = require('ComplexType/TeamMember')
var TeamMemberCollection = require('ComplexType/TeamMemberCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Team = function () {
}
SAPB1.Team.prototype = new SAPB1.EntityType();
SAPB1.Team.prototype.constructor = SAPB1.Team;
SAPB1.Team.prototype.keys.push('TeamID');
SAPB1.Team.TeamID = { valueOf: function(){return 'TeamID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Team.TeamName = { valueOf: function(){return 'TeamName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Team.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Team.TeamMembers = { valueOf: function(){return 'TeamMembers';}, Type: 'TeamMember', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Team.prototype.TeamID = new Number();
SAPB1.Team.prototype.TeamName = new String();
SAPB1.Team.prototype.Description = new String();
SAPB1.Team.prototype.TeamMembers = new TeamMemberCollection();

SAPB1.Team.TeamMember = TeamMember
SAPB1.Team.TeamMemberCollection = TeamMemberCollection


SAPB1.Team.create = function (rawObject) {
    var instance = new SAPB1.Team();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Team.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Team;
