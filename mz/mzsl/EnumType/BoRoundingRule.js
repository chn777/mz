if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoRoundingRule = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoRoundingRule.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoRoundingRule.prototype.constructor = SAPB1.BoRoundingRule;
SAPB1.BoRoundingRule.borrRoundDown = new SAPB1.BoRoundingRule('borrRoundDown', 'borrRoundDown');
SAPB1.BoRoundingRule.borrRoundUp = new SAPB1.BoRoundingRule('borrRoundUp', 'borrRoundUp');
SAPB1.BoRoundingRule.borrRoundOff = new SAPB1.BoRoundingRule('borrRoundOff', 'borrRoundOff');

module.exports = SAPB1.BoRoundingRule;
