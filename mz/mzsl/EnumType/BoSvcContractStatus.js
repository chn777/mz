if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSvcContractStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSvcContractStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSvcContractStatus.prototype.constructor = SAPB1.BoSvcContractStatus;
SAPB1.BoSvcContractStatus.scs_Approved = new SAPB1.BoSvcContractStatus('scs_Approved', 'scs_Approved');
SAPB1.BoSvcContractStatus.scs_Frozen = new SAPB1.BoSvcContractStatus('scs_Frozen', 'scs_Frozen');
SAPB1.BoSvcContractStatus.scs_Terminated = new SAPB1.BoSvcContractStatus('scs_Terminated', 'scs_Terminated');
SAPB1.BoSvcContractStatus.scs_Draft = new SAPB1.BoSvcContractStatus('scs_Draft', 'scs_Draft');

module.exports = SAPB1.BoSvcContractStatus;
