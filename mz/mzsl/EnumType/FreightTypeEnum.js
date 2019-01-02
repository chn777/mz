if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.FreightTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.FreightTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.FreightTypeEnum.prototype.constructor = SAPB1.FreightTypeEnum;
SAPB1.FreightTypeEnum.ftSpecial = new SAPB1.FreightTypeEnum('ftSpecial', 'ftSpecial');
SAPB1.FreightTypeEnum.ftShipping = new SAPB1.FreightTypeEnum('ftShipping', 'ftShipping');
SAPB1.FreightTypeEnum.ftInsurance = new SAPB1.FreightTypeEnum('ftInsurance', 'ftInsurance');
SAPB1.FreightTypeEnum.ftOther = new SAPB1.FreightTypeEnum('ftOther', 'ftOther');

module.exports = SAPB1.FreightTypeEnum;
