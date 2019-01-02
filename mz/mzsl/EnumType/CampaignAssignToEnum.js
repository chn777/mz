if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CampaignAssignToEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CampaignAssignToEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CampaignAssignToEnum.prototype.constructor = SAPB1.CampaignAssignToEnum;
SAPB1.CampaignAssignToEnum.catEmployee = new SAPB1.CampaignAssignToEnum('catEmployee', 'catEmployee');
SAPB1.CampaignAssignToEnum.catUser = new SAPB1.CampaignAssignToEnum('catUser', 'catUser');

module.exports = SAPB1.CampaignAssignToEnum;
