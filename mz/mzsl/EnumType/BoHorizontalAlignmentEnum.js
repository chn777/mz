if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoHorizontalAlignmentEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoHorizontalAlignmentEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoHorizontalAlignmentEnum.prototype.constructor = SAPB1.BoHorizontalAlignmentEnum;
SAPB1.BoHorizontalAlignmentEnum.rlhjRight = new SAPB1.BoHorizontalAlignmentEnum('rlhjRight', 'rlhjRight');
SAPB1.BoHorizontalAlignmentEnum.rlhjLanguageDependent = new SAPB1.BoHorizontalAlignmentEnum('rlhjLanguageDependent', 'rlhjLanguageDependent');
SAPB1.BoHorizontalAlignmentEnum.rlhjCentralized = new SAPB1.BoHorizontalAlignmentEnum('rlhjCentralized', 'rlhjCentralized');
SAPB1.BoHorizontalAlignmentEnum.rlhjLeft = new SAPB1.BoHorizontalAlignmentEnum('rlhjLeft', 'rlhjLeft');

module.exports = SAPB1.BoHorizontalAlignmentEnum;
