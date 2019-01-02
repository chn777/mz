if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoSvcCallPriorities = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoSvcCallPriorities.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoSvcCallPriorities.prototype.constructor = SAPB1.BoSvcCallPriorities;
SAPB1.BoSvcCallPriorities.scp_Low = new SAPB1.BoSvcCallPriorities('scp_Low', 'scp_Low');
SAPB1.BoSvcCallPriorities.scp_High = new SAPB1.BoSvcCallPriorities('scp_High', 'scp_High');
SAPB1.BoSvcCallPriorities.scp_Medium = new SAPB1.BoSvcCallPriorities('scp_Medium', 'scp_Medium');

module.exports = SAPB1.BoSvcCallPriorities;
