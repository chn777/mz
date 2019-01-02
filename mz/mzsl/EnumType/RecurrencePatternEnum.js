if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RecurrencePatternEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RecurrencePatternEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RecurrencePatternEnum.prototype.constructor = SAPB1.RecurrencePatternEnum;
SAPB1.RecurrencePatternEnum.rpNone = new SAPB1.RecurrencePatternEnum('rpNone', 'rpNone');
SAPB1.RecurrencePatternEnum.rpMonthly = new SAPB1.RecurrencePatternEnum('rpMonthly', 'rpMonthly');
SAPB1.RecurrencePatternEnum.rpAnnually = new SAPB1.RecurrencePatternEnum('rpAnnually', 'rpAnnually');
SAPB1.RecurrencePatternEnum.rpDaily = new SAPB1.RecurrencePatternEnum('rpDaily', 'rpDaily');
SAPB1.RecurrencePatternEnum.rpWeekly = new SAPB1.RecurrencePatternEnum('rpWeekly', 'rpWeekly');

module.exports = SAPB1.RecurrencePatternEnum;
