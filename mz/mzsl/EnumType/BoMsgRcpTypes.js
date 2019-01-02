if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoMsgRcpTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoMsgRcpTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoMsgRcpTypes.prototype.constructor = SAPB1.BoMsgRcpTypes;
SAPB1.BoMsgRcpTypes.rt_ContactPerson = new SAPB1.BoMsgRcpTypes('rt_ContactPerson', 'rt_ContactPerson');
SAPB1.BoMsgRcpTypes.rt_RandomUser = new SAPB1.BoMsgRcpTypes('rt_RandomUser', 'rt_RandomUser');
SAPB1.BoMsgRcpTypes.rt_InternalUser = new SAPB1.BoMsgRcpTypes('rt_InternalUser', 'rt_InternalUser');

module.exports = SAPB1.BoMsgRcpTypes;
