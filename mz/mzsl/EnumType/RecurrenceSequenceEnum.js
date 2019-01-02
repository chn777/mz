if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RecurrenceSequenceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RecurrenceSequenceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RecurrenceSequenceEnum.prototype.constructor = SAPB1.RecurrenceSequenceEnum;
SAPB1.RecurrenceSequenceEnum.rsFirst = new SAPB1.RecurrenceSequenceEnum('rsFirst', 'rsFirst');
SAPB1.RecurrenceSequenceEnum.rsThird = new SAPB1.RecurrenceSequenceEnum('rsThird', 'rsThird');
SAPB1.RecurrenceSequenceEnum.rsFourth = new SAPB1.RecurrenceSequenceEnum('rsFourth', 'rsFourth');
SAPB1.RecurrenceSequenceEnum.rsLast = new SAPB1.RecurrenceSequenceEnum('rsLast', 'rsLast');
SAPB1.RecurrenceSequenceEnum.rsSecond = new SAPB1.RecurrenceSequenceEnum('rsSecond', 'rsSecond');

module.exports = SAPB1.RecurrenceSequenceEnum;
