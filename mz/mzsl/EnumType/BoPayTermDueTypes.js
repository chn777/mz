if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPayTermDueTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPayTermDueTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPayTermDueTypes.prototype.constructor = SAPB1.BoPayTermDueTypes;
SAPB1.BoPayTermDueTypes.pdt_None = new SAPB1.BoPayTermDueTypes('pdt_None', 'pdt_None');
SAPB1.BoPayTermDueTypes.pdt_HalfMonth = new SAPB1.BoPayTermDueTypes('pdt_HalfMonth', 'pdt_HalfMonth');
SAPB1.BoPayTermDueTypes.pdt_MonthEnd = new SAPB1.BoPayTermDueTypes('pdt_MonthEnd', 'pdt_MonthEnd');
SAPB1.BoPayTermDueTypes.pdt_MonthStart = new SAPB1.BoPayTermDueTypes('pdt_MonthStart', 'pdt_MonthStart');

module.exports = SAPB1.BoPayTermDueTypes;
