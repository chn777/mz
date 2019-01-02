if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DrawingMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DrawingMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DrawingMethodEnum.prototype.constructor = SAPB1.DrawingMethodEnum;
SAPB1.DrawingMethodEnum.dmQuantity = new SAPB1.DrawingMethodEnum('dmQuantity', 'dmQuantity');
SAPB1.DrawingMethodEnum.dmNone = new SAPB1.DrawingMethodEnum('dmNone', 'dmNone');
SAPB1.DrawingMethodEnum.dmTotal = new SAPB1.DrawingMethodEnum('dmTotal', 'dmTotal');
SAPB1.DrawingMethodEnum.dmAll = new SAPB1.DrawingMethodEnum('dmAll', 'dmAll');

module.exports = SAPB1.DrawingMethodEnum;
