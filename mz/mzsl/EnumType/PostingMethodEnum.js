if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PostingMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PostingMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PostingMethodEnum.prototype.constructor = SAPB1.PostingMethodEnum;
SAPB1.PostingMethodEnum.pmGLAccountBankAccount = new SAPB1.PostingMethodEnum('pmGLAccountBankAccount', 'pmGLAccountBankAccount');
SAPB1.PostingMethodEnum.pmIgnore = new SAPB1.PostingMethodEnum('pmIgnore', 'pmIgnore');
SAPB1.PostingMethodEnum.pmInterimAccountBankAccount = new SAPB1.PostingMethodEnum('pmInterimAccountBankAccount', 'pmInterimAccountBankAccount');
SAPB1.PostingMethodEnum.pmBussinessPartnerBankAccount = new SAPB1.PostingMethodEnum('pmBussinessPartnerBankAccount', 'pmBussinessPartnerBankAccount');
SAPB1.PostingMethodEnum.pmExternalReconciliation = new SAPB1.PostingMethodEnum('pmExternalReconciliation', 'pmExternalReconciliation');

module.exports = SAPB1.PostingMethodEnum;
