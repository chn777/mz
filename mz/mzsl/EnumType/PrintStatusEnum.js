if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PrintStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PrintStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PrintStatusEnum.prototype.constructor = SAPB1.PrintStatusEnum;
SAPB1.PrintStatusEnum.psNo = new SAPB1.PrintStatusEnum('psNo', 'psNo');
SAPB1.PrintStatusEnum.psAmended = new SAPB1.PrintStatusEnum('psAmended', 'psAmended');
SAPB1.PrintStatusEnum.psYes = new SAPB1.PrintStatusEnum('psYes', 'psYes');

module.exports = SAPB1.PrintStatusEnum;
