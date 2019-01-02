if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoMoneyPrecisionTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoMoneyPrecisionTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoMoneyPrecisionTypes.prototype.constructor = SAPB1.BoMoneyPrecisionTypes;
SAPB1.BoMoneyPrecisionTypes.mpt_Rate = new SAPB1.BoMoneyPrecisionTypes('mpt_Rate', 'mpt_Rate');
SAPB1.BoMoneyPrecisionTypes.mpt_Percent = new SAPB1.BoMoneyPrecisionTypes('mpt_Percent', 'mpt_Percent');
SAPB1.BoMoneyPrecisionTypes.mpt_Sum = new SAPB1.BoMoneyPrecisionTypes('mpt_Sum', 'mpt_Sum');
SAPB1.BoMoneyPrecisionTypes.mpt_Tax = new SAPB1.BoMoneyPrecisionTypes('mpt_Tax', 'mpt_Tax');
SAPB1.BoMoneyPrecisionTypes.mpt_Price = new SAPB1.BoMoneyPrecisionTypes('mpt_Price', 'mpt_Price');
SAPB1.BoMoneyPrecisionTypes.mpt_Quantity = new SAPB1.BoMoneyPrecisionTypes('mpt_Quantity', 'mpt_Quantity');
SAPB1.BoMoneyPrecisionTypes.mpt_Measure = new SAPB1.BoMoneyPrecisionTypes('mpt_Measure', 'mpt_Measure');

module.exports = SAPB1.BoMoneyPrecisionTypes;
