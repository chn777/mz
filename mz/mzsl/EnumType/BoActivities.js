if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoActivities = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoActivities.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoActivities.prototype.constructor = SAPB1.BoActivities;
SAPB1.BoActivities.cn_Other = new SAPB1.BoActivities('cn_Other', 'cn_Other');
SAPB1.BoActivities.cn_Conversation = new SAPB1.BoActivities('cn_Conversation', 'cn_Conversation');
SAPB1.BoActivities.cn_Task = new SAPB1.BoActivities('cn_Task', 'cn_Task');
SAPB1.BoActivities.cn_Meeting = new SAPB1.BoActivities('cn_Meeting', 'cn_Meeting');
SAPB1.BoActivities.cn_Note = new SAPB1.BoActivities('cn_Note', 'cn_Note');
SAPB1.BoActivities.cn_Campaign = new SAPB1.BoActivities('cn_Campaign', 'cn_Campaign');

module.exports = SAPB1.BoActivities;
