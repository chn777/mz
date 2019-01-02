if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CallMessageStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CallMessageStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CallMessageStatusEnum.prototype.constructor = SAPB1.CallMessageStatusEnum;
SAPB1.CallMessageStatusEnum.cmsUnread = new SAPB1.CallMessageStatusEnum('cmsUnread', 'cmsUnread');
SAPB1.CallMessageStatusEnum.cmsRead = new SAPB1.CallMessageStatusEnum('cmsRead', 'cmsRead');

module.exports = SAPB1.CallMessageStatusEnum;
