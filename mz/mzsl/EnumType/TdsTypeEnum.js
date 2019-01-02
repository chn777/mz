if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TdsTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TdsTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TdsTypeEnum.prototype.constructor = SAPB1.TdsTypeEnum;
SAPB1.TdsTypeEnum.wtETds = new SAPB1.TdsTypeEnum('wtETds', 'wtETds');
SAPB1.TdsTypeEnum.wtGstTcs = new SAPB1.TdsTypeEnum('wtGstTcs', 'wtGstTcs');
SAPB1.TdsTypeEnum.wtGstTds = new SAPB1.TdsTypeEnum('wtGstTds', 'wtGstTds');

module.exports = SAPB1.TdsTypeEnum;
