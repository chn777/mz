if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GroupingMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GroupingMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GroupingMethodEnum.prototype.constructor = SAPB1.GroupingMethodEnum;
SAPB1.GroupingMethodEnum.gmPerInvoice = new SAPB1.GroupingMethodEnum('gmPerInvoice', 'gmPerInvoice');
SAPB1.GroupingMethodEnum.gmPerBP = new SAPB1.GroupingMethodEnum('gmPerBP', 'gmPerBP');
SAPB1.GroupingMethodEnum.gmPerDunningLevel = new SAPB1.GroupingMethodEnum('gmPerDunningLevel', 'gmPerDunningLevel');

module.exports = SAPB1.GroupingMethodEnum;
