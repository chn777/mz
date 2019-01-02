if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ServiceTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ServiceTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ServiceTypeEnum.prototype.constructor = SAPB1.ServiceTypeEnum;
SAPB1.ServiceTypeEnum.srvcPurchasing = new SAPB1.ServiceTypeEnum('srvcPurchasing', 'srvcPurchasing');
SAPB1.ServiceTypeEnum.srvcSales = new SAPB1.ServiceTypeEnum('srvcSales', 'srvcSales');

module.exports = SAPB1.ServiceTypeEnum;
