if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PaymentsAuthorizationStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PaymentsAuthorizationStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PaymentsAuthorizationStatusEnum.prototype.constructor = SAPB1.PaymentsAuthorizationStatusEnum;
SAPB1.PaymentsAuthorizationStatusEnum.pasWithout = new SAPB1.PaymentsAuthorizationStatusEnum('pasWithout', 'pasWithout');
SAPB1.PaymentsAuthorizationStatusEnum.pasRejected = new SAPB1.PaymentsAuthorizationStatusEnum('pasRejected', 'pasRejected');
SAPB1.PaymentsAuthorizationStatusEnum.pasApproved = new SAPB1.PaymentsAuthorizationStatusEnum('pasApproved', 'pasApproved');
SAPB1.PaymentsAuthorizationStatusEnum.pasGenerated = new SAPB1.PaymentsAuthorizationStatusEnum('pasGenerated', 'pasGenerated');
SAPB1.PaymentsAuthorizationStatusEnum.pasCancelled = new SAPB1.PaymentsAuthorizationStatusEnum('pasCancelled', 'pasCancelled');
SAPB1.PaymentsAuthorizationStatusEnum.pasGeneratedbyAuthorizer = new SAPB1.PaymentsAuthorizationStatusEnum('pasGeneratedbyAuthorizer', 'pasGeneratedbyAuthorizer');
SAPB1.PaymentsAuthorizationStatusEnum.pasPending = new SAPB1.PaymentsAuthorizationStatusEnum('pasPending', 'pasPending');

module.exports = SAPB1.PaymentsAuthorizationStatusEnum;
