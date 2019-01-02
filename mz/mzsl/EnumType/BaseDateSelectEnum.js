if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BaseDateSelectEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BaseDateSelectEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BaseDateSelectEnum.prototype.constructor = SAPB1.BaseDateSelectEnum;
SAPB1.BaseDateSelectEnum.bdsFromLastDunningRun = new SAPB1.BaseDateSelectEnum('bdsFromLastDunningRun', 'bdsFromLastDunningRun');
SAPB1.BaseDateSelectEnum.bdsFromDueDate = new SAPB1.BaseDateSelectEnum('bdsFromDueDate', 'bdsFromDueDate');

module.exports = SAPB1.BaseDateSelectEnum;
