if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoVerticalAlignmentEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoVerticalAlignmentEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoVerticalAlignmentEnum.prototype.constructor = SAPB1.BoVerticalAlignmentEnum;
SAPB1.BoVerticalAlignmentEnum.rlvaBottom = new SAPB1.BoVerticalAlignmentEnum('rlvaBottom', 'rlvaBottom');
SAPB1.BoVerticalAlignmentEnum.rlvaTop = new SAPB1.BoVerticalAlignmentEnum('rlvaTop', 'rlvaTop');
SAPB1.BoVerticalAlignmentEnum.rlvaCentralized = new SAPB1.BoVerticalAlignmentEnum('rlvaCentralized', 'rlvaCentralized');

module.exports = SAPB1.BoVerticalAlignmentEnum;
