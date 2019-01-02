if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EDocStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EDocStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EDocStatusEnum.prototype.constructor = SAPB1.EDocStatusEnum;
SAPB1.EDocStatusEnum.edoc_Error = new SAPB1.EDocStatusEnum('edoc_Error', 'edoc_Error');
SAPB1.EDocStatusEnum.edoc_Pending = new SAPB1.EDocStatusEnum('edoc_Pending', 'edoc_Pending');
SAPB1.EDocStatusEnum.edoc_New = new SAPB1.EDocStatusEnum('edoc_New', 'edoc_New');
SAPB1.EDocStatusEnum.edoc_Ok = new SAPB1.EDocStatusEnum('edoc_Ok', 'edoc_Ok');
SAPB1.EDocStatusEnum.edoc_Sent = new SAPB1.EDocStatusEnum('edoc_Sent', 'edoc_Sent');

module.exports = SAPB1.EDocStatusEnum;
