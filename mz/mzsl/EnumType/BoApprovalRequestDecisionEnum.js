if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoApprovalRequestDecisionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoApprovalRequestDecisionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoApprovalRequestDecisionEnum.prototype.constructor = SAPB1.BoApprovalRequestDecisionEnum;
SAPB1.BoApprovalRequestDecisionEnum.ardNotApproved = new SAPB1.BoApprovalRequestDecisionEnum('ardNotApproved', 'ardNotApproved');
SAPB1.BoApprovalRequestDecisionEnum.ardApproved = new SAPB1.BoApprovalRequestDecisionEnum('ardApproved', 'ardApproved');
SAPB1.BoApprovalRequestDecisionEnum.ardPending = new SAPB1.BoApprovalRequestDecisionEnum('ardPending', 'ardPending');

module.exports = SAPB1.BoApprovalRequestDecisionEnum;
