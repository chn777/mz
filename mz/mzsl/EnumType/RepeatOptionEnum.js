if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RepeatOptionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RepeatOptionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RepeatOptionEnum.prototype.constructor = SAPB1.RepeatOptionEnum;
SAPB1.RepeatOptionEnum.roByDate = new SAPB1.RepeatOptionEnum('roByDate', 'roByDate');
SAPB1.RepeatOptionEnum.roByWeekDay = new SAPB1.RepeatOptionEnum('roByWeekDay', 'roByWeekDay');

module.exports = SAPB1.RepeatOptionEnum;
