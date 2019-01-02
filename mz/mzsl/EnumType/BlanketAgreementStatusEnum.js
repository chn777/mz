if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BlanketAgreementStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BlanketAgreementStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BlanketAgreementStatusEnum.prototype.constructor = SAPB1.BlanketAgreementStatusEnum;
SAPB1.BlanketAgreementStatusEnum.asDraft = new SAPB1.BlanketAgreementStatusEnum('asDraft', 'asDraft');
SAPB1.BlanketAgreementStatusEnum.asApproved = new SAPB1.BlanketAgreementStatusEnum('asApproved', 'asApproved');
SAPB1.BlanketAgreementStatusEnum.asOnHold = new SAPB1.BlanketAgreementStatusEnum('asOnHold', 'asOnHold');
SAPB1.BlanketAgreementStatusEnum.asTerminated = new SAPB1.BlanketAgreementStatusEnum('asTerminated', 'asTerminated');

module.exports = SAPB1.BlanketAgreementStatusEnum;
