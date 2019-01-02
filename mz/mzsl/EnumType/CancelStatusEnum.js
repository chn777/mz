if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CancelStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CancelStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CancelStatusEnum.prototype.constructor = SAPB1.CancelStatusEnum;
SAPB1.CancelStatusEnum.csYes = new SAPB1.CancelStatusEnum('csYes', 'csYes');
SAPB1.CancelStatusEnum.csNo = new SAPB1.CancelStatusEnum('csNo', 'csNo');
SAPB1.CancelStatusEnum.csCancellation = new SAPB1.CancelStatusEnum('csCancellation', 'csCancellation');

module.exports = SAPB1.CancelStatusEnum;
