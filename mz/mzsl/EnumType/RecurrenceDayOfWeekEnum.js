if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RecurrenceDayOfWeekEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RecurrenceDayOfWeekEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RecurrenceDayOfWeekEnum.prototype.constructor = SAPB1.RecurrenceDayOfWeekEnum;
SAPB1.RecurrenceDayOfWeekEnum.rdowWed = new SAPB1.RecurrenceDayOfWeekEnum('rdowWed', 'rdowWed');
SAPB1.RecurrenceDayOfWeekEnum.rdowSat = new SAPB1.RecurrenceDayOfWeekEnum('rdowSat', 'rdowSat');
SAPB1.RecurrenceDayOfWeekEnum.rdowTue = new SAPB1.RecurrenceDayOfWeekEnum('rdowTue', 'rdowTue');
SAPB1.RecurrenceDayOfWeekEnum.rdowWeekDay = new SAPB1.RecurrenceDayOfWeekEnum('rdowWeekDay', 'rdowWeekDay');
SAPB1.RecurrenceDayOfWeekEnum.rdowThu = new SAPB1.RecurrenceDayOfWeekEnum('rdowThu', 'rdowThu');
SAPB1.RecurrenceDayOfWeekEnum.rdowWeekendDay = new SAPB1.RecurrenceDayOfWeekEnum('rdowWeekendDay', 'rdowWeekendDay');
SAPB1.RecurrenceDayOfWeekEnum.rdowDay = new SAPB1.RecurrenceDayOfWeekEnum('rdowDay', 'rdowDay');
SAPB1.RecurrenceDayOfWeekEnum.rdowSun = new SAPB1.RecurrenceDayOfWeekEnum('rdowSun', 'rdowSun');
SAPB1.RecurrenceDayOfWeekEnum.rdowMon = new SAPB1.RecurrenceDayOfWeekEnum('rdowMon', 'rdowMon');
SAPB1.RecurrenceDayOfWeekEnum.rdowFri = new SAPB1.RecurrenceDayOfWeekEnum('rdowFri', 'rdowFri');

module.exports = SAPB1.RecurrenceDayOfWeekEnum;
