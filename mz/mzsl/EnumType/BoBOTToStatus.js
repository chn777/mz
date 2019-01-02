if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBOTToStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBOTToStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBOTToStatus.prototype.constructor = SAPB1.BoBOTToStatus;
SAPB1.BoBOTToStatus.btts_Paid = new SAPB1.BoBOTToStatus('btts_Paid', 'btts_Paid');
SAPB1.BoBOTToStatus.btts_Failed = new SAPB1.BoBOTToStatus('btts_Failed', 'btts_Failed');
SAPB1.BoBOTToStatus.btts_Deposit = new SAPB1.BoBOTToStatus('btts_Deposit', 'btts_Deposit');
SAPB1.BoBOTToStatus.btts_Canceled = new SAPB1.BoBOTToStatus('btts_Canceled', 'btts_Canceled');
SAPB1.BoBOTToStatus.btts_Closed = new SAPB1.BoBOTToStatus('btts_Closed', 'btts_Closed');
SAPB1.BoBOTToStatus.btts_Generated = new SAPB1.BoBOTToStatus('btts_Generated', 'btts_Generated');

module.exports = SAPB1.BoBOTToStatus;
