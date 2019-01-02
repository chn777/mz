if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBoeStatus = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBoeStatus.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBoeStatus.prototype.constructor = SAPB1.BoBoeStatus;
SAPB1.BoBoeStatus.boes_Deposited = new SAPB1.BoBoeStatus('boes_Deposited', 'boes_Deposited');
SAPB1.BoBoeStatus.boes_Sent = new SAPB1.BoBoeStatus('boes_Sent', 'boes_Sent');
SAPB1.BoBoeStatus.boes_Closed = new SAPB1.BoBoeStatus('boes_Closed', 'boes_Closed');
SAPB1.BoBoeStatus.boes_Failed = new SAPB1.BoBoeStatus('boes_Failed', 'boes_Failed');
SAPB1.BoBoeStatus.boes_Paid = new SAPB1.BoBoeStatus('boes_Paid', 'boes_Paid');
SAPB1.BoBoeStatus.boes_Cancelled = new SAPB1.BoBoeStatus('boes_Cancelled', 'boes_Cancelled');
SAPB1.BoBoeStatus.boes_Created = new SAPB1.BoBoeStatus('boes_Created', 'boes_Created');

module.exports = SAPB1.BoBoeStatus;
