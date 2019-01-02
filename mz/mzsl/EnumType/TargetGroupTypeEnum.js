if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TargetGroupTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TargetGroupTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TargetGroupTypeEnum.prototype.constructor = SAPB1.TargetGroupTypeEnum;
SAPB1.TargetGroupTypeEnum.tgtCustomer = new SAPB1.TargetGroupTypeEnum('tgtCustomer', 'tgtCustomer');
SAPB1.TargetGroupTypeEnum.tgtVendor = new SAPB1.TargetGroupTypeEnum('tgtVendor', 'tgtVendor');

module.exports = SAPB1.TargetGroupTypeEnum;
