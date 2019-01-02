if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LineTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LineTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LineTypeEnum.prototype.constructor = SAPB1.LineTypeEnum;
SAPB1.LineTypeEnum.ltVat = new SAPB1.LineTypeEnum('ltVat', 'ltVat');
SAPB1.LineTypeEnum.ltRounding = new SAPB1.LineTypeEnum('ltRounding', 'ltRounding');
SAPB1.LineTypeEnum.ltDocument  = new SAPB1.LineTypeEnum('ltDocument ', 'ltDocument ');

module.exports = SAPB1.LineTypeEnum;
