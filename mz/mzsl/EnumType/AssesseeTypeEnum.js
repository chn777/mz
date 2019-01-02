if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AssesseeTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AssesseeTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AssesseeTypeEnum.prototype.constructor = SAPB1.AssesseeTypeEnum;
SAPB1.AssesseeTypeEnum.atOthers = new SAPB1.AssesseeTypeEnum('atOthers', 'atOthers');
SAPB1.AssesseeTypeEnum.atCompany = new SAPB1.AssesseeTypeEnum('atCompany', 'atCompany');

module.exports = SAPB1.AssesseeTypeEnum;
