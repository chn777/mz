if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EWBSupplyTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EWBSupplyTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EWBSupplyTypeEnum.prototype.constructor = SAPB1.EWBSupplyTypeEnum;
SAPB1.EWBSupplyTypeEnum.ewb_st_Inward = new SAPB1.EWBSupplyTypeEnum('ewb_st_Inward', 'ewb_st_Inward');
SAPB1.EWBSupplyTypeEnum.ewb_st_Outward = new SAPB1.EWBSupplyTypeEnum('ewb_st_Outward', 'ewb_st_Outward');

module.exports = SAPB1.EWBSupplyTypeEnum;
