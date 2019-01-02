if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDataOwnershipManageMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDataOwnershipManageMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDataOwnershipManageMethodEnum.prototype.constructor = SAPB1.BoDataOwnershipManageMethodEnum;
SAPB1.BoDataOwnershipManageMethodEnum.doManageByDocOnly = new SAPB1.BoDataOwnershipManageMethodEnum('doManageByDocOnly', 'doManageByDocOnly');
SAPB1.BoDataOwnershipManageMethodEnum.doManageByBPnDoc = new SAPB1.BoDataOwnershipManageMethodEnum('doManageByBPnDoc', 'doManageByBPnDoc');
SAPB1.BoDataOwnershipManageMethodEnum.doManageByBranch = new SAPB1.BoDataOwnershipManageMethodEnum('doManageByBranch', 'doManageByBranch');
SAPB1.BoDataOwnershipManageMethodEnum.doManageByBPOnly = new SAPB1.BoDataOwnershipManageMethodEnum('doManageByBPOnly', 'doManageByBPOnly');

module.exports = SAPB1.BoDataOwnershipManageMethodEnum;
