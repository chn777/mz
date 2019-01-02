if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GTSResponseToExceedingEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GTSResponseToExceedingEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GTSResponseToExceedingEnum.prototype.constructor = SAPB1.GTSResponseToExceedingEnum;
SAPB1.GTSResponseToExceedingEnum.Block = new SAPB1.GTSResponseToExceedingEnum('Block', 'Block');
SAPB1.GTSResponseToExceedingEnum.Split = new SAPB1.GTSResponseToExceedingEnum('Split', 'Split');

module.exports = SAPB1.GTSResponseToExceedingEnum;
