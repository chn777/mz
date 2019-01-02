if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DueDateTypesEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DueDateTypesEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DueDateTypesEnum.prototype.constructor = SAPB1.DueDateTypesEnum;
SAPB1.DueDateTypesEnum.ddtAfterTimePeriod = new SAPB1.DueDateTypesEnum('ddtAfterTimePeriod', 'ddtAfterTimePeriod');
SAPB1.DueDateTypesEnum.ddtByDates = new SAPB1.DueDateTypesEnum('ddtByDates', 'ddtByDates');

module.exports = SAPB1.DueDateTypesEnum;
