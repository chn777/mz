if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DocumentAuthorizationStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DocumentAuthorizationStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DocumentAuthorizationStatusEnum.prototype.constructor = SAPB1.DocumentAuthorizationStatusEnum;
SAPB1.DocumentAuthorizationStatusEnum.dasWithout = new SAPB1.DocumentAuthorizationStatusEnum('dasWithout', 'dasWithout');
SAPB1.DocumentAuthorizationStatusEnum.dasGeneratedbyAuthorizer = new SAPB1.DocumentAuthorizationStatusEnum('dasGeneratedbyAuthorizer', 'dasGeneratedbyAuthorizer');
SAPB1.DocumentAuthorizationStatusEnum.dasRejected = new SAPB1.DocumentAuthorizationStatusEnum('dasRejected', 'dasRejected');
SAPB1.DocumentAuthorizationStatusEnum.dasApproved = new SAPB1.DocumentAuthorizationStatusEnum('dasApproved', 'dasApproved');
SAPB1.DocumentAuthorizationStatusEnum.dasPending = new SAPB1.DocumentAuthorizationStatusEnum('dasPending', 'dasPending');
SAPB1.DocumentAuthorizationStatusEnum.dasGenerated = new SAPB1.DocumentAuthorizationStatusEnum('dasGenerated', 'dasGenerated');
SAPB1.DocumentAuthorizationStatusEnum.dasCancelled = new SAPB1.DocumentAuthorizationStatusEnum('dasCancelled', 'dasCancelled');

module.exports = SAPB1.DocumentAuthorizationStatusEnum;
