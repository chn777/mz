if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRoundingMethod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRoundingMethod.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRoundingMethod.prototype.constructor = SAPB1.BoRoundingMethod;
SAPB1.BoRoundingMethod.borm_FixedInterval = new SAPB1.BoRoundingMethod('borm_FixedInterval', 'borm_FixedInterval');
SAPB1.BoRoundingMethod.borm_NoRounding = new SAPB1.BoRoundingMethod('borm_NoRounding', 'borm_NoRounding');
SAPB1.BoRoundingMethod.borm_RoundToFullAmount = new SAPB1.BoRoundingMethod('borm_RoundToFullAmount', 'borm_RoundToFullAmount');
SAPB1.BoRoundingMethod.borm_FixedEnding = new SAPB1.BoRoundingMethod('borm_FixedEnding', 'borm_FixedEnding');
SAPB1.BoRoundingMethod.borm_RoundToFullDecAmount = new SAPB1.BoRoundingMethod('borm_RoundToFullDecAmount', 'borm_RoundToFullDecAmount');
SAPB1.BoRoundingMethod.borm_RoundToFullTensAmount = new SAPB1.BoRoundingMethod('borm_RoundToFullTensAmount', 'borm_RoundToFullTensAmount');

module.exports = SAPB1.BoRoundingMethod;
