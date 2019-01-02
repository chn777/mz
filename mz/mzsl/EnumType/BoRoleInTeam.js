if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRoleInTeam = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRoleInTeam.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRoleInTeam.prototype.constructor = SAPB1.BoRoleInTeam;
SAPB1.BoRoleInTeam.borit_Member = new SAPB1.BoRoleInTeam('borit_Member', 'borit_Member');
SAPB1.BoRoleInTeam.borit_Leader = new SAPB1.BoRoleInTeam('borit_Leader', 'borit_Leader');

module.exports = SAPB1.BoRoleInTeam;
