if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.FreightTypeForBolloEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.FreightTypeForBolloEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.FreightTypeForBolloEnum.prototype.constructor = SAPB1.FreightTypeForBolloEnum;
SAPB1.FreightTypeForBolloEnum.ftStandard = new SAPB1.FreightTypeForBolloEnum('ftStandard', 'ftStandard');
SAPB1.FreightTypeForBolloEnum.ftBollo = new SAPB1.FreightTypeForBolloEnum('ftBollo', 'ftBollo');

module.exports = SAPB1.FreightTypeForBolloEnum;
