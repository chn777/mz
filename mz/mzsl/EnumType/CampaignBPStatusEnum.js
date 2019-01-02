if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CampaignBPStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CampaignBPStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CampaignBPStatusEnum.prototype.constructor = SAPB1.CampaignBPStatusEnum;
SAPB1.CampaignBPStatusEnum.cbpsActive = new SAPB1.CampaignBPStatusEnum('cbpsActive', 'cbpsActive');
SAPB1.CampaignBPStatusEnum.cbpsInactive = new SAPB1.CampaignBPStatusEnum('cbpsInactive', 'cbpsInactive');

module.exports = SAPB1.CampaignBPStatusEnum;
