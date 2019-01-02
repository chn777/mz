if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoApprovalRequestStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoApprovalRequestStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoApprovalRequestStatusEnum.prototype.constructor = SAPB1.BoApprovalRequestStatusEnum;
SAPB1.BoApprovalRequestStatusEnum.arsApproved = new SAPB1.BoApprovalRequestStatusEnum('arsApproved', 'arsApproved');
SAPB1.BoApprovalRequestStatusEnum.arsNotApproved = new SAPB1.BoApprovalRequestStatusEnum('arsNotApproved', 'arsNotApproved');
SAPB1.BoApprovalRequestStatusEnum.arsCancelled = new SAPB1.BoApprovalRequestStatusEnum('arsCancelled', 'arsCancelled');
SAPB1.BoApprovalRequestStatusEnum.arsPending = new SAPB1.BoApprovalRequestStatusEnum('arsPending', 'arsPending');
SAPB1.BoApprovalRequestStatusEnum.arsGenerated = new SAPB1.BoApprovalRequestStatusEnum('arsGenerated', 'arsGenerated');
SAPB1.BoApprovalRequestStatusEnum.arsGeneratedByAuthorizer = new SAPB1.BoApprovalRequestStatusEnum('arsGeneratedByAuthorizer', 'arsGeneratedByAuthorizer');

module.exports = SAPB1.BoApprovalRequestStatusEnum;
