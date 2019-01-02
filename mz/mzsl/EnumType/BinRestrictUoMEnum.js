if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BinRestrictUoMEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BinRestrictUoMEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BinRestrictUoMEnum.prototype.constructor = SAPB1.BinRestrictUoMEnum;
SAPB1.BinRestrictUoMEnum.bruSpecificUoMGroupOnly = new SAPB1.BinRestrictUoMEnum('bruSpecificUoMGroupOnly', 'bruSpecificUoMGroupOnly');
SAPB1.BinRestrictUoMEnum.bruSpecificUoM = new SAPB1.BinRestrictUoMEnum('bruSpecificUoM', 'bruSpecificUoM');
SAPB1.BinRestrictUoMEnum.bruSingleUoMOnly = new SAPB1.BinRestrictUoMEnum('bruSingleUoMOnly', 'bruSingleUoMOnly');
SAPB1.BinRestrictUoMEnum.bruSpecificUoMGroup = new SAPB1.BinRestrictUoMEnum('bruSpecificUoMGroup', 'bruSpecificUoMGroup');
SAPB1.BinRestrictUoMEnum.bruNone = new SAPB1.BinRestrictUoMEnum('bruNone', 'bruNone');

module.exports = SAPB1.BinRestrictUoMEnum;
