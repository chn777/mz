if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ResourceDailyCapacityWeekdayEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ResourceDailyCapacityWeekdayEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ResourceDailyCapacityWeekdayEnum.prototype.constructor = SAPB1.ResourceDailyCapacityWeekdayEnum;
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwSecond = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwSecond', 'rdcwSecond');
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwFifth = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwFifth', 'rdcwFifth');
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwThird = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwThird', 'rdcwThird');
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwSixth = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwSixth', 'rdcwSixth');
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwSeventh = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwSeventh', 'rdcwSeventh');
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwFirst = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwFirst', 'rdcwFirst');
SAPB1.ResourceDailyCapacityWeekdayEnum.rdcwFourth = new SAPB1.ResourceDailyCapacityWeekdayEnum('rdcwFourth', 'rdcwFourth');

module.exports = SAPB1.ResourceDailyCapacityWeekdayEnum;
