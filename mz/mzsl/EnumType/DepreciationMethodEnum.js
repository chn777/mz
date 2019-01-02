if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DepreciationMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DepreciationMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DepreciationMethodEnum.prototype.constructor = SAPB1.DepreciationMethodEnum;
SAPB1.DepreciationMethodEnum.dmImmediateWriteOff = new SAPB1.DepreciationMethodEnum('dmImmediateWriteOff', 'dmImmediateWriteOff');
SAPB1.DepreciationMethodEnum.dmStraightLine = new SAPB1.DepreciationMethodEnum('dmStraightLine', 'dmStraightLine');
SAPB1.DepreciationMethodEnum.dmMultilevel = new SAPB1.DepreciationMethodEnum('dmMultilevel', 'dmMultilevel');
SAPB1.DepreciationMethodEnum.dmAccelerated = new SAPB1.DepreciationMethodEnum('dmAccelerated', 'dmAccelerated');
SAPB1.DepreciationMethodEnum.dmManualDepreciation = new SAPB1.DepreciationMethodEnum('dmManualDepreciation', 'dmManualDepreciation');
SAPB1.DepreciationMethodEnum.dmStraightLinePeriodControl = new SAPB1.DepreciationMethodEnum('dmStraightLinePeriodControl', 'dmStraightLinePeriodControl');
SAPB1.DepreciationMethodEnum.dmDecliningBalance = new SAPB1.DepreciationMethodEnum('dmDecliningBalance', 'dmDecliningBalance');
SAPB1.DepreciationMethodEnum.dmNoDepreciation = new SAPB1.DepreciationMethodEnum('dmNoDepreciation', 'dmNoDepreciation');
SAPB1.DepreciationMethodEnum.dmSpecialDepreciation = new SAPB1.DepreciationMethodEnum('dmSpecialDepreciation', 'dmSpecialDepreciation');

module.exports = SAPB1.DepreciationMethodEnum;
