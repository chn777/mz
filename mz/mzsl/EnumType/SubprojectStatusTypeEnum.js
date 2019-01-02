if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.SubprojectStatusTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.SubprojectStatusTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.SubprojectStatusTypeEnum.prototype.constructor = SAPB1.SubprojectStatusTypeEnum;
SAPB1.SubprojectStatusTypeEnum.sst_Open = new SAPB1.SubprojectStatusTypeEnum('sst_Open', 'sst_Open');
SAPB1.SubprojectStatusTypeEnum.sst_Closed = new SAPB1.SubprojectStatusTypeEnum('sst_Closed', 'sst_Closed');

module.exports = SAPB1.SubprojectStatusTypeEnum;
