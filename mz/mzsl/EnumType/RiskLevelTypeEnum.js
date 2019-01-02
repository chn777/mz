if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RiskLevelTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RiskLevelTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RiskLevelTypeEnum.prototype.constructor = SAPB1.RiskLevelTypeEnum;
SAPB1.RiskLevelTypeEnum.rlt_High = new SAPB1.RiskLevelTypeEnum('rlt_High', 'rlt_High');
SAPB1.RiskLevelTypeEnum.rlt_Medium = new SAPB1.RiskLevelTypeEnum('rlt_Medium', 'rlt_Medium');
SAPB1.RiskLevelTypeEnum.rlt_Low = new SAPB1.RiskLevelTypeEnum('rlt_Low', 'rlt_Low');

module.exports = SAPB1.RiskLevelTypeEnum;
