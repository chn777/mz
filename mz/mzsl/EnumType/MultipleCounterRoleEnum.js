if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.MultipleCounterRoleEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.MultipleCounterRoleEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.MultipleCounterRoleEnum.prototype.constructor = SAPB1.MultipleCounterRoleEnum;
SAPB1.MultipleCounterRoleEnum.mcrIndividualCounter = new SAPB1.MultipleCounterRoleEnum('mcrIndividualCounter', 'mcrIndividualCounter');
SAPB1.MultipleCounterRoleEnum.mcrTeamCounter = new SAPB1.MultipleCounterRoleEnum('mcrTeamCounter', 'mcrTeamCounter');

module.exports = SAPB1.MultipleCounterRoleEnum;
