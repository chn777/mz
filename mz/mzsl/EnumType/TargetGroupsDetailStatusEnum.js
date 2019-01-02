if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TargetGroupsDetailStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TargetGroupsDetailStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TargetGroupsDetailStatusEnum.prototype.constructor = SAPB1.TargetGroupsDetailStatusEnum;
SAPB1.TargetGroupsDetailStatusEnum.tdsActive = new SAPB1.TargetGroupsDetailStatusEnum('tdsActive', 'tdsActive');
SAPB1.TargetGroupsDetailStatusEnum.tdsInactive = new SAPB1.TargetGroupsDetailStatusEnum('tdsInactive', 'tdsInactive');

module.exports = SAPB1.TargetGroupsDetailStatusEnum;
