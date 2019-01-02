if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DepreciationCalculationBaseEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DepreciationCalculationBaseEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DepreciationCalculationBaseEnum.prototype.constructor = SAPB1.DepreciationCalculationBaseEnum;
SAPB1.DepreciationCalculationBaseEnum.dcbAcquisitionValue = new SAPB1.DepreciationCalculationBaseEnum('dcbAcquisitionValue', 'dcbAcquisitionValue');
SAPB1.DepreciationCalculationBaseEnum.dcbNetBookValue = new SAPB1.DepreciationCalculationBaseEnum('dcbNetBookValue', 'dcbNetBookValue');

module.exports = SAPB1.DepreciationCalculationBaseEnum;
