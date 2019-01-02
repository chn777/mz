if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CallMessageTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CallMessageTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CallMessageTypeEnum.prototype.constructor = SAPB1.CallMessageTypeEnum;
SAPB1.CallMessageTypeEnum.cmtError = new SAPB1.CallMessageTypeEnum('cmtError', 'cmtError');
SAPB1.CallMessageTypeEnum.cmtWarning = new SAPB1.CallMessageTypeEnum('cmtWarning', 'cmtWarning');
SAPB1.CallMessageTypeEnum.cmtInformation = new SAPB1.CallMessageTypeEnum('cmtInformation', 'cmtInformation');

module.exports = SAPB1.CallMessageTypeEnum;
