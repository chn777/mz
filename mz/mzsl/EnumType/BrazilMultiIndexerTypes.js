if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BrazilMultiIndexerTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BrazilMultiIndexerTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BrazilMultiIndexerTypes.prototype.constructor = SAPB1.BrazilMultiIndexerTypes;
SAPB1.BrazilMultiIndexerTypes.bmitIncomeNature = new SAPB1.BrazilMultiIndexerTypes('bmitIncomeNature', 'bmitIncomeNature');
SAPB1.BrazilMultiIndexerTypes.bmitInvalid = new SAPB1.BrazilMultiIndexerTypes('bmitInvalid', 'bmitInvalid');

module.exports = SAPB1.BrazilMultiIndexerTypes;
