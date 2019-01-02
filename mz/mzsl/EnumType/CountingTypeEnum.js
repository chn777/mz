if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CountingTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CountingTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CountingTypeEnum.prototype.constructor = SAPB1.CountingTypeEnum;
SAPB1.CountingTypeEnum.ctMultipleCounters = new SAPB1.CountingTypeEnum('ctMultipleCounters', 'ctMultipleCounters');
SAPB1.CountingTypeEnum.ctSingleCounter = new SAPB1.CountingTypeEnum('ctSingleCounter', 'ctSingleCounter');

module.exports = SAPB1.CountingTypeEnum;
