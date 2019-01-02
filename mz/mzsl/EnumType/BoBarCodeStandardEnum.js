if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBarCodeStandardEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBarCodeStandardEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBarCodeStandardEnum.prototype.constructor = SAPB1.BoBarCodeStandardEnum;
SAPB1.BoBarCodeStandardEnum.rlbsCode128 = new SAPB1.BoBarCodeStandardEnum('rlbsCode128', 'rlbsCode128');
SAPB1.BoBarCodeStandardEnum.rlbsCode39 = new SAPB1.BoBarCodeStandardEnum('rlbsCode39', 'rlbsCode39');
SAPB1.BoBarCodeStandardEnum.rlbsan13 = new SAPB1.BoBarCodeStandardEnum('rlbsan13', 'rlbsan13');

module.exports = SAPB1.BoBarCodeStandardEnum;
