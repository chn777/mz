if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.CounterTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.CounterTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.CounterTypeEnum.prototype.constructor = SAPB1.CounterTypeEnum;
SAPB1.CounterTypeEnum.ctUser = new SAPB1.CounterTypeEnum('ctUser', 'ctUser');
SAPB1.CounterTypeEnum.ctEmployee = new SAPB1.CounterTypeEnum('ctEmployee', 'ctEmployee');

module.exports = SAPB1.CounterTypeEnum;
