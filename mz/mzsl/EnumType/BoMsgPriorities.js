if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoMsgPriorities = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoMsgPriorities.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoMsgPriorities.prototype.constructor = SAPB1.BoMsgPriorities;
SAPB1.BoMsgPriorities.pr_High = new SAPB1.BoMsgPriorities('pr_High', 'pr_High');
SAPB1.BoMsgPriorities.pr_Low = new SAPB1.BoMsgPriorities('pr_Low', 'pr_Low');
SAPB1.BoMsgPriorities.pr_Normal = new SAPB1.BoMsgPriorities('pr_Normal', 'pr_Normal');

module.exports = SAPB1.BoMsgPriorities;
