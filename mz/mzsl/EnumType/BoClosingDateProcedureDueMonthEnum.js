if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoClosingDateProcedureDueMonthEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoClosingDateProcedureDueMonthEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoClosingDateProcedureDueMonthEnum.prototype.constructor = SAPB1.BoClosingDateProcedureDueMonthEnum;
SAPB1.BoClosingDateProcedureDueMonthEnum.bocpddm_None = new SAPB1.BoClosingDateProcedureDueMonthEnum('bocpddm_None', 'bocpddm_None');
SAPB1.BoClosingDateProcedureDueMonthEnum.bocpddm_MonthEnd = new SAPB1.BoClosingDateProcedureDueMonthEnum('bocpddm_MonthEnd', 'bocpddm_MonthEnd');
SAPB1.BoClosingDateProcedureDueMonthEnum.bocpddm_HalfMonth = new SAPB1.BoClosingDateProcedureDueMonthEnum('bocpddm_HalfMonth', 'bocpddm_HalfMonth');
SAPB1.BoClosingDateProcedureDueMonthEnum.bocpddm_MonthStart = new SAPB1.BoClosingDateProcedureDueMonthEnum('bocpddm_MonthStart', 'bocpddm_MonthStart');

module.exports = SAPB1.BoClosingDateProcedureDueMonthEnum;
