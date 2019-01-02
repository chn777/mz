if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CampaignItemTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CampaignItemTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CampaignItemTypeEnum.prototype.constructor = SAPB1.CampaignItemTypeEnum;
SAPB1.CampaignItemTypeEnum.citLabel = new SAPB1.CampaignItemTypeEnum('citLabel', 'citLabel');
SAPB1.CampaignItemTypeEnum.citTravel = new SAPB1.CampaignItemTypeEnum('citTravel', 'citTravel');
SAPB1.CampaignItemTypeEnum.citItems = new SAPB1.CampaignItemTypeEnum('citItems', 'citItems');

module.exports = SAPB1.CampaignItemTypeEnum;
