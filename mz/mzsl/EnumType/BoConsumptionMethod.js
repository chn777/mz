if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoConsumptionMethod = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoConsumptionMethod.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoConsumptionMethod.prototype.constructor = SAPB1.BoConsumptionMethod;
SAPB1.BoConsumptionMethod.cm_ForwardBackward = new SAPB1.BoConsumptionMethod('cm_ForwardBackward', 'cm_ForwardBackward');
SAPB1.BoConsumptionMethod.cm_BackwardForward = new SAPB1.BoConsumptionMethod('cm_BackwardForward', 'cm_BackwardForward');

module.exports = SAPB1.BoConsumptionMethod;
