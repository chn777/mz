if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBaselineDate = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBaselineDate.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBaselineDate.prototype.constructor = SAPB1.BoBaselineDate;
SAPB1.BoBaselineDate.bld_PostingDate = new SAPB1.BoBaselineDate('bld_PostingDate', 'bld_PostingDate');
SAPB1.BoBaselineDate.bld_TaxDate = new SAPB1.BoBaselineDate('bld_TaxDate', 'bld_TaxDate');
SAPB1.BoBaselineDate.bld_ClosingDate = new SAPB1.BoBaselineDate('bld_ClosingDate', 'bld_ClosingDate');
SAPB1.BoBaselineDate.bld_SystemDate = new SAPB1.BoBaselineDate('bld_SystemDate', 'bld_SystemDate');

module.exports = SAPB1.BoBaselineDate;
