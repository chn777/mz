if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ECDPostingTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ECDPostingTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ECDPostingTypeEnum.prototype.constructor = SAPB1.ECDPostingTypeEnum;
SAPB1.ECDPostingTypeEnum.ecdNormal = new SAPB1.ECDPostingTypeEnum('ecdNormal', 'ecdNormal');
SAPB1.ECDPostingTypeEnum.ecdStatement = new SAPB1.ECDPostingTypeEnum('ecdStatement', 'ecdStatement');

module.exports = SAPB1.ECDPostingTypeEnum;
