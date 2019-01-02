if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTaxRoundingRuleTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTaxRoundingRuleTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTaxRoundingRuleTypes.prototype.constructor = SAPB1.BoTaxRoundingRuleTypes;
SAPB1.BoTaxRoundingRuleTypes.trr_RoundDown = new SAPB1.BoTaxRoundingRuleTypes('trr_RoundDown', 'trr_RoundDown');
SAPB1.BoTaxRoundingRuleTypes.trr_RoundUp = new SAPB1.BoTaxRoundingRuleTypes('trr_RoundUp', 'trr_RoundUp');
SAPB1.BoTaxRoundingRuleTypes.trr_RoundOff = new SAPB1.BoTaxRoundingRuleTypes('trr_RoundOff', 'trr_RoundOff');
SAPB1.BoTaxRoundingRuleTypes.trr_CompanyDefault = new SAPB1.BoTaxRoundingRuleTypes('trr_CompanyDefault', 'trr_CompanyDefault');

module.exports = SAPB1.BoTaxRoundingRuleTypes;
