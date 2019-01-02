if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocLineType = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocLineType.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocLineType.prototype.constructor = SAPB1.BoDocLineType;
SAPB1.BoDocLineType.dlt_Regular = new SAPB1.BoDocLineType('dlt_Regular', 'dlt_Regular');
SAPB1.BoDocLineType.dlt_Alternative = new SAPB1.BoDocLineType('dlt_Alternative', 'dlt_Alternative');

module.exports = SAPB1.BoDocLineType;
