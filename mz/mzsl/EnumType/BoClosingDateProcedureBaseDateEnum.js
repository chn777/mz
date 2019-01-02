if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoClosingDateProcedureBaseDateEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoClosingDateProcedureBaseDateEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoClosingDateProcedureBaseDateEnum.prototype.constructor = SAPB1.BoClosingDateProcedureBaseDateEnum;
SAPB1.BoClosingDateProcedureBaseDateEnum.bocpdbld_BaseSystemDate = new SAPB1.BoClosingDateProcedureBaseDateEnum('bocpdbld_BaseSystemDate', 'bocpdbld_BaseSystemDate');
SAPB1.BoClosingDateProcedureBaseDateEnum.bocpdbld_PostingDate = new SAPB1.BoClosingDateProcedureBaseDateEnum('bocpdbld_PostingDate', 'bocpdbld_PostingDate');

module.exports = SAPB1.BoClosingDateProcedureBaseDateEnum;
