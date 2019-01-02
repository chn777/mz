if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.KPITypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.KPITypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.KPITypeEnum.prototype.constructor = SAPB1.KPITypeEnum;
SAPB1.KPITypeEnum.asSingle = new SAPB1.KPITypeEnum('asSingle', 'asSingle');
SAPB1.KPITypeEnum.asMultiple = new SAPB1.KPITypeEnum('asMultiple', 'asMultiple');
SAPB1.KPITypeEnum.asMonthly = new SAPB1.KPITypeEnum('asMonthly', 'asMonthly');
SAPB1.KPITypeEnum.asQuarterly = new SAPB1.KPITypeEnum('asQuarterly', 'asQuarterly');

module.exports = SAPB1.KPITypeEnum;
