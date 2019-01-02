if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReconSelectDateTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReconSelectDateTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReconSelectDateTypeEnum.prototype.constructor = SAPB1.ReconSelectDateTypeEnum;
SAPB1.ReconSelectDateTypeEnum.rsdtPostDate = new SAPB1.ReconSelectDateTypeEnum('rsdtPostDate', 'rsdtPostDate');
SAPB1.ReconSelectDateTypeEnum.rsdtDueDate = new SAPB1.ReconSelectDateTypeEnum('rsdtDueDate', 'rsdtDueDate');
SAPB1.ReconSelectDateTypeEnum.rsdtDocDate = new SAPB1.ReconSelectDateTypeEnum('rsdtDocDate', 'rsdtDocDate');

module.exports = SAPB1.ReconSelectDateTypeEnum;
