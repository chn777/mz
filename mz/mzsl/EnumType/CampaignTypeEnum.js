if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CampaignTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CampaignTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CampaignTypeEnum.prototype.constructor = SAPB1.CampaignTypeEnum;
SAPB1.CampaignTypeEnum.ctEmail = new SAPB1.CampaignTypeEnum('ctEmail', 'ctEmail');
SAPB1.CampaignTypeEnum.ctSMS = new SAPB1.CampaignTypeEnum('ctSMS', 'ctSMS');
SAPB1.CampaignTypeEnum.ctFax = new SAPB1.CampaignTypeEnum('ctFax', 'ctFax');
SAPB1.CampaignTypeEnum.ctMeeting = new SAPB1.CampaignTypeEnum('ctMeeting', 'ctMeeting');
SAPB1.CampaignTypeEnum.ctPhoneCall = new SAPB1.CampaignTypeEnum('ctPhoneCall', 'ctPhoneCall');
SAPB1.CampaignTypeEnum.ctWeb = new SAPB1.CampaignTypeEnum('ctWeb', 'ctWeb');
SAPB1.CampaignTypeEnum.ctOthers = new SAPB1.CampaignTypeEnum('ctOthers', 'ctOthers');
SAPB1.CampaignTypeEnum.ctMail = new SAPB1.CampaignTypeEnum('ctMail', 'ctMail');

module.exports = SAPB1.CampaignTypeEnum;
