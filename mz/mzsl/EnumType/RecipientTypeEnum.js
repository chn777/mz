if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RecipientTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RecipientTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RecipientTypeEnum.prototype.constructor = SAPB1.RecipientTypeEnum;
SAPB1.RecipientTypeEnum.rtEmployee = new SAPB1.RecipientTypeEnum('rtEmployee', 'rtEmployee');
SAPB1.RecipientTypeEnum.rtUser = new SAPB1.RecipientTypeEnum('rtUser', 'rtUser');

module.exports = SAPB1.RecipientTypeEnum;
