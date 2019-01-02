if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CampaignStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CampaignStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CampaignStatusEnum.prototype.constructor = SAPB1.CampaignStatusEnum;
SAPB1.CampaignStatusEnum.csOpen = new SAPB1.CampaignStatusEnum('csOpen', 'csOpen');
SAPB1.CampaignStatusEnum.csFinished = new SAPB1.CampaignStatusEnum('csFinished', 'csFinished');
SAPB1.CampaignStatusEnum.csCanceled = new SAPB1.CampaignStatusEnum('csCanceled', 'csCanceled');

module.exports = SAPB1.CampaignStatusEnum;
