if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTaxTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTaxTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTaxTypes.prototype.constructor = SAPB1.BoTaxTypes;
SAPB1.BoTaxTypes.tt_No = new SAPB1.BoTaxTypes('tt_No', 'tt_No');
SAPB1.BoTaxTypes.tt_Yes = new SAPB1.BoTaxTypes('tt_Yes', 'tt_Yes');
SAPB1.BoTaxTypes.tt_UseTax = new SAPB1.BoTaxTypes('tt_UseTax', 'tt_UseTax');
SAPB1.BoTaxTypes.tt_OffsetTax = new SAPB1.BoTaxTypes('tt_OffsetTax', 'tt_OffsetTax');

module.exports = SAPB1.BoTaxTypes;
