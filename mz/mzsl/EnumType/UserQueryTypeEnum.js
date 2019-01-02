if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.UserQueryTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.UserQueryTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.UserQueryTypeEnum.prototype.constructor = SAPB1.UserQueryTypeEnum;
SAPB1.UserQueryTypeEnum.uqtWizard = new SAPB1.UserQueryTypeEnum('uqtWizard', 'uqtWizard');
SAPB1.UserQueryTypeEnum.uqtStoredProcedure = new SAPB1.UserQueryTypeEnum('uqtStoredProcedure', 'uqtStoredProcedure');
SAPB1.UserQueryTypeEnum.uqtRegular = new SAPB1.UserQueryTypeEnum('uqtRegular', 'uqtRegular');
SAPB1.UserQueryTypeEnum.uqtGenerator = new SAPB1.UserQueryTypeEnum('uqtGenerator', 'uqtGenerator');

module.exports = SAPB1.UserQueryTypeEnum;
