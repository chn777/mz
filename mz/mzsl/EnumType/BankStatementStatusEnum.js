if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BankStatementStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BankStatementStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BankStatementStatusEnum.prototype.constructor = SAPB1.BankStatementStatusEnum;
SAPB1.BankStatementStatusEnum.bssOld = new SAPB1.BankStatementStatusEnum('bssOld', 'bssOld');
SAPB1.BankStatementStatusEnum.bssExecuted = new SAPB1.BankStatementStatusEnum('bssExecuted', 'bssExecuted');
SAPB1.BankStatementStatusEnum.bssDraft = new SAPB1.BankStatementStatusEnum('bssDraft', 'bssDraft');

module.exports = SAPB1.BankStatementStatusEnum;
